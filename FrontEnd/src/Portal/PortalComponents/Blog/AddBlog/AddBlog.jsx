import React, { useState } from 'react';
import '../blog.css';
import BlogContent from './BlogContent';
import CardPreview from './CardPreview';

const AddBlog = () => {

    const [isModalAdd, setIsModalAdd] = useState(false);
    const [isPreviewCard, setIsPreviewCard] = useState(false);

    const [blog, setBlog] = useState({
        category: '',
        title: '',
        topic: '',
        content: ''
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setBlog({ ...blog, [name]: value });
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

    const submitBlog = () => {
        console.log("Submitted blog:", blog);
        // Implement your logic to submit the blog content
    };


    return (
        <div className=" w-full " style={{ height: 'calc(100vh - 50px)' }}>
            <div className="w-full h-[40px] flex justify-center items-center p-4">
                <h1 className="text-2xl font-semibold">Create Blog</h1>
            </div>
            <button>Upcoming Events</button>
            <div className="w-full h-[80%] flex justify-center items-center ">
                <form className=" w-3/5 h-auto grid grid-cols-1 gap-1 mt-4 pr-4 pl-4 items-start">
                    <label className="flex justify-start items-start">Category:</label>
                    <select name="category" value={blog.category} onChange={handleInputChange} className="h-[2rem] border border-black rounded-md hover:border-blue-100">
                        <option value="No_selection">Select category...</option>
                        <option value="Technology">Parenting Tips and Advice</option>
                        <option value="Travel">Child Development</option>
                        <option value="Health_safety">Health and Safety</option>
                        <option value="News_Upadtes">Daycare Center News and Updates</option>
                        <option value="Activities">Learning Activities</option>
                        <option value="Parental">Parenting Resources</option>
                        <option value="Community">Community Involvement</option>
                        <option value="Testimonials">Testimonials and Success Stories</option>
                        <option value="Holiday_Content">Seasonal and Holiday Content</option>
                        <option value="FAQ">FAQs and Parenting Q&A</option>
                        <option value="Other">Other</option>
                        {/* Add more options as needed */}
                    </select>
                    <label className="flex justify-start items-start">Title:</label>
                    <input
                        name="title"
                        value={blog.title}
                        onChange={handleInputChange}
                        className="h-[2rem] border border-black rounded-md hover:border-blue-100 " type="text" placeholder='Title'
                    />
                    <label className="flex justify-start items-start">Topic:</label>
                    <input
                        name="topic"
                        value={blog.topic}
                        onChange={handleInputChange}
                        className="h-[2rem] border border-black rounded-md hover:border-blue-100 " type="text" placeholder='Topic'
                    />

                    {isModalAdd &&
                        <BlogContent onCloseModal={handleCloseModal} blog={blog} submitBlog={submitBlog} />
                    }
                    {isPreviewCard &&
                        <CardPreview onClose={handleClosePreviewModal} blog={blog} />
                    }
                    <div className=' mt-4'>
                        <button onClick={handleOpenPreviewModal}>Preview card</button>
                        <button
                            className="bg-blue-200 w-60 h-8"
                            onClick={handleOpenModal}>CREATE CARD CONTENT</button>
                    </div>

                </form>
                {/* {
                    value
                } */}

            </div>
        </div>
    )
}

export default AddBlog