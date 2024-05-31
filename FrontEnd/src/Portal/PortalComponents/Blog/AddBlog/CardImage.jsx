// CardImage.jsx
import React from 'react';
import { FaUpload } from "react-icons/fa";

const CardImage = ({ cardImage, handleImageUpload }) => {
    console.log("cardImage in edit:",cardImage);
    const containerStyle = {
        width: '100%',
        maxHeight: '200px', // Example max height for the image container
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundImage: cardImage ? `url(${typeof cardImage === 'string' ? cardImage : URL.createObjectURL(cardImage)})` : 'none',
      };
  return (
    <div className="w-full flex justify-center items-center my-4">
      <div
        className="w-full max-w-xs h-48 bg-gray-200 border-2 border-dashed border-gray-300 flex justify-center items-center cursor-pointer"
        onClick={() => document.getElementById('imageInput').click()}
      >
        {cardImage ? (
          typeof cardImage === 'string' ? (
            <img
              className="w-full h-full object-cover"
              src={`url(data:image/png;base64,${cardImage})`} 
              alt="Uploaded"
              
            />
          ) : (
            <img
              className="w-full h-full object-cover"
              src={URL.createObjectURL(cardImage)}
              alt="Uploaded"
            />
          )
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
