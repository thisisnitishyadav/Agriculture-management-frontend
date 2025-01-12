import axios from "axios";

class AuthApi {
  async signup(data) {
    try {
      const res = await axios.post(`${process.env.REACT_APP_URL}/api/auth/signup`, data);
      return res || false;
    } catch (error) {
      console.error("Signup Error:", error);
      throw error;
    }
  }

  async login(data) {
    try {
      const res = await axios.post(`${process.env.REACT_APP_URL}/api/auth/login`, data);
      return res?.data || false;
    } catch (error) {
      console.error("Login Error:", error);
      throw error;
    }
  }

}

export const authApi = new AuthApi();
