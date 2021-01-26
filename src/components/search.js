import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../assets/css/search.css';
import { searchMovies } from '../services/movie_service';

function Search() {
   
    const [loading, setLoading] =  useState(false);
    const [keyword,setKeyword] = useState('');
    const [movies, setMovies] = useState([]);

    useEffect(()=> {
       if(keyword.length >= 2) {
            setLoading(true);
            searchMovies(keyword).then(movies => {
                console.log(movies);
                setMovies(movies);
                setLoading(false);
            });
       }
    },[keyword]);

    const handleChange = evt => {
        setKeyword(evt.target.value);
    }

    const reset = (evt) => {
        setKeyword('');
    }

    return  (
            <div className="position-relative">
                <div className="position-absolute">
                    <svg  className="svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
                <input type="text" onChange={handleChange} className="input_search" placeholder="search" value={keyword}/>
                {loading && <Spinner className="spinner mr-2 mt-2" animation="border" variant="warning" size="sm"/>}
                {
                    keyword.length > 2 && (
                        <div className="position-absolute list-movies">
                            {
                                movies.length > 2 ? (
                                    <ul>
                                    {
                                        movies.map(movie => (
                                            <li className="border-bottom border-secondary" key={movie.id}>
                                                <Link onClick={reset} to={`/${movie.id}`} className="d-flex align-items-center item text-white px-3 py-2 font-weight-bold">
                                                {
                                                    movie.poster_path ? (
                                                        <img src={`https://image.tmdb.org/t/p/w92/${movie.poster_path}`} 
                                                        alt="poster" style={{width:'2rem'}}
                                                        />
                                                    ) : (
                                                        <img src={`https://via.placeholder.com/50x75`} 
                                                            alt="poster" style={{width:'2rem'}}
                                                        />
                                                    )
                                                }
                                                <span className="ml-3">{movie.title}</span> 
                                                </Link>
                                            </li>
                                        ))
                                    } 
                                    </ul>
                                ) : <div className="px-2 py-2 text-white">{`No results for '${keyword}'`}</div>
                            }
                        </div>
                    )
                }
            </div>
    );
}

export default Search;