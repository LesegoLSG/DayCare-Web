import React, { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import blogData from "./BlogData";
import { IoSearch } from "react-icons/io5";
import BlogScroller from "../BlogScroller/BlogScroller";
import Pagination from "../../ReusableComponents/SearchBar/Pagination/Pagination";
import BlogSideBar from "./BlogSideBar/BlogSideBar";
import CategorySlider from "./CategorySlider/CategorySlider";
import axiosInstance from "../../AuthServices/Axios/AxiosInstance";
import LoadingModal from "../../ReusableComponents/LoadingSpinner/LoadingModal";
import { IoSearchOutline } from "react-icons/io5";
import "./Blog.css";
import SearchBar from "../../ReusableComponents/SearchBar/SearchBar";
import { motion } from "framer-motion";

import { useBlogs } from "../../Contexts/BlogContext";

const Blog = () => {
  // const [blogs,setBlogs] = useState([]);
  const { blogs, setBlogs } = useBlogs();
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 6;

  const [isLoading, setIsLoading] = useState(false);

  const fetchBlogs = async () => {
    try {
      //  setIsLoading(true);
      const response = await axiosInstance.get("/publicBlog/getAllBlogs");
      console.log("Response public:", response);
      setBlogs(response.data);

      //  setIsLoading(false);
    } catch (error) {
      console.log("Error fetching blogs:", error);
    }
  };
  console.log("Blog view posts:", blogs);
  // useEffect hook to fetch users when component mounts
  useEffect(() => {
    fetchBlogs();
  }, []);

  console.log("In Blog blogs:", blogs);

  // Filter blogs based on search term
  const categories = [...new Set(blogs.map((blog) => blog.category))];
  const filteredBlogs = blogs.filter((blog) => {
    const searchTerm = search.toLowerCase();
    const categoryMatch = selectedCategory
      ? blog.category === selectedCategory
      : true;
    return (
      categoryMatch &&
      (search === "" ||
        Object.values(blog).some(
          (value) =>
            typeof value === "string" &&
            value.toLowerCase().includes(searchTerm)
        ))
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
  };

  const handleNextPage = () => {
    if (currentPage < lastIndex) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  return (
    <section
      className=" bg-white w-full h-auto flex flex-col justify-center items-center relative py-16 "
      id="blog"
    >
      <div className="flex flex-col justify-center">
        <h1 className="h2 my-2 text-[#36C2CE]">Insights & Updates</h1>
        <motion.h2
          initial={{ rotateX: 0 }}
          whileInView={{ rotateX: "360deg" }}
          transition={{ duration: 2 }}
          className="h3"
        >
          Dive Into Our Insights and Inspiration
        </motion.h2>
      </div>
      <div className="w-full h-auto flex flex-col justify-center items-center md:flex-col my-4  py-16">
        {isLoading && <LoadingModal />}
        {/* <BlogScroller /> */}

        <div className="w-full">
          <CategorySlider
            categories={categories}
            selectedCategory={selectedCategory}
            handleCategoryFilter={handleCategoryFilter}
          />
        </div>
        {/* Searchbar component*/}
        <div className="w-full flex justify-center items-center px-16 my-4 md:justify-end">
          <SearchBar setSearch={setSearch} />
        </div>
      </div>
      <div className=" w-full h-auto px-2 md:px-12 pb-20">
        <div className=" w-full md:flex md:flex-row h-auto ">
          {/* Left side */}
          <div className=" w-full md:w-3/4 ">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {records.map((myBlogData, index) => (
                <BlogCard key={index} singleBlog={myBlogData} />
              ))}
            </div>
            <div className="flex justify-center items-center my-4">
              <Pagination
                handlePreviousPage={handlePreviousPage}
                handleNextPage={handleNextPage}
                currentPage={currentPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </div>
          {/* right side */}
          <BlogSideBar blogs={blogs} />
        </div>
      </div>

      <div class="custom-shape-divider-bottom-1717894530">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Blog;
