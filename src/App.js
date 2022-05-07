import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar  from './components/navbar';
import Home  from './pages';
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';
import Services from './pages/services';
import SignUp from './pages/signup';

function App() {

  return (
 
      <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/contact' component={Contact} />
        <Route path='/services' component={Services} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/sign-up' component={SignUp} />
      </Switch>
    </Router>

  );
}

export default App;
