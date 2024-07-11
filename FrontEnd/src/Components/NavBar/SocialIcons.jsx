import React from "react";
import {
  IoLogoFacebook,
  IoLogoWhatsapp,
  IoLogoInstagram,
} from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="hidden md:flex fixed flex-col top-1/2 left-0">
      <ul>
        <li className="w-[130px] h-[40px] flex flex-col justify-center items-center ml-[-95px]  hover:ml-[0px] duration-300">
          <a
            className="bg-action flex justify-center items-center w-full text-white rounded-r-lg"
            href="https://wa.me/0640373089"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4 className="mr-[20px]">WhatsApp</h4> <IoLogoWhatsapp size={30} />
          </a>
        </li>

        <li className="w-[130px] h-[40px] flex flex-col justify-center items-center ml-[-95px]  hover:ml-[0px] duration-300">
          <a
            className="bg-action flex justify-center items-center w-full text-white rounded-r-lg"
            href="https://www.facebook.com/lesego.mhlongo.3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4 className="mr-[20px]">Facebook</h4> <IoLogoFacebook size={30} />
          </a>
        </li>
        <li className="w-[130px] h-[40px] flex flex-col justify-center items-center ml-[-95px]  hover:ml-[0px] duration-300">
          <a
            className="bg-action flex justify-center items-center w-full text-white rounded-r-lg"
            href="https://www.linkedin.com/in/lesego-mhlongo-081a82228"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4 className="mr-[20px]">Instagram</h4> <FaLinkedin size={30} />
          </a>
        </li>
        <li className="w-[130px] h-[40px] flex flex-col justify-center items-center ml-[-95px]  hover:ml-[0px] duration-300">
          <a
            className="bg-action flex justify-center items-center w-full text-white rounded-r-lg"
            href="mailto:lesegomhlongo78@gmail.com"
          >
            <h4 className="mr-[20px] pr-8">Email</h4>{" "}
            <MdOutlineMailOutline size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialIcons;
