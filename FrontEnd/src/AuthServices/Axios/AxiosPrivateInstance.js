import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AuthService from '../AuthService/AuthService';



const axiosPrivateInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

axiosPrivateInstance.interceptors.request.use(
    async (config) => {
        const token = AuthService.getToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosPrivateInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const navigate = useNavigate();
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            console.log("401 status reached");
            originalRequest._retry = true;
            const refreshToken = AuthService.getRefreshToken();
            if (refreshToken) {
                try {
                    const response = await AuthService.refreshToken(refreshToken);
                    if (response?.data?.token) {

                        console.log("New refreshToken:", response.data.token);

                        AuthService.setToken(response.data.token);
                        originalRequest.headers['Authorization'] = `Bearer ${response.data.token}`;
                        return axiosPrivateInstance(originalRequest);
                    }
                } catch (refreshError) {
                    console.log("Refresh Token Error:", refreshError);
                    AuthService.clearTokens(); // Clear tokens if refresh fails
                    navigate("/login");
                }
            } else {
                AuthService.clearTokens(); // Clear tokens if no refresh token is found
                navigate("/login");
            }
        }
        return Promise.reject(error);
    }

);



export default axiosPrivateInstance;