import React from 'react';
import { useParams } from 'react-router-dom';
import blogData from '../../../Components/Blog/BlogData';

const BlogEdit = () => {

    const { id } = useParams();

    // Find the blog object with the matching id
    const blog = blogData.find(blog => blog.id === parseInt(id));

    return (
        <div>{blog.briefDescription}</div>
    )
}

export default BlogEdit