import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

/**
 * Custom hook to use language context
 * @returns {Object} Language context values and functions
 */
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  
  return context;
};

export default useLanguage;