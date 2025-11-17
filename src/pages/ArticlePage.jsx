import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  ArticleHero,
  ArticleHeader,
  ArticleBody,
  ShareSection,
  CommentsSection,
  RelatedArticles,
} from '../components/article';
import { useApi } from '../hooks/userApi';
import blogService from '../services/blogService';
import { scrollToTop } from '../utils/helpers';

const ArticlePage = () => {
  const { id } = useParams();

  // Fetch article
  const {
    data: article,
    loading: articleLoading,
    error: articleError,
  } = useApi(() => blogService.getArticleById(id), null, true);

  // Fetch comments
  const {
    data: commentsData,
    loading: commentsLoading,
    execute: fetchComments,
  } = useApi(() => blogService.getComments(id), null, true);

  // Fetch related articles
  const { data: relatedArticles } = useApi(
    () => blogService.getRelatedArticles(id),
    null,
    true
  );

  // Scroll to top on mount
  useEffect(() => {
    scrollToTop();
  }, [id]);

  const handleAddComment = async (articleId, commentData) => {
    await blogService.addComment(articleId, commentData);
    // Refetch comments
    await fetchComments();
  };

  const handleLikeArticle = async () => {
    await blogService.likeArticle(id);
  };

  if (articleLoading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Chargement de l'article...</p>
      </div>
    );
  }

  if (articleError || !article) {
    return (
      <div className="error-container">
        <div className="error-icon">😕</div>
        <h2>Article non trouvé</h2>
        <p>
          Désolé, cet article n'existe pas ou a été supprimé.
        </p>
        <a href="/blog" className="btn-back-to-blog">
          ← Retour au blog
        </a>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{article.title} - 100% ACADEMY Blog</title>
        <meta name="description" content={article.excerpt} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:description" content={article.excerpt} />
        <meta name="author" content={article.author} />
        <meta property="article:published_time" content={article.publishedAt} />
        <meta property="article:author" content={article.author} />
      </Helmet>

      <ArticleHero icon={article.icon} />
      <ArticleHeader article={article} />
      <ArticleBody content={article.content} />
      <ShareSection title={article.title} url={window.location.href} />
      <CommentsSection
        articleId={id}
        comments={commentsData?.comments}
        onAddComment={handleAddComment}
        loading={commentsLoading}
      />
      <RelatedArticles articles={relatedArticles} />
    </>
  );
};

export default ArticlePage;