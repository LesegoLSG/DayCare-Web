import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './User.css';
import Image4 from '../../../Assets/Image4.jpg';
import Image1 from '../../../Assets/Image1.jpg';
import UploadImage from './UploadImage/UploadImage';
import VideoOrImageDisplay from './VideoOrImageDisplay/VideoOrImageDisplay';


const AddUser = () => {
    const navigate = useNavigate();

    const [showVideo, setShowVideo] = useState(true);

    const [image, setImage] = useState(null);

    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        mobile: '',
        role: ''
    })




    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser(prevUser => ({ ...prevUser, [name]: value }));
        console.log("Changes:", user);
    };










    const uploadsection = () => {
        setShowVideo(!showVideo);
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log("image state:", image);
        console.log("Json User:", user);

        try {
            const formData = new FormData();
            if (image) {
                formData.append('image', image);
                console.log('myImage:', formData.get('image'));
            }
            formData.append('user', JSON.stringify(user));
            console.log(formData.get('user'));
            console.log('myImage2:', formData.get('image'));

            const response = await axios.post("http://localhost:8080/api/v1/admin/add", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });


            console.log("user2", formData.get('user'));

            console.log('myImage3:', formData.get('image'));


        } catch (error) {
            console.log("Error adding user:" + error);
        }

    }

    return (
        <div className="bg-blue-400 w-full user-height flex flex-col justify-center items-center p-4">
            <h1>Hello</h1>


            <div className="bg-blue-200 w-[100%] h-[500px] grid grid-col-1 md:grid-cols-2 gap-2 relative">
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
    )
}

export default AddUser