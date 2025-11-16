import React from 'react';
// import { useLanguage } from '../../hooks/useLanguage';
import { LANGUAGES } from '../../utils/constants';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  // Temporary implementation without context
  const [currentLang, setCurrentLang] = React.useState('fr');

  const handleLanguageChange = (langCode) => {
    setCurrentLang(langCode);
    localStorage.setItem('app_language', langCode);
  };

  return (
    <div className="lang-switcher">
      <button
        className={`lang-btn ${currentLang === 'fr' ? 'active' : ''}`}
        onClick={() => handleLanguageChange(LANGUAGES.FR.code)}
        aria-label="Changer vers le français"
      >
        <span className="flag">{LANGUAGES.FR.flag}</span>
        <span className="lang-code">FR</span>
      </button>
      
      <button
        className={`lang-btn ${currentLang === 'en' ? 'active' : ''}`}
        onClick={() => handleLanguageChange(LANGUAGES.EN.code)}
        aria-label="Switch to English"
      >
        <span className="flag">{LANGUAGES.EN.flag}</span>
        <span className="lang-code">EN</span>
      </button>
    </div>
  );
};

export default LanguageSwitcher;