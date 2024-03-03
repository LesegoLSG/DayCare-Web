import React, { useState } from 'react';
import SideBar from '../SideBar/SideBar';
import Dashboard from '../Dashboard/Dashboard';
import Users from '../Users/Users';
import BlogPortal from '../Blog/BlogPortal';
import TopNav from '../TopNav/TopNav';

import { Outlet } from 'react-router-dom';


const PortalPage = () => {


    return (
        <div className="flex">
            <SideBar />
            <div className=" flex-1 h-screen">
                <TopNav />
                <Outlet />

            </div>
        </div>
    )
}

export default PortalPage