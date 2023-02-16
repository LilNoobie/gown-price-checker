import React from 'react';
import './App.css'
import SearchBar from '../SearchBar/SearchBar';
import SampleData from '../Data.json';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import logo from './logo.svg';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route />
          <Route />
        </Routes>
      </Router>
      <header className="App-header">
        <p className="header-text">
          What gown are you looking for?
        </p>
          <div>
            <SearchBar placeholder="Enter brand or name" data={SampleData}  />
          </div>
      </header>
    </div>
  );
}

export default App;
