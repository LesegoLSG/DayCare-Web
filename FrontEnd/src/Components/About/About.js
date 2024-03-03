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

                    <p>We provide a nurturing and playful environment for children to blossom and thrieve
                        , fostering creativity, curiosity, and compassion in every child, preparing them for a lifetime
                        of success.
                    </p>
                    <div className="flex flex-col justify-center items-start">
                        <h5 className="m-1 font-bold">What we offer:</h5>
                        <p><span className="bg-red-500  rounded-full m-1 p-1 text-xl inline-flex justify-center items-center">1</span>Early childhood education</p>
                        <p><span className="bg-blue-500  rounded-full m-1 p-1 text-xl inline-flex justify-center items-center">2</span>Nutritious Meals</p>
                        <p><span className="bg-green-500  rounded-full m-1 p-1 text-xl inline-flex justify-center items-center">3</span>Indoors and Outdoors Activities</p>
                    </div>
                    <div>
                        <h5 className="m-1 font-bold">Our Promise:</h5>
                        <p>Every day is a memorable adventure filled with laughter, joy, and endless possibilities.</p>
                        <p>Join Us: Let's embark on a journey of discovery together!</p>
                    </div>

                    <button className="bg-red-200 m-6" >Learn More</button>
                </div>
            </div>

        </section>
    )
}

export default About