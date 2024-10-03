// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Projects from './pages/Projects';
import Particles from './components/ParticleEffect'
import './App.css';
import Navbar from './components/navbar/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Particles />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
};

export default App;