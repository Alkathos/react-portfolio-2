import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className="myfooter">
      <div className='footer-content'>
        <a href='https://github.com/Alkathos' target="_blank" rel='noreferrer'><FontAwesomeIcon icon={faGithubSquare} size='7x' /></a>  
      </div>
      <div className='footer-content'>
        <a href='https://www.linkedin.com/in/fernando-zaldivar-jr' target="_blank" rel='noreferrer'><FontAwesomeIcon icon={faLinkedin} size='7x' /></a>
      </div> 
    </div>
  );
}

export default Footer;