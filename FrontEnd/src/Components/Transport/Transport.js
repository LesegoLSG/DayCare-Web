import React, { useState } from 'react';
import Lottie from "lottie-react";
import animationHome from './AnimationJSONTransport/Home.json';
import animationDestination from './AnimationJSONTransport/Destination.json';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Transport = () => {
    const navigate = useNavigate();
    const address = "1330 Mosia Street Moletsane, Soweto"
    // Assuming contact.address holds the address string
    // const formattedAddress = address.replace(/\s/g, '+'); // Replace spaces with '+'
    // Construct the Google Maps URL
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${address}`;

    return (
        <div className="bg-gray-600 w-full h-screen relative ">
            <h1>Transport section</h1>
            <div className=" w-40 h-40 ml-4 absolute ">
                <Lottie animationData={animationHome} />
            </div>

            <div className="absolute w-80 h-80 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h1>Day Care</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
                    et magnam deserunt ipsam ab in
                    quaerat quidem ex porro neque inventore ea excepturi labore, dolorum
                    debitis incidunt sequi. Eveniet, veritatis.</p>
                <button
                    onClick={() => navigate("/transportService")}
                    className="bg-blue-200 p-4">Read More</button>
            </div>
            {/* <button className="absolute bottom-2 right-2 bg-blue-500 text-white px-3 py-1 rounded" onClick={handleMoveRight}>Move Right</button> */}
            <div className="absolute bottom-4 right-4 w-60 h-60">
                <Lottie animationData={animationDestination} />
                <a href={googleMapsUrl} target="_blank" >1330 Mosia Street</a>
            </div>
        </div>


    )
}

export default Transport