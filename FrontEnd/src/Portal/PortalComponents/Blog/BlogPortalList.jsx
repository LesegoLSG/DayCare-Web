import React, { useState } from 'react';
import SearchBar from '../../../ReusableComponents/SearchBar/SearchBar';
import BlogPortalCard from './BlogPortalCard';
import NoBlog from './NoBlog';
import {useBlogs} from '../../../Contexts/BlogContext';

const BlogPortalList = ({ blogs, onDelete }) => {
    const [search, setSearch] = useState("");
    console.log("BlogPortalList: ",blogs);
    return (

        <div className="w-full h-4/5 flex flex-col  ">
            <div className="bg-blue-400 w-full flex justify-end items-end pr-8">
                <SearchBar setSearch={setSearch} />
            </div>
            <div className="grid grid-cols-4 gap-2 items-center">
                {blogs.length > 0 ? (
                    blogs.map((myBlogData, index) => (
                        <BlogPortalCard key={index} singleBlog={myBlogData} onDelete={onDelete} />
                    ))
                ) : (
                    <NoBlog />
                )

                }
            </div>
        </div>
    )
}

export default BlogPortalList