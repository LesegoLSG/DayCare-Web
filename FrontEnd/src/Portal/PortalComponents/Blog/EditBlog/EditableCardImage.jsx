import React, { useState, useEffect } from 'react';
import { FaUpload } from "react-icons/fa";

const EditableCardImage = ({ cardImage, onImageUpload,firstPass }) => {
   

    

    const handleImagePreview = (imageFile) => {
        if (!imageFile) return;
        return URL.createObjectURL(imageFile);
    };
    console.log("firstPass:",firstPass);
    return (
        <div className="w-full flex justify-center items-center my-4">
            <div
                className="w-full max-w-xs h-48 bg-gray-200 border-2 border-dashed border-gray-300 flex justify-center items-center cursor-pointer"
                onClick={() => document.getElementById('imageInput').click()}
            >
                {firstPass ? (
                    <div
                        className="bg-red-400 w-full h-full flex justify-center items-center"
                       
                    >
                        <FaUpload className="text-2xl text-white" />
                        <span className="text-white ml-2">Click to Upload Image</span>
                        console.log("first method")
                    </div>
                ) : cardImage ? (
                
                    <img
                
                        className="w-full h-full object-cover"
                        src={handleImagePreview(cardImage)}
                        alt="Uploaded"
                    />
                    
                ) : (
                    <div className="text-center "  >
                        <FaUpload className="text-2xl" />
                        <span>Upload Image</span>
                        console.log("third condition")
                    </div>
                )}
                <input
                    id="imageInput"
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={onImageUpload}
                />
            </div>
        </div>
    );
};

export default EditableCardImage;
