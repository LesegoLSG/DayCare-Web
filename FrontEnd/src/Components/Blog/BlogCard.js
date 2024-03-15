import React from 'react';
import { Link } from 'react-router-dom';
import Image2 from '../../Assets/Image2.jpg';
import { MdDateRange } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdShare } from "react-icons/io";

const BlogCard = ({ singleBlog }) => {
    const { id, image, title, briefDescription, date, author, reactions } = singleBlog;
    return (

        <div className="bg-white shadow-xl shadow-black w-[18rem] h-auto flex flex-col mx-auto my-2">
            {/* Card Image */}
            <div className="w-full h-auto overflow-hidden transition-transform duration-300 transform hover:scale-150 hover:-translate-y-16">
                <img className="" src={image} />
            </div>
            {/* Card content */}
            <div className=" w-full h-auto  md:h-auto flex flex-col justify-center items-center ">

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
                {/* controls */}
                <div className=" w-full h-auto flex justify-between items-center">
                    <Link to={`/blog/${id}`} className="bg-blue-200 p-2 ml-1 mb-1">
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