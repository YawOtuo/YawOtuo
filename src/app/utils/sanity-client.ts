// sanityClient.js

import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: 'rknkj8ze',
  dataset: 'production',
  // Optionally, you can add a token if your dataset requires authentication
  // token: 'your-token',
  // Optionally, set useCdn to false if you want to always fetch data from the server
  // useCdn: false,
});

export const fetchExperienceData = async () => {
  try {
    // Fetch data from Sanity.io
    const data = await client.fetch('*[_type == "experience"]');
    return data;
  } catch (error) {
    console.error('Error fetching data from Sanity.io:', error);
    return [];
  }
};
