import React from 'react';
import './App.css'
import SearchBar from '../SearchBar/SearchBar';
import SampleData from '../Data.json';
import { BrowserRouter as Router, Switch, Routes, Route} from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import About from '../../Pages/About/About';
import Dress from '../../Pages/Dress/Dress';
import logo from './logo.svg';
import Home from '../../Pages/Home/Home';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About/>} />
          <Route path="/:title" element={<Dress/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
