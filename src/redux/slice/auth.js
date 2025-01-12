import { authApi } from "../../mocks/auth";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getUser(state, action) {
      console.log(action.payload);
      state.user = { ...action.payload };
    },
    updateUser(state, action) {
      const data = action.payload.data;
      state.user = { ...state.user, ...data };
    },
    deleteUser(state) {
      state.user = {};
    },
    logoutUser(state) {
      state.user = {};
    },
  },
});

export const {reducer} = slice;

// Register Action
export const register = (data) => async (dispatch) => {
  try {
    const result = await authApi.signup(data);
    if (result.data.status === "SUCCESS") {
      dispatch({
        type: "REGISTER_SUCCESS",
        payload: result.data,
      });
      return result.data; 
    } else {
      dispatch({
        type: "REGISTER_FAIL",
        payload: result.data.message || "Registration failed",
      });
      return false; 
    }
  } catch (error) {
    console.error("Error in registration:", error);
    dispatch({
      type: "REGISTER_FAIL",
      payload: error.message,
    });
  }
};

// Login Action
export const login = (data) => async (dispatch) => {
  try {
    const result = await authApi.login(data);
    if (result) {
      localStorage.setItem("accessToken", result.token);
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: result,
      });
      return result;
    } else {
      dispatch({
        type: "LOGIN_FAIL",
        payload: "Login failed",
      });
      return false;
    }
  } catch (error) {
    console.error("Error in login:", error);
    dispatch({
      type: "LOGIN_FAIL",
      payload: error.message,
    });
  }
};
