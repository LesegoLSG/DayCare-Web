import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './User.css';
import Image4 from '../../../Assets/Image4.jpg';
import Image1 from '../../../Assets/Image1.jpg';


const AddUser = () => {
    const navigate = useNavigate();
    const [videoLoaded, setVideoLoaded] = useState(false);

    const [Image, setImage] = useState(null);
    const [newUser, setNewUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        mobile: '',
        designation: '',
        roles: ''
    })


    let videoRef = useRef(null);
    let photoRef = useRef(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewUser(prevUser => ({ ...prevUser, [name]: value }));
        console.log("Changes:", newUser);
    };



    //Get access to user webCamera

    const getUserCamera = () => {
        navigator.mediaDevices.getUserMedia({
            video: true
        })
            .then((stream) => {
                let video = videoRef.current;
                video.srcObject = stream;

                video.onloadedmetadata = () => {
                    setVideoLoaded(true);
                    video.play().catch(error => console.error(error));
                };
            })
            .catch((error) => {
                console.error(error);
            })
    }

    // to take a picture
    const takePicture = (e) => {
        e.preventDefault();

        let width = 500
        let height = width / (16 / 9)

        let photo = photoRef.current;
        console.log("photo:", photo);

        let video = videoRef.current;
        console.log("video:", video);

        photo.width = width;
        photo.height = height;

        let ctx = photo.getContext('2d');
        ctx.drawImage(video, 0, 0, photo.width, photo.height);

        console.log("photo1:", photo);

        // Convert canvas content to data URL
        const imageDataURL = photo.toDataURL();

        // Set the captured image data URL to the Image state
        setImage(imageDataURL);
        // console.log("Image:", Image);

    }

    //Clear out an image from the screen

    const clearImage = () => {
        let photo = photoRef.current
        if (photo) {
            let ctx = photo.getContext('2d');
            ctx.clearRect(0, 0, photo.width, photo.height)
        }
        setImage(null);
        setVideoLoaded(false); // Reset video loaded state
        getUserCamera();

    }

    useEffect(() => {
        getUserCamera()
    }, [])

    useEffect(() => {
        if (videoLoaded) {
            videoRef.current.play().catch(error => console.error(error));
        }
    }, [videoLoaded]);

    useEffect(() => {
        console.log("Image:", Image);
    }, [Image]);

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("Image state:", Image);
        console.log("Json User:", newUser);
    }

    return (
        <div className="bg-blue-400 w-full user-height">
            <h1>Hello</h1>
            <form className="flex justify-center items-center" onSubmit={onSubmit}>
                <div className="flex flex-col w-[80%]">
                    <div className="bg-blue-200 w-[100%] h-[500px] grid grid-col-1 md:grid-cols-2 gap-2 relative">
                        {/* Profile picture */}
                        <div className="bg-red-200 w-full h-auto flex flex-col justify-center items-center">
                            <div>
                                <h1 className="">Profile Picture</h1>
                            </div>

                            {/* Image */}
                            <div className="w-80 h-80 border rounded-full">
                                {Image ? (
                                    <img
                                        className="w-80 h-80 object-fill border rounded-full"
                                        src={Image} alt="Captured" />
                                ) : (
                                    <video className="w-80 h-80 object-fill border rounded-full" ref={videoRef}></video>
                                )}
                                {!Image && <canvas ref={photoRef}></canvas>}
                            </div>
                            {/* Buttons */}
                            {Image ? (
                                <button onClick={clearImage}>ReCapture</button>
                            ) : (
                                <button
                                    className='bg-red-600'
                                    onClick={(e) => takePicture(e)}>Take a selfie</button>
                            )

                            }





                            {/* <button
                                onClick={(e) => takePicture(e)}
                                className="">Take a selfie</button>

                            <button
                                onClick={clearImage}
                                className="">Clear Image</button> */}

                            {/* {Image && <img src={Image} alt="Captured" />} */}

                        </div>
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
                                    value={newUser.firstName}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="flex flex-col justify-start items-start">
                                <label>Last Name:</label>
                                <input
                                    className="w-full mb-2 "
                                    type="text"
                                    name="lastName"
                                    value={newUser.lastName}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="flex flex-col justify-start items-start">
                                <label>Mobile Number:</label>
                                <input
                                    className="w-full mb-2 "
                                    type="text"
                                    name="mobile"
                                    value={newUser.mobile}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="flex flex-col justify-start items-start">
                                <label>Email Address:</label>
                                <input

                                    className="w-full mb-2 "
                                    type="text"
                                    name="email"
                                    value={newUser.email}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="flex flex-col justify-start items-start">
                                <label>Designation:</label>
                                <input
                                    className="w-full mb-2 "
                                    type="text"
                                    name="designation"
                                    value={newUser.designation}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="flex flex-col justify-start items-start">
                                <label>Roles</label>
                                <input

                                    className="w-full mb-2 "
                                    type="text"
                                    name="roles"
                                    value={newUser.roles}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>


                    </div>
                    <div className="bg-gray-400 m-4">
                        <button type="submit" className="bg-green-600 m-1 p-1">Submit</button>
                        <button
                            onClick={() => navigate("/portal/users")}
                            className="bg-red-400 m-1 p-1">Cancel</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddUser