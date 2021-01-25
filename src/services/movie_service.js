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
   const apiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`; 
   return fetch(apiUrl)
         .then(res => res.json())
         .then(movie => movie);
}