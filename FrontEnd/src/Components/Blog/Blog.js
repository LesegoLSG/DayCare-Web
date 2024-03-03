import React from 'react'
import BlogCard from './BlogCard'

const Blog = () => {
    return (
        <div className="bg-blue-200 w-full h-screen" id="blog">
            <div className="flex justify-center items-center">
                <h1>Blog</h1>
            </div>
            <div className="flex justify-center items-center">
                <BlogCard />
            </div>
        </div>
    )
}

export default Blog