import React from 'react';
import './Navbar.css';

const Navbar = ({ isOpen, onClose, onLogout, onNavigate, currentPage }) => {
  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className="close-btn" onClick={onClose}>&times;</div>
      <ul className="nav-links">
        <li className={currentPage === 'home' ? 'active' : ''}>
          <a href="#home" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>Home</a>
        </li>
        <li className={currentPage === 'about' ? 'active' : ''}>
          <a href="#about" onClick={(e) => { e.preventDefault(); onNavigate('about'); }}>About</a>
        </li>
        <li className={currentPage === 'team' ? 'active' : ''}>
          <a href="#team" onClick={(e) => { e.preventDefault(); onNavigate('team'); }}>Team</a>
        </li>
        <li className={currentPage === 'contact' ? 'active' : ''}>
          <a href="#contact" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}>Contact</a>
        </li>
        <li>
          <a href="#logout" onClick={(e) => { e.preventDefault(); onLogout(); }}>Logout</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
