import React, { useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  FiBook,
  FiAward,
  FiUsers,
  FiTrendingUp,
  FiArrowRight,
  FiSearch,
  FiStar,
  FiClock,
} from 'react-icons/fi';
import { useAppMode } from '../hooks/useAppMode';
import { useLanguage } from '../hooks/useLanguage';
import { Hero, About, Services, Community, Testimonials, CTAFinal } from '../components/home';
import { useApi } from '../hooks/userApi';
import dataService from '../services/dataService';
import blogService from '../services/blogService';
import '../styles/HomePageApp.css';

const HomePage = () => {
  const { isStandalone } = useAppMode();
  const { language } = useLanguage();

  // Debug log
  console.log('[HomePage] Rendering with isStandalone:', isStandalone);

  const translations = {
    en: {
      title: 'Welcome',
      trending: 'Trending Articles',
      popular: 'Popular Courses',
      community: 'Community Updates',
      searchPlaceholder: 'Search...',
      viewAll: 'View All',
      students: 'Students',
      duration: 'Duration',
      rating: 'Rating',
      enroll: 'Enroll',
      members: 'Active Members',
      discussions: 'Active Discussions',
    },
    fr: {
      title: 'Bienvenue',
      trending: 'Articles Tendance',
      popular: 'Formations Populaires',
      community: 'Mises à jour Communauté',
      searchPlaceholder: 'Rechercher...',
      viewAll: 'Voir tout',
      students: 'Étudiants',
      duration: 'Durée',
      rating: 'Note',
      enroll: 'S\'inscrire',
      members: 'Membres Actifs',
      discussions: 'Discussions Actives',
    },
  };

  const t = translations[language] || translations.en;

  // Mock data for app version
  const trendingArticles = [
    {
      id: 1,
      title: 'React Performance Tips',
      category: 'Development',
      date: '2 hours ago',
      reads: 342,
      image: '⚛️',
    },
    {
      id: 2,
      title: 'Design Systems Best Practices',
      category: 'Design',
      date: '5 hours ago',
      reads: 287,
      image: '🎨',
    },
    {
      id: 3,
      title: 'Python Data Analysis Guide',
      category: 'Data Science',
      date: '1 day ago',
      reads: 521,
      image: '📊',
    },
  ];

  const popularCourses = [
    {
      id: 1,
      title: 'React Mastery',
      instructor: 'Sarah Johnson',
      students: 2450,
      rating: 4.9,
      image: '⚛️',
      price: 99,
    },
    {
      id: 2,
      title: 'Web Design 101',
      instructor: 'Ahmed Hassan',
      students: 1850,
      rating: 4.8,
      image: '🎨',
      price: 79,
    },
    {
      id: 3,
      title: 'Python for Data Science',
      instructor: 'Dr. Lisa Park',
      students: 3200,
      rating: 4.9,
      image: '🐍',
      price: 129,
    },
  ];

  const communityStats = [
    { label: t.members, value: '5,000+', icon: '👥' },
    { label: t.discussions, value: '12,500+', icon: '💬' },
    { label: 'Countries', value: '75+', icon: '🌍' },
  ];
  
  // Version App (Standalone)
  if (isStandalone) {
    return (
      <>
        <Helmet>
          <title>100% ACADEMY</title>
          <meta name="description" content="Your learning hub" />
        </Helmet>

        <main className="app-home-page">
          {/* Header Welcome Section */}
          <section className="app-welcome">
            <h1>{t.title}</h1>
            <p>Continue your learning journey</p>
            <div className="search-bar">
              <FiSearch size={20} />
              <input type="text" placeholder={t.searchPlaceholder} />
            </div>
          </section>

          {/* Quick Stats */}
          <section className="quick-stats">
            {communityStats.map((stat, idx) => (
              <div key={idx} className="stat-box">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </section>

          {/* Popular Courses */}
          <section className="app-section">
            <div className="section-header">
              <h2>{t.popular}</h2>
              <Link to="/formations" className="view-all">
                {t.viewAll} <FiArrowRight size={16} />
              </Link>
            </div>
            <div className="courses-carousel">
              {popularCourses.map((course) => (
                <Link
                  key={course.id}
                  to="/formations"
                  className="course-card"
                >
                  <div className="course-image">{course.image}</div>
                  <div className="course-info">
                    <h3>{course.title}</h3>
                    <p className="course-instructor">{course.instructor}</p>
                    <div className="course-stats">
                      <span>
                        <FiUsers size={14} /> {course.students}
                      </span>
                      <span className="rating">
                        <FiStar size={14} /> {course.rating}
                      </span>
                    </div>
                    <div className="course-footer">
                      <span className="price">${course.price}</span>
                      <button className="enroll-btn">{t.enroll}</button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Community Highlights */}
          <section className="app-section">
            <div className="section-header">
              <h2>{t.community}</h2>
              <Link to="/communaute" className="view-all">
                {t.viewAll} <FiArrowRight size={16} />
              </Link>
            </div>
            <div className="community-highlights">
              <div className="highlight-card">
                <div className="highlight-icon">🏆</div>
                <h3>Top Member</h3>
                <p>Alex Pro - 2,450 points</p>
              </div>
              <div className="highlight-card">
                <div className="highlight-icon">💬</div>
                <h3>Recent Discussion</h3>
                <p>React Performance Tips</p>
              </div>
              <div className="highlight-card">
                <div className="highlight-icon">🎉</div>
                <h3>Upcoming Event</h3>
                <p>Webinar - Dec 5</p>
              </div>
            </div>
          </section>

          {/* Spacing for bottom nav */}
          <div style={{ height: '2rem' }} />
        </main>
      </>
    );
  }

  // Version Navigateur (Original)
  return (
    <>
      <Helmet>
        <title>100% ACADEMY - Apprends, progresse et réussis</title>
        <meta
          name="description"
          content="Rejoins une communauté de 2000+ apprenants passionnés. Cours de soutien, formations en ligne et IA tuteur pour transformer ton parcours académique."
        />
        <meta name="keywords" content="formation, cours en ligne, soutien scolaire, IA tuteur, éducation, Cameroun" />
        <meta property="og:title" content="100% ACADEMY - Apprends, progresse et réussis" />
        <meta property="og:description" content="Rejoins une communauté de 2000+ apprenants passionnés" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Hero />
      <About />
      <Services />
      <Community />
      <Testimonials />
      <CTAFinal />
    </>
  );
};

export default HomePage;