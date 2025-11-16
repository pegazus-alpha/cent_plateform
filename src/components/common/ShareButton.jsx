import React from 'react';
import { usePWA } from '../../hooks/usePWA';
import './ShareButton.css';

const ShareButton = ({ url, title, text }) => {
  const { shareContent } = usePWA();

  const handleShare = async () => {
    const shareData = {
      title: title || '100% ACADEMY',
      text: text || 'Découvrez 100% Academy - Plateforme d\'apprentissage avec IA',
      url: url || window.location.href
    };

    const success = await shareContent(shareData);
    
    if (!success) {
      // Fallback: copier dans le presse-papier
      try {
        await navigator.clipboard.writeText(shareData.url);
        alert('Lien copié dans le presse-papier !');
      } catch (error) {
        console.error('Erreur lors de la copie:', error);
      }
    }
  };

  return (
    <button 
      className="share-button" 
      onClick={handleShare}
      title="Partager cette page"
      aria-label="Partager"
    >
      📤
    </button>
  );
};

export default ShareButton;