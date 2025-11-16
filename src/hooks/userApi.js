import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook for API calls with loading, error, and data states
 * @param {Function} apiFunction - API function to call
 * @param {*} initialData - Initial data value
 * @param {boolean} immediate - Whether to call API immediately
 */
export const useApi = (apiFunction, initialData = null, immediate = true) => {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const execute = useCallback(
    async (...params) => {
      try {
        setLoading(true);
        setError(null);
        const result = await apiFunction(...params);
        setData(result);
        return { data: result, error: null };
      } catch (err) {
        const errorMessage = err.message || 'Une erreur est survenue';
        setError(errorMessage);
        return { data: null, error: errorMessage };
      } finally {
        setLoading(false);
      }
    },
    [] // Retirer apiFunction de la dépendance pour éviter les boucles
  );

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [immediate, execute]);

  return {
    data,
    loading,
    error,
    execute,
    setData,
  };
};

export default useApi;