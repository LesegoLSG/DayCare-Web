import React, { useEffect, useState } from 'react';
import { useUser } from '../../../Contexts/UserLoggedIn';
import AuthService from '../../../AuthServices/AuthService/AuthService';

const Dashboard = () => {
    const { loggedInUser } = useUser();
    const [refreshTokenResponse, setRefreshTokenResponse] = useState(null);

    // useEffect(() => {
    //     const refreshToken = AuthService.getRefreshToken();
    //     const refresh = async () => {
    //         try {
    //             const response = await AuthService.refreshToken(refreshToken);
    //             setRefreshTokenResponse(response);
    //         } catch (error) {
    //             console.error("Error refreshing token:", error);
    //             // Handle error if needed
    //         }
    //     };

    //     if (refreshToken) {
    //         refresh();
    //     }
    // }, []);

    const handleChecking = async () => {
        const refreshToken = AuthService.getRefreshToken();
        try {
            const response = await AuthService.refreshToken(refreshToken);
            setRefreshTokenResponse(response.data);
        } catch (error) {
            console.error("Error refreshing token:", error);
            // Handle error if needed
        }
    }

    return (
        <div>
            Dashboard
            {loggedInUser.id}
            {loggedInUser.firstName}
            {loggedInUser.mobile}
           

            {refreshTokenResponse && (
                <p>Refresh Token Response: {JSON.stringify(refreshTokenResponse)}</p>
            )}

            <button onClick={handleChecking}>Checking</button>
        </div>
    )
}

export default Dashboard