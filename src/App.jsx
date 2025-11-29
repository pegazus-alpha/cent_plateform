import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './hooks/useTheme.jsx';
import Header from './components/common/Header';
import BottomNavigation from './components/common/BottomNavigation';
import Footer from './components/common/Footer';
import OfflineBanner from './components/common/OfflineBanner';
import PWAPrompt from './components/common/PWAPrompt';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import ArticlePage from './pages/ArticlePage';
import ContactPage from './pages/ContactPage';
import CommunityPage from './pages/CommunityPage';
import FormationsPage from './pages/FormationsPage';
import './styles/variables.css';
import './styles/animations.css';
import './styles/dark-mode.css';
import './App.css';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <LanguageProvider>
          <Router>
            <div className="App">
              <Header />
              <OfflineBanner />
              <PWAPrompt />
              <main>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/article/:id" element={<ArticlePage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/communaute" element={<CommunityPage />} />
                  <Route path="/formations" element={<FormationsPage />} />
                  {/* Add more routes as needed */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
              <BottomNavigation />
            </div>
          </Router>
        </LanguageProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

// 404 Page Component
const NotFound = () => (
  <div style={{
    minHeight: '60vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4rem 2rem',
    textAlign: 'center',
    color: 'var(--text-primary)',
    backgroundColor: 'var(--bg-primary)',
  }}>
    <h1 style={{ fontSize: '4rem', color: 'var(--primary-green)', margin: '0' }}>404</h1>
    <h2 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>Page non trouvée</h2>
    <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
      La page que vous recherchez n'existe pas.
    </p>
    <a
      href="/"
      style={{
        padding: '1rem 2rem',
        background: 'var(--primary-green)',
        color: 'white',
        borderRadius: '8px',
        textDecoration: 'none',
        fontWeight: '600',
        transition: 'all 0.3s ease',
      }}
    >
      Retour à l'accueil
    </a>
  </div>
);

export default App;