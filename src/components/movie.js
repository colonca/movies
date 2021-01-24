import React from 'react';
import { Col } from 'react-bootstrap';
import poster from '../assets/img/poster_movie.jpg';

function Movie(props){
    return (
        <Col xs={12} md={3} className="mt-4">
            <a href="#">
                <img src={poster} alt="poster_movie"/>   
            </a>
            <div className="mt-2 description">
                <a href="#" className="mt-2">Parasite</a>
                <div className="d-flex justify-content align-items-center">start</div>
            </div>
        </Col>    
    );
}


export default Movie;