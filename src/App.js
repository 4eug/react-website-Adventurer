import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Projects from './components/pages/Projects';
import ContactUs from './components/pages/ContactUs';
import Images from './components/pages/Images';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/images' component={Images} />
          <Route path='/projects' component={Projects} />
          <Route path='/contact-us' component={ContactUs} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
