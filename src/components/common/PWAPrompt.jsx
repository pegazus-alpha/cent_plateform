import React from 'react';
import { usePWA } from '../../hooks/usePWA';
import './PWAPrompt.css';

const PWAPrompt = () => {
  const { 
    isOffline, 
    isInstallable, 
    updateAvailable, 
    installApp, 
    updateApp 
  } = usePWA();

  if (isOffline) {
    return (
      <div className="pwa-notification offline">
        <span>📱 Vous êtes hors ligne</span>
        <p>Certaines fonctionnalités peuvent être limitées</p>
      </div>
    );
  }

  if (updateAvailable) {
    return (
      <div className="pwa-notification update">
        <span>🔄 Mise à jour disponible</span>
        <button onClick={updateApp} className="pwa-btn">
          Mettre à jour
        </button>
      </div>
    );
  }

  if (isInstallable) {
    return (
      <div className="pwa-notification install">
        <span>📱 Installer l'application</span>
        <p>Ajoutez 100% Academy à votre écran d'accueil</p>
        <button onClick={installApp} className="pwa-btn">
          Installer
        </button>
      </div>
    );
  }

  return null;
};

export default PWAPrompt;