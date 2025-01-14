import axios from 'axios';

export const processPayment = async (paymentData) => {
  const response = await axios.post(`${process.env.REACT_APP_URL}/api/payment/process`, paymentData);
  return response.data;
};

// payment api

