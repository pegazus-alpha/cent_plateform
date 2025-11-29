import { useState, useEffect } from 'react';

export const useAppMode = () => {
  const [isStandalone, setIsStandalone] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Vérifier si l'app est lancée en mode standalone (installée)
    const isInStandaloneMode = () => {
      return (
        window.matchMedia('(display-mode: standalone)').matches ||
        window.navigator.standalone === true ||
        document.referrer.includes('android-app://') ||
        document.referrer.includes('app://')
      );
    };

    setIsStandalone(isInStandaloneMode());
    setIsLoading(false);

    // Écouter les changements (au cas où)
    const mediaQuery = window.matchMedia('(display-mode: standalone)');
    const handleChange = (e) => {
      setIsStandalone(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return {
    isStandalone, // true = app installée, false = navigateur
    isBrowser: !isStandalone,
    isLoading,
  };
};
