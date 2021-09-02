import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className="myfooter">
      <div className='footer-content'>
        <FontAwesomeIcon icon={faGithubSquare} size='7x' />  
      </div>
      <div className='footer-content'>
        <FontAwesomeIcon icon={faLinkedin} size='7x' />
      </div> 
    </div>
  );
}

export default Footer;