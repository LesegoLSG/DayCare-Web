import React, { useState } from 'react';
import BlogCard from './BlogCard';
import blogData from './BlogData';
import { IoSearch } from "react-icons/io5";
import BlogScroller from '../BlogScroller/BlogScroller';
import Pagination from '../../ReusableComponents/SearchBar/Pagination/Pagination';
import BlogSideBar from './BlogSideBar/BlogSideBar';
import CategorySlider from './CategorySlider/CategorySlider';

const Blog = () => {
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState(null);
    const categories = [...new Set(blogData.map(blog => blog.category))];

    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 6;


    // Filter blogs based on search term
    const filteredBlogs = blogData.filter((blog) => {
        const searchTerm = search.toLowerCase();
        const categoryMatch = selectedCategory ? blog.category === selectedCategory : true;
        return categoryMatch && (search === "" || Object.values(blog).some((value) =>
            typeof value === 'string' && value.toLowerCase().includes(searchTerm)
        ));
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
        if (currentPage < lastIndex) {
            setCurrentPage(currentPage + 1);
        }
    }

    const handleCategoryFilter = (category) => {
        setSelectedCategory(category === selectedCategory ? null : category);
    };

    return (
        <div className=" bg-primary w-full h-auto flex flex-col justify-center items-center" id="blog">
            <div className="flex justify-center items-center">
                <h1>Blog</h1>
            </div>
            <div className="w-full h-auto flex flex-col justify-center items-center md:flex-col my-4">

                {/* <BlogScroller /> */}
                {/* Searchbar component*/}
                <div className="w-full">
                    <CategorySlider
                        categories={categories}
                        selectedCategory={selectedCategory}
                        handleCategoryFilter={handleCategoryFilter}
                    />
                </div>
                <div className="w-full flex justify-center items-center px-12 md:justify-end">
                    <div className="relative">
                        <input
                            className="w-60 h-8 my-2 md:my-0 md:w-80 border md:border-black md:rounded-md md:p-2 md:pl-8"
                            type="text"
                            placeholder="Search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <div className="absolute inset-y-0 left-0 flex items-center px-3 ">
                            <IoSearch />
                        </div>
                    </div>

                </div>

            </div>
            <div className=" w-full h-auto px-12">
                <div className=" w-full md:flex md:flex-row h-auto ">
                    {/* Left side */}
                    <div className=" w-full md:w-3/4 ">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {
                                records.map((myBlogData, index) => (
                                    <BlogCard key={index} singleBlog={myBlogData} />
                                ))
                            }
                        </div>
                        <div className="flex justify-center items-center my-4">
                            <Pagination handlePreviousPage={handlePreviousPage} handleNextPage={handleNextPage} currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
                        </div>
                    </div>
                    {/* right side */}
                    <BlogSideBar />

                </div>
            </div>

        </div>
    )
}

export default Blog