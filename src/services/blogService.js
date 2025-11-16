import { apiRequest } from './api';
import { API_ENDPOINTS, PAGINATION } from '../utils/constants';
import { 
  mockArticles, 
  mockFeaturedArticle, 
  mockCategories, 
  mockTags, 
  mockComments 
} from '../data/mockData';

class BlogService {
  constructor() {
    // Force l'utilisation des données mockées en développement
    this.useMockData = import.meta.env.DEV || import.meta.env.VITE_ENABLE_MOCK_DATA === 'true';
  }

  /**
   * Get paginated articles
   * @param {Object} params - { page, limit, category, tag, search }
   */
  async getArticles(params = {}) {
    // Utiliser les données mockées en priorité en développement
    if (this.useMockData) {
      return this._getMockArticles(params);
    }

    try {
      const queryParams = {
        page: params.page || 1,
        limit: params.limit || PAGINATION.BLOG_PAGE_SIZE,
        ...(params.category && { category: params.category }),
        ...(params.tag && { tag: params.tag }),
        ...(params.search && { q: params.search }),
      };

      const response = await apiRequest.get(API_ENDPOINTS.BLOG.LIST, {
        params: queryParams,
      });

      return response.data;
    } catch (error) {
      console.warn('API non disponible, utilisation des données mockées', error);
      return this._getMockArticles(params);
    }
  }

  /**
   * Get mock articles with filtering and pagination
   * @param {Object} params - Query parameters
   * @private
   */
  _getMockArticles(params = {}) {
    let filteredArticles = [...mockArticles];
    
    // Filter by category
    if (params.category) {
      filteredArticles = filteredArticles.filter(
        article => article.category.toLowerCase().includes(params.category.toLowerCase())
      );
    }
    
    // Filter by search
    if (params.search) {
      const searchLower = params.search.toLowerCase();
      filteredArticles = filteredArticles.filter(
        article => 
          article.title.toLowerCase().includes(searchLower) ||
          article.excerpt.toLowerCase().includes(searchLower)
      );
    }
    
    // Apply pagination
    const page = parseInt(params.page) || 1;
    const limit = parseInt(params.limit) || PAGINATION.BLOG_PAGE_SIZE;
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedArticles = filteredArticles.slice(startIndex, endIndex);
    
    return {
      articles: paginatedArticles,
      pagination: {
        page,
        limit,
        total: filteredArticles.length,
        totalPages: Math.ceil(filteredArticles.length / limit),
        hasNextPage: endIndex < filteredArticles.length,
        hasPrevPage: page > 1
      }
    };
  }

  /**
   * Get featured articles
   */
  async getFeaturedArticles() {
    if (this.useMockData) {
      return mockArticles.filter(article => article.featured).slice(0, PAGINATION.FEATURED_ARTICLES_COUNT);
    }

    try {
      const response = await apiRequest.get(API_ENDPOINTS.BLOG.FEATURED);
      return response.data;
    } catch (error) {
      console.warn('API non disponible, utilisation des données mockées', error);
      return mockArticles.filter(article => article.featured).slice(0, PAGINATION.FEATURED_ARTICLES_COUNT);
    }
  }

  /**
   * Get article by ID
   */
  async getArticleById(id) {
    if (this.useMockData) {
      return mockArticles.find(article => article.id === id) || null;
    }

    try {
      const response = await apiRequest.get(API_ENDPOINTS.BLOG.DETAIL(id));
      return response.data;
    } catch (error) {
      console.warn('API non disponible, utilisation des données mockées', error);
      return mockArticles.find(article => article.id === id) || null;
    }
  }

  /**
   * Get categories
   */
  async getCategories() {
    if (this.useMockData) {
      return mockCategories;
    }

    try {
      const response = await apiRequest.get(API_ENDPOINTS.BLOG.CATEGORIES);
      return response.data;
    } catch (error) {
      console.warn('API non disponible, utilisation des données mockées', error);
      return mockCategories;
    }
  }

  /**
   * Get recent articles
   */
  async getRecentArticles(limit = PAGINATION.RECENT_ARTICLES_COUNT) {
    if (this.useMockData) {
      return mockArticles.slice(0, limit);
    }

    try {
      const response = await apiRequest.get(API_ENDPOINTS.BLOG.LIST, {
        params: { limit, sortBy: 'publishedAt', sortOrder: 'desc' }
      });
      return response.data.articles || response.data;
    } catch (error) {
      console.warn('API non disponible, utilisation des données mockées', error);
      return mockArticles.slice(0, limit);
    }
  }

  /**
   * Get related articles
   */
  async getRelatedArticles(articleId, limit = PAGINATION.RELATED_ARTICLES_COUNT) {
    if (this.useMockData) {
      const currentArticle = mockArticles.find(a => a.id === articleId);
      if (!currentArticle) return [];
      
      return mockArticles
        .filter(a => a.id !== articleId && a.category === currentArticle.category)
        .slice(0, limit);
    }

    try {
      const response = await apiRequest.get(`${API_ENDPOINTS.BLOG.DETAIL(articleId)}/related`, {
        params: { limit }
      });
      return response.data;
    } catch (error) {
      console.warn('API non disponible, utilisation des données mockées', error);
      const currentArticle = mockArticles.find(a => a.id === articleId);
      if (!currentArticle) return [];
      
      return mockArticles
        .filter(a => a.id !== articleId && a.category === currentArticle.category)
        .slice(0, limit);
    }
  }

  /**
   * Get comments for article
   */
  async getComments(articleId) {
    if (this.useMockData) {
      return {
        comments: mockComments.filter(comment => comment.articleId === articleId),
        total: mockComments.filter(comment => comment.articleId === articleId).length
      };
    }

    try {
      const response = await apiRequest.get(API_ENDPOINTS.BLOG.COMMENTS(articleId));
      return response.data;
    } catch (error) {
      console.warn('API non disponible, utilisation des données mockées', error);
      return {
        comments: mockComments.filter(comment => comment.articleId === articleId),
        total: mockComments.filter(comment => comment.articleId === articleId).length
      };
    }
  }

  /**
   * Add comment (mock implementation)
   */
  async addComment(articleId, commentData) {
    if (this.useMockData) {
      // Simuler l'ajout d'un commentaire
      const newComment = {
        id: Date.now().toString(),
        articleId,
        author: commentData.author || 'Utilisateur anonyme',
        content: commentData.content,
        createdAt: new Date().toISOString(),
        likes: 0
      };
      
      // En mode mock, on simule juste le retour
      return newComment;
    }

    try {
      const response = await apiRequest.post(API_ENDPOINTS.BLOG.COMMENTS(articleId), commentData);
      return response.data;
    } catch (error) {
      console.warn('API non disponible pour l\'ajout de commentaire', error);
      // Retourner un mock comment même en cas d'erreur
      return {
        id: Date.now().toString(),
        articleId,
        author: commentData.author || 'Utilisateur anonyme',
        content: commentData.content,
        createdAt: new Date().toISOString(),
        likes: 0
      };
    }
  }

  /**
   * Like article
   */
  async likeArticle(articleId) {
    if (this.useMockData) {
      return { success: true, likes: Math.floor(Math.random() * 100) + 1 };
    }

    try {
      const response = await apiRequest.post(API_ENDPOINTS.BLOG.LIKE(articleId));
      return response.data;
    } catch (error) {
      console.warn('API non disponible pour le like', error);
      return { success: true, likes: Math.floor(Math.random() * 100) + 1 };
    }
  }

  /**
   * Search articles
   */
  async searchArticles(query, filters = {}) {
    return this.getArticles({
      search: query,
      ...filters
    });
  }

  /**
   * Get tags
   */
  async getTags() {
    if (this.useMockData) {
      return mockTags;
    }

    try {
      const response = await apiRequest.get(`${API_ENDPOINTS.BLOG.LIST}/tags`);
      return response.data;
    } catch (error) {
      console.warn('API non disponible, utilisation des données mockées', error);
      return mockTags;
    }
  }
}

// Export a singleton instance
const blogService = new BlogService();
export default blogService;