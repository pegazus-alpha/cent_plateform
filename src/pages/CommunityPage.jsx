import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  FiUsers,
  FiMessageCircle,
  FiTrendingUp,
  FiAward,
  FiMapPin,
  FiFacebook,
  FiTwitter,
  FiLinkedin,
  FiInstagram,
} from 'react-icons/fi';
import { useLanguage } from '../hooks/useLanguage';
import '../styles/Community.css';

const CommunityPage = () => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState('members');

  const translations = {
    en: {
      title: 'Our Community',
      subtitle: 'Join thousands of learners worldwide',
      description: 'Be part of a vibrant community of professionals and students learning together.',
      sections: {
        members: 'Members',
        discussions: 'Discussions',
        events: 'Events',
        leaderboard: 'Leaderboard',
      },
      stats: {
        members: 'Active Members',
        discussions: 'Discussions',
        countries: 'Countries',
        achievements: 'Achievements',
      },
      membersCount: '5,000+',
      discussionsCount: '12,500+',
      countriesCount: '75+',
      achievementsCount: '500+',
      featured: {
        title: 'Featured Members',
        viewAll: 'View All Members',
      },
      discussions: {
        title: 'Recent Discussions',
        viewAll: 'View All Discussions',
      },
      events: {
        title: 'Upcoming Events',
        viewAll: 'View All Events',
        webinar: 'Webinar',
        workshop: 'Workshop',
        meetup: 'Meetup',
      },
      leaderboard: {
        title: 'Top Contributors',
        rank: 'Rank',
        name: 'Name',
        points: 'Points',
        posts: 'Posts',
      },
      join: 'Join Community',
      cta: {
        title: 'Ready to Connect?',
        subtitle: 'Engage with our community and grow together',
        button: 'Get Started',
      },
    },
    fr: {
      title: 'Notre Communauté',
      subtitle: 'Rejoignez des milliers d\'apprenants à travers le monde',
      description: 'Faites partie d\'une communauté dynamique de professionnels et d\'étudiants apprenant ensemble.',
      sections: {
        members: 'Membres',
        discussions: 'Discussions',
        events: 'Événements',
        leaderboard: 'Classement',
      },
      stats: {
        members: 'Membres Actifs',
        discussions: 'Discussions',
        countries: 'Pays',
        achievements: 'Réalisations',
      },
      membersCount: '5 000+',
      discussionsCount: '12 500+',
      countriesCount: '75+',
      achievementsCount: '500+',
      featured: {
        title: 'Membres en Vedette',
        viewAll: 'Voir tous les membres',
      },
      discussions: {
        title: 'Discussions Récentes',
        viewAll: 'Voir toutes les discussions',
      },
      events: {
        title: 'Événements à Venir',
        viewAll: 'Voir tous les événements',
        webinar: 'Webinaire',
        workshop: 'Atelier',
        meetup: 'Rencontre',
      },
      leaderboard: {
        title: 'Top Contributeurs',
        rank: 'Rang',
        name: 'Nom',
        points: 'Points',
        posts: 'Messages',
      },
      join: 'Rejoindre la Communauté',
      cta: {
        title: 'Prêt à Vous Connecter?',
        subtitle: 'Engagez-vous avec notre communauté et grandissez ensemble',
        button: 'Commencer',
      },
    },
  };

  const t = translations[language] || translations.en;

  const members = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Lead Developer',
      avatar: '👩‍💻',
      badge: 'Expert',
      country: 'USA',
    },
    {
      id: 2,
      name: 'Ahmed Hassan',
      role: 'UI/UX Designer',
      avatar: '🎨',
      badge: 'Pro',
      country: 'Egypt',
    },
    {
      id: 3,
      name: 'Maria Garcia',
      role: 'Data Scientist',
      avatar: '📊',
      badge: 'Expert',
      country: 'Spain',
    },
    {
      id: 4,
      name: 'James Chen',
      role: 'Full Stack Dev',
      avatar: '💻',
      badge: 'Pro',
      country: 'Taiwan',
    },
  ];

  const recentDiscussions = [
    {
      id: 1,
      title: 'Best practices for React optimization',
      author: 'Emma Wilson',
      replies: 42,
      views: 1250,
      category: 'Development',
      date: '2 hours ago',
    },
    {
      id: 2,
      title: 'How to start with Machine Learning',
      author: 'Alex Kumar',
      replies: 38,
      views: 980,
      category: 'AI/ML',
      date: '4 hours ago',
    },
    {
      id: 3,
      title: 'Free design tools for beginners',
      author: 'Lisa Park',
      replies: 55,
      views: 1500,
      category: 'Design',
      date: '6 hours ago',
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'React Advanced Patterns',
      type: 'webinar',
      date: 'Dec 5, 2025',
      time: '2:00 PM UTC',
      attendees: 320,
      speaker: 'John Developer',
    },
    {
      id: 2,
      title: 'Web Design Workshop',
      type: 'workshop',
      date: 'Dec 10, 2025',
      time: '3:30 PM UTC',
      attendees: 150,
      speaker: 'Design Master',
    },
    {
      id: 3,
      title: 'Community Meetup',
      type: 'meetup',
      date: 'Dec 15, 2025',
      time: '4:00 PM UTC',
      attendees: 200,
      speaker: 'Community Team',
    },
  ];

  const topContributors = [
    { rank: 1, name: 'Alex Pro', points: 2450, posts: 145, badge: '⭐' },
    { rank: 2, name: 'Maya Expert', points: 2180, posts: 132, badge: '⭐' },
    { rank: 3, name: 'Jordan Dev', points: 1950, posts: 118, badge: '🏆' },
    { rank: 4, name: 'Casey Tech', points: 1720, posts: 104, badge: '🎖️' },
    { rank: 5, name: 'Riley Code', points: 1580, posts: 95, badge: '🎖️' },
  ];

  return (
    <>
      <Helmet>
        <title>{t.title} - 100% Academy</title>
        <meta name="description" content={t.description} />
      </Helmet>

      <main className="community-page">
        {/* Hero Section */}
        <section className="community-hero">
          <div className="hero-content">
            <h1>{t.title}</h1>
            <p className="hero-subtitle">{t.subtitle}</p>
            <p className="hero-description">{t.description}</p>
            <button className="btn btn-primary btn-large">{t.join}</button>
          </div>
        </section>

        {/* Stats Section */}
        <section className="community-stats">
          <div className="stats-container">
            <div className="stat-card">
              <FiUsers className="stat-icon" />
              <div className="stat-content">
                <h3>{t.membersCount}</h3>
                <p>{t.stats.members}</p>
              </div>
            </div>
            <div className="stat-card">
              <FiMessageCircle className="stat-icon" />
              <div className="stat-content">
                <h3>{t.discussionsCount}</h3>
                <p>{t.stats.discussions}</p>
              </div>
            </div>
            <div className="stat-card">
              <FiMapPin className="stat-icon" />
              <div className="stat-content">
                <h3>{t.countriesCount}</h3>
                <p>{t.stats.countries}</p>
              </div>
            </div>
            <div className="stat-card">
              <FiAward className="stat-icon" />
              <div className="stat-content">
                <h3>{t.achievementsCount}</h3>
                <p>{t.stats.achievements}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Members Section */}
        <section className="community-section featured-members">
          <div className="section-header">
            <h2>{t.featured.title}</h2>
            <a href="#" className="view-all">{t.featured.viewAll} →</a>
          </div>
          <div className="members-grid">
            {members.map((member) => (
              <div key={member.id} className="member-card">
                <div className="member-avatar">{member.avatar}</div>
                <h3>{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <span className="member-badge">{member.badge}</span>
                <div className="member-location">
                  <FiMapPin size={14} />
                  <span>{member.country}</span>
                </div>
                <button className="btn btn-small btn-outline">Follow</button>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Discussions Section */}
        <section className="community-section recent-discussions">
          <div className="section-header">
            <h2>{t.discussions.title}</h2>
            <a href="#" className="view-all">{t.discussions.viewAll} →</a>
          </div>
          <div className="discussions-list">
            {recentDiscussions.map((discussion) => (
              <div key={discussion.id} className="discussion-card">
                <div className="discussion-header">
                  <h3>{discussion.title}</h3>
                  <span className="category-badge">{discussion.category}</span>
                </div>
                <p className="discussion-author">by {discussion.author}</p>
                <p className="discussion-time">{discussion.date}</p>
                <div className="discussion-stats">
                  <span className="stat-item">
                    <FiMessageCircle size={16} />
                    {discussion.replies} replies
                  </span>
                  <span className="stat-item">
                    <FiTrendingUp size={16} />
                    {discussion.views} views
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Upcoming Events Section */}
        <section className="community-section upcoming-events">
          <div className="section-header">
            <h2>{t.events.title}</h2>
            <a href="#" className="view-all">{t.events.viewAll} →</a>
          </div>
          <div className="events-grid">
            {upcomingEvents.map((event) => (
              <div key={event.id} className={`event-card event-${event.type}`}>
                <div className="event-type-badge">{t.events[event.type]}</div>
                <h3>{event.title}</h3>
                <div className="event-details">
                  <p><strong>Date:</strong> {event.date}</p>
                  <p><strong>Time:</strong> {event.time}</p>
                  <p><strong>Speaker:</strong> {event.speaker}</p>
                  <p className="event-attendees">
                    <FiUsers size={14} />
                    {event.attendees} attendees
                  </p>
                </div>
                <button className="btn btn-small btn-primary">Register</button>
              </div>
            ))}
          </div>
        </section>

        {/* Top Contributors Leaderboard */}
        <section className="community-section leaderboard">
          <div className="section-header">
            <h2>{t.leaderboard.title}</h2>
          </div>
          <div className="leaderboard-table">
            <div className="table-header">
              <div>{t.leaderboard.rank}</div>
              <div>{t.leaderboard.name}</div>
              <div>{t.leaderboard.points}</div>
              <div>{t.leaderboard.posts}</div>
            </div>
            {topContributors.map((contributor) => (
              <div key={contributor.rank} className="table-row">
                <div className="rank">
                  <span className="rank-badge">{contributor.badge}</span>
                  <span>#{contributor.rank}</span>
                </div>
                <div className="name">{contributor.name}</div>
                <div className="points">{contributor.points}</div>
                <div className="posts">{contributor.posts}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Social Section */}
        <section className="community-section social-section">
          <div className="section-header">
            <h2>Follow Us</h2>
          </div>
          <div className="social-links">
            <a href="#" className="social-link facebook" title="Facebook">
              <FiFacebook size={24} />
            </a>
            <a href="#" className="social-link twitter" title="Twitter">
              <FiTwitter size={24} />
            </a>
            <a href="#" className="social-link linkedin" title="LinkedIn">
              <FiLinkedin size={24} />
            </a>
            <a href="#" className="social-link instagram" title="Instagram">
              <FiInstagram size={24} />
            </a>
          </div>
        </section>

        {/* CTA Section */}
        <section className="community-cta">
          <h2>{t.cta.title}</h2>
          <p>{t.cta.subtitle}</p>
          <button className="btn btn-primary btn-large">{t.cta.button}</button>
        </section>
      </main>
    </>
  );
};

export default CommunityPage;
