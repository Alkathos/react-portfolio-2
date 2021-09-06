import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <div className="nav-link-container">
            <nav>
                    <span><h1 className="myName">Fernando Zaldivar</h1></span>
                    <div className="nav-link-header">
                        <NavLink className="nav-links" to="/">Bio</NavLink>
                        <NavLink className="nav-links" to="/portfolio">Portfolio</NavLink>
                        <NavLink className="nav-links" to="/resume">Resume</NavLink>
                        <NavLink className="nav-links" to="/contact">Contact</NavLink>
                    </div>
            </nav>
        </div>
    );
}

export default Navigation;