import React, { useState, useEffect } from 'react';
import { IoLogoChrome } from "react-icons/io";
import { IoMenu, IoCloseCircleOutline } from "react-icons/io5";
import { useLocation, useNavigate } from 'react-router-dom';
import LessLog from '../../Assets/LessLogo.png';


// import { Link } from 'react-scroll';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import TopScroller from './TopScroller';
import SocialIcons from './SocialIcons';

const NavBar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home'); // Initialize with 'hero'


    const sections = ['home', 'about', 'services', 'blog','contact'];

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
            setIsOpen(false);
        }
    };

    return (
        <section className=" shadow-md w-full fixed top-0 left-0 z-50">
            <div className="md:px-10 py-4 px-7 md:flex justify-between items-center bg-white ">
                {/* Logo */}
                <div className="flex text-2xl cursor-pointer items-center gap-2">
                <IoLogoChrome className="w-7 h-7 text-primary " />
                  <span className="font-bold">Less-Ego</span>
                </div>
                {/* Menu Icons */}
                <div onClick={() => setIsOpen(!isOpen)} className="w-7 h-7 absolute right-8 top-6 cursor-pointer md:hidden">
                   {!isOpen ? (
                    <IoMenu size={25}/>
                   ):(
                    <IoCloseCircleOutline size={25}/>
                   )

                   }
                </div>

                {/* NavLinks */}
                <ul className={`md:flex  md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all
                     bg-white duration-500 ease-in ${isOpen ? 'top-12' : 'top-[-490px]'} `}>
                {sections.map((section) => (
                        <li key={section} className="my-7 md:my-0 md:ml-8">
                            <ScrollLink
                                to={section}
                                smooth={true}
                                duration={500}
                                // offset={-80}
                                className={`text-gray-800 text-sm hover:text-gray-400 duration-500 cursor-pointer ${activeSection === section ? 'font-bold text-action' : ''}`}
                                onClick={() => handleNavigateActive(section)}
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </ScrollLink>
                        </li>
                    ))}
                    <button className="button mx-2 md:ml-8 md:static"
                    onClick={() => navigate('/login')}
                        >
                    SignIn
                </button>
                </ul>
            </div>
            
             {/* SideBar social media icons, visible on a screen greater than 764px */}
             <SocialIcons />
             {/* Scroll to top button */}
             <TopScroller />

        </section>
    )
}

export default NavBar