import React, { useState } from 'react';
import Lottie from "lottie-react";
import animationData from './Bus.json';
import { motion } from 'framer-motion';

const Transport = () => {
    const [isMoved, setIsMoved] = useState(false);

    const handleMoveRight = () => {
        setIsMoved(true);
    };

    return (
        <div className="bg-gray-600 w-full h-screen relative ">
            <h1>Transport section</h1>
            <motion.div
                whileInView={{
                    translateX: "60vw",
                    // translateY: "500px"
                    // display: 'none'

                }}
                // initial={{
                //     translateX: "0px",
                //     // translateY: "0px",
                //     // rotate: "45deg"
                // }}
                // animate={{
                //     translateX: "2000px",
                //     // translateY: "500px",
                //     // translateY: "500px"
                //     // rotate: "45deg"
                // }}
                transition={{
                    duration: 8.5,
                    delay: 2
                }}

                className={`bg-red-200 w-40 h-40 ml-4 absolute transition-transform ${isMoved ? 'translate-x-40' : 'translate-x-0'}`}>
                <Lottie animationData={animationData} />
            </motion.div>

            <div className="absolute w-80 h-80 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h1>Day Care</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
                    et magnam deserunt ipsam ab in
                    quaerat quidem ex porro neque inventore ea excepturi labore, dolorum
                    debitis incidunt sequi. Eveniet, veritatis.</p>
                <button className="bg-blue-200 p-4">Read More</button>
            </div>
            {/* <button className="absolute bottom-2 right-2 bg-blue-500 text-white px-3 py-1 rounded" onClick={handleMoveRight}>Move Right</button> */}
        </div>
    )
}

export default Transport