import { useState, useCallback, useEffect } from 'react';
import googleService from '@/services/google';

interface PortfolioData {
  about: Record<string, string>;
  skills: Record<string, string[]>;
  projects: any[];
  contact: Record<string, string>;
}

export const usePortfolio = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<PortfolioData>({
    about: {},
    skills: {},
    projects: [],
    contact: {},
  });
  const [error, setError] = useState<string | null>(null);

  const fetchPortfolioData = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const [about, skills, projects, contact] = await Promise.all([
        googleService.getAboutData(),
        googleService.getSkillsData(),
        googleService.getProjectsData(),
        googleService.getContactData(),
      ]);

      setData({
        about,
        skills,
        projects,
        contact,
      });
    } catch (err) {
      console.error('Error fetching portfolio data:', err);
      setError('Failed to load portfolio data');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPortfolioData();
  }, [fetchPortfolioData]);

  return {
    loading,
    error,
    data,
    refetch: fetchPortfolioData,
  };
};