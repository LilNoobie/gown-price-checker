import React from 'react';
import './App.css'
// import SearchBar from '../SearchBar/SearchBar';
// import SampleData from '../Data.json';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import About from '../../Pages/About/About';
import DressDetails from '../../Pages/Dress/DressDetails';
import Home from '../../Pages/Home/Home';
import Form from '../Form/Form';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About/>} />
          <Route path="/dress/:style" element={<DressDetails/>} />
          <Route path="/form" element={<Form/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
