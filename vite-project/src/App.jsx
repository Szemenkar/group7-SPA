import React, { useState, useEffect } from 'react';
import './App.css'; 
import Main from './main';

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  const [darkmodestatus, setDarkmodestatus] = useState(() => theme === 'light' ? 'OFF' : 'ON');

  useEffect(() => {
    document.body.className = theme;

    localStorage.setItem('theme', theme);
    setDarkmodestatus(theme === 'light' ? 'OFF' : 'ON');
  }, [theme]);

  //toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="container">
      <h1>Group 7</h1>
      <div class="switch-container">
      <div class="top-right"></div>
      <label className="switch">
        <input type="checkbox" onChange={toggleTheme} checked={theme === 'dark'} />
        <span className="slider"></span>
      </label>
      <span className="dark-mode-text">Dark mode {darkmodestatus}</span>
      </div>

      <Main theme={theme} />
    </div>
  );
}

export default App;