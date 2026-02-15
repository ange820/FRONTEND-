import React from 'react';
import { useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ isOpen, onClose, onLogout, onNavigate, user }) => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className="close-btn" onClick={onClose}>&times;</div>
      <ul className="nav-links">
        <li className={path === '/' ? 'active' : ''}>
          <a href="/" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>Home</a>
        </li>

        <li className={path === '/about' ? 'active' : ''}>
          <a href="/about" onClick={(e) => { e.preventDefault(); onNavigate('about'); }}>About</a>
        </li>
        <li className={path === '/team' ? 'active' : ''}>
          <a href="/team" onClick={(e) => { e.preventDefault(); onNavigate('team'); }}>Team</a>
        </li>
        <li className={path === '/contact' ? 'active' : ''}>
          <a href="/contact" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}>Contact</a>
        </li>
        <li>
          <a href="/logout" onClick={(e) => { e.preventDefault(); onLogout(); }}>Logout</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
