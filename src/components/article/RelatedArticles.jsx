import { ArticleCard } from '../blog';

export const RelatedArticles = ({ articles }) => {
  if (!articles || articles.length === 0) return null;

  return (
    <div className="related-articles container">
      <h2 className="section-title">À lire aussi</h2>
      <div className="articles-grid">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};