import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { MdDateRange } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdShare } from "react-icons/io";
import { scrollToTop } from "../../ReusableComponents/ScrollToTop";

const BlogCard = ({ singleBlog }) => {
  const navigate = useNavigate();

  // Function to truncate text with ellipsis
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  const handleNavigateBlog = () => {
    scrollToTop();
    navigate(`/bloginfo/${singleBlog.id}`);
  };

  return (
    <div className="bg-white shadow-xl shadow-black w-[20rem] md:w-[18rem] h-auto flex flex-col mx-auto my-2 rounded-b-lg">
      {/* Card Image */}
      <div
        className="w-full h-[10rem] bg-cover bg-center"
        style={{
          backgroundImage: `url('data:image/**;base64,${singleBlog.cardImage}')`,
        }}
      ></div>
      {/* Card content */}
      <div className=" w-full h-auto  md:h-auto flex flex-col justify-center items-center ">
        {/* icon text */}
        <div className=" w-full  h-auto flex flex-row justify-start items-start gap-2 px-2 py-1">
          <div className="flex flex-row justify-start items-start gap-1">
            <span>
              <MdDateRange />
            </span>
            <span className="text-xs text-gray-600">{singleBlog.date}</span>
          </div>

          <div className="flex flex-row justify-start items-start mx-1 gap-1">
            <span>
              <IoPersonOutline />
            </span>
            <span className="text-xs text-gray-600">
              {singleBlog.user.firstName} {singleBlog.user.lastName}
            </span>
          </div>
        </div>

        {/* Description */}
        <div className=" w-full max-h-20 flex justify-start items-start pb-2 px-2">
          <p className="text-left font-semibold">
            {truncateText(singleBlog.topic, 100)}
          </p>
        </div>

        {/* title */}
        <div className="  w-full h-auto flex justify-start items-start pb-2 px-2">
          <h1 className="text-base text-start">{singleBlog.title}</h1>
        </div>

        {/* controls */}
        <div className=" w-full h-auto flex justify-between items-center px-2 py-1">
          <button onClick={handleNavigateBlog} className="button">
            Read More
          </button>
          {/* <div className=" rounded-full p-2 border-2 border-black cursor-pointer  mr-1 mb-1">
                        <IoMdShare className="text-xl" />
                    </div> */}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
