import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from '../../utils/helpers';

export const BlogSidebar = ({ categories, tags, recentArticles, onCategoryClick, onNewsletterSubscribe }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (onNewsletterSubscribe) {
        await onNewsletterSubscribe(email);
        setEmail('');
        alert('Abonnement réussi !');
      }
    } catch (error) {
      alert('Erreur lors de l\'abonnement');
    } finally {
      setLoading(false);
    }
  };

  return (
    <aside className="blog-sidebar">
      {/* Categories */}
      {categories && categories.length > 0 && (
        <div className="sidebar-widget">
          <h3>Catégories</h3>
          <ul className="categories-list">
            {categories.map((category, index) => (
              <li
                key={index}
                onClick={() => onCategoryClick && onCategoryClick(category.slug)}
              >
                {category.icon} {category.name} <span>({category.count})</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Recent Articles */}
      {recentArticles && recentArticles.length > 0 && (
        <div className="sidebar-widget">
          <h3>Articles récents</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {recentArticles.map((article, index) => (
              <Link
                key={index}
                to={`/article/${article.id}`}
                style={{ display: 'flex', gap: '1rem', cursor: 'pointer' }}
              >
                <div className="recent-article-image">
                  {article.icon || '📝'}
                </div>
                <div>
                  <h4 className="recent-article-title">{article.title}</h4>
                  <p className="recent-article-date">{formatDate(article.publishedAt)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Tags */}
      {tags && tags.length > 0 && (
        <div className="sidebar-widget">
          <h3>Tags populaires</h3>
          <div className="tags-cloud">
            {tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag.name}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Newsletter */}
      <div className="sidebar-widget newsletter-widget">
        <h3>📧 Reste informé</h3>
        <p style={{ fontSize: '0.9rem', marginBottom: '1rem', opacity: 0.95 }}>
          Reçois nos meilleurs articles chaque semaine
        </p>
        <form onSubmit={handleNewsletterSubmit}>
          <input
            type="email"
            placeholder="Ton email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Envoi...' : 'S\'abonner'}
          </button>
        </form>
      </div>
    </aside>
  );
};
