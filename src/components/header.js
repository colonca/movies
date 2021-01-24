import React from 'react';
import {Link} from 'react-router-dom';
import { Navbar,Nav, Container} from 'react-bootstrap';
import Search from './search';
import avatar from '../assets/img/avatar.jpg';
import '../assets/css/header.css';

function Header() {
    return  (
            <Navbar variant="dark" expand="lg" className="nav_header">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                            <svg className="mr-2 mb-1" style={{width:'1em'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                            </svg>
                            <span className="">WikiMovie</span>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link as={Link} to="/" style={{color:'white'}}>Movies</Nav.Link>
                                <Nav.Link as={Link}  to="/" style={{color:'white'}}>TV Shows</Nav.Link>
                                <Nav.Link as={Link} to="/" style={{color:'white'}}>Actors</Nav.Link>
                            </Nav>
                            <div className="d-flex">
                                <Search/>
                                <div className="ml-2">
                                    <img src={avatar} alt="avatar" className="avatar"/>
                                </div>
                            </div>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
    );
}

export default Header;