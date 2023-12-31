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

// interceptors

api.interceptors.response.use(
	(config) => {
		return config;
	},
	async (error) => {
		const originalRequest = error.config;
		if (
			error.response &&
			error.response.status === 401 &&
			originalRequest &&
			!originalRequest._isRetry
		) {
			originalRequest.isRetry = true;
			try {
				await axios.get(`${process.env.REACT_APP_API_URL}/api/refresh-token`, {
					withCredentials: true,
				});

				return api.request(originalRequest);
			} catch (err) {
				console.log(err.message);
			}
		}
		throw error;
	}
);
export default api;
