import React from 'react';
import './App.css';
import Main from './main'; // Import Main component
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Privacy from "./components/Privacy";

function App() {
  return (
    <div className="container">
      <h1>Group 7 - SPA</h1>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;