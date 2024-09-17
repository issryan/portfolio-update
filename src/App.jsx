// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Projects from './pages/Projects';
import Shift from './pages/projects/shift';
import Flick from './pages/projects/flick';
import BreedFinder from './pages/projects/breedfinder';
import Survey from './pages/projects/survey';
import Contact from './pages/Contact';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project1" element={<Shift />} />
        <Route path="/project2" element={<Flick />} />
        <Route path="/project3" element={<BreedFinder />} />
        <Route path="/project4" element={<Survey />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;