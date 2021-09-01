import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


function Navigation() {
    return (
        <div>
            <Nav>
                <Container> 
                        <Navbar bg="dark" variant="dark" fixed="top">
                            <Navbar.Brand>Fernando Zaldivar</Navbar.Brand>
                            <Router>
                                <Link to="/">Bio</Link>
                                <Link to="/portfolio">Portfolio</Link>
                                <Link to="/resume">Resume</Link>
                                <Link to="/contact">Contact</Link>
                                <Route exact path='/' />
                                <Route path='portfolio' component='./Portfolio' />
                                <Route path='resume' component='./Resume' />
                                <Route path='contact' component='./Contact' />
                            </Router>
                        </Navbar>
                </Container>
            </Nav>
        </div>
    );
    
}

export default Navigation;