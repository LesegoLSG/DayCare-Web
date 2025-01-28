import React from "react";
import EmptyUser from "../../Assets/EmptyUser.png";
import Lesego from "../../Assets/Lesego.png";
import LesegoMhlongo from "../../Assets/LesegoMhlongo.png";
import lsg from "../../Assets/lsg.png";
import Moon2 from "../../Assets/Moon2.png";
import Moon from "../../Assets/Moon.png";
import PlayingKid from "../../Assets/PlayingKid.png";
import "./About.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Lottie from "lottie-react";
import animationData from "./KidsAnimation.json";
import { useNavigate } from "react-router-dom";
import { scrollToTop } from "../../ReusableComponents/ScrollToTop";

const About = () => {
  const navigate = useNavigate();

  const handleMoreInfo = () => {
    navigate("/aboutInfo");
    scrollToTop();
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      id="about"
      className="bg-white w-full h-auto pt-20 px-2 md:px-12 relative py-16"
    >
      <div className="flex flex-col justify-center">
        <h1 className="h2 my- text-touch">Our Journey</h1>
        <motion.h2
          initial={{ rotateX: 0 }}
          whileInView={{ rotateX: "360deg" }}
          transition={{ duration: 2 }}
          className="h3"
        >
          Discover Our Story of Nurturing and Growth
        </motion.h2>
      </div>
      <div className=" w-full h-auto grid sm:grid-cols-1 md:grid-cols-2 p-2 py-16">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 2 }}
        >
          <img src={PlayingKid} alt="" />
        </motion.div>
        <div className="flex flex-col justify-center items-center ">
          <motion.p
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            exit={{ y: 100 }}
          >
            We are a trusted daycare center with over 10 years of experience in
            providing a nurturing and playful environment for children to
            blossom and thrive. At Star Bright, we believe in fostering
            creativity, curiosity, and compassion in every child, preparing them
            for a lifetime of success.
          </motion.p>

          <motion.div
            className="w-full grid grid-cols-2 gap-1 mt-10"
            initial={{ scale: 0, y: 100 }}
            whileInView={{ scale: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            <div className=" w-auto h-auto ">
              <h1 className="text-[#36C2CE] font-bold transform -rotate-6">
                AGE GROUP:
              </h1>
              <h2 className="font-bold">2-6 Years</h2>
              <h1 className="text-[#36C2CE] font-bold transform -rotate-6">
                Grade R
              </h1>
              <h2 className=" font-bold transform -rotate-10">5-6 Years</h2>
            </div>
            <div className=" w-auto h-auto ">
              <h1 className="text-[#36C2CE] font-bold">TRADING HOURS:</h1>
              <h2>7:00am - 4:00pm</h2>
              <h2>Monday - Thursday</h2>
              <h2>Friday 7:00am - 3:00pm</h2>
              <h2>Closed public holidays</h2>
            </div>
          </motion.div>

          <button className=" button" onClick={handleMoreInfo}>
            Learn More
          </button>
        </div>
      </div>

      <div className="custom-shape-divider-bottom-1717894530">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </motion.section>
  );
};

export default About;
