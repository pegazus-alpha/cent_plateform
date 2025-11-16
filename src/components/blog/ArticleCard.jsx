import { Link } from 'react-router-dom';
import { CategoryBadge } from './CategoryBadge';
import { formatDate } from '../../utils/helpers';

export const ArticleCard = ({ article }) => {
  return (
    <Link to={`/article/${article.id}`} className="article-card-link">
      <div className="article-card hover-lift animate-on-scroll">
        <div className="article-image">{article.icon || '💡'}</div>
        <div className="article-card-content">
          <CategoryBadge 
            category={article.category} 
            color={article.categoryColor}
          />
          <h3>{article.title}</h3>
          <p className="article-excerpt">{article.excerpt}</p>
          <div className="article-meta">
            <span>👤 {article.author}</span>
            <span>📅 {formatDate(article.publishedAt)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};