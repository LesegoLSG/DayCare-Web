import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import EmptyUser from '../../../Assets/EmptyUser.png';
// import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
//Links icons
import { MdOutlineDashboard } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { SiBloglovin } from "react-icons/si";

const SideBar = ({ setActiveComponent }) => {
    const [open, setOpen] = useState(true);
    const navigate = useNavigate();

    const menus = [
        { title: "Dashboard", icon: <MdOutlineDashboard />, navigate: "/portal/dashboard", component: "dashboard" },
        { title: "Users", icon: <FaUserFriends />, navigate: "/portal/users", component: "users" },
        { title: "Blog", icon: <SiBloglovin />, navigate: "/portal/blog", component: "blog" }
    ];
    //Navigation
    const handleMenuClick = (path) => {

        navigate(path);
    };


    return (
        <div className="flex">
            <div className={`${open ? "w-72" : "w-20"} duration-300 h-screen p-5 pt-8 bg-blue-200 relative`}>
                {open ? (
                    <FaArrowLeft
                        onClick={() => setOpen(!open)}
                        className="absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 bg-red-200 text-2xl"
                    />
                ) : (<FaArrowRight
                    onClick={() => setOpen(!open)}
                    className="absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 bg-red-200 text-2xl"
                />)
                }
                <div className="flex gap-x-4 items-center">
                    <h1
                        className={`cursor-pointer duration-500`}
                    >Logo</h1>
                    <h1 className={`text-white origin-left font-medium text-xl duration-300 ${!open && "scale-0"}`}>Designer</h1>

                </div>
                {/* Links */}
                <ul className="bg-red-200 pt-6 text-left">
                    {menus.map((menu, index) => (
                        <li key={index}
                            // onClick={() => handleMenuClick(menu.navigate)}
                            onClick={() => setActiveComponent(menu.component)}
                            // Link to="/portal/users"
                            className="bg-green-200 text-medium item-center flex justify-start gap-x-4 cursor-pointer p-2 mb-2 hover:bg-red-600 rounded-md">
                            {menu.icon}
                            <span className={`${!open && 'hidden'} origin-left duration-200`}>{menu.title}</span>
                        </li>
                    ))}

                </ul>
            </div>

            {/* <div className="p-7 text-2xl font-semibold flex-1 h-screen">
                <h1>Haome Page</h1>
            </div> */}


        </div>
    )
}

export default SideBar