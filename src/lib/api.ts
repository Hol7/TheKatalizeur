import axios from 'axios';

export const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'https://back-katalizeur.qashmo.com';
const API_TOKEN = "d4dbb1a9679eb6a4a4349b76858b1c5f72f99b3b06b73754f86dea7873532340c5879937c50472a526949f4b951e04217cf69940e5607ae383b86e632ee95fb2593debbe0ae3be1992f5676d1c94a5f694d3b556ede2854bea3637c9dd34a0698e688f55338f1cb65aed90f14b6fd7e99a43e1aa808cc83c63465449b14f0de4"
// export const fetchArticles = async () => {
//   const response = await axios.get(`${API_URL}/api/articles?populate=*`);
//   return response.data.data;
// };

export const fetchArticles = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/articles?populate=*`, {
      headers: { Authorization: `Bearer ${API_TOKEN}` },
    });
    // console.log('fetchArticles Response:', response.data.data);

    const articles = response.data.data;
    return articles;
  } catch (error) {
    console.error('Error fetching articles:', error);
    throw error;
  }
};

export const fetchSidebar = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/sidebar-trendis?populate=*`, {
      headers: { Authorization: `Bearer ${API_TOKEN}` },
    });
    console.log('fetchSidebar Response:', response.data.data);

    const articles = response.data.data;
    return articles;
  } catch (error) {
    console.error('Error fetching fetchSidebar:', error);
    throw error;
  }
};


// export const fetchArticles = async () => {
//   const response = await axios.get(`${API_URL}/api/articles?populate=*`, {
//     headers: { Authorization: `Bearer ${API_TOKEN}` },
//   });
//   console.log(response.data); // Log the API response
//   return response.data.data;
// };

export const fetchArticleBySlug = async (slug: string) => {
  try {
    const response = await axios.get(
      `${API_URL}/api/articles?filters[slug][$eq]=${slug}&populate=*`,
      { headers: { Authorization: `Bearer ${API_TOKEN}` } }
    );

   
    // console.log('fetchArticleBySlug :', response.data);

    // Safely access the first article
    const article = response.data.data?.[0];
    // console.log('fetchArticleBySlug Response:', article);

    if (!article) {
      throw new Error(`No article found for slug: ${slug}`);
    }

    return article; // Return the full article object
  } catch (error) {
    console.error('Error fetching article by slug:', error);
    throw error;
  }
};

export const fetchCategories = async () => {
  const response = await axios.get(`${API_URL}/api/categories?populate=*`, {
    headers: { Authorization: `Bearer ${API_TOKEN}` },
  });
    // console.log(response.data);
  return response.data.data;
};