import React from 'react';
import EmptyUser from '../../Assets/EmptyUser.png';
import Lesego from '../../Assets/Lesego.png';
import LesegoMhlongo from '../../Assets/LesegoMhlongo.png';
import lsg from '../../Assets/lsg.png';
import Moon2 from '../../Assets/Moon2.png';
import Moon from '../../Assets/Moon.png';
import PlayingKid from '../../Assets/PlayingKid.png';
import './About.css';
import {motion} from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Lottie from "lottie-react";
import animationData from './KidsAnimation.json';
import { useNavigate } from 'react-router-dom';
const About = () => {
    const navigate = useNavigate();
    return (
        <motion.section
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
         id="about" className="bg-white w-full h-auto pt-20 px-12 relative" style={{position:"relative"}}>
 
            <div className="flex flex-col justify-center">
                <h1 className="h2 my-2">About US</h1>
                <h2 className='h3'>Discover Our Story of Nurturing and Growth</h2>
            </div>
            <div className=" w-full h-auto grid sm:grid-cols-1 md:grid-cols-2 p-6 ">

                <div>
                    <img src={PlayingKid}  alt=""/>
                </div>
                <div className="flex flex-col justify-center items-center">

                    <p>We are a trusted daycare center with over 10 years of experience in providing a nurturing and playful environment for children to blossom and thrive. At [Mamoriti], we believe in fostering creativity, curiosity, and compassion in every child, preparing them for a lifetime of success.</p>

                    <div className=" w-full grid grid-cols-2 gap-1 mt-10">
                        <div className=" w-auto h-auto ">
                            <h1 className="text-green-600 font-bold transform -rotate-6">AGE GROUP:</h1>
                            <h2 className="font-bold">2-6 Years</h2>
                            <h1 className="text-green-600 font-bold transform -rotate-6">Grade R</h1>
                            <h2 className=" font-bold transform -rotate-10">5-6 Years</h2>
                        </div>
                        <div className=" w-auto h-auto ">
                            <h1 className="text-green-600 font-bold">TRADING HOURS:</h1>
                            <h2>7:00am - 4:00pm</h2>
                            <h2>Monday - Thursday</h2>
                            <h2>Friday 7:00am - 3:00pm</h2>
                            <h2>Closed public holidays</h2>
                        </div>
                    </div>

                    <button className=" button" onClick={() => navigate("/aboutInfo")}>Learn More</button>
                </div>
            </div>

   


        </motion.section>
    )
}

export default About