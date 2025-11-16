import React, { createContext, useState, useEffect } from 'react';
import { STORAGE_KEYS, LANGUAGES } from '../utils/constants';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem(STORAGE_KEYS.LANGUAGE) || LANGUAGES.FR.code;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.LANGUAGE, language);
  }, [language]);

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  const value = {
    language,
    changeLanguage,
    isEnglish: language === LANGUAGES.EN.code,
    isFrench: language === LANGUAGES.FR.code,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};