import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useBlogs } from "../../Contexts/BlogContext";

const BlogInfo = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { blogs } = useBlogs();

  const singleBlog = blogs.find((blog) => blog.id.toString() === id);

  if (!singleBlog) {
    return <div>Blog Not Found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-6">
      {/* <img 
        src={Image1} 
        alt="topImage" 
        className="w-full h-80 object-fit object-center rounded-t-lg" 
      /> */}
      <div
        className=" w-full h-80 rounded-t-lg"
        style={{
          backgroundImage: `url('data:image/**;base64,${singleBlog.cardImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="p-6">
        <h1 className="text-3xl font-semibold mb-2">{singleBlog.title}</h1>
        <p className="text-sm text-gray-500 mb-4">{singleBlog.topic}</p>
        <div
          className="text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: singleBlog.content }}
        ></div>
      </div>
      <button className="button" onClick={() => navigate("/")}>
        Back To Home
      </button>
    </div>
  );
};

export default BlogInfo;
