import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import { Col, Container, Row } from 'react-bootstrap';
import poster from './assets/img/poster_movie.jpg';
import Movie from './components/movie';

function App() {
  return (
     <Provider store={store}>
          <Header/>
          <Container fluid className="position-relative">
              <div className="popular_movies">
                <h2 className="text-warning mt-4 font-weight-bolder" style={{textTransform:'uppercase'}}>Popular Movies</h2>
                <Row> 
                  <Movie/>
                </Row>
              </div>
          </Container>
     </Provider>
  );
}

export default App;
