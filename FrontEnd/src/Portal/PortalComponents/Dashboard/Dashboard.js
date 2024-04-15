import React from 'react';
import { useUser } from '../../../UserContext/UserLoggedIn';

const Dashboard = () => {
    const { loggedInUser } = useUser();
    return (
        <div>
            Dashboard
            {loggedInUser.firstName}
            {loggedInUser.mobile}
        </div>
    )
}

export default Dashboard