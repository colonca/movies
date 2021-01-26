import React,{useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Button, Col, Container, Row} from 'react-bootstrap';
import '../assets/css/detail_movie.css';
import { getMovie } from '../services/movie_service';
import Loading from './loading';
import { connect } from 'react-redux';

function DetailMovie({favorites, addToFavorites}) {

    const [loading, setLoading ] = useState(true);
    const [movie,setMovie] = useState();
    const {id} = useParams();
    
    useEffect(() => {
        setLoading(true);
        getMovie(id).then(movie => {
            setMovie(movie);
            setLoading(false);
        });
    },[id]);


    if(loading){
        return <Loading/>
    }
  
    return (
      <div>
          <div className="movie movie-info">
                <Container>
                      <Row>
                          <Col xs={10} md={4} className="mx-auto d-flex item-align-center">
                            <img src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="poster" className="poster"/>
                          </Col>
                          <Col xs={12} md={8}>
                                <div className="">
                                    <h2 className="font-weight-bold text-uppercase text-white mt-4 pb-2">{movie.title}</h2>
                                    <div className="d-flex justify-content align-items-center text-white">
                                        <svg className="text-warning" style={{width:'1rem'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                        </svg>
                                      <span className="ml-1">{movie.vote_average*10+'%'}</span>
                                      <span className="mx-2">|</span>
                                      <span>{movie.release_date}</span>
                                      <span className="mx-2">|</span>
                                      <span>{movie.genres && movie.genres.map(gen => gen.name + ', ')}</span>
                                    </div>
                                    <p className="text-white mt-4">
                                     {movie.overview}
                                    </p>
                                    <div className="mt-5 text-white">
                                        <h4 className="text-white text-weight-bold">Feactued Cast</h4>
                                        <div className="d-flex mt-4">
                                          {
                                              movie.credits.crew.map((crew,index) => {
                                                 if(index < 2) {
                                                   return (
                                                     <div className="mr-4" key={crew.credit_id}>
                                                        <div className="pb-2">{crew.name}</div>
                                                        <div className="text-secondary">{crew.job}</div>
                                                    </div>); 
                                                 }
                                              })
                                          }
                                      </div>
                                </div>
                                  <div className="mt-4">
                                      {
                                            favorites.findIndex(item => item.id === movie.id) === -1 && (<Button onClick = {() => addToFavorites(movie)} className="text-white font-weight-bold" variant="warning">
                                                <svg className="mr-2 mb-1" style={{width:'1em'}}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                </svg>
                                                <span>Add to favorites</span>
                                            </Button>)
                                      }
                                  </div>
                            </div>
                        </Col>
                    </Row>
              </Container> 
            </div> 
          <div className="movie movie-cast">
            <Container >
                <h2 className="font-weight-bold text-uppercase text-white mt-4 pb-2">CAST</h2>
                <Row>
                        {
                            movie.credits.cast.map((cast,index) => {
                                if(index < 6) {
                                    return (
                                        <Col xs={6} md={4} lg={2} className="mt-4 mx-auto" key={cast.cast_id}>
                                            <img className="poster" src={`http://image.tmdb.org/t/p/w500${cast.profile_path}`} alt="poster_movie"/>   
                                            <div className="mt-2 description">
                                                <p className="text-white font-weight-bold pb-1">{cast.name}</p>
                                                <span>{cast.character}</span>
                                            </div>
                                        </Col>
                                    ); 
                                }
                            })
                        }
                </Row>
            </Container>
        </div>
          <div className="movie movie-images">
              <Container>
                <h2 className="font-weight-bold text-uppercase text-white mt-4 pb-2">IMAGES</h2> 
                <Row>
                    {
                        movie.images.backdrops.map((image,index) => {
                            if(index < 6) {
                                return (
                                    <Col xs={6} md={6} lg={4} className="mt-4 mx-auto" key={index}>
                                        <img className="poster" src={`http://image.tmdb.org/t/p/w500${image.file_path}`} alt="poster_movie"/>   
                                    </Col>
                                ); 
                            }
                        })
                    }  
                </Row>
              </Container>
          </div>
     </div>
    );
}

const mapStateToProps = state => {
    return {
        favorites : state.favorites
    }
}

const mapDispatchToProps = dispatch => {
   return {
        addToFavorites(movie) {
            dispatch({
               type: 'ADD_TO_FAVORITES',
               movie
            });
        }
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(DetailMovie);