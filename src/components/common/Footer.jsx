import React from 'react';
import { Link } from 'react-router-dom';
import { useAppMode } from '../../hooks/useAppMode';
import { SOCIAL_LINKS, CONTACT } from '../../utils/constants';
import './Footer.css';

const Footer = () => {
  const { isStandalone } = useAppMode();

  // Masquer le footer en mode app téléchargée
  if (isStandalone) {
    return null;
  }

  return (
    <footer>
      <div className="footer-grid container">
        <div className="footer-column">
          <div className="footer-logo">
            <div className="footer-logo-main">100%</div>
            <div className="footer-logo-sub">ACADEMY</div>
          </div>
          <p style={{ marginBottom: '1rem' }}>
            Apprends, progresse et réussis avec la communauté 100% ACADEMY
          </p>
          <div className="social-links">
            <a href={SOCIAL_LINKS.FACEBOOK} target="_blank" rel="noopener noreferrer">
              📘
            </a>
            <a href={SOCIAL_LINKS.INSTAGRAM} target="_blank" rel="noopener noreferrer">
              📷
            </a>
            <a href={SOCIAL_LINKS.LINKEDIN} target="_blank" rel="noopener noreferrer">
              💼
            </a>
            <a href={SOCIAL_LINKS.YOUTUBE} target="_blank" rel="noopener noreferrer">
              📹
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Liens rapides</h3>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/about">À propos</Link></li>
            <li><Link to="/formations">Formations</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Services</h3>
          <ul>
            <li><Link to="/services/soutien">Cours de soutien</Link></li>
            <li><Link to="/services/videos">Packs vidéo</Link></li>
            <li><Link to="/marketplace">Marketplace</Link></li>
            <li><Link to="/challenges">Challenges</Link></li>
            <li><Link to="/ia-tuteur">IA Tuteur</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Contact</h3>
          <ul>
            <li>📧 {CONTACT.EMAIL}</li>
            <li>📱 {CONTACT.PHONE}</li>
            <li>
              <a href={SOCIAL_LINKS.WHATSAPP} target="_blank" rel="noopener noreferrer">
                💬 WhatsApp Support
              </a>
            </li>
            <li>📍 {CONTACT.ADDRESS}</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom container">
        <p>© 2025 100% ACADEMY. Tous droits réservés.</p>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <Link to="/legal">Mentions légales</Link>
          <Link to="/privacy">Politique de confidentialité</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;