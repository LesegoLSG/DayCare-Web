import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "../blog.css";
import BlogContent from "./BlogContent";
import CardPreview from "./CardPreview";
import { useUser } from "../../../../Contexts/UserLoggedIn";
import LoadingModal from "../../../../ReusableComponents/LoadingSpinner/LoadingModal";
import axiosPrivateInstance from "../../../../AuthServices/Axios/AxiosPrivateInstance";
import BlogForm from "./BlogForm";
import CardImage from "./CardImage";
import { useNavigate } from "react-router-dom";

const AddBlog = () => {
  const navigate = useNavigate();
  const [isModalAdd, setIsModalAdd] = useState(false);
  const [isPreviewCard, setIsPreviewCard] = useState(false);

  const [loading, setLoading] = useState(false);

  const { loggedInUser } = useUser();

  const [cardImage, setCardImage] = useState(null);
  const [blog, setBlog] = useState({
    status: "",
    category: "",
    date: "",
    title: "",
    topic: "",
    content: "",
  });

  console.log("Add Blog:", loggedInUser.firstName);
  console.log("Add Blog:", loggedInUser.id);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBlog({ ...blog, [name]: value });
  };

  const handleImageUpload = (event) => {
    const imageFile = event.target.files[0];
    setCardImage(imageFile);
  };

  const handleOpenModal = (e) => {
    e.preventDefault();
    setIsModalAdd(true);
  };

  const handleCloseModal = () => {
    setIsModalAdd(false);
  };

  const handleOpenPreviewModal = (e) => {
    e.preventDefault();
    setIsPreviewCard(true);
  };

  const handleClosePreviewModal = () => {
    setIsPreviewCard(false);
  };

  const submitBlog = async (e) => {
    console.log("Submmited blog card:", cardImage);
    console.log("Submitted blog:", blog);

    try {
      setLoading(true);
      const formData = new FormData();
      if (cardImage) {
        formData.append("cardImage", cardImage);
        console.log("myImage", formData.get("cardImage"));
      }

      formData.append("blogJson", JSON.stringify(blog));
      console.log(formData.get("blogJson"));
      console.log("myImage2:", formData.get("cardImage"));

      const response = await axiosPrivateInstance.post(
        `/blog/addBlog/${loggedInUser.id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setLoading(false);
      navigate("/portal/blog");
    } catch (error) {
      console.log("Error adding a user");
    }
  };

  return (
    <div className=" w-full " style={{ height: "calc(100vh - 50px)" }}>
      {loading && <LoadingModal />}
      <div className="w-full h-[40px] flex justify-center items-center p-4">
        <h1 className="text-2xl font-semibold">Create Blog</h1>
      </div>

      <div className="w-full h-[640px] overflow-y-auto scrollbar">
        <CardImage
          cardImage={cardImage}
          handleImageUpload={handleImageUpload}
          isEditing={false}
        />
        <BlogForm
          blog={blog}
          handleInputChange={handleInputChange}
          onClose={handleClosePreviewModal}
          isPreviewCard={isPreviewCard}
          handleCloseModal={handleCloseModal}
          handleOpenModal={handleOpenModal}
          handleOpenPreviewModal={handleOpenPreviewModal}
          submitBlog={submitBlog}
        />
      </div>
    </div>
  );
};

export default AddBlog;
