import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginSuccess, loginFailure } from "../slices/authSlice";

const mockAuthenticate = (credentials) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // TODO: Implement authentication logic here
      // Check if the username and password is "exampleUser" and "password123" respectively
      // Else reject the promise and throw an "Authentication failed" error
    }, 1000);
  });
};

export const login = createAsyncThunk("auth/login", async (credentials) => {
  try {
    // TODO: Implement authentication logic here
    // Replace this comment with your authentication logic
    // TODO: Dispatch loginSuccess action if authentication is successful
    // TODO: Dispatch loginFailure action if authentication fails
  } catch (error) {
    // TODO: Handle errors and dispatch loginFailure action with error message
  }
});
