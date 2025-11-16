import React, { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  BlogHeader,
  FeaturedArticle,
  ArticlesGrid,
  BlogSidebar,
} from '../components/blog';
import { useApi } from '../hooks/userApi';
import blogService from '../services/blogService';
import dataService from '../services/dataService';

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch featured article
  const getFeaturedArticle = useCallback(() => {
    return blogService.getFeaturedArticle();
  }, []);
  
  const { data: featuredArticle, loading: featuredLoading } = useApi(
    getFeaturedArticle,
    null,
    true
  );

  // Fetch articles
  const getArticles = useCallback(() => {
    return blogService.getArticles({
      page: currentPage,
      category: selectedCategory,
      search: searchQuery,
    });
  }, [currentPage, selectedCategory, searchQuery]);
  
  const {
    data: articlesData,
    loading: articlesLoading,
    execute: fetchArticles,
  } = useApi(
    getArticles,
    null,
    false
  );

  // Fetch categories
  const getCategories = useCallback(() => {
    return blogService.getCategories();
  }, []);
  
  const { data: categories } = useApi(
    getCategories,
    null,
    true
  );

  // Fetch tags
  const getTags = useCallback(() => {
    return blogService.getTags();
  }, []);
  
  const { data: tags } = useApi(
    getTags,
    null,
    true
  );

  // Fetch recent articles for sidebar
  const getRecentArticles = useCallback(() => {
    return blogService.getArticles({ page: 1, limit: 3 });
  }, []);
  
  const { data: recentArticles } = useApi(
    getRecentArticles,
    null,
    true
  );

  // Refetch articles when filters change
  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  // Setup scroll animations
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [articlesData]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleCategoryClick = (categorySlug) => {
    setSelectedCategory(categorySlug);
    setCurrentPage(1);
  };

  const handleNewsletterSubscribe = async (email) => {
    await dataService.subscribeNewsletter({ email });
  };

  return (
    <>
      <Helmet>
        <title>Blog - 100% ACADEMY</title>
        <meta
          name="description"
          content="Découvre nos conseils, actualités et ressources pour réussir ton parcours académique."
        />
      </Helmet>

      <BlogHeader onSearch={handleSearch} />

      <div className="blog-content">
        <div className="blog-main">
          {!searchQuery && !selectedCategory && (
            <FeaturedArticle article={featuredArticle} loading={featuredLoading} />
          )}

          <ArticlesGrid
            articles={articlesData?.articles}
            loading={articlesLoading}
          />

          {/* Pagination */}
          {articlesData?.totalPages > 1 && (
            <div className="pagination" style={{ marginTop: '3rem', textAlign: 'center' }}>
              {Array.from({ length: articlesData.totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`pagination-btn ${currentPage === i + 1 ? 'active' : ''}`}
                  style={{
                    padding: '0.8rem 1.2rem',
                    margin: '0 0.3rem',
                    border: currentPage === i + 1 ? 'none' : '2px solid var(--gray-light)',
                    background: currentPage === i + 1 ? 'var(--primary-green)' : 'white',
                    color: currentPage === i + 1 ? 'white' : 'var(--gray-dark)',
                    borderRadius: 'var(--radius-sm)',
                    cursor: 'pointer',
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                  }}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </div>

        <BlogSidebar
          categories={categories}
          tags={tags}
          recentArticles={recentArticles?.articles}
          onCategoryClick={handleCategoryClick}
          onNewsletterSubscribe={handleNewsletterSubscribe}
        />
      </div>
    </>
  );
};

export default BlogPage;