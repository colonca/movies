import React from 'react';
import {Link} from 'react-router-dom';
import { Col } from 'react-bootstrap';
import '../assets/css/movie.css';

function Movie(movie){
    return (
        <Col xs={10} md={6} lg={3} className="mt-4 mx-auto">
            <Link to={`/${movie.id}`} title={movie.title}>
                <img className="poster" src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>   
            </Link>
            <div className="mt-2 description">
                <Link to={`/${movie.id}`}>{movie.title}</Link>
                <div className="d-flex justify-content align-items-center">
                    <svg className="text-warning my-1" style={{width:'1rem'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                   <span className="ml-1">{movie.vote_average*10+'%'}</span>
                   <span className="mx-2">|</span>
                   <span>{movie.release_date}</span>
                </div>
            </div>
        </Col>    
    );
}


export default Movie;