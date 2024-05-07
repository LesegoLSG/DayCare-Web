import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoLogoChrome } from "react-icons/io";
import { IoHome } from "react-icons/io5";

const LoginHomeNavBar = () => {
    const navigate = useNavigate();
    const handleHomeNavigation = () => {
        navigate("/");
    }

    return (
        <div className="bg-blue-200 w-full h-10 flex justify-between items-center px-10 py-2">
            <div className="font-bold text-2xl cursor-pointer flex items-center font-[poppins] text-gray-800 overflow-hidden">
                <span className="text-3xl text-indigo-600 mr-1 pt-2">
                    <IoLogoChrome />
                </span>
                Designer
            </div>

            <div className="flex flex-row justify-center items-center cursor-pointer" onClick={handleHomeNavigation}>
                <IoHome size={25} />
                <span>Home</span>
            </div>
        </div>
    )
}

export default LoginHomeNavBar