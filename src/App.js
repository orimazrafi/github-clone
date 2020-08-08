import React from 'react';

import './App.scss';
// import { Container, Box, Button, Grid, Paper } from '@material-ui/core';
import { Navbar } from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route } from "react-router-dom"
function App() {
  return (

    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
