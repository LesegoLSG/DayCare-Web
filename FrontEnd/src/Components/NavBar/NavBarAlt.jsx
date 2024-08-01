import React, { useState, useEffect } from "react";
import { IoMenu, IoCloseCircleOutline } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import Logo1 from "../../Assets/Logo/Logo1.png";

// import { Link } from 'react-scroll';
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import TopScroller from "./TopScroller";
import SocialIcons from "./SocialIcons";

const NavBarAlt = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  //Navigate to home
  const handleHomeNavigation = () => {
    navigate("/");
  };

  return (
    <section className=" shadow-md w-full fixed top-0 left-0 z-50">
      <div className="md:px-10 py-4 md:py-0 px-7 md:flex justify-between items-center bg-white ">
        {/* Logo */}
        <div className="flex cursor-pointer items-center gap-2">
          <img
            src={Logo1}
            alt="Logo1"
            className="w-28"
            onClick={handleHomeNavigation}
          />
        </div>
        {/* Menu Icons */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="w-7 h-7 absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {!isOpen ? <IoMenu size={25} /> : <IoCloseCircleOutline size={25} />}
        </div>

        {/* NavLinks */}
        <ul
          className={`md:flex  md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all
                     bg-white duration-500 ease-in ${
                       isOpen ? "top-20" : "top-[-490px]"
                     } `}
        >
          <li className="my-4">
            <a onClick={handleHomeNavigation} className="cursor-pointer">
              Home
            </a>
          </li>
          <button
            className="button mx-2 md:ml-8 md:static"
            onClick={() => navigate("/login")}
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
  );
};

export default NavBarAlt;
