import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Header from './components/header';
import ListMovies from './components/list_movies';

function App() {
  return (
     <Provider store={store}>
          <Header/>
          <ListMovies/>
     </Provider>
  );
}

export default App;
