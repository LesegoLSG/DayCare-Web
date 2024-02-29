import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate("/portal");
    }

    return (
        <div className="bg-red-200 w-[80%] h-[30rem] md:w-[30%] md:h-[26rem]">
            <form onSubmit={handleNavigate}>
                <h1 className="text-xl font-semibold m-6">Login</h1>
                <div className="flex flex-col justify-center items-start p-2">
                    <label className="">Email:</label>
                    <input
                        className="w-full h-8 border rounded-md"
                        type="email"
                        placeholder="Email"
                    />
                </div>
                <div className="flex flex-col justify-center items-start p-2">
                    <label className="">Password:</label>
                    <input
                        className="w-full h-8 border rounded-md"
                        type="email"
                        placeholder="Password"
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