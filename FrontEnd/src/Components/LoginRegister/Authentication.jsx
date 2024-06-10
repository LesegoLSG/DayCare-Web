import React from 'react';
import Login from './Login';
import NavBar from '../NavBar/NavBar';
import LoginHomeNavBar from '../NavBar/LoginHomeNavBar';

const Authentication = () => {
    return (
        <div className=''>
            {/* <LoginHomeNavBar /> */}
            <div className="w-full h-screen flex justify-center items-center">

                <Login />
            </div>
        </div>
    )
}

export default Authentication