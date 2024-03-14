import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/SinglePage/HomePage';
import PortalPage from './Portal/PortalComponents/PortalMainPage/PortalPage';
import Users from './Portal/PortalComponents/Users/Users';
import BlogPortal from './Portal/PortalComponents/Blog/BlogPortal';
import Dashboard from './Portal/PortalComponents/Dashboard/Dashboard';
import Authentication from './Components/LoginRegister/Authentication';
import AddUser from './Portal/PortalComponents/Users/AddUser';
import Transports from './Components/Transport/TransportDataFolder/Transports';
import AddBlog from './Portal/PortalComponents/Blog/AddBlog';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Authentication />} />

          <Route path="/portal" element={<PortalPage />} >
            <Route index element={<Dashboard />} />
            <Route path="/portal/users" element={<Users />} />
            <Route path="/portal/users/add" element={<AddUser />} />
            <Route path="/portal/blog" element={<BlogPortal />} />
            <Route path="/portal/blog/add" element={<AddBlog />} />
          </Route>

          <Route path="/transportservice" element={<Transports />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
