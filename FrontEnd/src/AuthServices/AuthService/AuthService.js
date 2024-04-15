import axiosInstance from "../Axios/AxiosInstance";
import { jwtDecode } from "jwt-decode";

const AuthService = {
    setToken: (token) => {
        localStorage.setItem('token', token);
    },

    getToken: () => {
        const token = localStorage.getItem('token');
        return token ? token : null;
    },

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


    login: (loginDetails) => {
        return axiosInstance.post("/auth/signin", loginDetails);
    },

    isLoggedIn: () => {
        const token = AuthService.getToken();
        if (token) {
            const payLoad = jwtDecode(token);
            const isLogin = Date.now() < payLoad.exp * 1000;
            return isLogin;
        }
        return false;
    },

    logout: () => {
        localStorage.clear();
    },
};

export default AuthService;
