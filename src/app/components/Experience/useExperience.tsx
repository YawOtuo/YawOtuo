// useExperienceData.js

"use client"
import { fetchExperienceData } from '@/app/utils/sanity-client';
import { useEffect, useState } from 'react';

// Custom hook for fetching experience data from Sanity.io
const useExperienceData = () => {
  const [experienceData, setExperienceData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from Sanity.io using the fetch function
    fetchExperienceData()
      .then((data) => {
        setExperienceData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return { experienceData, loading, error };
};

export default useExperienceData;
