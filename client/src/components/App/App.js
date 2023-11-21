import React from 'react';
import './App.css';
import Film from '../BWFIlmReelHoriz/film.js';
import Navbar from '../NavBar/Navbar.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          {/* <Route path="" /> */}
        </Routes>
      </Router>
       <Film />
    </>
  );
};

export default App;
