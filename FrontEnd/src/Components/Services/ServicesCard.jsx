import React from "react";
import { useNavigate } from "react-router-dom";

const ServicesCard = ({ singleService, onOpenModal, index }) => {
  const {
    title,
    briefDescription,
    icon,
    extendedDescription,
    imageMain,
    animation,
    colorStyling,
  } = singleService;

  const navigate = useNavigate();
  // Calculate rotation angle based on index
  // const rotationAngle = index % 2 === 0 ? '4' : '8';

  // Calculate translateY value based on index
  // const translateY = `${index * -10}px`; // Adjust this value as needed for the desired spacing

  return (
    <div
      className=" w-[18rem] h-[18rem] m-6 p-6 flex flex-col justify-center items-center relative rounded-full  border-4  border-solid "
      style={{ borderColor: colorStyling }}
    >
      <div className="bg-balance rounded-full w-[5rem] h-[5rem] absolute top-0 right-2 transform -translate-y-1/2 border border-black border-solid">
        {animation}
      </div>
      <h1 className="text-base font-semibold mt-6">{title}</h1>
      <p>{briefDescription}</p>
      <button
        className="button"
        onClick={() => navigate(`/servicedetails/${singleService.id}`)}
      >
        Read More
      </button>
    </div>
  );
};

export default ServicesCard;
