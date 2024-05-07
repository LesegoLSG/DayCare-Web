import React, { useState } from 'react';
import { IoMdAdd } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import BlogPortalCard from './BlogPortalCard';
import blogData from '../../../Components/Blog/BlogData';
import BlogPortalList from './BlogPortalList';

const BlogPortal = () => {
    const navigate = useNavigate();

    const [blogs, setBlogs] = useState(blogData);


    const deleteBlog = (id) => {
        console.log("deleted id: ", id);
        if (id) {
            try {
                setBlogs(prevBlogs => prevBlogs.filter((blog) => blog.id !== id));
                console.log("onDelete blogs", blogs);
            } catch (error) {
                console.log("Delete error", error);
            }

        }

    }

    return (
        <section className="main-container  w-full ">
            <div className="flex justify-between m-4">
                < h1 className="text-2xl font-semibold"> Blog</h1 >
                <button
                    onClick={() => navigate("/portal/blog/add")}
                    className="bg-blue-200 h-8 w-40 flex flex-row justify-center items-center">
                    <IoMdAdd />
                    Create Blog
                </button>
            </div >

            <BlogPortalList blogs={blogs} onDelete={deleteBlog} />

        </section >
    )
}

export default BlogPortal