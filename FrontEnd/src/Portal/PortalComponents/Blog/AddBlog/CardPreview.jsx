import React from "react";
import { MdDateRange } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdShare } from "react-icons/io";
import { IoMdCloseCircleOutline } from "react-icons/io";

const CardPreview = ({ onClose, blog }) => {
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  return (
    <div
      id="fullContainer"
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black bg-opacity-30 backdrop:blur-sm flex justify-center items-center"
    >
      <div className="bg-white w-auto h-auto p-2 rounded">
        <IoMdCloseCircleOutline
          className="cursor-pointer items-end"
          size={30}
          onClick={onClose}
        />
        <div className="bg-white shadow-xl shadow-black w-[18rem] h-auto flex flex-col mx-auto my-2">
          {/* Card Image */}
          <div
            className="w-full h-[10rem] bg-cover bg-center relative"
            style={{
              backgroundImage: `url('data:image/**;base64,${blog.cardImage}')`,
            }}
          />
          {/* Card content */}
          <div className=" w-full h-auto  md:h-auto flex flex-col justify-center items-center ">
            {/* title */}
            <div className="  w-full h-auto flex justify-start items-start pb-2 px-2">
              <h1 className="text-lg font-semibold">{blog.title}</h1>
            </div>

            {/* icon text */}
            <div className=" w-full  h-auto flex flex-row justify-start items-start px-2">
              <div className="flex flex-row justify-start items-start ">
                <span>
                  <MdDateRange />
                </span>
                <span className="text-xs text-gray-600">{blog.date}</span>
              </div>

              <div className="flex flex-row justify-start items-start mx-1">
                <span>
                  <IoPersonOutline />
                </span>
                <span className="text-xs text-gray-600">
                  {blog.user.firstName}
                </span>
                <span className="text-xs text-gray-600 mx-1">
                  {blog.user.lastName}
                </span>
              </div>
            </div>

            {/* Description */}
            <div className=" w-full max-h-20 flex justify-start items-start pb-2 px-2">
              <p className="text-left">{truncateText(blog.topic, 100)}</p>
            </div>
            {/* controls */}
            <div className=" w-full h-auto flex justify-between items-center">
              <a className="button m-2">Read More</a>
              {/* <div className=" rounded-full p-2 border-2 border-black cursor-pointer  mr-1 mb-1">
                                <IoMdShare className="text-xl" />
                            </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPreview;
