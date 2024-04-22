import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import AuthService from '../AuthService/AuthService';


//Base url
const axiosPrivateInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});
//Attaches an end point with a bear token, but validating expiration time for a token and refreshes the token before a request is sent to the server
axiosPrivateInstance.interceptors.request.use(
    async (config) => {
        // const navigate = useNavigate();
        const token = AuthService.getToken();
        if (token) {
            const tokenExpiration = AuthService.getTokenExpiration();
            console.log("TokenExpiration: ", tokenExpiration);
            const currentTime = new Date().getTime();
            if (tokenExpiration && tokenExpiration < currentTime) {
                //Token expired, attempting to refresh the token
                try {
                    const refreshToken = AuthService.getRefreshToken();
                    if (refreshToken) {
                        const response = await AuthService.refreshToken(refreshToken);
                        if (response?.data?.token) {
                            // Set a new Token and attach the token to the request
                            AuthService.setToken(response.data.token);
                            config.headers.Authorization = `Bearer ${response.data.token}`;
                        }
                    } else {
                        // No refresh token available, redirect to login page
                        <Navigate to="/login" />
                    }

                } catch (error) {
                    AuthService.clearTokens();
                    <Navigate to="/login" />
                }
            } else {
                // Token is still valid, attach it to the request
                config.headers.Authorization = `Bearer ${token}`;
            }

        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);



export default axiosPrivateInstance;