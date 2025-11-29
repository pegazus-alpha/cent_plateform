import { useState, useEffect } from 'react';

export const useAppMode = () => {
  const [isStandalone, setIsStandalone] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Vérifier si l'app est lancée en mode standalone (installée)
    const isInStandaloneMode = () => {
      // Vérifier localStorage pour mode test (optionnel)
      const testMode = localStorage.getItem('app_mode_test');
      if (testMode === 'standalone') {
        console.log('[useAppMode] Test mode: STANDALONE');
        return true;
      }
      if (testMode === 'browser') {
        console.log('[useAppMode] Test mode: BROWSER');
        return false;
      }

      // Vérifications officielles PWA
      const displayMode = window.matchMedia('(display-mode: standalone)').matches;
      const navigatorStandalone = window.navigator.standalone === true;
      const referrerApp = document.referrer.includes('android-app://') || document.referrer.includes('app://');
      
      console.log('[useAppMode] Detection results:', {
        displayMode,
        navigatorStandalone,
        referrerApp,
        userAgent: window.navigator.userAgent
      });

      return displayMode || navigatorStandalone || referrerApp;
    };

    const detected = isInStandaloneMode();
    setIsStandalone(detected);
    console.log('[useAppMode] Final result:', detected ? 'STANDALONE' : 'BROWSER');
    setIsLoading(false);

    // Écouter les changements
    const mediaQuery = window.matchMedia('(display-mode: standalone)');
    const handleChange = (e) => {
      console.log('[useAppMode] Mode changed to:', e.matches ? 'STANDALONE' : 'BROWSER');
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

// Fonction helper pour tester
export const setAppModeTest = (mode) => {
  if (mode === 'standalone' || mode === 'browser') {
    localStorage.setItem('app_mode_test', mode);
    console.log(`[useAppMode] Test mode set to: ${mode}. Reload page to apply.`);
    window.location.reload();
  } else {
    localStorage.removeItem('app_mode_test');
    console.log('[useAppMode] Test mode cleared. Reload page to apply.');
    window.location.reload();
  }
};

