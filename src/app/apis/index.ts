// sanityClient.js

import { client } from "../../../sanity/lib/client";



export const fetchExperienceData = async () => {
  try {
    // Fetch data from Sanity.io and order by priority
    const data = await client.fetch('*[_type == "experience"] | order(priority asc)');
    return data;
  } catch (error) {
    console.error('Error fetching data from Sanity.io:', error);
    return [];
  }
};


// sanityClient.js



export const fetchAboutData = async () => {
  try {
    const data = await client.fetch(`*[_type == "about"] {
      ...,
      techStack[] {
        name,
        category->
      }
    }`);
    return data;
  } catch (error) {
    console.error('Error fetching data from Sanity.io:', error);
    return [];
  }
};



export const fetchProjectsData = async () => {
  try {
    // The featured project has its own section, so it's excluded from the grid
    const data = await client.fetch('*[_type == "project" && featured != true] | order(priority asc)');
    return data;
  } catch (error) {
    console.error('Error fetching data from Sanity.io:', error);
    return [];
  }
};

export const fetchFeaturedProject = async () => {
  try {
    const data = await client.fetch(
      '*[_type == "project" && featured == true] | order(priority asc)[0]'
    );
    return data ?? null;
  } catch (error) {
    console.error('Error fetching data from Sanity.io:', error);
    return null;
  }
};
