import api from "./api";

export const subscriptionService = {
  // Get all subscriptions for a user
  getUserSubscriptions: async (userId) => {
    const response = await api.get(`/subscriptions/user/${userId}`);
    return response.data;
  },

  // Create a new subscription
  createSubscription: async (subscriptionData) => {
    const response = await api.post("/subscriptions", subscriptionData);
    return response.data;
  },

  // Update a subscription
  updateSubscription: async (id, subscriptionData) => {
    const response = await api.put(`/subscriptions/${id}`, subscriptionData);
    return response.data;
  },

  // Delete a subscription
  deleteSubscription: async (id) => {
    const response = await api.delete(`/subscriptions/${id}`);
    return response.data;
  },
};

export default subscriptionService;
