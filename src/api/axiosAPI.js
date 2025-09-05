// src/api/axiosAPI.js
import axios from "axios";

// ✅ Create a single axios instance
const API = axios.create({
  baseURL: "https://backend-jobportal-final-2.onrender.com", 
  // Example: .env → VITE_API_BASE_URL=http://localhost:7000/api/v1
});

// ✅ Attach token automatically
API.interceptors.request.use((req) => {
  const storedData = localStorage.getItem("token"); 
  if (storedData) {
    const token = storedData; // already saved as plain token
    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
    }
  }
  return req;
});

// 🔹 API helpers
export const fetchJobsAPI = () => API.get("/jobs");

export const updateApplicationStatusAPI = (appId, status) =>
  API.put(`/applications/${appId}/status`, { status });

export default API;
