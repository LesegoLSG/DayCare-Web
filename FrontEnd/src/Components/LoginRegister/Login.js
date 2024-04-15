import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AuthService from '../../AuthServices/AuthService/AuthService';
// import { setToken } from '../../AuthServices/AuthService/AuthService';


const Login = () => {
    const navigate = useNavigate();
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
                navigate("/portal")
            }
        } catch (error) {
            console.log("Login:", error);
        }


    };



    return (
        <div className="bg-red-200 w-[80%] h-[30rem] md:w-[30%] md:h-[26rem]">
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
                <div className="flex flex-col justify-center items-start p-2">
                    <label className="">Password:</label>
                    <input
                        className="w-full h-8 border rounded-md"
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={loginDetails.password}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="flex flex-col justify-center items-center p-2">
                    <button className="bg-blue-200 w-full h-8 mt-4 rounded-md"
                        type="submit"
                    >
                        Login
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Login