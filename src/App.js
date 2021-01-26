import React from 'react';
import {Provider} from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store';
import './assets/css/index.css';
import Header from './components/header';
import ListMovies from './components/list_movies';
import DetailMovie from './components/detail_movie';
import Favorites from './components/favorites';

function App() {
  return (
     <Provider store={store}>
       <Router>
          <Header/>
          <Switch>
            <Route path="/favorites">
              <Favorites/>
            </Route>
            <Route path="/:id">
               <DetailMovie/>
            </Route>
            <Route path="/">
                <ListMovies/>
            </Route>
          </Switch>
       </Router>
     </Provider>
  );
}

export default App;
