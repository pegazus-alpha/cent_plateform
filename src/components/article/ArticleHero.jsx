import React from 'react';
import './Article.css';

export const ArticleHero = ({ icon }) => {
  return (
    <div className="article-hero">
      {icon || '📰'}
    </div>
  );
};