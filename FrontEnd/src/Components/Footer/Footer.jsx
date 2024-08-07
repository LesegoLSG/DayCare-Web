import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  IoLogoFacebook,
  IoLogoWhatsapp,
  IoLogoInstagram,
} from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  //Scroll to a selected section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleHomeNavigate = () => {
    navigate("/");
  };

  return (
    <footer>
      <div className="p-4 bg-gray-800 text-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            <div className="mb-5">
              <h4 className="text-2xl pb-4">Locate Us</h4>
              <p className="text-gray-500">
                122D East Street
                <br />
                Johannesburg <br />
                1868 <br /> <br />
                <strong>Phone:</strong> +27 64 037 3089
                <br />
                <strong>Email:</strong>lesegomhlongo78@gmail.com
                <br />
              </p>
            </div>
            <div className="mb-5">
              <h4 className="text-2xl pb-4">Organization</h4>
              {/* display links based on the url */}
              {location.pathname == "/" ? (
                <ul>
                  <li
                    className="pb-4 cursor-pointer"
                    onClick={() => scrollToSection("home")}
                  >
                    Home
                  </li>
                  <li
                    className="pb-4 cursor-pointer"
                    onClick={() => scrollToSection("about")}
                  >
                    About
                  </li>
                  <li
                    className="pb-4 cursor-pointer"
                    onClick={() => scrollToSection("services")}
                  >
                    Services
                  </li>
                  <li
                    className="pb-4 cursor-pointer"
                    onClick={() => scrollToSection("blog")}
                  >
                    Blog
                  </li>
                </ul>
              ) : (
                <ul>
                  <li
                    className="pb-4 cursor-pointer"
                    onClick={handleHomeNavigate}
                  >
                    Home
                  </li>
                </ul>
              )}
            </div>
            <div className="mb-5">
              <h4 className="text-2xl pb-4">Important Links</h4>
              <ul>
                <li className="pb-4 cursor-pointer">
                  <Link to="/terms&Conditions">Terms of services</Link>
                </li>
                <li className="pb-4 cursor-pointer">
                  <Link to="/privacy-policy">Privacy policy</Link>
                </li>
                <li className="pb-4 cursor-pointer">Documentation</li>
              </ul>
            </div>
            <div className="mb-5">
              <h4 className="text-2xl pb-4">Join Our Newsletter</h4>
              <p>
                Join 100+ other and never miss out on our tips,adventures and
                more
              </p>
              <form>
                <input
                  className="p-2 text-black rounded-lg"
                  placeholder="Enter Your Email"
                  type="text"
                />
                <button className="button m-2">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom section */}
      <div className="w-full bg-gray-900 text-gray-500 px-10">
        <div className="max-w-7xl flex flex-col sm:flex-row py-4 mx-auto justify-between items-center">
          <div className="text-center">
            <div>
              &copy;{" "}
              <strong>
                <span>Star Bright DayCare</span>
              </strong>
              . All Rights Reserved
            </div>
            <div>Designed by Lesego Mhlongo</div>
          </div>
          <div className="flex justify-center items-center gap-x-4">
            <IoLogoFacebook size={30} className="cursor-pointer" />
            <IoLogoInstagram size={30} className="cursor-pointer" />
            <IoLogoWhatsapp size={30} className="cursor-pointer" />
            <MdOutlineMailOutline size={30} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
