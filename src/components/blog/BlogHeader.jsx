import React, { useState } from 'react';
import './Blog.css';

export const BlogHeader = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchTerm);
    }
  };

  return (
    <div className="blog-header">
      <h1>Le Blog 100% ACADEMY</h1>
      <p style={{ fontSize: '1.2rem', color: 'var(--gray-medium)' }}>
        Conseils, actualités et ressources pour réussir
      </p>
      <form className="blog-search" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Rechercher un article..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">🔍</button>
      </form>
    </div>
  );
};