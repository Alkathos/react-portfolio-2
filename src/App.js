import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Bio from './components/Bio';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';


function App() {
  return (

      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path='/' component={Bio} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/resume' component={Resume} />
          <Route path='/contact' component={Contact} />
        </Switch>
        <Footer />
      </BrowserRouter>
        

        


  );     
}

export default App;
