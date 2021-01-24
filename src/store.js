import {createStore} from "redux";

const initState = {
    movies : [],
    favorites : []
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_TO_FAVORITES': 
           return {
               ...state,
               favorites: [...state.favorites,action.movie]
           };
        default:
            return state;
    }
}

export default createStore(reducer);
