import React from 'react';

import './App.scss';
import { Navbar } from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { HomePage } from './views/HomePage/HomePage';
import { Profile } from './views/Profile/Profile';
function App() {
  return (

    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
