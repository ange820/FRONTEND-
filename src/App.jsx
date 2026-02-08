import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Login from './Components/Login';
import About from './Components/About';
import Team from './Components/Team';
import Contact from './Components/Contact';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentPage('home');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsMenuOpen(false);
    setCurrentPage('home');
  };

  const handleNavigate = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'team':
        return <Team />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
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
            currentPage={currentPage}
          />
          <Header onToggleMenu={toggleMenu} />
          <main>
            {renderPage()}
          </main>
          <Footer />
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
