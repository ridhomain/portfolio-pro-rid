// src/hooks/usePortfolio.tsx
import { useState, useCallback, useEffect } from 'react';
import googleService from '@/services/google';

interface PortfolioData {
  about: Record<string, string>;
  skills: Record<string, string[]>;
  projects: any[];
  contact: Record<string, string>;
}

// Default initial data to prevent glitching
const initialData: PortfolioData = {
  about: {
    name: 'Ahmad Ridho',
    title: 'Senior Backend Engineer',
    summary: 'Building scalable systems and crafting elegant solutions.',
  },
  skills: {},
  projects: [],
  contact: {},
};

export const usePortfolio = () => {
  const [loading, setLoading] = useState(true); // Start with true
  const [data, setData] = useState<PortfolioData>(initialData);
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
        about: { ...initialData.about, ...about },
        skills,
        projects,
        contact,
      });
    } catch (err) {
      console.error('Error fetching portfolio data:', err);
      setError('Failed to load portfolio data');
      // Keep initial data on error
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