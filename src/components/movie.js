import React from 'react';
import { Col } from 'react-bootstrap';
import poster from '../assets/img/poster_movie.jpg';
import '../movie.css';

function Movie(props){

    return (
        <Col xs={12} lg={3} className="mt-4">
            <a href="#">
                <img className="poster" src={poster} alt="poster_movie"/>   
            </a>
            <div className="mt-2 description">
                <a href="#" className="mt-2">Parasite</a>
                <div className="d-flex justify-content align-items-center">
                    <svg className="text-warning" style={{width:'1rem'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                   <span className="ml-1">85%</span>
                   <span className="mx-2">|</span>
                   <span>Feb 20, 2020</span>
                  
                </div>
                <div>
                       Action,Thriller, Comedy
                </div>
            </div>
        </Col>    
    );

}


export default Movie;