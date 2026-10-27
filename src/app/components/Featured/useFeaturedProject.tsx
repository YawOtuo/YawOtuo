"use client";

import { fetchFeaturedProject } from "@/app/apis";
import { useEffect, useState } from "react";

export type FeaturedStat = {
  value: number;
  suffix?: string;
  label: string;
};

export type FeaturedProject = {
  _id: string;
  title: string;
  description?: string;
  technologies?: string[];
  image?: any;
  link?: string;
  role?: string;
  since?: string;
  appStoreLink?: string;
  playStoreLink?: string;
  stats?: FeaturedStat[];
};

const useFeaturedProject = () => {
  const [project, setProject] = useState<FeaturedProject | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeaturedProject()
      .then((data) => setProject(data))
      .finally(() => setLoading(false));
  }, []);

  return { project, loading };
};

export default useFeaturedProject;
