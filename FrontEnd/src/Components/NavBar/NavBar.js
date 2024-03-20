import React, { useState, useEffect } from 'react';
import { IoLogoChrome } from "react-icons/io";
import { IoMenu, IoCloseCircleOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { useLocation, useNavigate } from 'react-router-dom';
import LessLog from '../../Assets/LessLogo.png';


// import { Link } from 'react-scroll';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const NavBar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [open, setOpen] = useState(true);
    const [activeSection, setActiveSection] = useState('home'); // Initialize with 'hero'


    const sections = ['home', 'about', 'services'];

    // Function to set active section based on URL hash
    const setActiveSectionFromURL = () => {
        const hash = location.hash[0] === '#' ? location.hash.slice(1) : location.hash; // Using array indexing
        if (sections.includes(hash)) {
            console.log(hash);
            setActiveSection(hash);
        }
    };

    // Effect to set active section initially and on URL change
    useEffect(() => {
        setActiveSectionFromURL();
    }, [location]);

    //Method to change the color of the selected link
    const handleNavigateActive = (section) => {
        const homeSection = document.getElementById(section);

        if (homeSection) {
            const position = homeSection.offsetTop;
            scroll.scrollTo(position, {
                smooth: true,
                duration: 500,
                offset: -80,
            });
            // Update active section
            setActiveSection(section);
            // Optionally close the mobile menu if it's open
            setOpen(false);
        }
    };

    return (
        <div className="shadow-md w-full fixed top-0 left-0 z-10">


            <div className="md:flex items-center justify-between bg-white py-2 md:px-10 px-7 ">
                <div className="font-bold text-2xl cursor-pointer flex items-center font-[poppins] text-gray-800 overflow-hidden">
                    <span className="text-3xl text-indigo-600 mr-1 pt-2">
                        <IoLogoChrome />
                    </span>
                    Designer
                </div>
                <div onClick={() => setOpen(!open)}
                    className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
                    {open ? (
                        <IoMenu />
                    ) : (
                        <IoCloseCircleOutline />
                    )
                    }

                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0
                 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${!open ? "top-20 opacity-100" : "top-[-490]"} md:opacity-100 opacity-0`}>
                    {sections.map((section) => (
                        <li key={section} className="md:ml-8 text-xl md:my-0 my-7">
                            <ScrollLink
                                to={section}
                                smooth={true}
                                duration={500}
                                // offset={-80}
                                className={`text-gray-800 text-sm hover:text-gray-400 duration-500 cursor-pointer ${activeSection === section ? 'font-bold text-indigo-600' : ''}`}
                                onClick={() => handleNavigateActive(section)}
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </ScrollLink>
                        </li>
                    ))}
                    <button className="bg-indigo-600 text-white font-[poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500"
                        onClick={() => navigate('/login')}
                    >
                        SignIn
                    </button>
                </ul>
            </div>

        </div>
    )
}

export default NavBar