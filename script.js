const apiKey = "api_key=2097277edea559f02e02ffba46dc0cec";

const url = "https://api.themoviedb.org/3";

const path = "/discover/movie?with_genres=18&primary_release_year=2014&";

const imgUrl = "https://image.tmdb.org/t/p/w500/";

const apiUrl = url + path + apiKey;
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=2097277edea559f02e02ffba46dc0cec&query="'


let main = document.querySelector(".movie");
let form = document.querySelector('#form')
let search = document.querySelector('[type="search"]')

getAPI(apiUrl);

 function getAPI(url) {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((d) => {
      showMovies(d.results);
    });
}
function showMovies(movies){
  main.innerHTML = "";
  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie
      let Elemen = document.createElement("div");
      Elemen.classList.add("card");
      Elemen.innerHTML = `
      <img src="${imgUrl + poster_path}" alt="${title}">
      <div class="movie-info">
      <h3>${title}</h3>
      <span>${vote_average}</span>
      </div>
      <div class="overview">
      <h3>Overview</h3>
      ${overview}
      </div>`;
      main.appendChild(Elemen);
    });
}
/////////////Form
form.addEventListener('submit',(e)=>{
  e.preventDefault()
  const searchItem = search.value;
  if (searchItem && searchItem !== '') {
    showMovies(SEARCH_API + searchItem)
    console.log(SEARCH_API);
    search.value = ''
  }else{
        window.location.reload()
    }
})