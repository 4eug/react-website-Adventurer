import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Projects from './components/pages/Projects';
import ContactUs from './components/pages/ContactUs';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/projects' component={Projects} />
          <Route path='/contact-us' component={ContactUs} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
