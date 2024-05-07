import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import EmptyUser from '../../../Assets/EmptyUser.png';
// import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
//Links icons
import { MdOutlineDashboard } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { SiBloglovin } from "react-icons/si";
import { RiLogoutCircleLine } from "react-icons/ri";

import AuthService from '../../../AuthServices/AuthService/AuthService';

const SideBar = () => {
    const [open, setOpen] = useState(true);
    const navigate = useNavigate();

    const menus = [
        { title: "Dashboard", icon: <MdOutlineDashboard />, path: "/portal" },
        { title: "Users", icon: <FaUserFriends />, path: "/portal/users" },
        { title: "Blog", icon: <SiBloglovin />, path: "/portal/blog" }
    ];
    //Navigation
    const handleMenuClick = (path) => {

        navigate(path);
    };


    return (
        <div className="flex">
            <div className={`${open ? "w-72" : "w-20"} duration-300 h-screen p-5 pt-8 bg-[#1f2536] relative`}>
                {open ? (
                    <FaArrowLeft
                        onClick={() => setOpen(!open)}
                        className="absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 bg-blue-200 text-2xl"
                    />
                ) : (<FaArrowRight
                    onClick={() => setOpen(!open)}
                    className="absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 bg-blue-200 text-2xl"
                />)
                }
                <div className="flex gap-x-4 items-center">
                    <h1
                        className={`cursor-pointer duration-500`}
                    >Logo</h1>
                    <h1 className={`text-white origin-left font-medium text-xl duration-300 ${!open && "scale-0"}`}>Designer</h1>

                </div>
                {/* Links */}
                <ul className=" h-[44rem] pt-6 text-left">
                    {menus.map((menu, index) => (
                        <li key={index} className=" w-full p-2 mb-2  rounded-md">
                            <Link to={menu.path} className="flex items-center gap-x-4 cursor-pointer">
                                <div className=" text-white hover:text-blue-200 text-lg font-medium item-center flex justify-start gap-x-4 cursor-pointer  rounded-md">
                                    {menu.icon}
                                    <span className={`${!open && 'hidden'} origin-left duration-200`}>{menu.title}</span>
                                </div>
                            </Link>
                        </li>
                    ))}

                </ul>
                <div className="absolute bottom-0 left-0 w-full p-2 mb-2 text-white hover:bg-red-600 rounded-md">

                    <Link to="/">
                        <div className="text-lg font-medium item-center flex justify-start gap-x-4 cursor-pointer  rounded-md" onClick={AuthService.logout}>
                            <RiLogoutCircleLine />
                            <span className={`${!open && 'hidden'} origin-left duration-200`}>Logout</span>
                        </div>
                    </Link>

                </div>

            </div>

            {/* <div className="p-7 text-2xl font-semibold flex-1 h-screen">
                <h1>Haome Page</h1>
            </div> */}


        </div>
    )
}

export default SideBar