import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import VideoOrImageDisplay from './VideoOrImageDisplay/VideoOrImageDisplay';
import UploadImage from './UploadImage/UploadImage';
import InputValidation from '../../../ReusableComponents/Validations/InputValidation';

import { IoMdCloseCircleOutline } from "react-icons/io";
import FormSubmit from './FormSubmit';

const EditUser = ({ userToEdit, closeModal }) => {

    const navigate = useNavigate();
    const [showVideo, setShowVideo] = useState(true);

    const [image, setImage] = useState(null);

    const [user, setUser] = useState({
        id: userToEdit.id,
        firstName: userToEdit.firstName,
        lastName: userToEdit.lastName,
        email: userToEdit.email,
        password: userToEdit.password,
        mobile: userToEdit.mobile,
        role: userToEdit.role,
        whatsAppNo: userToEdit.whatsAppNo,
        facebookLink: userToEdit.facebookLink,
        instagramLink: userToEdit.instagramLink,
        linkedInLink: userToEdit.linkedInLink
    });
    const [error, setError] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser(prevUser => ({ ...prevUser, [name]: value }));
        console.log("Changes:", user);
    };


    const handleOnClose = (e) => {
        if (e.target.id === "container")
            closeModal();
    }

    const uploadsection = () => {
        setShowVideo(!showVideo);
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log("onSubmit is clicked...");
        console.log("image state:", image);
        console.log("user state:", user);

        try {
            console.log("----------1")
            const formData = new FormData();
            if (image) {
                formData.append('image', image);
            }
            formData.append('user', JSON.stringify(user));

            const response = await axios.put(`http://localhost:8080/api/v1/user/updateUser/${userToEdit.id}`, formData);
            console.log("User updated successfully:", response.data);


        } catch (error) {
            console.error("Error updating user:", error);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(InputValidation(user));
        console.log("new user: ", user);

    }

    return (

        <div id="container" onClick={handleOnClose} className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className=" w-[80%] h-[70%] bg-white p-2 rounded ">
                <div className="flex justify-end items-end">
                    <IoMdCloseCircleOutline
                        className="text-red-600 text-2xl cursor-pointer"
                        onClick={() => closeModal()}
                    />

                </div>
                <div className="flex justify-center items-center">
                    <h1>Edit User</h1>
                </div>
                <div className="bg-gray-200 grid sm:grid-cols-1 md:grid-cols-2">
                    {/* Profile picture */}
                    <div className=" w-full h-auto flex flex-col justify-center items-center">
                        <div>
                            <h1 className="">Profile Picture</h1>
                        </div>

                        {/* Image via video */}

                        {showVideo &&
                            <VideoOrImageDisplay

                                image={image}
                                setImage={setImage}

                                showVideo={showVideo}
                                uploadsection={uploadsection}
                            />
                        }

                        {/* Upload image */}
                        {!showVideo &&
                            <div>
                                <UploadImage
                                    showVideo={showVideo}
                                    setShowVideo={setShowVideo}
                                    image={image}
                                    setImage={setImage} />
                            </div>
                        }


                    </div>

                    <FormSubmit user={user} error={error} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />


                </div>




            </div>
        </div>
    )
}

export default EditUser