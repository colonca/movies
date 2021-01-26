import {API_KEY} from '../config.js';

export function getMovies() {
   const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
   return fetch(apiUrl)
   .then(res => res.json())
   .then(response => {
       const {results = []} = response; 
       if(Array.isArray(results)){
          return results;
       }
   });
}

export function getMovie(id) {
   const apiUrl = `https://api.themoviedb.org/3/movie/${id}?append_to_response=credits,images&api_key=${API_KEY}`; 
   return fetch(apiUrl)
         .then(res => res.json())
         .then(movie => movie);
}

export function searchMovies(keyword){
   const apiUrl = `https://api.themoviedb.org/3/search/movie?query=${keyword}&api_key=${API_KEY}`;
   const COUNT_MOVIES  = 7;
   return fetch(apiUrl)
   .then(res => res.json())
   .then(response => {
       const {results = []} = response; 
       if(Array.isArray(results)){
          let movies = [];
          results.forEach((movie,index) => {
               if(index < COUNT_MOVIES)
                  movies.push(movie);
          });

          return movies;
       }
   });
}