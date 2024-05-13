import React, { useState,useEffect } from 'react';
import { IoMdAdd } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import BlogPortalCard from './BlogPortalCard';
import blogData from '../../../Components/Blog/BlogData';
import BlogPortalList from './BlogPortalList';
import {useBlogs} from '../../../Contexts/BlogContext';
import axiosInstance from '../../../AuthServices/Axios/AxiosInstance';
import LoadingModal from '../../../ReusableComponents/LoadingSpinner/LoadingModal';

const BlogPortal = () => {
    const navigate = useNavigate();

    const {blogs, setBlogs} = useBlogs();
    const [isLoading,setIsLoading] = useState(false);

    const fetchBlogs = async () => {
        try {
             setIsLoading(true);
            const response = await axiosInstance.get("/publicBlog/getAllBlogs");
            console.log("Response public:",response);
            setBlogs(response.data);

             setIsLoading(false);

        } catch (error) {
            console.log("Error fetching users:", error);
        }
    }
    console.log("BlogPortal posts:",blogs);
    // useEffect hook to fetch users when component mounts
    useEffect(() => {
        fetchBlogs();
       
    }, []);


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

    console.log("BlogPortal context test:",blogs);

    return (
        <section className="main-container  w-full ">
            {isLoading && <LoadingModal/>}
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