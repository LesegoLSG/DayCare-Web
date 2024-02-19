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
        <section id="about" className=" w-full h-screen pt-20 ">
            <div className="flex justify-center">
                <h1 className="text-2xl font-bold">About</h1>
            </div>
            <div className="bg-green-200 w-full h-auto grid sm:grid-cols-1 md:grid-cols-2 p-6 ">

                <div className=''>
                    <Lottie animationData={animationData} />
                </div>
                <div className="flex flex-col justify-center items-center">
                    <p>We provide a nurturing and playful environment for children to blossom and thrieve
                        , fostering creativity, curiosity, and compassion in every child, preparing them for a lifetime
                        of success.
                    </p>
                    <button className="bg-red-200" >Learn More</button>
                </div>
            </div>

        </section>
    )
}

export default About