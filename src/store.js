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
        default:
            return state;
    }
}

export default createStore(reducer);
