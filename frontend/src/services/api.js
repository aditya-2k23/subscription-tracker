import axios from "axios";

const API_URL = "http://localhost:5500/api/v1";

// Create axios instance with base URL and credentials
const api = axios.create({
  baseURL: API_URL,
  withCredentials: true, // Important for handling cookies/session
  headers: {
    "Content-Type": "application/json",
  },
});

// Add response interceptor for handling errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle common errors like authentication failures
    if (error.response?.status === 401) {
      // Redirect to login or handle unauthorized access
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default api;
