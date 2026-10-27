"use client";

import { fetchAboutData } from "@/app/apis";
import { useEffect, useState } from "react";

export interface TechSkill {
  name: string;
  category?: {
    _id: string;
    name: string;
    priority?: number;
  } | null;
}

export interface AboutData {
  _id: string;
  email?: string;
  generalInfo?: string[];
  techStack?: (string | TechSkill | null | undefined)[];
  education?: Array<{
    _ref: string;
    _type: "reference";
  }>;
}

const useAboutData = () => {
  const [aboutData, setAboutData] = useState<AboutData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchAboutData()
      .then((data) => {
        setAboutData(data[0] || null);
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
