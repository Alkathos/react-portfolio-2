import React from 'react';
import { NavLink } from 'react-router-dom';


function Navigation() {
    return (
        <div className="nav-link-container">
            <nav>
                    <span><div className="myName">Fernando Zaldivar</div></span>
                    <div className="nav-link-header">
                        <NavLink className="nav-links" to="/">Bio</NavLink>
                        <NavLink className="nav-links" to="/projects">Projects</NavLink>
                        <NavLink className="nav-links" to="/resume">Resume</NavLink>
                        <NavLink className="nav-links" to="/contact">Contact</NavLink>
                    </div>
            </nav>
        </div>
    );
}

export default Navigation;