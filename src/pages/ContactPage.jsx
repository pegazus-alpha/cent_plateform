import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { CONTACT, SOCIAL_LINKS } from '../utils/constants';
import './Contact.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact - 100% ACADEMY</title>
        <meta name="description" content="Contactez 100% ACADEMY pour toute question, suggestion ou partenariat" />
      </Helmet>

      <div className="contact-page">
        {/* Hero Section */}
        <section className="contact-hero">
          <div className="contact-hero-content">
            <h1>Nous sommes à votre écoute</h1>
            <p>Des questions ? Besoin d'aide ? Contactez-nous et nous vous répondrons au plus vite</p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="contact-info">
          <div className="info-card">
            <div className="info-icon">
              <FaEnvelope />
            </div>
            <h3>Email</h3>
            <p>{CONTACT.EMAIL}</p>
            <a href={`mailto:${CONTACT.EMAIL}`} className="info-link">Envoyer un email</a>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <FaPhone />
            </div>
            <h3>Téléphone</h3>
            <p>{CONTACT.PHONE}</p>
            <a href={`tel:${CONTACT.PHONE}`} className="info-link">Appeler</a>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <FaMapMarkerAlt />
            </div>
            <h3>Localisation</h3>
            <p>{CONTACT.ADDRESS}</p>
            <a href="#map" className="info-link">Voir sur la carte</a>
          </div>
        </section>

        {/* Contact Form */}
        <section className="contact-form-section">
          <div className="form-container">
            <h2>Envoyez-nous un message</h2>
            <p className="form-subtitle">Remplissez le formulaire et nous vous répondrons dans les 24 heures</p>

            {submitted && (
              <div className="success-message">
                ✓ Votre message a été envoyé avec succès !
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Nom complet</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Votre nom"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="votre.email@exemple.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Sujet</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Objet de votre message"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Votre message..."
                  rows="6"
                  required
                />
              </div>

              <button 
                type="submit" 
                className="submit-btn"
                disabled={loading}
              >
                {loading ? 'Envoi en cours...' : 'Envoyer le message'}
              </button>
            </form>
          </div>
        </section>

        {/* Social Links */}
        <section className="contact-social">
          <h2>Suivez-nous sur les réseaux</h2>
          <div className="social-links">
            <a href={SOCIAL_LINKS.FACEBOOK} target="_blank" rel="noopener noreferrer" className="social-btn facebook">
              <FaFacebook />
            </a>
            <a href={SOCIAL_LINKS.INSTAGRAM} target="_blank" rel="noopener noreferrer" className="social-btn instagram">
              <FaInstagram />
            </a>
            <a href={SOCIAL_LINKS.LINKEDIN} target="_blank" rel="noopener noreferrer" className="social-btn linkedin">
              <FaLinkedin />
            </a>
            <a href={SOCIAL_LINKS.YOUTUBE} target="_blank" rel="noopener noreferrer" className="social-btn youtube">
              <FaYoutube />
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;
