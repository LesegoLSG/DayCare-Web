import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import AxiosPrivateInstance from '../../../AuthServices/Axios/AxiosPrivateInstance';
import './User.css';
import Image4 from '../../../Assets/Image4.jpg';
import Image1 from '../../../Assets/Image1.jpg';
import UploadImage from './UploadImage/UploadImage';
import VideoOrImageDisplay from './VideoOrImageDisplay/VideoOrImageDisplay';
import { IoMdCloseCircleOutline } from "react-icons/io";
import InputValidation from '../../../ReusableComponents/Validations/InputValidation';
import FormSubmit from './FormSubmit';
import Notification from '../../../ReusableComponents/Notification/Notification';
import { ToastContainer, toast, Bounce } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const AddUser = () => {


    const [showVideo, setShowVideo] = useState(true);

    const [image, setImage] = useState(null);

    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        mobile: '',
        role: '',
        whatsAppNo: '',
        facebookLink: '',
        instagramLink: '',
        linkedInLink: ''
    });

    const [errorMessage, setErrorMessage] = useState({});





    const handleInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
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

            const response = await AxiosPrivateInstance.post("/user/add", formData, {
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

    // const Notify = () => {
    //     toast.success('🦄 Wow so easy!', {
    //         position: "top-right",
    //         autoClose: 5000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //         theme: "light",
    //         transition: Bounce,
    //     });
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = InputValidation(user);
        if (Object.keys(errors).length === 0) {
            try {
                console.log("Add new user: ", user);
                console.log("Notify1");
                Notification.errorPopUp("Wow...");
                console.log("Notify2");

            } catch (error) {
                console.log(error);
            }
        } else {
            setErrorMessage(errors);
        }




    }
    // console.log("New User:", user);
    // console.log("error message:", errorMessage);
    return (
        <div className=" w-full user-height flex flex-col justify-center items-center p-4">
            <ToastContainer />
            <div className="  w-[100%] h-[500px] grid grid-col-1 md:grid-cols-2 gap-2 relative shadow-lg shadow-indigo-100">
                {/* Profile picture */}
                <div className=" w-full h-auto flex flex-col justify-center items-center ">
                    <div>
                        <h1 className="text-xl font-semibold">Profile Picture</h1>
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

                    {/* <ToastContainer /> */}
                </div>

                <FormSubmit user={user} errorMessage={errorMessage} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
            </div>

        </div>

    )
}

export default AddUser