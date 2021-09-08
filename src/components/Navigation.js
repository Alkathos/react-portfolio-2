import React from 'react';
import { NavLink } from 'react-router-dom';


function Navigation() {
    return (
        <div className="nav-link-container">
            <nav>
                    <span><div className="myName">Fernando Zaldivar</div></span>
                    <div className="nav-link-header">
                        <NavLink className="nav-links" to={process.env.PUBLIC_URL + '/'}>Bio</NavLink>
                        <NavLink className="nav-links" to={process.env.PUBLIC_URL + '/projects'}>Projects</NavLink>
                        <NavLink className="nav-links" to={process.env.PUBLIC_URL + '/resume'}>Resume</NavLink>
                        <NavLink className="nav-links" to={process.env.PUBLIC_URL + '/contact'}>Contact</NavLink>
                    </div>
            </nav>
        </div>
    );
}

export default Navigation;