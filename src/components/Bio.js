import Me from '../img/me.jpg'

function Bio() {
    return (
      <div className="container">
          <h1>Bio</h1>
          <div className='container'>
            <div className='row'>
              <div className='col'>
                <img src={Me} className='my-photo' />
              </div>
              <div className='col center-content'>
                <p>
                    Bilingual Junior Web Developer that is looking to learn new techniques and use creative solutions for modern day problems.
                    Received a certificate in Full Stack from University of Miami. My major strength lies in working in teams.
                    I have 4 years in management experience so being able to delegate tasks and evaluate team strengths and weakness
                    is a skill I am proficient in. Even if not part of a team I can still excel on my own and provide results. 
                </p>
              </div>
            </div>
          </div>
      </div>
    );
  }
  
  export default Bio;