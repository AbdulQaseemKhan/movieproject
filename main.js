const demo_div = document.getElementById('Demo');
const input = document.getElementById('User');
const btn = document.getElementById('btn')

const api_key ="105b3449e54997efc78dbad890bf50dc";

const popularMovies = async () => {

        let api = await fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${api_key}`);

        let data = await api.json();

        console.log(data);
        
        demo_div.innerHTML = data.results.map((item) => 
        `<div class="posters">
        <img src="https://image.tmdb.org/t/p/w1280${item.poster_path}"/>
                <div class="overlay">
                    <div class="title"> 
                        <h3> ${item.title} </h3>
                        <span> ${item.vote_average} <span>
                    </div>
                    <br>
                    <h3>Overview:</h3>
                    <p> 
                        ${item.overview}
                    </p>
                    <button class="trailerBtn">Watch Trailer</button>
                 </div>
                 </div>`

        ).join(''); 
};

popularMovies();

const SearchMovies = async () => {
    
    demo_div.innerHTML = ""

    let searchApi = await fetch(`https://api.themoviedb.org/3/search/movie?&api_key=${api_key}&query=${input.value}`);

    let data = await searchApi.json();

   
    demo_div.innerHTML = data.results.map((item)=>
        
        `<div class="main">
        <img src="https://image.tmdb.org/t/p/w1280${item.poster_path}"/>
                <div class="overlay">
                    <div class="title"> 
                        <h3> ${item.title}  </h3>
                        <span> ${item.vote_average} <span>
                    </div>
                    <br>
                    <h3>Overview:</h3>
                    <p> 
                        ${item.overview}
                    </p>
                    <button class="trailerBtn">Watch Trailer</button>
                 </div>
                 </div>`
                
                ).join('');
        
};


