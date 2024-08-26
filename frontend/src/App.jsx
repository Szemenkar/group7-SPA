import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Privacy from "./components/Privacy";
import Header from "./components/Header";
import Navbar from './components/Filterbar';
import ArticleList from './components/ArticleList';

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  const [darkmodestatus, setDarkmodestatus] = useState(() => theme === 'light' ? 'OFF' : 'ON');

  useEffect(() => {
    document.body.className = theme;

    localStorage.setItem('theme', theme);
    setDarkmodestatus(theme === 'light' ? 'OFF' : 'ON');
  }, [theme]);

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="container">
      <div className="switch-container">
        <div className="top-right"></div>
        <label className="switch">
          <input type="checkbox" onChange={toggleTheme} checked={theme === 'dark'} />
          <span className="slider"></span>
        </label>
        <span className="dark-mode-text">Dark mode {darkmodestatus}</span>
      </div>

      <Router>
        <Header theme={theme}/>
        <Routes>
          <Route path="/" element={<Home theme={theme} />} /> {/* Pass theme to Home */}
          <Route path="/privacy" element={<Privacy theme={theme}/>} />
        </Routes>
      </Router>
    </div>
  );
}

const Home = ({theme}) => (
  <>
    <Navbar theme={theme}/>
    <ArticleList theme={theme}/>
  </>
);

export default App;