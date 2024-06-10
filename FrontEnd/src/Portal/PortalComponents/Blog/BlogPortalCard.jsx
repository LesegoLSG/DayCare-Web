import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdDateRange } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdShare } from "react-icons/io";
import BlogCardActionModal from './BlogCardActionModal/BlogCardActionModal';
import blogData from '../../../Components/Blog/BlogData';
import {useBlogs} from '../../../Contexts/BlogContext';
import { FaUserEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const BlogPortalCard = ({ singleBlog, onDelete }) => {
    // const { id, image, title, briefDescription, date, author, reactions } = singleBlog;
    const navigate = useNavigate();
    const goToUpdate = () => {
        navigate(`/portal/blog/edit/${singleBlog.id}`)
    }

    // Function to truncate text with ellipsis
    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) return text;
        return text.slice(0, maxLength) + '...';
    };

    return (
        <div className="bg-white shadow-xl shadow-black w-[18rem] h-auto flex flex-col mx-auto my-2 relative">
            {/* Card Image */}
           
             <div
                className="w-full h-[10rem] bg-cover bg-center relative"
                style={{ backgroundImage:  `url('data:image/**;base64,${singleBlog.cardImage}')` }}
            >
                {/* Edit and delete icons */}
                <div className="absolute top-0 right-0 space-y-6">
                    <MdDeleteForever size={25} className="text-red-600 cursor-pointer" onClick={() =>onDelete(singleBlog.id)}/>
                    <FaUserEdit size={25} className="text-green-600 cursor-pointer" onClick={() =>goToUpdate()}/>
                    
                </div>
            </div>

            {/* Card content */}
            <div className=" w-full h-auto  md:h-auto flex flex-col justify-center items-center relative"
               
            >

                {/* icon text */}
                <div className=" w-full  h-auto flex flex-row justify-start items-start ">
                    <div className="flex flex-row justify-start items-start ">
                        <span><MdDateRange /></span>
                        <span className='text-xs text-gray-600'>{singleBlog.date}</span>
                    </div>

                    <div className="flex flex-row justify-start items-start">
                        <span><IoPersonOutline /></span>
                        <span className='text-xs text-gray-600'>{singleBlog.user.firstName} {singleBlog.user.lastName}</span>
                    </div>

                </div>
                {/* title */}
                <div className="  w-full h-auto flex justify-start items-start pb-2">
                    <h1 className="text-lg font-semibold">{singleBlog.title}</h1>
                </div>
                {/* Description */}
                <div className=" w-full h-auto flex justify-start items-start pb-2">
                    <p className="text-left">{truncateText(singleBlog.topic, 100)}</p>
                </div>
                




{/* 
                {isHovered && (
                    <BlogCardActionModal onDelete={onDelete} singleBlog={singleBlog} />
                )} */}

            </div>
        </div>

    )
}

export default BlogPortalCard