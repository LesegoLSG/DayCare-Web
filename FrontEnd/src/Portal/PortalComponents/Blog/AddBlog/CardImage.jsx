// CardImage.jsx
import React from 'react';
import { FaUpload } from "react-icons/fa";

const CardImage = ({ cardImage, handleImageUpload }) => {
 

    const handleImagePreview = (imageFile) => {
      if (!imageFile) return;
      return URL.createObjectURL(imageFile);
    };

  return (
    <div className="w-full flex justify-center items-center my-4">
      <div
        className="w-full max-w-xs h-48 bg-gray-200 border-2 border-dashed border-gray-300 flex justify-center items-center cursor-pointer"
        onClick={() => document.getElementById('imageInput').click()}
      >
        {cardImage ? (
           
            <img
              className="w-full h-full object-cover"
              src={handleImagePreview(cardImage)}
              alt="Uploaded"
            />
          
        ) : (
          <div className="text-center">
            <FaUpload className="text-2xl" />
            <span>Upload Image</span>
          </div>
        )}
        <input
          id="imageInput"
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleImageUpload}
        />
      </div>
    </div>
  );
};

export default CardImage;
