import React, { useState } from 'react';
import SideBar from '../SideBar/SideBar';
import Dashboard from '../Dashboard/Dashboard';
import Users from '../Users/Users';
import BlogPortal from '../Blog/BlogPortal';
import TopNav from '../TopNav/TopNav';


const PortalPage = () => {
    const [activeComponent, setActiveComponent] = useState('dashboard');

    const renderComponent = () => {
        switch (activeComponent) {
            case 'dashboard':
                return <Dashboard />;
            case 'users':
                return <Users />;
            case 'blog':
                return <BlogPortal />;
            default:
                return null;
        }
    };

    return (
        <div className="flex">
            <SideBar setActiveComponent={setActiveComponent} />
            {/* <TopNav /> */}
            <div className=" flex-1 h-screen">
                <TopNav />
                {renderComponent()}
            </div>
        </div>
    )
}

export default PortalPage