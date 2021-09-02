import React from 'react';
import { NavLink } from 'react-router-dom';



function Navigation() {
    return (
        <div>
            <NavLink to="/">Bio</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/resume">Resume</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </div>
    );  
}

export default Navigation;