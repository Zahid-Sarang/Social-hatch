import axios from "axios";

const api = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
	withCredentials: true,
	headers: {
		"Content-Type": "application/json",
		Accept: "application/json",
	},
});

// List of All the Endpoints
export const register = (data) => api.post("/api/signup", data);
export const login = (data) => api.post("/api/signin", data);
