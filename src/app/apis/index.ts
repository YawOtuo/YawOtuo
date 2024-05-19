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
    // Fetch data from Sanity.io
    const data = await client.fetch('*[_type == "about"]');
    return data;
  } catch (error) {
    console.error('Error fetching data from Sanity.io:', error);
    return [];
  }
};



export const fetchProjectsData = async () => {
  try {
    // Fetch data from Sanity.io
    const data = await client.fetch('*[_type == "project"] | order(priority asc)');
    return data;
  } catch (error) {
    console.error('Error fetching data from Sanity.io:', error);
    return [];
  }
};
