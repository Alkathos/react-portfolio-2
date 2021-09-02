import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

function Navigation() {
    return (
        <div className="nav-link-container">
            <Navbar>
                    <span className="myName"><h1>Fernando Zaldivar</h1></span>
                    <div>
                        <NavLink to="/">Bio</NavLink>
                        <NavLink to="/portfolio">Portfolio</NavLink>
                        <NavLink to="/resume">Resume</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                    </div>
            </Navbar>
        </div>
    );  
}

export default Navigation;