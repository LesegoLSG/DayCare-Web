import React from 'react';
import { useParams } from 'react-router-dom';
import blogData from '../BlogData';

const BlogReadMore = () => {
    const { id } = useParams(); // Get the id from the URL parameter
    const blog = blogData.find(blog => blog.id === parseInt(id));

    return (
        <div>
            <div>
                {console.log("blog:", blog)}
                <h1>Full Blog Description</h1>
                {blog ? <p className="text-black">{blog.briefDescription}</p> : <p>Blog not found</p>}
            </div>
        </div>
    )
}

export default BlogReadMore