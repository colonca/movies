import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Movie from './movie';

function ListMovies() {

   return  (
        <Container fluid className="position-relative">
            <div className="container popular_movies container-fluid">
                <h2  className="text-warning text-uppercase mt-4 font-weight-bold" style={{textTransform:'uppercase', fontSize:'2rem'}}>Movies</h2>
                <Row> 
                    <Movie/>
                    <Movie/>
                </Row>
            </div>
        </Container>
   ); 
}

export default ListMovies;