window.onload = async () => {
    // Get the movie ID from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = urlParams.get('movie_id');

    if (movieId) {
        await fetchMovieDetails(movieId);
        await fetchMovieCast(movieId);
    } else {
        console.error("No movie ID provided.");
    }
};


// Popular Movie Poster&Detail function
const fetchMovieDetails = async (movieId) => {
    const api_key = "105b3449e54997efc78dbad890bf50dc";
    const movieDetailApi = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}`;

    let response = await fetch(movieDetailApi);
    let data = await response.json();

    displayMovieDetails(data);
};
const displayMovieDetails = (data) => {
    const movieDiv = document.getElementById('movie-details');
    movieDiv.innerHTML = `
        <h2>${data.title}</h2>
        <img src="https://image.tmdb.org/t/p/w1280${data.poster_path}">
        <p><strong>Overview:</strong> ${data.overview}</p>
    `;
};




// Search Movie Poster&Detail function
const fetchSearchMovieDetails = async (movieId) => {
    const api_key = "105b3449e54997efc78dbad890bf50dc";
    const SearchmovieDetailApi = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}`;

    let response = await fetch(SearchmovieDetailApi);
    let data = await response.json();

    displaySearchMovieDetails(data);
};
const displaySearchMovieDetails = (data) => {
    const movieDiv = document.getElementById('movie-details');
    movieDiv.innerHTML = `
        <h2>${data.title}</h2>
        <img src="https://image.tmdb.org/t/p/w1280${data.poster_path}">
        <p><strong>Overview:</strong> ${data.overview}</p>
    `;
};





// Cast function
const fetchMovieCast = async (movieId) => {
    const api_key = "105b3449e54997efc78dbad890bf50dc";
    const castApi = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${api_key}`;

    let response = await fetch(castApi);
    let data = await response.json();

    displayMovieCast(data);
};
const displayMovieCast = (data) => {
    const castDiv = document.getElementById('cast');
    castDiv.innerHTML = `
        <h2>Cast</h2>
        <div class="castList">
            ${data.cast.slice(0, 10).map(actor => 
                `<img src="https://image.tmdb.org/t/p/w1280${actor.profile_path}"><br>
                <h5>${actor.name}</h5>`
            ).join('')}
        </div>
    `;
};
