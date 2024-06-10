import React, { useState } from 'react';
import SearchBar from '../../../ReusableComponents/SearchBar/SearchBar';
import BlogPortalCard from './BlogPortalCard';
import NoBlog from './NoBlog';
import Pagination from '../../../ReusableComponents/SearchBar/Pagination/Pagination';
import './blog.css'
const BlogPortalList = ({ blogs, onDelete }) => {
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 6;

    const filteredBlogs = blogs.filter((blog) => {
        if (search === "") return true;
        const searchTerm = search.toLowerCase();
        return Object.values(blog).some((value) =>
            typeof value === 'string' && value.toLowerCase().includes(searchTerm)
        );
    });
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = filteredBlogs.slice(firstIndex, lastIndex);
    const totalPages = Math.ceil(filteredBlogs.length / recordsPerPage);

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    }

    return (
        <div className="main-container w-full h-auto flex flex-col overflow-y-auto scrollbar">
            <div className=" w-full flex justify-center md:justify-end items-center md:items-end px-0 md:px-8">
                <SearchBar setSearch={setSearch} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 my-4">
                {filteredBlogs.length > 0 ? (
                    records.map((blog) => (
                        <BlogPortalCard key={blog.id} singleBlog={blog} onDelete={onDelete} />
                    ))
                ) : (
                   
                              <NoBlog />
                    
                  
                )}
            </div>
            <Pagination 
                handleNextPage={handleNextPage}
                handlePreviousPage={handlePreviousPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalPages={totalPages}
            />
        </div>
    )
}

export default BlogPortalList;
