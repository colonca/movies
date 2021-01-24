import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Movie from './movie';

function ListMovies() {
   return  (
        <Container fluid className="position-relative">
            <div className="popular_movies container-fluid">
                <h2 className="text-warning mt-4 font-weight-bolder" style={{textTransform:'uppercase'}}>Movies</h2>
                <Row> 
                    <Movie/>
                    <Movie/>
                </Row>
            </div>
        </Container>
   ); 
}

export default ListMovies;