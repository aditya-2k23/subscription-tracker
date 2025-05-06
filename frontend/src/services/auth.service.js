import api from "./api";

export const authService = {
  // Register a new user
  signUp: async (userData) => {
    const response = await api.post("/auth/sign-up", userData);
    return response.data;
  },

  // Login user
  signIn: async (credentials) => {
    const response = await api.post("/auth/sign-in", credentials);
    return response.data;
  },

  // Logout user
  signOut: async () => {
    const response = await api.post("/auth/sign-out");
    return response.data;
  },

  // Check if user is authenticated
  checkAuth: async () => {
    try {
      const response = await api.get("/users/me");
      return response.data;
    } catch (error) {
      console.error("Error checking authentication:", error);
      return null; // User is not authenticated
    }
  },
};

export default authService;
