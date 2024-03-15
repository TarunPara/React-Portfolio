import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx/index.js';
import Home from './pages/Home.jsx/index.js';
import AboutMe from './pages/AboutMe.jsx';
import Projects from './pages/Projects.jsx/index.js';
import Contact from './pages/Contact.jsx/index.js';
import NotFound from './pages/NotFound.jsx/index.js';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            {}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
