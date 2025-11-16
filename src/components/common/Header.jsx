import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from './ThemeToggle';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer le menu mobile lors du changement de route ou clic extérieur
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen && !event.target.closest('nav')) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [mobileMenuOpen]);

  const isActive = (path) => location.pathname === path;

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className={scrolled ? 'scrolled' : ''}>
        <nav>
          {/* Menu hamburger pour mobile */}
          <button 
            className="mobile-menu-btn"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
          
          <Link to="/" className="logo-container">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 100'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='0%25'%3E%3Cstop offset='0%25' style='stop-color:%23037d7b;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23059b98;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Ctext x='10' y='60' font-family='Poppins, sans-serif' font-size='40' font-weight='bold' fill='url(%23grad)'%3E100%25%3C/text%3E%3Ctext x='10' y='85' font-family='Poppins, sans-serif' font-size='16' fill='%23037d7b'%3EACADEMY%3C/text%3E%3Ccircle cx='180' cy='20' r='8' fill='%23ff4f8b'/%3E%3C/svg%3E"
              alt="100% ACADEMY"
              className="logo"
            />
          </Link>
          
          <ul className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <li>
              <Link 
                to="/" 
                className={isActive('/') ? 'active' : ''}
                onClick={closeMobileMenu}
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link 
                to="/blog" 
                className={isActive('/blog') ? 'active' : ''}
                onClick={closeMobileMenu}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link to="/formations" onClick={closeMobileMenu}>
                Formations
              </Link>
            </li>
            <li>
              <Link to="/communaute" onClick={closeMobileMenu}>
                Communauté
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={closeMobileMenu}>
                Contact
              </Link>
            </li>
          </ul>

          <div className="header-actions">
            <ThemeToggle />
            <LanguageSwitcher />
          </div>
        </nav>
      </header>
      
      {/* Overlay pour fermer le menu mobile */}
      <div 
        className={`mobile-overlay ${mobileMenuOpen ? 'active' : ''}`}
        onClick={closeMobileMenu}
      />
    </>
  );
};

export default Header;