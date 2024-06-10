import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AuthService from '../../AuthServices/AuthService/AuthService';
import { IoIosEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import LoginPlayingKids from '../../Assets/LoginPlayingKids.jpg';

const Login = () => {
    const navigate = useNavigate();
    const [passwordVisibility, setPasswordVisibility] = useState(false);

    const handleVisibility = () => {
        setPasswordVisibility(!passwordVisibility);
    }

    const togglePasswordVisibility = () => {
        setPasswordVisibility(!passwordVisibility);
    }

    const [loginDetails, setLoginDetails] = useState({
        email: "",
        password: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoginDetails(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        console.log(loginDetails);
        try {
            const response = await AuthService.login(loginDetails);
            if (response?.data?.token) {
                AuthService.setToken(response?.data?.token);
                AuthService.setRefreshToken(response?.data?.refreshToken);
                navigate("/portal")
            }
        } catch (error) {
            console.log("Login:", error);
        }
    };

    return (
        <section className="w-full h-screen flex justify-center items-center">
            {/* Main container */}
            <div className="w-full h-screen flex justify-center items-center">
                {/* left div */}
                <div className='w-full md:w-1/2 h-screen flex flex-col justify-center items-center bg-white'>
                    <h1 className="h1 my-6">Welcome Back</h1>
                    <h2 className="h2 ">Mamoriti Daycare Center</h2>
                  
                    <form className="mt-4 w-full flex flex-col justify-center items-center gap-y-6 " onSubmit={handleLoginSubmit}>
                        <div className="w-4/5 flex flex-col justify-start items-center ">
                            <label className="w-4/5 label text-start">Email Address</label>
                            <input 
                            type="email"
                            name="email"
                            value={loginDetails.email}
                            onChange={handleInputChange}
                             className="w-4/5 inputField" 
                             />
                        </div>
                <div className="w-4/5 flex flex-col justify-center items-center p-2 relative"> {/* Add relative positioning */}
                    <label className="w-4/5 label text-start">Password:</label>
                    <div className="relative w-4/5">
                                <input
                                    type={passwordVisibility ? "text" : "password"}
                                    className="w-full inputField"
                                    name="password"
                                    value={loginDetails.password}
                                    onChange={handleInputChange}
                                />
                                <button
                                    type="button"
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 focus:outline-none"
                                    onClick={togglePasswordVisibility}
                                >
                                    {passwordVisibility ? (
                                        <IoEye className="text-gray-500" size={20} />
                                    ) : (
                                        <IoIosEyeOff className="text-gray-500" size={20} />
                                    )}
                                </button>
                            </div>
                </div>
                        <div className="w-4/5 flex flex-col justify-end items-center ">
                            <p className="w-4/5 text-end cursor-pointer">Forgot Password?</p>
                        </div>
                        <div className="w-4/5 flex flex-col justify-end items-center  mt-6">
                            <button type="submit" className="button">Login</button>
                        </div>
                    </form>
                </div>
                {/* Right */}
                <div className='hidden md:flex w-1/2 h-screen  justify-start items-center bg-blue-200 relative'>
                    <div className=''>
                        <img src={LoginPlayingKids} alt="Books" className=" " />
                    </div>
                    <h1 className="h1 absolute top-50 left-60 text-white">Building Bright Futures</h1>

                </div>

            </div>


        </section>
    )
}

export default Login;
