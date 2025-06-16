import { axiosInstance } from "./axios";

// AUTH ROUTES
export const signup = async (signupData) => {
    const response = await axiosInstance.post("/api/auth/signup", signupData);
    return response.data;
}

export const login = async (loginData) => {
    try {
        const response = await axiosInstance.post("/api/auth/login", loginData);
        return response.data;
    } catch (error) {
        console.error("Login failed:", error?.response?.data || error.message);
        throw error;
    }
}

export const logout = async () => {
    const response = await axiosInstance.post("/api/auth/logout");
    return response.data;
}

export const getAuthUser = async () => {
    try {
        const response = await axiosInstance.get("/api/auth/me");
        return response.data;
    } catch (error) {
        console.log("Error in getAuthUser", error);
        return null;
    }
}

export const completeOnboarding = async (userData) => {
    const response = await axiosInstance.post("/api/auth/onboarding", userData);
    return response.data;
}

// USER ROUTES
export async function getUserFriends() {
    const response = await axiosInstance.get("/api/users/friends");
    return response.data;
}

export async function getRecommendedUsers() {
    const response = await axiosInstance.get("/api/users");
    return response.data;
}

export async function getOutgoingFriendReqs() {
    const response = await axiosInstance.get("/api/users/outgoing-friend-requests");
    return response.data;
}

export async function sendFriendRequest(userId) {
    const response = await axiosInstance.post(`/api/users/friend-request/${userId}`);
    return response.data;
}

export async function getFriendRequests() {
    const response = await axiosInstance.get("/api/users/friend-requests");
    return response.data;
}

export async function acceptFriendRequest(requestId) {
    const response = await axiosInstance.put(`/api/users/friend-request/${requestId}/accept`);
    return response.data;
}

// CHAT ROUTE
export async function getStreamToken() {
    const response = await axiosInstance.get("/api/chat/token");
    return response.data;
}
