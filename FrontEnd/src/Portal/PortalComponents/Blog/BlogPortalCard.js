import React, { useState } from 'react';
import { MdDateRange } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdShare } from "react-icons/io";
import BlogCardActionModal from './BlogCardActionModal/BlogCardActionModal';

const BlogPortalCard = ({ singleBlog }) => {
    const { id, image, title, briefDescription, date, author, reactions } = singleBlog;
    const [isHovered, setIsHovered] = useState(false);

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
                        <span>20 Jan 2024</span>
                    </div>

                    <div className="flex flex-row justify-start items-start">
                        <span><IoPersonOutline /></span>
                        <span>{author}</span>
                    </div>

                </div>
                {/* title */}
                <div className="  w-full h-auto flex justify-start items-start pb-2">
                    <h1 className="text-lg font-semibold">Post title will be here</h1>
                </div>
                {/* Description */}
                <div className=" w-full h-auto flex justify-start items-start pb-2">
                    <p className="text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum iste assumenda, reprehenderit sequi inventore
                        voluptatum tempore ducimus corporis veniam, in ullam praesentium. Reprehenderit id quisquam sequi, veniam
                        minima culpa? Deserunt.</p>
                </div>

                {isHovered && (
                    <BlogCardActionModal />
                )}

            </div>
        </div>

    )
}

export default BlogPortalCard