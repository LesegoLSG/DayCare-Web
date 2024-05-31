import React, { useState,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import EmptyUser from '../../../Assets/EmptyUser.png';
import { MdOutlineDashboard } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { SiBloglovin } from "react-icons/si";
import { RiLogoutCircleLine } from "react-icons/ri";
import { FaArrowLeft, FaBars, FaTimes } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";


import AuthService from '../../../AuthServices/AuthService/AuthService';

const SideBar = () => {
   
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(true);
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
    const [isSmallScreenOpen, setIsSmallScreenOpen] = useState(false);

    const Menus = [
        { title: "Dashboard", link: "/portal/dashboard" ,icon: <MdOutlineDashboard />},
        { title: "Users", link: "/portal/users",icon: <FaUserFriends /> },
        { title: "Blog", link: "/portal/blog" ,icon: <SiBloglovin />},
        // { title: "Media", spacing: true },
        {
            title: "Teachers",
            link: "/portal/teacher",
            submenu: false, //change to true is you want submenu's
            submenuItems: [
                { title: "submenu 1" },
                { title: "submenu 2" },
                { title: "submenu 3" },
            ]
        },
        { title: "Learners" },
        { title: "Administrators" },
        { title: "Other Stuff" },
        { title: "Profile", },

        { title: "Logout", spacing: true, link: "/", icon: <RiLogoutCircleLine /> },
    ];

    const handleNavigate = (url) => {
        navigate(url);
    };

    //Ensures that the sidebar is always fully open
    useEffect(() => {
        if (window.innerWidth < 768) {
            setIsOpen(true);
        }
    }, [isSmallScreenOpen]);

    return (
        <div className="flex">
            <div className="md:hidden absolute top-2 left-4 z-50">
                {!isSmallScreenOpen &&
                    <FaBars
                        className="text-3xl cursor-pointer"
                        onClick={() => setIsSmallScreenOpen(true)}
                    />
                }
            </div>

            <div className={`bg-[#352F44]  h-screen p-5 pt-8 absolute md:relative ${isOpen ? "w-72" : "w-20"} duration-500 md:block ${isSmallScreenOpen ? "block z-50 " : "hidden"} top-0 left-0`}>
                {!isSmallScreenOpen &&
                    <FaArrowLeft
                        onClick={() => setIsOpen(!isOpen)}
                        className={`bg-white text-black text-3xl rounded-full absolute -right-3 top-9 border border-primary cursor-pointer ${!isOpen && 'rotate-180'}`}
                    />
                }
                <FaTimes
                    className="text-white text-3xl absolute top-4 right-4 cursor-pointer md:hidden"
                    onClick={() => setIsSmallScreenOpen(false)}
                />
                <div className="inline-flex">
                    <FaBookReader className={`text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${isOpen && "rotate-[360deg]"}`} />
                    <h1 className={`text-white origin-left font-medium text-2xl duration-500 ${!isOpen && "scale-0"}`}>EduCare</h1>
                </div>
                <div className={`flex items-center rounded-md bg-white mt-6 ${!isOpen ? "px-2.5" : "px-4"} py-2`}>
                    <IoSearchOutline className={`text-gray-400 text-lg block float-left cursor-pointer mr-2 ${isOpen && "mr-2"}`} />
                    <input
                        type="text"
                        placeholder="Search"
                        className={`text-base bg-transparent w-full text-black focus:outline-none ${!isOpen && "hidden"}`}
                    />
                </div>

                <ul className="pt-2">
                    {Menus.map((menu, index) => (
                        <React.Fragment key={index}>
                            <li
                                onClick={() => handleNavigate(menu.link)}
                                className={`text-gray-300 text-2xl flex items-center gap-x-4 cursor-pointer p-2 hover:bg-[#1a0121] rounded-md ${menu.spacing ? "mt-9" : "mt-2"}`}>
                                <span>
                                    {menu.icon ? menu.icon : <MdDashboard />}
                                </span>
                                <span className={`text-base text-start font-medium flex-1 duration-200 ${!isOpen && "hidden"}`}>
                                    {menu.title}
                                </span>
                                {menu.submenu && isOpen && (
                                    <IoIosArrowDown className={` ${isSubMenuOpen && "rotate-180"}`} onClick={() => setIsSubMenuOpen(!isSubMenuOpen)} />
                                )}
                            </li>
                            {menu.submenu && isSubMenuOpen && isOpen && (
                                <ul>
                                    {menu.submenuItems.map((submenuItem, subIndex) => (
                                        <li key={subIndex} className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-blue-200 rounded-md">
                                            {submenuItem.title}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </React.Fragment>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default SideBar