import axios from 'axios';

export const processPayment = async (paymentData) => {
  const response = await axios.post(`${process.env.REACT_APP_URL}/api/payment/process`, paymentData);
  return response.data;
};

// Payment APIs
// export const initiatePayment = (paymentData) => API.post('/payments', paymentData);
