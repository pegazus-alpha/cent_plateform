import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import './Home.css';

export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div>
          <h1>Apprends, progresse et réussis avec 100% ACADEMY</h1>
          <p>Rejoins une communauté de 2000+ apprenants passionnés et transforme ton parcours académique</p>
          <div className="cta-buttons">
            <Link to="/formations">
              <Button variant="primary" size="large">
                Découvrir nos formations →
              </Button>
            </Link>
            <Link to="/communaute">
              <Button variant="secondary">
                Rejoindre la communauté
              </Button>
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
            <circle cx="250" cy="250" r="200" fill="rgba(255,255,255,0.1)" />
            <circle cx="250" cy="250" r="150" fill="rgba(255,255,255,0.15)" />
            <text x="250" y="270" textAnchor="middle" fontSize="100" fill="white" fontFamily="Arial">🎓</text>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;