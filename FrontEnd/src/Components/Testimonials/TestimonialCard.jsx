import React from "react";
import EmptyUser from "../../Assets/EmptyUser.png";

const TestimonialCard = ({ singleTestimonial }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-sm mx-auto flex flex-col justify-between h-full">
      <p className="text-start text-gray-700 mb-4">
        {singleTestimonial.comment}
      </p>
      <div className="border-b w-full border-gray-300 my-2"></div>
      <div className="flex items-center">
        <img
          src={singleTestimonial.imageUrl || EmptyUser}
          alt={singleTestimonial.name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h3 className="text-lg font-semibold text-start">
            {singleTestimonial.name}
          </h3>
          <p className="text-gray-500 text-start">{singleTestimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
