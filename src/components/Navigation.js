import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

function Navigation() {
    return (
        <div className="nav-link-container">
            <Navbar>
                    <span className="myName"><h1>Fernando Zaldivar</h1></span>
                    <div className="nav-link-header ml-auto">
                        <NavLink className="nav-links" to="/">Bio</NavLink>
                        <NavLink className="nav-links" to="/portfolio">Portfolio</NavLink>
                        <NavLink className="nav-links" to="/resume">Resume</NavLink>
                        <NavLink className="nav-links" to="/contact">Contact</NavLink>
                    </div>
            </Navbar>
        </div>
    );  
}

export default Navigation;