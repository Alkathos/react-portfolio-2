import Me from '../img/me.jpg'

function Bio() {
    return (
      <div className="container">
          <h1>Bio</h1>
          <div className='container'>
            <div className='row'>
              <div className='col'>
                <img alt="Fernando Zaldivar" src={Me} className='my-photo' />
              </div>
              <div className='col center-content'>
                <p>
                    Bilingual Junior Front End Web Developer that is looking to learn new techniques and use creative solutions for modern day problems.
                    Received a certificate in Full Stack from University of Miami. My major strength lies in working in teams.
                    I have 4 years in management experience. I am capable of leading many individuals from all walks of life.
                    I excel in problem-solving, emotional intelligence and accountability. I work well individually as well as on a team; adaptable and collaborative. 
                </p>
              </div>
            </div>
          </div>
      </div>
    );
  }
  
  export default Bio;