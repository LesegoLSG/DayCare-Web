import React from 'react';
import { FaUpload } from "react-icons/fa";

const CardImage = ({cardImage,handleImageUpload}) => {
  return (
    
     <div className="w-full h-auto flex justify-center items-center">
     <div className="bg-green-200 w-[18rem] h-[10rem] cursor-pointer object-cover" onClick={() => document.getElementById('imageInput').click()}>
                 {cardImage ? (
                     <img 
                     className=""
                     src={URL.createObjectURL(cardImage)} 
                     alt="Uploaded Image" />
                 ) : (
                     <div className="w-full h-full flex flex-col justify-center items-center ">
                         <FaUpload />
                         <span>Upload Image</span>
                     </div>
                 )}
                 <input id="imageInput" type="file" accept="image/*" style={{ display: 'none' }} onChange={handleImageUpload} />
             </div>
     </div>
  )
}

export default CardImage