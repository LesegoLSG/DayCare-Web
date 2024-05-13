import AuthService from "../AuthService/AuthService";
import { Navigate } from 'react-router-dom';
import { useUser } from "../../Contexts/UserLoggedIn";


export const MainUsersRoute = ({ children }) => {
    const { loggedInUser } = useUser();
    console.log("Main user in MainUsersRoute.js", loggedInUser.role);

    const isReal = loggedInUser.role === "SYSTEM_ADMIN" || loggedInUser.role === "ADMIN";
    console.log("Results:", isReal);


    return (loggedInUser.role === "SYSTEM_ADMIN" || loggedInUser.role === "ADMIN") ? children : <Navigate to="/login" />

}