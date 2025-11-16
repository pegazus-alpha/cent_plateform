import React, { useState, useEffect } from 'react';
import './OfflineBanner.css';

const OfflineBanner = () => {
  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
    // Check if API is available
    const checkAPIStatus = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_API_URL || 'https://api.100academy.com/v1', {
          method: 'HEAD',
          mode: 'no-cors', // To avoid CORS issues on HEAD requests
        });
        setIsOffline(false);
      } catch (error) {
        setIsOffline(true);
      }
    };

    checkAPIStatus();

    // Check every 30 seconds
    const interval = setInterval(checkAPIStatus, 30000);

    return () => clearInterval(interval);
  }, []);

  if (!isOffline) return null;

  return (
    <div className="offline-banner">
      <div className="offline-content">
        <span className="offline-icon">⚠️</span>
        <span className="offline-text">
          Mode hors ligne - Les données affichées sont temporaires
        </span>
      </div>
    </div>
  );
};

export default OfflineBanner;