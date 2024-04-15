import AuthService from "../AuthService/AuthService";
import { Navigate } from 'react-router-dom';

//Checks if a user is logged in or has a valid access token
export const PrivateRoute = ({ children }) => {

    return AuthService.isLoggedIn() ? children : <Navigate to="/login" />

}