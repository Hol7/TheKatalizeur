import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337';

export const fetchArticles = async () => {
  const response = await axios.get(`${API_URL}/api/articles?populate=*`);
  return response.data.data;
};

export const fetchArticleBySlug = async (slug: string) => {
  const response = await axios.get(
    `${API_URL}/api/articles?filters[slug][$eq]=${slug}&populate=*`
  );
  return response.data.data[0];
};

export const fetchCategories = async () => {
  const response = await axios.get(`${API_URL}/api/categories?populate=*`);
  return response.data.data;
};