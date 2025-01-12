import axios from 'axios';

const API_URL = 'http://localhost:5001';

export const login = async (credentials) => {
  const response = await axios.post(`${API_URL}/api/auth/login`, credentials);
  return response.data;
};

export const signup = async (userData) => {
  const response = await axios.post(`${API_URL}/api/auth/signup`, userData);
  return response.data;
};