import React, { useEffect, useState } from 'react';
import { IoMdAdd } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import BlogPortalList from './BlogPortalList';
import { useBlogs } from '../../../Contexts/BlogContext';
import axiosInstance from '../../../AuthServices/Axios/AxiosInstance';
import LoadingModal from '../../../ReusableComponents/LoadingSpinner/LoadingModal';
import axiosPrivateInstance from '../../../AuthServices/Axios/AxiosPrivateInstance';

const BlogPortal = () => {
    const navigate = useNavigate();
    const { blogs, setBlogs } = useBlogs([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchBlogs = async () => {
        try {
            setIsLoading(true);
            const response = await axiosPrivateInstance.get("/blog/getAllBlogs");
            console.log("POrtal blog response:", response.data)
            setBlogs(response.data);

            setIsLoading(false);
        } catch (error) {
            console.log("Error fetching blogs:", error);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchBlogs();
    }, []);

    const deleteBlog = (id) => {
        try {
            setBlogs(prevBlogs => prevBlogs.filter(blog => blog.id !== id));
        } catch (error) {
            console.log("Delete error", error);
        }
    }

    return (
        <section className="main-container w-full">
            {isLoading && <LoadingModal />}
            <div className="flex justify-between items-center m-4">
                <h1 className="text-2xl font-semibold">Blog</h1>
                <button
                    onClick={() => navigate("/portal/blog/add")}
                    className="bg-blue-200 h-8 w-40 flex flex-row justify-center items-center">
                    <IoMdAdd />
                    Create Blog
                </button>
            </div>

            <BlogPortalList blogs={blogs} onDelete={deleteBlog} />
        </section>
    )
}

export default BlogPortal;
