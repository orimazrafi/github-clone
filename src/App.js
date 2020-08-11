import React from 'react';

import './App.scss';
import { Navbar } from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { HomePage } from './views/HomePage/HomePage';
function App() {
  return (

    <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
