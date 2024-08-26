import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import '../components/Header.css';

const Header = ({theme}) => {
  return (
    <header className={`header ${theme}`}>
      <nav className="logobar">
        <div className="container-fluid">
          <ul className="navbar-nav flex-grow-1">
            <a className="logobar-brand" href="/"><img src={logo} alt="Group7" width="55" /></a>
          </ul>
          <li className={`nav-item ${theme}`}>
            <Link className={`nav-link ${theme}`} to="/">HOME | </Link>
            <Link className={`nav-link ${theme}`} to="/privacy">PRIVACY</Link>
          </li>
        </div>
      </nav>
    </header >
  );
};

export default Header;