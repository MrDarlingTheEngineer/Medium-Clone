import axios from 'axios';

const API_URL = "http://localhost/medium-clone-backend/api/";

export const login = (email, password) => {
  return axios.post(`${API_URL}auth.php`, { email, password });
};

export const createArticle = (title, body, author_id) => {
  return axios.post(`${API_URL}articles.php`, { title, body, author_id });
};

export const fetchArticles = () => {
  return axios.get(`${API_URL}articles.php`);
};

