import { CategoryBadge } from '../blog';
import { formatDate, formatNumber, calculateReadingTime } from '../../utils/helpers';

export const ArticleHeader = ({ article }) => {
  if (!article) return null;

  const readingTime = calculateReadingTime(article.content || '');

  return (
    <div className="article-header container">
      <CategoryBadge category={article.category} />
      <h1>{article.title}</h1>
      <div className="article-meta">
        <span>👤 {article.author}</span>
        <span>📅 {formatDate(article.publishedAt)}</span>
        <span>⏱️ {readingTime} min de lecture</span>
        <span>👁️ {formatNumber(article.views)} vues</span>
      </div>
    </div>
  );
};