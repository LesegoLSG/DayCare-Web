import React, { useEffect, useState } from 'react';
import { IoMdAdd } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import BlogPortalList from './BlogPortalList';
import { useBlogs } from '../../../Contexts/BlogContext';
import axiosInstance from '../../../AuthServices/Axios/AxiosInstance';
import LoadingModal from '../../../ReusableComponents/LoadingSpinner/LoadingModal';
import axiosPrivateInstance from '../../../AuthServices/Axios/AxiosPrivateInstance';
import DeleteDialog from '../../../ReusableComponents/ConfirmationsDialogs/DeleteDialog';

const BlogPortal = () => {
    const navigate = useNavigate();
    const { blogs, setBlogs } = useBlogs([]);
    const [isLoading, setIsLoading] = useState(false);
    //State for controlling the opeing and closing of a dialog
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    //Blog to delete id
    const [blogToDelete, setBlogToDelete] = useState(null);

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

    const deleteBlog = async (id) => {
        console
        try {
            setIsLoading(true);
            const response = await axiosPrivateInstance.delete(`/blog/deleteBlogById/${id}`)
            console.log(response.data);
            setBlogs(prevBlogs => prevBlogs.filter(blog => blog.id !== id));
            setIsLoading(false);
        } catch (error) {
            console.log("Delete error", error);
            setIsLoading(false);
        }
    }
    //Pass an id of a blog to be deleted and opens the dialog
    const handleDeleteClick = (id) => {
        setBlogToDelete(id);
        setIsDialogOpen(true);
    }

    //Confirm delete
    const handleConfirmDelete = () => {
        if (blogToDelete) {
            deleteBlog(blogToDelete);
        }
        setIsDialogOpen(false);
        setBlogToDelete(null);
    }
    //Cancel delete operation
    const handleCancelDelete = () => {
        setIsDialogOpen(false);
        setBlogToDelete(null);
    }

    return (
        <section className="main-container w-full">
            {isLoading && <LoadingModal />}
            {/* Delete dialog */}
            <DeleteDialog 
                 isOpen={isDialogOpen}
                 onConfirm={handleConfirmDelete}
                 onCancel={handleCancelDelete}
                 message="Are you sure you want to delete this blog?"
            />
            <div className="flex justify-between items-center m-4">
                <h1 className="text-2xl font-semibold">Blog</h1>
                <button
                    onClick={() => navigate("/portal/blog/add")}
                    className="button flex justify-center items-center">
                    <IoMdAdd />
                    Create Blog
                </button>
            </div>

            <BlogPortalList blogs={blogs} onDelete={handleDeleteClick} />
        </section>
    )
}

export default BlogPortal;
