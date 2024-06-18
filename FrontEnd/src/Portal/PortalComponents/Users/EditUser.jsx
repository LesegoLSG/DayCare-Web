import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import VideoOrImageDisplay from "./VideoOrImageDisplay/VideoOrImageDisplay";
import UploadImage from "./UploadImage/UploadImage";
import InputValidation from "../../../ReusableComponents/Validations/InputValidation";

import { IoMdCloseCircleOutline } from "react-icons/io";
import FormSubmit from "./FormSubmit";
import AxiosPrivateInstance from "../../../AuthServices/Axios/AxiosPrivateInstance";
import {
  errorPopUp,
  successPopUp,
  warningPopUp,
} from "../../../ReusableComponents/Notification/Notification";
import LoadingModal from "../../../ReusableComponents/LoadingSpinner/LoadingModal";

const EditUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [showVideo, setShowVideo] = useState(true);

  const [image, setImage] = useState(null);

  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState({});

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await AxiosPrivateInstance.get(
          `/user/getUserById/${id}`
        );
        setUser(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user details:", error);
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

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
          formData.append("image", image);
        }
        formData.append("user", JSON.stringify(user));

        const response = await AxiosPrivateInstance.put(
          `/user/updateUser/${id}`,
          formData
        );
        setLoading(false);
        successPopUp(`User ${user.firstName} is updated successfully`);
        navigate("/portal/users");
      } catch (error) {
        console.error("Error updating user:", error);
      }
    }
  };

  if (!user) {
    return <LoadingModal />;
  }

  return (
    <div className="w-full h-auto my-14 flex justify-center items-center">
      <div className=" w-[80%] h-[70%] bg-white p-2 rounded ">
        {loading && <LoadingModal />}

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

            {showVideo && (
              <VideoOrImageDisplay
                image={image}
                setImage={setImage}
                showVideo={showVideo}
                uploadsection={uploadsection}
              />
            )}

            {/* Upload image */}
            {!showVideo && (
              <div>
                <UploadImage
                  showVideo={showVideo}
                  setShowVideo={setShowVideo}
                  image={image}
                  setImage={setImage}
                />
              </div>
            )}
          </div>

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

export default EditUser;
