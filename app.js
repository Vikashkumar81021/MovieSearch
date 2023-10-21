const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const moviebox = document.querySelector('#movie-box')
const getmovies = async (api) => {
    const respone = await fetch(api)
    const data = await respone.json()
    showmovies(data.results)
}


const showmovies = (data) => {
    moviebox.innerHTML = ""
    data.forEach(
        (item) => {
           
            const box = document.createElement('div')

            box.classList.add("box")
            box.innerHTML = `
            <img src="${IMGPATH + item.poster_path}" alt="">
            <div class="overlay">
                <div class="tittle">
                    <h2>${item.original_title}</h2>
                    <span>${item.vote_average}</span>
                </div>
                <h3>${item.overview}</h3>
                <p>
                    The Boys is an American superhero television series developed by Eric Kripke for Amazon Prime Video. Based on the comic book of the same name by Garth Ennis and Darick Robertson, it follows the eponymous team of vigilantes as they combat superpowered individuals who abuse their abilitie.
                </p>
            </div>`;
            moviebox.appendChild(box)
        }

    )
}
document.querySelector('#search').addEventListener(
    "keyup",
    function (event) {
        if (event.target.value != "") {
            getmovies(SEARCHAPI + event.target.value)
        }
        else {
            getmovies(APIURL)
        }
    }
)

getmovies(APIURL) 