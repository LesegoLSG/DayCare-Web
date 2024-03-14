import React, { useState } from 'react';
import BlogCard from './BlogCard';
import blogData from './BlogData';

const Blog = () => {
    const [visibleBlogs, setVisibleBlogs] = useState(3);
    const [showReadLess, setShowReadLess] = useState(false);

    const showMoreBlogs = () => {
        setVisibleBlogs((prevValue) => prevValue + 3);
        setShowReadLess(true);
    };

    const showLessBlogs = () => {
        setVisibleBlogs(3);
        setShowReadLess(false);
    }

    return (
        <div className=" bg-gray-100 w-full h-auto flex flex-col justify-center items-center" id="blog">
            <div className="flex justify-center items-center">
                <h1>Blog</h1>
            </div>
            <div className=" w-[80%] grid grid-cols-1 md:grid-cols-3  ">
                {
                    blogData.slice(0, visibleBlogs).map((myBlogData, index) => (
                        <BlogCard key={index} singleBlog={myBlogData} />
                    ))
                }

            </div>
            <div className="bg-gray-200 w-full flex justify-center items-center mt-4">
                {visibleBlogs < blogData.length &&
                    <button
                        className="bg-blue-200 p-2 transition duration-500 ease-in-out hover:bg-red-500"
                        onClick={showMoreBlogs}>
                        Load More
                    </button>
                }
                {visibleBlogs === blogData.length && showReadLess &&
                    <button
                        className="bg-red-400 p-2 transition duration-500 ease-in-out hover:bg-red-500"
                        onClick={showLessBlogs}>
                        Load Less
                    </button>
                }
            </div>
        </div>
    )
}

export default Blog