import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  FiBook,
  FiUsers,
  FiClock,
  FiStar,
  FiFilter,
  FiSearch,
  FiCheckCircle,
  FiArrowRight,
  FiTarget,
  FiAward,
} from 'react-icons/fi';
import { useLanguage } from '../hooks/useLanguage';
import '../styles/Formations.css';

const FormationsPage = () => {
  const { language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const translations = {
    en: {
      title: 'Formations',
      subtitle: 'Master new skills with our comprehensive courses',
      description: 'Choose from our curated selection of professional development courses.',
      search: 'Search formations...',
      filterLevel: 'Level',
      filterCategory: 'Category',
      all: 'All',
      beginner: 'Beginner',
      intermediate: 'Intermediate',
      advanced: 'Advanced',
      categories: {
        web: 'Web Development',
        mobile: 'Mobile Development',
        design: 'UI/UX Design',
        data: 'Data Science',
        devops: 'DevOps',
      },
      enroll: 'Enroll Now',
      students: 'Students',
      duration: 'Duration',
      level: 'Level',
      rating: 'Rating',
      instructor: 'Instructor',
      featured: 'Featured Courses',
      popular: 'Popular Courses',
      new: 'New Courses',
      whatYouWillLearn: 'What You\'ll Learn',
      requirements: 'Requirements',
      cta: {
        title: 'Ready to Learn?',
        subtitle: 'Start your journey to mastery today',
        button: 'Explore All Courses',
      },
    },
    fr: {
      title: 'Formations',
      subtitle: 'Maîtrisez de nouvelles compétences avec nos cours complets',
      description: 'Choisissez parmi notre sélection soignée de cours de développement professionnel.',
      search: 'Rechercher formations...',
      filterLevel: 'Niveau',
      filterCategory: 'Catégorie',
      all: 'Tous',
      beginner: 'Débutant',
      intermediate: 'Intermédiaire',
      advanced: 'Avancé',
      categories: {
        web: 'Développement Web',
        mobile: 'Développement Mobile',
        design: 'Design UI/UX',
        data: 'Science des Données',
        devops: 'DevOps',
      },
      enroll: 'S\'inscrire',
      students: 'Étudiants',
      duration: 'Durée',
      level: 'Niveau',
      rating: 'Note',
      instructor: 'Instructeur',
      featured: 'Formations en Vedette',
      popular: 'Formations Populaires',
      new: 'Nouvelles Formations',
      whatYouWillLearn: 'Ce que vous apprendrez',
      requirements: 'Prérequis',
      cta: {
        title: 'Prêt à Apprendre?',
        subtitle: 'Commencez votre parcours vers la maîtrise aujourd\'hui',
        button: 'Explorer tous les cours',
      },
    },
  };

  const t = translations[language] || translations.en;

  const formations = [
    {
      id: 1,
      title: 'React Mastery: From Basics to Advanced',
      category: 'web',
      level: 'intermediate',
      instructor: 'Sarah Johnson',
      rating: 4.9,
      students: 2450,
      duration: '40 hours',
      price: 99,
      image: '⚛️',
      featured: true,
      description: 'Learn React from scratch and become a master developer.',
      learnings: [
        'React fundamentals and hooks',
        'State management with Redux',
        'Performance optimization',
        'Real-world project building',
      ],
    },
    {
      id: 2,
      title: 'Web Design for Beginners',
      category: 'design',
      level: 'beginner',
      instructor: 'Ahmed Hassan',
      rating: 4.8,
      students: 1850,
      duration: '30 hours',
      price: 79,
      image: '🎨',
      featured: true,
      description: 'Master the fundamentals of modern web design.',
      learnings: [
        'Design principles',
        'Color theory',
        'Typography',
        'UI/UX best practices',
      ],
    },
    {
      id: 3,
      title: 'Python for Data Science',
      category: 'data',
      level: 'intermediate',
      instructor: 'Dr. Lisa Park',
      rating: 4.9,
      students: 3200,
      duration: '50 hours',
      price: 129,
      image: '🐍',
      featured: true,
      description: 'Become a data scientist using Python and powerful libraries.',
      learnings: [
        'Pandas and NumPy',
        'Data visualization',
        'Machine learning basics',
        'Real datasets analysis',
      ],
    },
    {
      id: 4,
      title: 'Vue.js Complete Guide',
      category: 'web',
      level: 'beginner',
      instructor: 'John Chen',
      rating: 4.7,
      students: 1650,
      duration: '35 hours',
      price: 89,
      image: '💚',
      description: 'Learn Vue.js and build amazing web applications.',
      learnings: [
        'Vue 3 fundamentals',
        'Composition API',
        'State management',
        'Routing and navigation',
      ],
    },
    {
      id: 5,
      title: 'Mobile Development with Flutter',
      category: 'mobile',
      level: 'intermediate',
      instructor: 'Emma Williams',
      rating: 4.8,
      students: 2100,
      duration: '45 hours',
      price: 119,
      image: '📱',
      description: 'Build cross-platform mobile apps with Flutter.',
      learnings: [
        'Flutter framework basics',
        'Widget development',
        'State management',
        'App deployment',
      ],
    },
    {
      id: 6,
      title: 'Kubernetes & Docker Mastery',
      category: 'devops',
      level: 'advanced',
      instructor: 'Mike Rodriguez',
      rating: 4.6,
      students: 980,
      duration: '55 hours',
      price: 149,
      image: '🐳',
      description: 'Master containerization and orchestration.',
      learnings: [
        'Docker fundamentals',
        'Container orchestration',
        'Deployment strategies',
        'Kubernetes clusters',
      ],
    },
    {
      id: 7,
      title: 'TypeScript Advanced Patterns',
      category: 'web',
      level: 'advanced',
      instructor: 'Sarah Johnson',
      rating: 4.9,
      students: 1400,
      duration: '38 hours',
      price: 109,
      image: '📘',
      description: 'Advanced TypeScript patterns for professional development.',
      learnings: [
        'Advanced types',
        'Generics mastery',
        'Decorators',
        'Design patterns',
      ],
    },
    {
      id: 8,
      title: 'Figma for UI Designers',
      category: 'design',
      level: 'beginner',
      instructor: 'Maya Patel',
      rating: 4.8,
      students: 2600,
      duration: '28 hours',
      price: 69,
      image: '🎭',
      description: 'Create stunning designs with Figma.',
      learnings: [
        'Interface design',
        'Prototyping',
        'Component systems',
        'Design handoff',
      ],
    },
  ];

  const filteredFormations = formations.filter((formation) => {
    const matchesSearch = formation.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLevel = selectedLevel === 'all' || formation.level === selectedLevel;
    const matchesCategory = selectedCategory === 'all' || formation.category === selectedCategory;
    return matchesSearch && matchesLevel && matchesCategory;
  });

  const featuredFormations = formations.filter((f) => f.featured);

  return (
    <>
      <Helmet>
        <title>{t.title} - 100% Academy</title>
        <meta name="description" content={t.description} />
      </Helmet>

      <main className="formations-page">
        {/* Hero Section */}
        <section className="formations-hero">
          <div className="hero-content">
            <h1>{t.title}</h1>
            <p className="hero-subtitle">{t.subtitle}</p>
            <p className="hero-description">{t.description}</p>
          </div>
        </section>

        {/* Featured Section */}
        <section className="featured-section">
          <div className="section-container">
            <h2>{t.featured}</h2>
            <div className="featured-grid">
              {featuredFormations.slice(0, 3).map((formation) => (
                <div key={formation.id} className="featured-card">
                  <div className="formation-image">{formation.image}</div>
                  <div className="formation-badge">Featured</div>
                  <h3>{formation.title}</h3>
                  <p className="formation-instructor">by {formation.instructor}</p>
                  <div className="formation-meta">
                    <span className="meta-item">
                      <FiUsers size={16} />
                      {formation.students}
                    </span>
                    <span className="meta-item">
                      <FiClock size={16} />
                      {formation.duration}
                    </span>
                  </div>
                  <div className="formation-rating">
                    <FiStar size={16} />
                    <span>{formation.rating}</span>
                  </div>
                  <button className="btn btn-primary btn-small">{t.enroll}</button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="search-filter-section">
          <div className="section-container">
            <div className="search-box">
              <FiSearch className="search-icon" />
              <input
                type="text"
                placeholder={t.search}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="filters">
              <div className="filter-group">
                <label>{t.filterLevel}</label>
                <select value={selectedLevel} onChange={(e) => setSelectedLevel(e.target.value)}>
                  <option value="all">{t.all}</option>
                  <option value="beginner">{t.beginner}</option>
                  <option value="intermediate">{t.intermediate}</option>
                  <option value="advanced">{t.advanced}</option>
                </select>
              </div>

              <div className="filter-group">
                <label>{t.filterCategory}</label>
                <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                  <option value="all">{t.all}</option>
                  <option value="web">{t.categories.web}</option>
                  <option value="mobile">{t.categories.mobile}</option>
                  <option value="design">{t.categories.design}</option>
                  <option value="data">{t.categories.data}</option>
                  <option value="devops">{t.categories.devops}</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* All Formations Section */}
        <section className="formations-grid-section">
          <div className="section-container">
            <h2>
              {t.popular}
              <span className="results-count">({filteredFormations.length})</span>
            </h2>
            <div className="formations-grid">
              {filteredFormations.map((formation) => (
                <div key={formation.id} className="formation-card">
                  <div className="formation-image">{formation.image}</div>
                  <div className="card-content">
                    <h3>{formation.title}</h3>
                    <p className="formation-instructor">{formation.instructor}</p>
                    
                    <div className="formation-details">
                      <span className={`level-badge ${formation.level}`}>
                        {formation.level === 'beginner' && t.beginner}
                        {formation.level === 'intermediate' && t.intermediate}
                        {formation.level === 'advanced' && t.advanced}
                      </span>
                      <span className="category-badge">
                        {t.categories[formation.category]}
                      </span>
                    </div>

                    <div className="formation-meta-row">
                      <span>
                        <FiUsers size={14} />
                        {formation.students}
                      </span>
                      <span>
                        <FiClock size={14} />
                        {formation.duration}
                      </span>
                      <span className="rating">
                        <FiStar size={14} />
                        {formation.rating}
                      </span>
                    </div>

                    <div className="formation-footer">
                      <span className="price">${formation.price}</span>
                      <button className="btn btn-small btn-outline">{t.enroll}</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredFormations.length === 0 && (
              <div className="no-results">
                <FiSearch size={48} />
                <p>No formations found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="formations-cta">
          <h2>{t.cta.title}</h2>
          <p>{t.cta.subtitle}</p>
          <button className="btn btn-primary btn-large">{t.cta.button}</button>
        </section>
      </main>
    </>
  );
};

export default FormationsPage;
