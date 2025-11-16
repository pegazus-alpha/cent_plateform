import React from 'react';
import { Link } from 'react-router-dom';
import { SOCIAL_LINKS, CONTACT } from '../../utils/constants';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-grid container">
        <div className="footer-column">
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 100'%3E%3Ctext x='10' y='60' font-family='Poppins, sans-serif' font-size='40' font-weight='bold' fill='white'%3E100%25%3C/text%3E%3Ctext x='10' y='85' font-family='Poppins, sans-serif' font-size='16' fill='%23cbd5e0'%3EACADEMY%3C/text%3E%3C/svg%3E"
            alt="100% ACADEMY"
            style={{ height: '50px', marginBottom: '1rem' }}
          />
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