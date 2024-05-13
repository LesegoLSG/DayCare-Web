import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

import { UserProvider } from './Contexts/UserLoggedIn';
import { PrivateRoute } from './AuthServices/Routes/PrivateRoute';
import { MainUsersRoute } from './AuthServices/Routes/MainUsersRoute';

import {BlogProvider} from './Contexts/BlogContext';


function App() {

  return (
    <div className="App">
      <Router>
        <UserProvider>
          <BlogProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Authentication />} />
            {/* Protected routes */}
            <Route path="/portal" element={
              <PrivateRoute>
                <PortalPage />
              </PrivateRoute>

            } >
              <Route index element={<Dashboard />} />
              <Route path="/portal/users" element={
                <MainUsersRoute>
                  <Users />
                </MainUsersRoute>
              }
              />
              <Route path="/portal/users/add" element={<AddUser />} />
              <Route path="/portal/blog" element={<BlogPortal />} />
              {/* make use of useParam for "/portal/blog/edit/:id" */}
              <Route path="/portal/blog/:id" element={<BlogEdit />} />
              <Route path="/portal/blog/add" element={<AddBlog />} />
            </Route>


            {/* Route to display full blog description */}
            <Route path="/blog/:id" element={<BlogReadMore />} />

            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          </Routes>
          </BlogProvider>
        </UserProvider>
      </Router>
    </div>
  );
}

export default App;
