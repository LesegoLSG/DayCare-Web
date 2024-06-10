import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axiosPrivateInstance from '../../../../AuthServices/Axios/AxiosPrivateInstance';
import blogData from '../../../../Components/Blog/BlogData';
import BlogForm from '../AddBlog/BlogForm';
import {useUser} from '../../../../Contexts/UserLoggedIn';
import LoadingModal from '../../../../ReusableComponents/LoadingSpinner/LoadingModal';
import EditableCardImage from './EditableCardImage';


const BlogEdit = () => {

    const { id } = useParams();

    // Find the blog object with the matching id
    // const blog = blogData.find(blog => blog.id === parseInt(id));
    const [firstPass, setFirstPass] = useState(true);

    const [isModalAdd, setIsModalAdd] = useState(false);
    const [isPreviewCard, setIsPreviewCard] = useState(false);

    const [loading,setLoading] = useState(false);
   

    const { loggedInUser } = useUser();

    const [cardImage, setCardImage] = useState(null);
    const [blog, setBlog] = useState({})

    console.log("Blog edit", blog);
    useEffect(() => {
        const fetchBlog = async () => {
            try {
                setLoading(true);
                const response = await axiosPrivateInstance.get(`/blog/getBlogById/${id}`);
                setBlog(response.data);
                if (response.data.cardImage) {
                    setCardImage(response.data.cardImage); // Assuming cardImage is a URL string here
                  }
                  console.log("Edit data: ", response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching blog details:", error);
                setLoading(false);
            }
        };

        fetchBlog();
    }, [id]);

    console.log("Add Blog:", loggedInUser.firstName);
    console.log("Add Blog:", loggedInUser.id);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
            setBlog({ ...blog, [name]: value });
        
    };

    const handleImageUpload = (event) => {
        setFirstPass(false);
        const imageFile = event.target.files[0];
        setCardImage(imageFile);
    };


    const handleOpenModal = (e) => {
        e.preventDefault();
        setIsModalAdd(true);
    }

    const handleCloseModal = () => {
        setIsModalAdd(false);
    };

    const handleOpenPreviewModal = (e) => {
        e.preventDefault();
        setIsPreviewCard(true);
    }

    const handleClosePreviewModal = () => {
        setIsPreviewCard(false);
    };

    const submitBlog = async (e) =>{
        // e.preventDefault();
        setLoading(true);
        try {
            const formData = new FormData();
            if (cardImage) {

                formData.append('cardImage', cardImage); // Append File object
                console.log(formData.get('cardImage'));
            }
              // Create a new blog object without user information
              const { user, ...filteredBlog } = blog;
            formData.append('blogJson', JSON.stringify(filteredBlog));
            console.log(formData.get('blogJson'));
            const response = await axiosPrivateInstance.put(`/blog/updateBlog/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(response.data);
            // Redirect or reset form after successful submission
        } catch (error) {
            console.error("Error editing the blog:", error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className=" w-full " style={{ height: 'calc(100vh - 50px)' }}>
            {loading && <LoadingModal/>}
            <div className="w-full h-[40px] flex justify-center items-center p-4">
                <h1 className="text-2xl font-semibold">Edit Blog</h1>
            </div>
           

            <div className="w-full h-[640px] overflow-y-auto scrollbar">
           
            <EditableCardImage cardImage={cardImage} onImageUpload={handleImageUpload} firstPass={firstPass}/>
                
                    <BlogForm 
                        blog={blog} 
                        handleInputChange={handleInputChange} 
                        onClose={handleClosePreviewModal} 
                        isPreviewCard={isPreviewCard}
                        handleCloseModal={handleCloseModal}
                        handleOpenModal={handleOpenModal}
                        handleOpenPreviewModal={handleOpenPreviewModal}
                        submitBlog={submitBlog}
                    />
                    
                    </div>

            </div>
    )
}

export default BlogEdit