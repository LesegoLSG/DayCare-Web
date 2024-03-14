import React from 'react';
import { IoMdAdd } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const BlogPortal = () => {
    const navigate = useNavigate();
    return (
        <div className="flex justify-between m-4">
            <h1>Blog</h1>
            <button
                onClick={() => navigate("/portal/blog/add")}
                className="bg-blue-200 h-8 w-40 flex flex-row justify-center items-center">
                <IoMdAdd />
                Create Blog
            </button>
        </div>
    )
}

export default BlogPortal