import React from 'react';
import './App.css'
import SearchBar from '../SearchBar/SearchBar';
import SampleData from '../Data.json';
import logo from './logo.svg';


function App() {
  return (
    <div className="App">
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
