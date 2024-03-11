import React from 'react';
import EmptyUser from '../../Assets/EmptyUser.png';
import Lesego from '../../Assets/Lesego.png';
import LesegoMhlongo from '../../Assets/LesegoMhlongo.png';
import lsg from '../../Assets/lsg.png';
import Moon2 from '../../Assets/Moon2.png';
import Moon from '../../Assets/Moon.png';

import Lottie from "lottie-react";
import animationData from './KidsAnimation.json';
const About = () => {
    return (
        <section id="about" className="bg-gray-300 w-full h-auto pt-20">
            <div className="flex justify-center">
                <h1 className="text-2xl font-bold">About</h1>
            </div>
            <div className="bg-green-200 w-full h-auto grid sm:grid-cols-1 md:grid-cols-2 p-6 ">

                <div className=''>
                    <Lottie animationData={animationData} />
                </div>
                <div className="flex flex-col justify-center items-center">

                    <p>We are a trusted daycare center with over 10 years of experience in providing a nurturing and playful environment for children to blossom and thrive. At [Mamoriti], we believe in fostering creativity, curiosity, and compassion in every child, preparing them for a lifetime of success.</p>

                    <div className="bg-red-400 w-full grid grid-cols-2 gap-1 mt-10">
                        <div className="bg-white w-auto h-auto ">
                            <h1 className="text-green-600 font-bold transform -rotate-6">AGE GROUP:</h1>
                            <h2 className="font-bold">2-6 Years</h2>
                            <h1 className="text-green-600 font-bold transform -rotate-6">Grade R</h1>
                            <h2 className=" font-bold transform -rotate-10">5-6 Years</h2>
                        </div>
                        <div className="bg-blue-200 w-auto h-auto ">
                            <h1 className="text-green-600 font-bold">TRADING HOURS:</h1>
                            <h2>7:00am - 4:00pm</h2>
                            <h2>Monday - Thursday</h2>
                            <h2>Friday 7:00am - 3:00pm</h2>
                            <h2>Closed public holidays</h2>
                        </div>
                    </div>

                    <button className="bg-red-200 m-6" >Learn More</button>
                </div>
            </div>

        </section>
    )
}

export default About