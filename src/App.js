import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/SinglePage/HomePage';
import PortalPage from './Portal/PortalComponents/PortalMainPage/PortalPage';
import Users from './Portal/PortalComponents/Users/Users';
import Blog from './Components/Blog/Blog';
import Dashboard from './Portal/PortalComponents/Dashboard/Dashboard';
import Authentication from './Components/LoginRegister/Authentication';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/portal" element={<PortalPage />} />
          <Route path="/portal/users" element={<Users />} />
          <Route path="/portal/blog" element={<Blog />} />
          <Route path="/portal/dashboard" element={<Dashboard />} />

          <Route path="/login" element={<Authentication />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
