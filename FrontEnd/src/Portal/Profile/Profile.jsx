// import React, { useEffect, useState } from 'react';
// import { useUser } from '../../Contexts/UserLoggedIn';
// import AxiosPrivateInstance from '../../AuthServices/Axios/AxiosPrivateInstance';
// import LoadingModal from '../../ReusableComponents/LoadingSpinner/LoadingModal';
// import InputValidation from '../../ReusableComponents/Validations/InputValidation';
// import VideoOrImageDisplay from '../PortalComponents/Users/VideoOrImageDisplay/VideoOrImageDisplay';
// import UploadImage from '../PortalComponents/Users/UploadImage/UploadImage';
// import FormSubmit from '../PortalComponents/Users/FormSubmit';
// import { errorPopUp, successPopUp, warningPopUp } from '../../ReusableComponents/Notification/Notification';

// const Profile = () => {
//     const {loggedInUser} = useUser();
//     const [user,setUser] = useState(loggedInUser);

//     const [showVideo, setShowVideo] = useState(true);
//     const [image, setImage] = useState(null);
//     const [errorMessage, setErrorMessage] = useState({});

//     const [loading, setLoading] = useState(false);

//     const uploadsection = () => {
//         setShowVideo(!showVideo);
//     }

//     const handleInputChange = (e) => {
//         setUser({ ...user, [e.target.name]: e.target.value })
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const errors = InputValidation(user);
//         if (Object.keys(errors).length === 0) {
//             try {
//                 setLoading(true);
//                 const formData = new FormData();
//                 if (image) {
//                     formData.append('image', image);
//                 }
//                 formData.append('user', JSON.stringify(user));

//                 const response = await AxiosPrivateInstance.put(`/profile/profileUpdate/${loggedInUser.id}`, formData);
//                 setLoading(false);
//                 successPopUp(`User ${user.firstName} is updated successfully`);

//             } catch (error) {
//                 console.error("Error updating user:", error);
//             }
//         }

//     }

//     if (!user) {
//         return <LoadingModal />;
//     }

//   return (

//     <div className="w-full h-auto my-14 flex justify-center items-center">

//     <div className=" w-[80%] h-[70%] bg-white p-2 rounded ">
//     {loading && <LoadingModal />}

//         <div className="flex justify-center items-center">
//             <h1>Profile</h1>
//         </div>
//         <div className="bg-gray-200 grid sm:grid-cols-1 md:grid-cols-1">
//             {/* Profile picture */}
//             <div className=" w-full h-auto flex flex-col justify-center items-center">
//                 <div>
//                     <h1 className="">Profile Picture</h1>
//                 </div>

//                 {/* Image via video */}

//                 {showVideo &&
//                     <VideoOrImageDisplay

//                         image={image}
//                         setImage={setImage}

//                         showVideo={showVideo}
//                         uploadsection={uploadsection}
//                     />
//                 }

//                 {/* Upload image */}
//                 {!showVideo &&
//                     <div>
//                         <UploadImage
//                             showVideo={showVideo}
//                             setShowVideo={setShowVideo}
//                             image={image}
//                             setImage={setImage} />
//                     </div>
//                 }

//             </div>

//             <FormSubmit user={user} errorMessage={errorMessage} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />

//         </div>

//     </div>
//     </div>
//   )
// }

// export default Profile
