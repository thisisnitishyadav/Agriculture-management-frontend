import axios from 'axios';
import { getToken, getUserId } from './authUtil'; // Import the functions to get token and userId

// Helper function to get headers with Authorization
const getHeaders = () => {
  const token = getToken();
  const userId = getUserId();
  const headers = {
    Authorization: token ? `Bearer ${token}` : '', // Add token in Authorization header if available
    'User-Id': userId || '', // Optionally add userId in headers if needed
  };
  return headers;
};

// Get all fields
export const getFields = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_URL}/api/field`, {
      headers: getHeaders(),
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching fields:", error);
    throw error;
  }
};

// Create a new field
export const createField = async (fieldData) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_URL}/api/field`, 
      fieldData, 
      { headers: getHeaders() }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating field:", error);
    throw error;
  }
};

// Delete a field by ID
export const deleteField = async (fieldId) => {
  try {
    const response = await axios.delete(
      `${process.env.REACT_APP_URL}/api/field/${fieldId}`, 
      { headers: getHeaders() }
    );
    return response.data;
  } catch (error) {
    console.error("Error deleting field:", error);
    throw error;
  }
};

// Update a field by ID
export const updateField = async (fieldId, fieldData) => {
  try {
    const response = await axios.put(
      `${process.env.REACT_APP_URL}/api/field/${fieldId}`, 
      fieldData, 
      { headers: getHeaders() }
    );
    return response.data;
  } catch (error) {
    console.error("Error updating field:", error);
    throw error;
  }
};
