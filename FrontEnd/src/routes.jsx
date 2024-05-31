import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomePage from './Components/SinglePage/HomePage';
import PortalPage from './Portal/PortalComponents/PortalMainPage/PortalPage';
import Users from './Portal/PortalComponents/Users/Users';
import BlogPortal from './Portal/PortalComponents/Blog/BlogPortal';
import Dashboard from './Portal/PortalComponents/Dashboard/Dashboard';
import Authentication from './Components/LoginRegister/Authentication';
import AddUser from './Portal/PortalComponents/Users/AddUser';
import AddBlog from './Portal/PortalComponents/Blog/AddBlog/AddBlog';
import BlogReadMore from './Components/Blog/BlogReadMore/BlogReadMore';
import BlogEdit from './Portal/PortalComponents/Blog/BlogEdit';
import TermsAndConditions from './Components/LegalStatements/TermsAndConditions';
import PrivacyPolicy from './Components/LegalStatements/PrivacyPolicy';
import UserEntryPage from './Portal/PortalComponents/Users/UserEntryPage';
import EditUser from './Portal/PortalComponents/Users/EditUser';
import BlogEntryPage from './Portal/PortalComponents/Blog/BlogEntryPage';

const routes = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/login",
        element: <Authentication />
    },
    {
        path: "/portal",
        element: <PortalPage />,
        children: [
            {
                index: true,
                path: "dashboard",
                element: <Dashboard />
            },
            {
                path: "users",
                element: <UserEntryPage />,
                children: [
                    {
                        index: true,
                        element: <Users/>
                    },
                    // {
                    //     path: "profile/:id",
                    //     element: <SchoolProfilePage />
                    // },
                    {
                        path: "add",
                        element: <AddUser />
                    },
                    {
                        path:"edit/:id",
                        element:<EditUser/>
                    }
                ]
            },
            {
                path:"blog",
                element:<BlogEntryPage/>,
                children:[
                   {
                    index:true,
                    element:<BlogPortal/>
                   },
                   {
                    path:"add",
                    element:<AddBlog/>
                   },
                   {
                    path:"edit/:id",
                    element:<BlogEdit/>
                   }
                ]
            },


            // {
            //     path: "principal",
            //     element: <PrincipalPage />
            // },
            // {
            //     path: "teacher",
            //     element: <TeachersPage />
            // },

        ]
    },

])

export default routes