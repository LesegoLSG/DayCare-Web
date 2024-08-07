import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./Components/SinglePage/HomePage";
import PortalPage from "./Portal/PortalComponents/PortalMainPage/PortalPage";
import Users from "./Portal/PortalComponents/Users/Users";
import BlogPortal from "./Portal/PortalComponents/Blog/BlogPortal";
import Dashboard from "./Portal/PortalComponents/Dashboard/Dashboard";
import Authentication from "./Components/LoginRegister/Authentication";
import AddUser from "./Portal/PortalComponents/Users/AddUser";
import AddBlog from "./Portal/PortalComponents/Blog/AddBlog/AddBlog";
import BlogReadMore from "./Components/Blog/BlogReadMore/BlogReadMore";
import BlogEdit from "./Portal/PortalComponents/Blog/EditBlog/BlogEdit";
import TermsAndConditions from "./Components/LegalStatements/TermsAndConditions";
import PrivacyPolicy from "./Components/LegalStatements/PrivacyPolicy";
import UserEntryPage from "./Portal/PortalComponents/Users/UserEntryPage";
import EditUser from "./Portal/PortalComponents/Users/EditUser";
import BlogEntryPage from "./Portal/PortalComponents/Blog/BlogEntryPage";
import { PrivateRoute } from "./AuthServices/Routes/PrivateRoute";
import { MainUsersRoute } from "./AuthServices/Routes/MainUsersRoute";
import AboutLearnMorePage from "./Components/SinglePage/AboutLearnMorePage";
import ServiceLearnMorePage from "./Components/SinglePage/ServiceLearnMorePage";
import BlogReadMorePage from "./Components/SinglePage/BlogReadMorePage";
import Profile from "./Portal/Profile/Profile";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <Authentication />,
  },
  {
    path: "/aboutinfo",
    element: <AboutLearnMorePage />,
  },
  {
    path: "/servicedetails/:id",
    element: <ServiceLearnMorePage />,
  },
  {
    path: "/bloginfo/:id",
    element: <BlogReadMorePage />,
  },
  {
    path: "/terms&Conditions",
    element: <TermsAndConditions />,
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />,
  },

  {
    path: "/portal",
    element: (
      <PrivateRoute>
        <PortalPage />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        // path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "users",
        element: <UserEntryPage />,
        children: [
          {
            index: true,
            element: (
              <MainUsersRoute>
                <Users />
              </MainUsersRoute>
            ),
          },
          //   {
          //     path: "profile/:id",
          //     element: <SchoolProfilePage />,
          //   },
          {
            path: "add",
            element: <AddUser />,
          },
          {
            path: "edit/:id",
            element: <EditUser />,
          },
        ],
      },
      {
        path: "blog",
        element: <BlogEntryPage />,
        children: [
          {
            index: true,
            element: <BlogPortal />,
          },
          {
            path: "add",
            element: <AddBlog />,
          },
          {
            path: "edit/:id",
            element: <BlogEdit />,
          },
        ],
      },

      {
        path: "profile",
        element: <Profile />,
      },
      // {
      //     path: "teacher",
      //     element: <TeachersPage />
      // },
    ],
  },
]);

export default routes;
