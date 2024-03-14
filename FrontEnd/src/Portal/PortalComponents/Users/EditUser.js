import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import VideoOrImageDisplay from './VideoOrImageDisplay/VideoOrImageDisplay';
import UploadImage from './UploadImage/UploadImage';

import { IoMdCloseCircleOutline } from "react-icons/io";

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
        role: userToEdit.role
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser(prevUser => ({ ...prevUser, [name]: value }));
        console.log("Changes:", user);
    };

    console.log(userToEdit);
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

            const response = await axios.put(`http://localhost:8080/api/v1/admin/updateUser/${userToEdit.id}`, formData);
            console.log("User updated successfully:", response.data);


        } catch (error) {
            console.error("Error updating user:", error);
        }
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
                    <div className="bg-red-200 w-full h-auto flex flex-col justify-center items-center">
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

                    <form className="flex flex-col justify-center items-center" onSubmit={onSubmit}>
                        {/* user details */}
                        <div className="bg-green-400 w-full p-2 ">
                            <div>
                                <h1 className="">User Details</h1>
                            </div>

                            <div className="flex flex-col justify-start items-start">
                                <label>FirstName:</label>
                                <input
                                    className="w-full mb-2 "
                                    type="text"
                                    name="firstName"
                                    value={user.firstName}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="flex flex-col justify-start items-start">
                                <label>Last Name:</label>
                                <input
                                    className="w-full mb-2 "
                                    type="text"
                                    name="lastName"
                                    value={user.lastName}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="flex flex-col justify-start items-start">
                                <label>Mobile Number:</label>
                                <input
                                    className="w-full mb-2 "
                                    type="text"
                                    name="mobile"
                                    value={user.mobile}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="flex flex-col justify-start items-start">
                                <label>Email Address:</label>
                                <input

                                    className="w-full mb-2 "
                                    type="text"
                                    name="email"
                                    value={user.email}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="flex flex-col justify-start items-start">
                                <label>Password:</label>
                                <input

                                    className="w-full mb-2 "
                                    type="text"
                                    name="password"
                                    value={user.password}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="flex flex-col justify-start items-start">
                                <label>Roles</label>
                                <input

                                    className="w-full mb-2 "
                                    type="text"
                                    name="role"
                                    value={user.role}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>



                        <div className="bg-gray-400 m-4">
                            <button type="submit" className="bg-green-600 m-1 p-1">Submit</button>
                            <button
                                onClick={() => navigate("/portal/users")}
                                className="bg-red-400 m-1 p-1">Cancel</button>

                        </div>
                    </form>


                </div>




            </div>
        </div>
    )
}

export default EditUser