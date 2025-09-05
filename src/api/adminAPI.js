import axios from "axios";

const API = axios.create({ baseURL: "https://backend-jobportal-final-4.onrender.com/" });

// Attach token
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token"); // ⬅ from login
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

// Fetch users
export const fetchUsersAPI = () => API.get("/users");

// Delete user
export const deleteUserAPI = (userId) => API.delete(`/users/${userId}`);

// Fetch jobs
export const fetchJobsAPI = () => API.get("/jobs");

// Delete job
export const deleteJobAPI = (jobId) => API.delete(`/jobs/${jobId}`);
// Update job
export const updateJobAPI = (jobId, jobData) => API.put(`/jobs/${jobId}`, jobData);
