// getAll HTML Elements
const movieTitleEle=document.getElementById("movieTitle");
const moviePosterEle=document.getElementById("moviePoster");
const movieTextEle=document.getElementById("movieText");
const nextEle=document.getElementById("likeBtn");
const nextElehidden=document.getElementById("likeOrDislikeBtns");

// https://www.themoviedb.org/settings/api
// e22eaa4fde6024caf9d788ecb60e9d8c
const api_key="e22eaa4fde6024caf9d788ecb60e9d8c";
//URL:  https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}

const url=` https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`;

const genresEle=document.getElementById("genres");

console.log(url);

const xhr=new XMLHttpRequest();
xhr.open("GET",url);
xhr.send();

let genreSelected="";

xhr.addEventListener("load",()=>{
    const genres=xhr.response;
    const allGenres=JSON.parse(genres).genres;
    genreSelected=allGenres[0].id;
    allGenres.forEach((eachGenre)=>{
        const optionEle=document.createElement("option");
        optionEle.textContent=eachGenre.name;
        optionEle.value=eachGenre.id;
        genresEle.appendChild(optionEle);
    });

    genresEle.addEventListener("change",()=>{
        genreSelected=genresEle.value;
        console.log(genreSelected)
    });

    const playBtnEle=document.getElementById("playBtn");
    playBtnEle.addEventListener("click",()=>{
        if(genreSelected){
            const genreReq=new XMLHttpRequest();
            const url=`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=${genreSelected}`;
            genreReq.open("GET",url);
            genreReq.send();

            console.log(url);

            function loadMovie(response){
                
                let resultsArr=JSON.parse(response).results;
                const randomId=Math.floor(Math.random()*resultsArr.length);
                const selectedArr=resultsArr[randomId];
                console.log(selectedArr);
                const movieId=selectedArr.id;
                // https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}

                const movieUrl=`https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}`;
                const movieDetaislRequest=new XMLHttpRequest();
                movieDetaislRequest.open("GET",movieUrl);
                movieDetaislRequest.send();
                console.log(movieUrl)

                movieDetaislRequest.addEventListener("load",()=>{
                    const movieDetaislResponse=JSON.parse(movieDetaislRequest.responseText);
                    moviePosterEle.textContent="";
                    movieTextEle.textContent="";
                    movieTitleEle.textContent="";
                    movieTitleEle.textContent=movieDetaislResponse.original_title;
                    movieTextEle.textContent=movieDetaislResponse.overview;
                    const movieUrl=movieDetaislResponse.poster_path;
                    
                    const movieImageUrl=` https://image.tmdb.org/t/p/w500/${movieUrl}`;
                    const imgEle=document.createElement("img");
                    moviePosterEle.appendChild(imgEle);
                    imgEle.src=movieImageUrl;
                });
                
            }
            
            

            genreReq.addEventListener("load",()=>{
                nextElehidden.hidden=false;
                let response=genreReq.responseText;
                loadMovie(response);
                nextEle.addEventListener("click",()=>{
                    loadMovie(response);
                })
            });
        }
    });
});


