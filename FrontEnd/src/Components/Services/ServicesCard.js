import React from 'react';
// import Lottie from "lottie-react";

const ServicesCard = ({ singleService, onOpenModal, index }) => {
    const { title, briefDescription, icon, extendedDescription, imageMain, animation, colorStyling } = singleService;



    return (

        <div className="bg-red-200 w-[16rem] h-[16rem] m-6 p-6 flex flex-col justify-center items-center relative rounded-full  border-4  border-solid " style={{ borderColor: colorStyling }}>
            <div className="bg-red-400 rounded-full w-[5rem] h-[5rem] absolute top-0 right-2 transform -translate-y-1/2 border border-black border-solid">
                {animation}
            </div>
            <h1 className="text-base font-semibold mt-6">{title}</h1>
            <p>{briefDescription}</p>
            <button className="bg-red-600 mt-4" onClick={() => onOpenModal(singleService)}>Read More</button>
        </div>
    )
}

export default ServicesCard