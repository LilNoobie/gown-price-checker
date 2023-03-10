import React from 'react';
import SearchBar from '../../Components/SearchBar/SearchBar';
import SampleData from '../../Components/Data.json'
import './Home.css'

function Home() {
  return (
    <header className="App-header">
      <div className="homeBox">
        <p className="header-text">
          What gown are you looking for?
        </p>

        <div className="searchBar">
          <SearchBar placeholder="Enter brand or name" data={SampleData} />
        </div>
      </div>
    </header>
  )
}

export default Home
