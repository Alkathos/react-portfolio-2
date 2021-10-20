import React from 'react';
import { NavLink } from 'react-router-dom';


function Navigation() {
    return (
        <div className="nav-link-container">
            <nav>
                    <span><div className="myName">FERNANDO ZALDIVAR</div></span>
                    <div className="nav-link-header">
                        <NavLink className="nav-links" to={process.env.PUBLIC_URL + '/'}>About</NavLink>
                        <NavLink className="nav-links" to={process.env.PUBLIC_URL + '/projects'}>Portfolio</NavLink>
                        <NavLink className="nav-links" to={process.env.PUBLIC_URL + '/resume'}>Resume</NavLink>
                        <NavLink className="nav-links" to={process.env.PUBLIC_URL + '/contact'}>Contact Me</NavLink>
                    </div>
            </nav>
        </div>
    );
}

export default Navigation;