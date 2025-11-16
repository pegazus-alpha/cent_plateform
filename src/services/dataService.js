import { apiRequest } from './api';
import { API_ENDPOINTS } from '../utils/constants';
import { mockStats, mockTestimonials, mockServices } from '../data/mockData';

class DataService {
  /**
   * Get global stats
   */
  async getGlobalStats() {
    try {
      const response = await apiRequest.get(API_ENDPOINTS.STATS);
      return response.data;
    } catch (error) {
      console.warn('API non disponible, utilisation des données mockées', error);
      return [
        { number: '2000+', label: 'Étudiants actifs' },
        { number: '150+', label: 'Cours disponibles' },
        { number: '50+', label: 'Formateurs experts' },
        { number: '95%', label: 'Taux de satisfaction' },
      ];
    }
  }

  /**
   * Get all testimonials
   */
  async getTestimonials() {
    try {
      const response = await apiRequest.get(API_ENDPOINTS.TESTIMONIALS);
      return response.data;
    } catch (error) {
      console.warn('API non disponible, utilisation des données mockées', error);
      return mockTestimonials;
    }
  }

  /**
   * Get all services
   */
  async getServices() {
    try {
      const response = await apiRequest.get(API_ENDPOINTS.SERVICES.LIST);
      return response.data;
    } catch (error) {
      console.warn('API non disponible, utilisation des données mockées', error);
      return mockServices;
    }
  }

  /**
   * Get service by ID
   * @param {string} id - Service ID
   */
  async getServiceById(id) {
    const response = await apiRequest.get(API_ENDPOINTS.SERVICES.DETAIL(id));
    return response.data;
  }

  /**
   * Get community features
   */
  async getCommunityFeatures() {
    const response = await apiRequest.get(API_ENDPOINTS.COMMUNITY.FEATURES);
    return response.data;
  }

  /**
   * Get challenges
   */
  async getChallenges() {
    const response = await apiRequest.get(API_ENDPOINTS.COMMUNITY.CHALLENGES);
    return response.data;
  }

  /**
   * Subscribe to newsletter
   * @param {Object} data - { email, name? }
   */
  async subscribeNewsletter(data) {
    const response = await apiRequest.post(API_ENDPOINTS.NEWSLETTER, data);
    return response.data;
  }

  /**
   * Global search
   * @param {string} query - Search query
   */
  async search(query) {
    const response = await apiRequest.get(API_ENDPOINTS.SEARCH, {
      params: { q: query },
    });
    return response.data;
  }
}

export default new DataService();