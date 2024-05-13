import React from 'react';
import { useParams } from 'react-router-dom';
import blogData from '../BlogData';
import { useBlogs } from '../../../Contexts/BlogContext';

const BlogReadMore = () => {
    const {blogs,setBlogs} = useBlogs();
    const { id } = useParams(); // Get the id from the URL parameter
    const blog = blogs.find(blog => blog.id === parseInt(id));

     // Set the content as dangerously HTML
     const dangerouslyHTML = { __html: blog.content };

    return (
        <div className="w-full flex flex-col justify-center items-center  h-auto">
           <div className="bg-blue-400 w-full h-auto flex justify-center items-center">
                    <div
                            className="w-full h-[400px] bg-cover bg-center relative flex flex-col justify-center items-center"
                            style={{ backgroundImage:  `url('data:image/**;base64,${blog.cardImage}')` }}
                        >
                            <div className="w-full h-auto absolute">
                                <h1 className="text-4xl font-bold text-black">{blog.title}</h1>
                            </div>
                        </div>
                      
           </div>
             {/* Can make use of an iFrame */}
             {/* <div className='bg-red-200 w-full h-auto pt-8'>
                {blog.content}
            </div> */}

            <div className='bg-red-200 w-full h-auto pt-8 px-8' dangerouslySetInnerHTML={dangerouslyHTML} />

            <p>ddddddddddddddddddddddd</p>

        </div>
    )
}

export default BlogReadMore