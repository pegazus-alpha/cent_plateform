import { useEffect, useState } from 'react';

/**
 * Hook pour gérer le service worker et les fonctionnalités PWA
 */
export const usePWA = () => {
  const [isOffline, setIsOffline] = useState(false);
  const [isInstallable, setIsInstallable] = useState(false);
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    // Enregistrer le service worker
    if ('serviceWorker' in navigator) {
      registerServiceWorker();
    }

    // Gérer le statut de connexion
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Initialiser le statut de connexion
    setIsOffline(!navigator.onLine);

    // Gérer l'événement d'installation PWA
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Nettoyer les événements
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const registerServiceWorker = async () => {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js');
      
      console.log('Service Worker enregistré:', registration);

      // Vérifier les mises à jour
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              setUpdateAvailable(true);
            }
          });
        }
      });

      // Vérifier périodiquement les mises à jour
      setInterval(() => {
        registration.update();
      }, 60000); // Toutes les minutes

    } catch (error) {
      console.error('Erreur lors de l\'enregistrement du Service Worker:', error);
    }
  };

  const installApp = async () => {
    if (!deferredPrompt) return false;

    try {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      
      if (outcome === 'accepted') {
        setDeferredPrompt(null);
        setIsInstallable(false);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Erreur lors de l\'installation:', error);
      return false;
    }
  };

  const updateApp = () => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistration().then((registration) => {
        if (registration?.waiting) {
          registration.waiting.postMessage({ type: 'SKIP_WAITING' });
          window.location.reload();
        }
      });
    }
  };

  const shareContent = async (shareData) => {
    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return true;
      } catch (error) {
        console.error('Erreur lors du partage:', error);
        return false;
      }
    }
    return false;
  };

  return {
    isOffline,
    isInstallable,
    updateAvailable,
    installApp,
    updateApp,
    shareContent,
    isStandalone: window.matchMedia('(display-mode: standalone)').matches
  };
};