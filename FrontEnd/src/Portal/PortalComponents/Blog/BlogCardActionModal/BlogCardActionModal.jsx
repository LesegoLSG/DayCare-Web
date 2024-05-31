import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { IoIosMore } from "react-icons/io";

const BlogCardActionModal = ({ onDelete, singleBlog }) => {
    const { id, image, title, briefDescription, date, author, reactions } = singleBlog;

    const navigate = useNavigate();
    const goToUpdate = () => {
        navigate(`/portal/blog/edit/${id}`)
    }

    return (
        <div className="absolute top-0 left-0 w-full h-full bg-gray-500 bg-opacity-75 flex justify-center items-center">
            <div className="bg-blue-200 p-4 rounded-lg flex flex-row items-center">
                <IoIosMore className=" text-black text-2xl  m-2 rounded cursor-pointer" />
                <FaUserEdit
                    onClick={goToUpdate}
                    className=" text-green-600 text-2xl  m-2  rounded cursor-pointer" />
                <MdDeleteForever
                    onClick={() => onDelete(id)}
                    className=" text-red-600 text-2xl  m-2 rounded cursor-pointer" />



            </div>
        </div>
    )
}

export default BlogCardActionModal