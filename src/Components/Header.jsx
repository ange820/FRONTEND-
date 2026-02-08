import React from 'react';
import './Header.css';

const Header = ({ onToggleMenu }) => {
  return (
    <header className="header">
      <div className="menu-bar" onClick={onToggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <h1 className="header-title">Welcome to my project</h1>
    </header>
  );
};

export default Header;
