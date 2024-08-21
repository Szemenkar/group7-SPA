import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import '../components/Header.css';

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
        <div className="container-fluid">
          <ul className="navbar-nav flex-grow-1">
            <a className="navbar-brand" href="/"><img src={logo} alt="Group7" width="55" /></a>
          </ul>
          <li className="nav-item">
            <Link className="nav-link text-dark" to="/">Home | </Link>
            <Link className="nav-link text-dark" to="/privacy">Privacy</Link>
          </li>
        </div>
      </nav>
    </header >
  );
};

export default Header;