import {createStore} from "redux";

const initState = {
    movies : [],
    favorites : []
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_MOVIES': 
           return {
               ...state,
               movies: action.movies
           };
        case 'ADD_TO_FAVORITES' : 
            const index = state.favorites.findIndex(movie => action.movie.id === movie.id);
            if(index !== -1 ) return state;
            return  {
                ...state,
                favorites: [...state.favorites, action.movie]
            }   
        default:
            return state;
    }
}

export default createStore(reducer);
