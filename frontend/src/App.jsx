import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Privacy from "./components/Privacy";
import Header from "./components/Header";
import Navbar from './components/Filterbar';
import ArticleList from './components/ArticleList';

function App() {
  return (
    <div className="container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </Router>
    </div>
  );
}

const Home = () => (
  <>
    <Navbar />
    <ArticleList />
  </>
);

export default App;