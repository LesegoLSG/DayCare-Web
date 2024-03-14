import React from 'react';
import EmptyUser from '../../../../Assets/EmptyUser.png';

import { IoArrowBackSharp } from "react-icons/io5";

const UploadImage = ({ showVideo, setShowVideo, image, setImage }) => {

    const handleBackToSelfie = (e) => {
        e.preventDefault(); // Prevent form submission
        setShowVideo(!showVideo);
        setImage(null);
    };

    const handleImage = (e) => {
        setImage(e.target.files[0])
    }

    return (
        <div className="flex flex-col justify-center items-center ">
            <label htmlFor="file" style={{ cursor: 'pointer' }}>
                <div className="w-80 h-80 border rounded-full flex justify-center items-center">
                    {image ? (
                        <img
                            className="w-full h-full object-cover rounded-full"
                            src={URL.createObjectURL(image)}
                            alt="Uploaded"
                        />
                    ) : (
                        <img
                            className="w-full h-full object-cover rounded-full"
                            src={EmptyUser}
                            alt="Default"
                        />
                    )}
                </div>
            </label>
            <input
                type="file"
                id="file"
                name="file"
                onChange={handleImage}
                style={{ display: 'none' }}
            />
            <button className="bg-blue-200 w-40 h-8 m-1 flex justify-center items-center" onClick={handleBackToSelfie}>
                <IoArrowBackSharp className="m-1" /> Back to selfie
            </button>
        </div>
    )
}

export default UploadImage