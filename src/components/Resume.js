import Button from 'react-bootstrap/Button';

function Resume() {
    return (
      <div>
        <div className='container'>
          <div className="row">
              <div class="col">
                <h1>Technologies</h1>
                  <ul>
                    <li>React</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                    <li>GitHub</li>
                    <li>JavaScript</li>
                    <li>JSX</li>
                    <li>Node.js</li>
                    <li>MongoDB</li>
                    <li>MySQL</li>
                    <li>Express</li>
                    <li>NPM</li>
                    <li>GraphQL</li>
                  </ul>
              </div>
              <div className="col">
                <div className="container">
                  <h1>Resume</h1>
                  <p>Download my resume below.</p>
                </div>
                <div className="col resume-button">
                  <Button href="https://docs.google.com/document/d/1zUfxK4vUWvJ5SWD9vPJFKuRIcsnnWBSa/edit?usp=sharing&ouid=106526077330418353545&rtpof=true&sd=true" target="_blank" size="lg">Resume</Button>
                </div>   
              </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Resume;