import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className="myfooter">
        <div className="col">
          <div className="row">
            <FontAwesomeIcon icon={faGithubSquare} size='9x' />
            <FontAwesomeIcon icon={faLinkedin} size='9x' />       
          </div>
        </div>   
    </div>
  );
}

export default Footer;