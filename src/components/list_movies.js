import React,{useEffect, useState} from 'react';
import { Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import {getMovies} from '../services/movie_service';
import Movie from './movie';

function ListMovies({movies, setMovies}) {

   useEffect(()=> {
     if(movies.length == 0)  
        getMovies().then(movies => setMovies(movies));
   },[]); 

   return  (
        <Container fluid className="position-relative">
            <div className="container popular_movies container-fluid">
                <h2  className="text-warning text-uppercase mt-4 font-weight-bold" style={{textTransform:'uppercase', fontSize:'2rem'}}>Movies</h2>
                <Row> 
                   {
                       movies.map(movie => 
                            <Movie
                              key={movie.id}
                              {...movie}
                            />
                        )
                   } 
                </Row>
            </div>
        </Container>
   ); 
}

const mapStateToProps = state => {
   return {
       movies : state.movies
   };
}

const mapDispatchToProps =  dispatch => ({
    setMovies(movies){
        dispatch({
            type: 'ADD_MOVIES',
            movies
        });
    }
})


export default connect(mapStateToProps,mapDispatchToProps)(ListMovies);