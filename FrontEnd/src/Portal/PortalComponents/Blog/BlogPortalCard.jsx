import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdDateRange } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdShare } from "react-icons/io";
import BlogCardActionModal from './BlogCardActionModal/BlogCardActionModal';
import blogData from '../../../Components/Blog/BlogData';

const BlogPortalCard = ({ singleBlog, onDelete }) => {
    const { id, image, title, briefDescription, date, author, reactions } = singleBlog;
    const [isHovered, setIsHovered] = useState(false);

    // Function to truncate text with ellipsis
    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) return text;
        return text.slice(0, maxLength) + '...';
    };

    return (
        <div className="bg-white shadow-xl shadow-black w-[18rem] h-auto flex flex-col mx-auto my-2">
            {/* Card Image */}
            <div className="w-full h-auto overflow-hidden">
                <img className="" src={image} />
            </div>
            {/* Card content */}
            <div className=" w-full h-auto  md:h-auto flex flex-col justify-center items-center relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >

                {/* icon text */}
                <div className=" w-full  h-auto flex flex-row justify-start items-start ">
                    <div className="flex flex-row justify-start items-start ">
                        <span><MdDateRange /></span>
                        <span className='text-xs text-gray-600'>{date}</span>
                    </div>

                    <div className="flex flex-row justify-start items-start">
                        <span><IoPersonOutline /></span>
                        <span className='text-xs text-gray-600'>{author}</span>
                    </div>

                </div>
                {/* title */}
                <div className="  w-full h-auto flex justify-start items-start pb-2">
                    <h1 className="text-lg font-semibold">{author}</h1>
                </div>
                {/* Description */}
                <div className=" w-full h-auto flex justify-start items-start pb-2">
                    <p className="text-left">{truncateText(briefDescription, 100)}</p>
                </div>



                {isHovered && (
                    <BlogCardActionModal onDelete={onDelete} singleBlog={singleBlog} />
                )}

            </div>
        </div>

    )
}

export default BlogPortalCard