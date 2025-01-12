import axios from 'axios';

const API_URL = 'http://localhost:5001/api/field';

export const getFields = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createField = async (fieldData) => {
  const response = await axios.post(API_URL, fieldData);
  return response.data;
};

export const deleteField = async (fieldId) => {
  const response = await axios.delete(`${API_URL}/${fieldId}`);
  return response.data;
};

export const updatedField=async (fieldId,fieldData)=>{
  const response =await axios.put(`${API_URL}/${fieldId}`,fieldData);
  return response.data;
};

// // Field APIs
// export const getFields = () => API.get('/fields');
// export const createField = (fieldData) => API.post('/fields', fieldData);
// export const updateField = (id, fieldData) => API.put(`/fields/${id}`, fieldData);
// export const deleteField = (id) => API.delete(`/fields/${id}`);