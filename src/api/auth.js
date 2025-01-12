import axios from 'axios';
import { saveUserData } from './authUtil';

const API = axios.create({
  baseURL: process.env.REACT_APP_URL, 
});

// Set the Authorization header if the user is logged in
// API.interceptors.request.use((req) => {
//   const token = localStorage.getItem('token');
//   if (token) {
//     req.headers.Authorization = `Bearer ${token}`;
//   }
//   return req;
// }, (error) => {
//   return Promise.reject(error); 
// });

export const login = async (credentials) => {
  try {
    const response = await API.post('/api/auth/login', credentials);
    const { token, userId } = response.data; 
    saveUserData(token, userId); 
    return response.data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

export const signup = async (userData) => {
  try {
    const response = await API.post('/api/auth/signup', userData);
    const { token, userId } = response.data; 
    saveUserData(token, userId); 
    return response.data;
  } catch (error) {
    console.error("Signup error:", error);
    throw error;
  }
};
