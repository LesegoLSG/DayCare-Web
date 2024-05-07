import axiosInstance from "../Axios/AxiosInstance";
import { jwtDecode } from "jwt-decode";
import axios from 'axios';

const AuthService = {
    // Set access token
    setToken: (token) => {
        localStorage.setItem('token', token);
    },
    //Set refresh token
    setRefreshToken: (refreshToken) => {
        localStorage.setItem('refreshToken', refreshToken);
    },
    //Get access token
    getToken: () => {
        const token = localStorage.getItem('token');
        return token ? token : null;
    },
    //Get refresh token
    getRefreshToken: () => {
        const refreshToken = localStorage.getItem('refreshToken');
        return refreshToken ? refreshToken : null;
    },

    //Get email from a valid access toekn
    getUserEmail: () => {
        const token = AuthService.getToken();
        console.log("getUserEmail:", token);
        if (token) {
            try {
                const payLoad = jwtDecode(token);
                console.log("PayLoad:", payLoad);
                console.log("PayLoad.email:", payLoad?.sub);
                return payLoad?.sub;
            } catch (error) {
                console.log("Error decoding token:", error);
                return null;
            }
        }
        return null;
    },
    //Getting a user's role using their valid email
    getUserRole: async () => {
        const token = AuthService.getToken();
        if (token) {
            const payLoad = jwtDecode(token);
            const email = payLoad?.email;
            if (email) {
                try {
                    const response = await axiosInstance.get(`/auth/getRoleFromEmail/${email}`);//work on the api
                    return response.data.role;
                } catch (error) {
                    console.log("Error fetching user role:", error);
                    return null;
                }
            }
        }
        return null;
    },
    //Get logged in user using a valid users email
    getCurrentlyLoggedInUser: async (email) => {
        console.log("email:", email);
        try {
            const response = await axiosInstance.get(`/auth/currentlyLoggedInUser/${email}`);
            return response.data;
        } catch (error) {
            console.log("Error fetching currently logged in user:", error);
            throw error;
        }
    },

    //Login api
    login: (loginDetails) => {
        console.log("axios instance:",axiosInstance.getUri);
        return axiosInstance.post("/auth/signin", loginDetails);
    },
    //Checing if the user is logged in by assessing a token
    isLoggedIn: () => {
        const token = AuthService.getToken();
        if (token) {
            const payLoad = jwtDecode(token);
            const isLogin = Date.now() < payLoad.exp * 1000;
            return isLogin;
        }
        return false;
    },
    //Clear local storage when a user logs out
    logout: () => {
        localStorage.clear();
    },

    clearTokens: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
    },

    //Get token from refresh token
    refreshToken: (refreshToken) => {

        if (refreshToken) {
            try {
                console.log("Hey i have a refresh token: ", refreshToken);
                return axiosInstance.post('/auth/refresh', { refreshToken });
            } catch (error) {
                console.error("Error refreshing the token:", error);
                throw error;
            }
        }
    },

    getTokenExpiration: () => {
        const token = AuthService.getToken();
        if (token) {
            try {
                const payLoad = jwtDecode(token);
                if (payLoad.exp) {
                    return payLoad.exp * 1000; //Expiration time is in seconds, convert it to milliseconds
                }

            } catch (error) {
                console.error("Error decoding token", error);
            }
        }
        return null;// Return null if token is invalid or expiration time is not found
    }
};

export default AuthService;
