import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Login from './Components/Login';
import About from './Components/About';
import Team from './Components/Team';
import Contact from './Components/Contact';

import NotFound from './Components/NotFound';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogin = (userData) => {
    setIsLoggedIn(true);
    setUser(userData);
    navigate('/');
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUser(null);
    setIsMenuOpen(false);
    navigate('/login');
  };

  const handleNavigate = (page) => {
    navigate(page === 'home' ? '/' : `/${page}`);
    setIsMenuOpen(false);
  };

  return (
    <div className="app-container">
      {isLoggedIn ? (
        <>
          <Navbar 
            isOpen={isMenuOpen} 
            onClose={closeMenu} 
            onLogout={handleLogout} 
            onNavigate={handleNavigate}
            user={user}
          />
          <Header onToggleMenu={toggleMenu} />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contact" element={<Contact />} />

              <Route path="/login" element={<Navigate to="/" />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </>
      ) : (
        <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
