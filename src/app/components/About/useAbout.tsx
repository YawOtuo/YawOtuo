// useaboutData.js

"use client"
import { fetchAboutData } from '@/app/apis';
import { useEffect, useState } from 'react';

// Custom hook for fetching experience data from Sanity.io
const useAboutData = () => {
  const [aboutData, setaboutData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from Sanity.io using the fetch function
    fetchAboutData()
      .then((data) => {
        setaboutData(data[0]);
        console.log(data[0])
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return { aboutData, loading, error };
};

export default useAboutData;
