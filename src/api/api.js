// // src/api/api.js
// import axios from 'axios';

// const API = axios.create({
//   baseURL: 'http://localhost:5001/api',
// });

// // Set the Authorization header if the user is logged in
// API.interceptors.request.use((req) => {
//   const token = localStorage.getItem('token');
//   if (token) {
//     req.headers.Authorization = `Bearer ${token}`;
//   }
//   return req;
// });

// // Authentication APIs
// export const registerUser = (userData) => API.post('/auth/signup', userData);
// export const loginUser = (credentials) => API.post('/auth/login', credentials);

// // Field APIs
// export const getFields = () => API.get('/fields');
// export const createField = (fieldData) => API.post('/fields', fieldData);
// export const updateField = (id, fieldData) => API.put(`/fields/${id}`, fieldData);
// export const deleteField = (id) => API.delete(`/fields/${id}`);

// // Payment APIs
// export const initiatePayment = (paymentData) => API.post('/payments', paymentData);
