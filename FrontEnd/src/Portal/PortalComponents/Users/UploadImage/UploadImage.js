import React from 'react';
import EmptyUser from '../../../../Assets/EmptyUser.png';

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
        <div>
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
            <button className="bg-red-400" onClick={handleBackToSelfie}>
                Back to selfie
            </button>
        </div>
    )
}

export default UploadImage