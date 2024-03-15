import React from 'react';
import { IoMdAdd } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import BlogPortalCard from './BlogPortalCard';
import blogData from '../../../Components/Blog/BlogData';
import NoBlog from './NoBlog';

const BlogPortal = () => {
    const navigate = useNavigate();
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

            <div className="grid grid-cols-4 ">
                {blogData.length > 0 ? (
                    blogData.map((myBlogData, index) => (
                        <BlogPortalCard key={index} singleBlog={myBlogData} />
                    ))
                ) : (
                    <NoBlog />
                )

                }
            </div>
        </section >
    )
}

export default BlogPortal