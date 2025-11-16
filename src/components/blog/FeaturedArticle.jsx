import { Link } from 'react-router-dom';
import { formatDate, formatNumber } from '../../utils/helpers';
import Button from '../common/Button';

export const FeaturedArticle = ({ article }) => {
  if (!article) return null;

  return (
    <div className="featured-article">
      <div className="featured-image">{article.icon || '📰'}</div>
      <div className="featured-content">
        <CategoryBadge category={article.category} />
        <h2>{article.title}</h2>
        <p className="article-excerpt">{article.excerpt}</p>
        <div className="article-meta">
          <span>👤 {article.author}</span>
          <span>📅 {formatDate(article.publishedAt)}</span>
          <span>💬 {formatNumber(article.commentsCount)} commentaires</span>
          <span>❤️ {formatNumber(article.likesCount)} likes</span>
        </div>
        <Link to={`/article/${article.id}`}>
          <Button variant="primary">Lire l'article →</Button>
        </Link>
      </div>
    </div>
  );
};
