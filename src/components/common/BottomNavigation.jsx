import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FiHome,
  FiBook,
  FiUsers,
  FiAward,
  FiMail,
} from 'react-icons/fi';
import { useLanguage } from '../../hooks/useLanguage';
import './BottomNavigation.css';

const BottomNavigation = () => {
  const location = useLocation();
  const { language } = useLanguage();

  const translations = {
    en: {
      home: 'Home',
      blog: 'Blog',
      community: 'Community',
      formations: 'Formations',
      contact: 'Contact',
    },
    fr: {
      home: 'Accueil',
      blog: 'Blog',
      community: 'Communauté',
      formations: 'Formations',
      contact: 'Contact',
    },
  };

  const t = translations[language] || translations.en;

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { path: '/', label: t.home, icon: FiHome },
    { path: '/formations', label: t.formations, icon: FiAward },
    { path: '/blog', label: t.blog, icon: FiBook, center: true },
    { path: '/communaute', label: t.community, icon: FiUsers },
    { path: '/contact', label: t.contact, icon: FiMail },
  ];

  return (
    <nav className="bottom-navigation">
      <div className="nav-section">
        {navItems.slice(0, 2).map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`nav-item ${isActive(item.path) ? 'active' : ''}`}
            title={item.label}
          >
            <item.icon className="nav-icon" />
            <span className="nav-label">{item.label}</span>
          </Link>
        ))}
      </div>

      <Link
        to="/blog"
        className={`nav-item center ${isActive('/blog') ? 'active' : ''}`}
        title={t.blog}
      >
        <FiBook className="nav-icon blog-icon" />
        <span className="nav-label">{t.blog}</span>
      </Link>

      <div className="nav-section">
        {navItems.slice(3).map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`nav-item ${isActive(item.path) ? 'active' : ''}`}
            title={item.label}
          >
            <item.icon className="nav-icon" />
            <span className="nav-label">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default BottomNavigation;
