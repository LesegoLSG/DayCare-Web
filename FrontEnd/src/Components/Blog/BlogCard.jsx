import React from 'react';
import { Link } from 'react-router-dom';
import Image2 from '../../Assets/Image2.jpg';
import { MdDateRange } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdShare } from "react-icons/io";

const BlogCard = ({ singleBlog }) => {
    // const { id, image, title, briefDescription, date, author, reactions } = singleBlog;

    // Function to truncate text with ellipsis
    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) return text;
        return text.slice(0, maxLength) + '...';
    };

    return (

        <div className="bg-white shadow-xl shadow-black w-[18rem] h-auto flex flex-col mx-auto my-2">
            {/* Card Image */}
            <div
                className="w-full h-[10rem] bg-cover bg-center"
                style={{ backgroundImage:  `url('data:image/**;base64,${singleBlog.cardImage}')` }}
            ></div>
            {/* Card content */}
            <div className=" w-full h-auto  md:h-auto flex flex-col justify-center items-center ">

                {/* title */}
                <div className="  w-full h-auto flex justify-start items-start pb-2 px-2">
                    <h1 className="text-lg font-semibold">{singleBlog.title}</h1>
                </div>

                {/* icon text */}
                <div className=" w-full  h-auto flex flex-row justify-start items-start px-2">
                    <div className="flex flex-row justify-start items-start ">
                        <span ><MdDateRange /></span>
                        <span className="text-xs text-gray-600">{singleBlog.date}</span>
                    </div>

                    <div className="flex flex-row justify-start items-start mx-1">
                        <span><IoPersonOutline /></span>
                        <span className="text-xs text-gray-600">{singleBlog.user.firstName} {singleBlog.user.lastName}</span>
                    </div>

                </div>

                {/* Description */}
                <div className=" w-full max-h-20 flex justify-start items-start pb-2 px-2">
                    <p className="text-left">{truncateText(singleBlog.topic, 100)}</p>
                </div>
                {/* controls */}
                <div className=" w-full h-auto flex justify-between items-center px-2">
                    <Link to={`/blog/${singleBlog.id}`} className=" border bg-[#5C8D89] border-balance rounded-xl font-semibold text-white hover:text-black hover:border-[#5C8D89] hover:bg-transparent p-1">
                        Read More
                    </Link>
                    <div className=" rounded-full p-2 border-2 border-black cursor-pointer  mr-1 mb-1">
                        <IoMdShare className="text-xl" />
                    </div>
                </div>


            </div>
        </div>


    )
}

export default BlogCard