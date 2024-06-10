import './App.css';
import { RouterProvider } from 'react-router-dom';


import { UserProvider } from './Contexts/UserLoggedIn';
import { PrivateRoute } from './AuthServices/Routes/PrivateRoute';
import { MainUsersRoute } from './AuthServices/Routes/MainUsersRoute';
import {BlogProvider} from './Contexts/BlogContext';
import routes from './routes';
import useScrollToTop from './ReusableComponents/ScrollToTop/useScrollToTop';


function App() {

  
  return (
    <div className="App">
      <>
        <UserProvider>
          <BlogProvider>

          <RouterProvider router={routes}/>
            {/* <useScrollToTop/> */}
          </BlogProvider>
        </UserProvider>
      </>
    </div>
  );
}

export default App;
