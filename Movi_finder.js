<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<title>Document</title>
</head>
<style>
@import url("https://fonts.googleapis.com/css?family=Lato:400,900");
* {
  box-sizing: border-box;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  min-height: 100vh;
  font-family: "Lato", sans-serif;
  background-color: whitesmoke;
}

h1, h2, p, ul {
  line-height: 1.2;
}
h1:not(:last-child), h2:not(:last-child), p:not(:last-child), ul:not(:last-child) {
  margin-bottom: 12px;
}

p, li {
  font-size: 0.9em;
  line-height: 1.5;
}

p + ul {
  margin-top: -10px;
}

h1, h2, strong {
  font-weight: 900;
}

input {
  padding: 6px;
  font-family: "Lato", sans-serif;
  font-size: 16px;
  border: 1px solid gainsboro;
  border-radius: 2px;
  -webkit-appearance: none;
}

.list--inline li {
  display: inline-block;
}
.list--inline li:not(:last-child) {
  margin-right: 12px;
}

.movie {
  position: relative;
  overflow: hidden;
  margin: 12px auto;
  width: 100%;
  max-width: 800px;
  background-color: white;
  border-radius: 0.8em;
  box-shadow: rgba(0, 0, 0, 0.2) 0 30px 18px -24px;
}
.movie__data {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 400px;
}
@media (min-width: 600px) {
  .movie__data {
    flex-direction: row;
  }
}
.movie__search {
  position: absolute;
  top: 24px;
  right: 24px;
  margin: auto;
  width: calc(100% - (12px * 4));
}
@media (min-width: 400px) {
  .movie__search {
    max-width: 200px;
  }
}
.movie__tags {
  font-size: 0.75em;
  color: darkgray;
}
.movie__poster {
  position: relative;
  display: flex;
  width: 100%;
}
@media (min-width: 600px) {
  .movie__poster {
    margin-right: 12px;
    width: 200px;
  }
}
.movie__poster--fill {
  position: absolute;
  overflow: hidden;
  top: -80%;
  bottom: -20%;
  left: -20%;
  width: 150%;
  height: 150%;
  transform: rotate(5deg);
}
@media (min-width: 600px) {
  .movie__poster--fill {
    top: -20%;
    width: 100%;
  }
}
.movie__poster--fill img {
  filter: blur(6px);
  -o-object-fit: cover;
     object-fit: cover;
  width: 100%;
  height: 100%;
  transform: scale(1.4);
}
.movie__poster--featured {
  position: relative;
  align-self: center;
  overflow: hidden;
  margin-top: 84px;
  margin-left: 24px;
  width: 140px;
  background-color: gainsboro;
  border-radius: 2px;
  box-shadow: rgba(0, 0, 0, 0.6) 0 6px 12px -6px;
  z-index: 1;
}
@media (min-width: 600px) {
  .movie__poster--featured {
    left: 56px;
    margin: auto;
  }
}
.movie__poster--featured img {
  width: 140px;
  vertical-align: middle;
}
.movie__poster--featured img[src="N/A"] {
  min-height: 206px;
  opacity: 0;
}
.movie__details {
  flex: 1;
  padding: 24px;
}
@media (min-width: 600px) {
  .movie__details {
    padding: 72px;
  }
}
.movie__title {
  font-family: "Lato", sans-serif;
  font-size: 2em;
}
.movie__no-results {
  align-self: center;
  justify-self: center;
  width: 100%;
  text-align: center;
}
</style>
<body>
	
<div class="movie" id="movie-card">
	<div class="movie__data" id="movie-data"></div>
	<input class="movie__search" id="movie-search" type="text" placeholder="Enter a movie title"/>
  </div>
</body>
<script>
const movieData = document.getElementById("movie-data");
const input = document.getElementById("movie-search");
const key = "2fb7569a";
const defaultTitle = "dead+poets+society";
const url = `https://www.omdbapi.com/?apikey=${key}&t=`;

const movieDataTpl = (movie) => {
  let actors = movie.Actors.split(",");

  return `
    <div class="movie__poster">
      <span class="movie__poster--fill">
        <img src="${movie.Poster}" />
      </span>
      <span class="movie__poster--featured">
        <img src="${movie.Poster}" />
      </span>
    </div>
    <div class="movie__details">
      <h2 class="movie__title">${movie.Title}</h2>
      <ul class="movie__tags list--inline">
        <li class="movie__rated">${movie.Rated}</li>
        <li class="movie__year">${movie.Year}</li>
        <li class="movie__year">${movie.Genre}</li>
      </ul>
      <p class="movie__plot">${movie.Plot}</p>
      <div class="movie__credits">
        <p><strong>Written by:</strong> ${movie.Writer}</p>
        <p><strong>Directed by:</strong> ${movie.Director}</p>
        <p><strong>Starring:</strong></p>
        <ul class="movie__actors list--inline">
          ${actors.map((actor) => `<li>${actor}</li>`).join("")}
        </ul>
      </div>
    </div>
  `;
};

const noResultsTpl = () => {
  return `
    <div class="movie__no-results">
      <h2>No results</div>
    </div>
  `;
};

const findMovie = (title) => {
  fetch(url + title, {
    method: "get"
  })
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      movieData.innerHTML = movieDataTpl(data);
    })
    .catch(function (err) {
      movieData.innerHTML = noResultsTpl();
    });
};

findMovie(defaultTitle);

input.addEventListener("keypress", (e) => {
  if (e.keyCode === 13 && input.value) findMovie(input.value);
});

</script>
</html>
