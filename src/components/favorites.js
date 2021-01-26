import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import Movie from './movie';

function Favorites({favorites}) {
    return (
        <div className="favorites">
        <Container>
        <h2  className="text-warning text-uppercase mt-4 font-weight-bold" style={{textTransform:'uppercase', fontSize:'2rem'}}>FAVORITES</h2>
          <Row>
              {
                 favorites.length > 0 ? favorites.map((movie) => {
                        return (<Movie
                            key={movie.id}
                            {...movie} 
                        />); 
                  }) : <Col className="text-white">There are no favorites adds</Col>
              }  
          </Row>
        </Container>
    </div>
    );
}

const mapStateToProps = state => {
  return {
      favorites : state.favorites
  }
}

const mapDispatchToProps = dispatch => {
   return {} 
}

export default connect(mapStateToProps,mapDispatchToProps)(Favorites);