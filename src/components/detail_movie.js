import React,{useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Button, Col, Container, Row} from 'react-bootstrap';
import '../assets/css/detail_movie.css';
import  poster from '../assets/img/poster_movie.jpg';

function DetailMovie() {

    const [movie,setMovie] = useState();
    const {id} = useParams();
    
    useEffect(() => {
      
    },[]);
  
    return (
      <div>
          <div className="movie-info">
                <Container>
                      <Row>
                          <Col xs={12} md={4}>
                            <img src={poster} alt="parasite" className="poster"/>
                          </Col>
                          <Col xs={12} md={8}>
                                <div className="">
                                    <h2 className="font-weight-bold text-uppercase text-white mt-4 pb-2">Hacker</h2>
                                    <div className="d-flex justify-content align-items-center text-white">
                                        <svg className="text-warning" style={{width:'1rem'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                        </svg>
                                      <span className="ml-1">85%</span>
                                      <span className="mx-2">|</span>
                                      <span>Feb 20, 2020</span>
                                      <span className="mx-2">|</span>
                                      <span>Action, Adventure, Science Fiction</span>
                                    </div>
                                    <p className="text-white mt-4">
                                      Lorem Ipsum es simplemente texto de relleno de la industria de la impresión y la 
                                      composición tipográfica. Lorem Ipsum ha sido el texto de relleno estándar de la 
                                      industria desde el siglo XVI, cuando un impresor desconocido tomó una galera de 
                                      tipos y la mezcló para hacer un libro de muestras tipográficas.
                                    </p>
                                    <div className="mt-5 text-white">
                                        <h4 className="text-white text-weight-bold">Feactued Cast</h4>
                                        <div className="d-flex mt-4">
                                            <div>
                                                <div className="pb-2">Bong Joon-ho</div>
                                              <div className="text-secondary">Secreenplay, Director, Story</div>
                                          </div>
                                          <div className="ml-4">
                                              <div className="text-white pb-2">Han Jin-Won</div>
                                              <div className="text-secondary">Secreenplay</div>
                                          </div>
                                      </div>
                                </div>
                                  <div className="mt-4">
                                      <Button variant="warning">Add to favorites</Button>
                                  </div>
                            </div>
                        </Col>
                    </Row>
              </Container> 
            </div> 
        <div className="movie-cast">
          <Container >
              <h2 className="font-weight-bold text-uppercase text-white mt-4 pb-2">CAST</h2>
              <Row>
                  <Col xs={12} lg={2} className="mt-4">
                        <img className="poster" src={poster} alt="poster_movie"/>   
                        <div className="mt-2 description">
                            <p className="text-white font-weight-bold pb-1">Real Name</p>
                            <span>Jhon Smith</span>
                        </div>
                  </Col>
                  <Col xs={12} lg={2} className="mt-4">
                        <img className="poster" src={poster} alt="poster_movie"/>   
                        <div className="mt-2 description">
                            <p className="text-white font-weight-bold pb-1">Real Name</p>
                            <span>Jhon Smith</span>
                        </div>
                  </Col>
                  <Col xs={12} lg={2} className="mt-4">
                        <img className="poster" src={poster} alt="poster_movie"/>   
                        <div className="mt-2 description">
                            <p className="text-white font-weight-bold pb-1">Real Name</p>
                            <span>Jhon Smith</span>
                        </div>
                  </Col>
                  <Col xs={12} lg={2} className="mt-4">
                        <img className="poster" src={poster} alt="poster_movie"/>   
                        <div className="mt-2 description">
                            <p className="text-white font-weight-bold pb-1">Real Name</p>
                            <span>Jhon Smith</span>
                        </div>
                  </Col>
                  <Col xs={12} lg={2} className="mt-4">
                        <img className="poster" src={poster} alt="poster_movie"/>   
                        <div className="mt-2 description">
                            <p className="text-white font-weight-bold pb-1">Real Name</p>
                            <span>Jhon Smith</span>
                        </div>
                  </Col>
                  <Col xs={12} lg={2} className="mt-4">
                        <img className="poster" src={poster} alt="poster_movie"/>   
                        <div className="mt-2 description">
                            <p className="text-white font-weight-bold pb-1">Real Name</p>
                            <span>Jhon Smith</span>
                        </div>
                  </Col>
              </Row>
          </Container>
        </div>
    </div>
  );
}

export default DetailMovie;