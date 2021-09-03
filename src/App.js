import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Bio from './components/Bio';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';


function App() {
  return (
    <>
    
    <div className="portfolio-bg">
      <div className="content-wrap">
          <Router>
          <Navigation />
            <Switch>
              <Route path='/' exact component={Bio} />
              <Route path='/portfolio' component={Portfolio} />
              <Route path='/resume' component={Resume} />
              <Route path='/contact' component={Contact} />
            </Switch>
          </Router>
      </div>
      <Footer />
    </div>
    </>    
  );     
}

export default App;
