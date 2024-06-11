// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Routes를 import합니다.
import SearchPage from './SearchPage';
import RandomPage from './RandomPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <header>
          <h1>Recipe Book</h1>
          <nav>
            <ul>
              <li><Link className="decoration_none" to="/">Home</Link></li>
              <li><Link className="decoration_none" to="/random">Random Recipe</Link></li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route exact path="/" element={<SearchPage />} /> 
          <Route path="/random" element={<RandomPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
