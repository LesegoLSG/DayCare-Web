import React from 'react';
import Image2 from '../../Assets/Image2.jpg';
import { MdDateRange } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdShare } from "react-icons/io";

const BlogCard = ({ singleBlog }) => {
    const { id, image, title, briefDescription, date, author, reactions } = singleBlog;
    return (

        <div className="bg-red-600 w-[18rem] h-auto flex flex-col mx-auto my-2">
            {/* Card Image */}
            <div className="bg-green-200 w-full h-auto ">
                <img className="" src={image} />
            </div>
            {/* Card content */}
            <div className="bg-yellow-400 w-full h-auto  md:h-auto flex flex-col justify-center items-center ">

                {/* icon text */}
                <div className="bg-blue-400 w-full  h-auto flex flex-row justify-start items-start ">
                    <div className="flex flex-row justify-start items-start ">
                        <span><MdDateRange /></span>
                        <span>20 Jan 2024</span>
                    </div>

                    <div className="flex flex-row justify-start items-start">
                        <span><IoPersonOutline /></span>
                        <span>{author}</span>
                    </div>
                    <div className="flex flex-row justify-start items-start">
                        <span><IoMdHeartEmpty /></span>
                        <span>222</span>
                    </div>
                </div>
                {/* title */}
                <div className="bg-orange-400  w-full h-auto flex justify-start items-start pb-2">
                    <h1 className="text-lg font-semibold">Post title will be here</h1>
                </div>
                {/* Description */}
                <div className="bg-purple-400 w-full h-auto flex justify-start items-start pb-2">
                    <p className="text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum iste assumenda, reprehenderit sequi inventore
                        voluptatum tempore ducimus corporis veniam, in ullam praesentium. Reprehenderit id quisquam sequi, veniam
                        minima culpa? Deserunt.</p>
                </div>
                {/* controls */}
                <div className="bg-red-400 w-full h-auto flex justify-between items-center">
                    <button className="bg-blue-600 p-2">
                        Read More
                    </button>
                    <div className="bg-blue-100 rounded-full p-2 border-2 border-black cursor-pointer">
                        <IoMdShare className="text-xl" />
                    </div>
                </div>


            </div>
        </div>





        // <div className="bg-orange-200 w-[16rem] h-[26rem] ">
        //     {/* Use Tailwind CSS classes for styling */}
        //     <div className="bg-red-400 w-full h-[50%] ">
        //         <img className="w-full h-[100%] " src={Image2} />
        //     </div>
        //     <div className="bg-green-200  w-full h-auto flex justify-start items-start">
        //         <h1>02 Jan 2024</h1>
        //     </div>
        //     <div className="bg-green-300  w-full h-auto flex justify-start items-start">
        //         <h1>Lorem ipsum dolor sit amet consectetur, .</h1>
        //     </div>
        //     <div className="bg-green-400  w-full h-auto flex justify-start items-start">
        //         <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus, animi vel fugit consequatur.</h1>
        //     </div>
        //     <div className="bg-green-400 flex justify-center items-center">
        //         <button className="bg-black text-white">Read More</button>
        //     </div>
        // </div>
    )
}

export default BlogCard