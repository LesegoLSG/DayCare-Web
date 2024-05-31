import React, { useState, useEffect } from 'react';
import SideBar from '../SideBar/SideBar';
import TopNav from '../TopNav/TopNav';
import BottomBar from '../BottomBar/BottomBar';

import { Outlet } from 'react-router-dom';
import AuthService from '../../../AuthServices/AuthService/AuthService';

import { useUser } from '../../../Contexts/UserLoggedIn';


const PortalPage = () => {

    const { setLoggedInUser } = useUser();

    useEffect(() => {
        console.log("useEffect...")
        const fetchLoggedInUser = async () => {
            try {
                console.log("It reaches the try catch");
                const userEmail = AuthService.getUserEmail();
                console.log("Checking email:", userEmail);
                if (userEmail) {
                    const response = await AuthService.getCurrentlyLoggedInUser(userEmail);
                    console.log("currently loggedin user response:", response);
                    console.log("currently loggedin user response data:", response.data);
                    if (response) {
                        setLoggedInUser(response);
                        // console.log("LoggedIn User:", loggedInUser);
                    }
                }

            } catch (error) {
                console.log("Error in useEffect:", error);
            }
        };
        fetchLoggedInUser();
    }, []);


    return (
        <section className="flex flex-col h-screen">
        <div className="flex flex-1">
            <SideBar />
            <div className="flex-1">
                <TopNav />
                <Outlet />
            </div>
        </div>
        <BottomBar />
    </section>
    )
}

export default PortalPage