import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AxiosPrivateInstance from '../../../AuthServices/Axios/AxiosPrivateInstance';
import './User.css'; // if any custom styles
import Image4 from '../../../Assets/Image4.jpg';
import Image1 from '../../../Assets/Image1.jpg';
import UploadImage from './UploadImage/UploadImage';
import VideoOrImageDisplay from './VideoOrImageDisplay/VideoOrImageDisplay';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import InputValidation from '../../../ReusableComponents/Validations/InputValidation';
import FormSubmit from './FormSubmit';
import { ToastContainer } from 'react-toastify';
import LoadingModal from '../../../ReusableComponents/LoadingSpinner/LoadingModal';

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
    role: '',
    whatsAppNo: '',
    facebookLink: '',
    instagramLink: '',
    linkedInLink: ''
  });

  const [errorMessage, setErrorMessage] = useState({});
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const uploadsection = () => {
    setShowVideo(!showVideo);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = InputValidation(user);
    if (Object.keys(errors).length === 0) {
      try {
        setLoading(true);
        const formData = new FormData();
        if (image) {
          formData.append('image', image);
        }
        formData.append('user', JSON.stringify(user));

        const response = await AxiosPrivateInstance.post('/user/add', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        setLoading(false);
        successPopUp('User added successfully...');
        navigate('/portal/users');
      } catch (error) {
        console.error(error);
      }
    } else {
      setErrorMessage(errors);
    }
  };

  return (
    <div className="w-full h-auto my-12 flex flex-col justify-center items-center p-4">
      <ToastContainer />
      {loading && <LoadingModal />}
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Profile Picture */}
          <div className="p-4">
            <h1 className="text-xl font-semibold mb-4">Profile Picture</h1>
            {showVideo ? (
              <VideoOrImageDisplay
                image={image}
                setImage={setImage}
                showVideo={showVideo}
                uploadsection={uploadsection}
              />
            ) : (
              <UploadImage
                showVideo={showVideo}
                setShowVideo={setShowVideo}
                image={image}
                setImage={setImage}
              />
            )}
          </div>
          {/* Form Section */}
          <FormSubmit
            user={user}
            errorMessage={errorMessage}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default AddUser;
