import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AuthService from '../../AuthServices/AuthService/AuthService';
import { IoIosEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";

const Login = () => {
    const navigate = useNavigate();
    const [passwordVisibility, setPasswordVisibility] = useState(false);

    const handleVisibility = () => {
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
        <div className="bg-white w-[80%] h-[30rem] md:w-[30%] md:h-[26rem] rounded-lg shadow-lg">
            <form onSubmit={handleLoginSubmit}>
                <h1 className="text-xl font-semibold m-6">Login</h1>
                <div className="flex flex-col justify-center items-start p-2">
                    <label className="">Email:</label>
                    <input
                        className="w-full h-8 border rounded-md"
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={loginDetails.email}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="flex flex-col justify-center items-start p-2 relative"> {/* Add relative positioning */}
                    <label className="">Password:</label>
                    <div className="w-full flex flex-row">
                        <input
                            className="w-full h-8 border rounded-md pr-8"
                            type={passwordVisibility ? "text" : "password"}
                            placeholder="Password"
                            name="password"
                            value={loginDetails.password}
                            onChange={handleInputChange}
                        />
                        <div className="absolute right-4 top-5 bottom-0 flex justify-center items-center"> {/* Position the eye icon absolutely */}
                            <div className="rounded-l-lg" onClick={handleVisibility}>
                                {!passwordVisibility ? (
                                    <IoEye size={25} />
                                ) : (
                                    <IoIosEyeOff size={25} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center p-2">
                    <button className="bg-blue-200 w-full h-8 mt-4 rounded-md" type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login;
