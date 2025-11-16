import { ArticleCard } from './ArticleCard';

export const ArticlesGrid = ({ articles, loading }) => {
  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Chargement des articles...</p>
      </div>
    );
  }

  if (!articles || articles.length === 0) {
    return (
      <div className="no-articles">
        <p>Aucun article trouvé.</p>
      </div>
    );
  }

  return (
    <div className="articles-grid">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
};