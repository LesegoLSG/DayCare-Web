import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import AxiosPrivateInstance from '../../../AuthServices/Axios/AxiosPrivateInstance';
import blogData from '../../../Components/Blog/BlogData';
import BlogForm from './AddBlog/BlogForm';
import CardImage from './AddBlog/CardImage';
import {useUser} from '../../../Contexts/UserLoggedIn';
import LoadingModal from '../../../ReusableComponents/LoadingSpinner/LoadingModal';


const BlogEdit = () => {

    const { id } = useParams();

    // Find the blog object with the matching id
    // const blog = blogData.find(blog => blog.id === parseInt(id));


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
                const response = await AxiosPrivateInstance.get(`/blog/getBlogById/${id}`);
                setBlog(response.data);
                if (response.data.cardImage) {
                    setCardImage(response.data.cardImage); // Assuming cardImage is a URL string here
                  }
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

    return (
        <div className=" w-full " style={{ height: 'calc(100vh - 50px)' }}>
            {loading && <LoadingModal/>}
            <div className="w-full h-[40px] flex justify-center items-center p-4">
                <h1 className="text-2xl font-semibold">Edit Blog</h1>
            </div>
           

            <div className="w-full h-[640px] overflow-y-auto scrollbar">
           
                <CardImage cardImage={cardImage} handleImageUpload={handleImageUpload}/>
                
                    <BlogForm 
                        blog={blog} 
                        handleInputChange={handleInputChange} 
                        onClose={handleClosePreviewModal} 
                        isPreviewCard={isPreviewCard}
                        handleCloseModal={handleCloseModal}
                        handleOpenModal={handleOpenModal}
                        handleOpenPreviewModal={handleOpenPreviewModal}
                        submitBlog={() => console.log('Submit blog functionality here')}
                    />
                    
                    </div>

            </div>
    )
}

export default BlogEdit