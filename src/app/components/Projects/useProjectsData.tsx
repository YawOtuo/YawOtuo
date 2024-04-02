// useProjectsData.js

"use client"
import { fetchProjectsData } from '@/app/apis';
import { useEffect, useState } from 'react';

// Custom hook for fetching Projects data from Sanity.io
const useProjectsData = () => {
  const [ProjectsData, setProjectsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from Sanity.io using the fetch function
    fetchProjectsData()
      .then((data) => {
        setProjectsData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return { ProjectsData, loading, error };
};

export default useProjectsData;
