import React, { useState } from 'react';
import SearchBar from '../../../ReusableComponents/SearchBar/SearchBar';
import BlogPortalCard from './BlogPortalCard';
import NoBlog from './NoBlog';

const BlogPortalList = ({ blogs, onDelete }) => {
    const [search, setSearch] = useState("");

    const filteredBlogs = blogs.filter((blog) =>
        blog.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="w-full h-full flex flex-col">
            <div className="bg-blue-400 w-full flex justify-end items-end pr-8">
                <SearchBar setSearch={setSearch} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
                {filteredBlogs.length > 0 ? (
                    filteredBlogs.map((blog) => (
                        <BlogPortalCard key={blog.id} singleBlog={blog} onDelete={onDelete} />
                    ))
                ) : (
                    <NoBlog />
                )}
            </div>
        </div>
    )
}

export default BlogPortalList;
