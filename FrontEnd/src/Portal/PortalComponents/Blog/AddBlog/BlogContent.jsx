import React, { useState,useRef,useMemo } from 'react';
import '../blog.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import {Editor} from "primereact/editor";



const BlogContent = ({placeholder,  blog, submitBlog }) => {
    const [content, setContent] = useState('');
    console.log("value", content);


  

    const handleSubmit = (e) => {
        e.preventDefault();
            // Extract plain text from HTML content
        const plainTextContent = content.replace(/<[^>]+>/g, '');
        // Update blog content with plain text
        blog.content = plainTextContent;blog.content = content;
        submitBlog();
       
    };

    return (
        <div className=" w-full h-auto flex flex-col justify-center items-center">

                <div className=" bg-blue-400 w-full h-auto flex justify-center items-center ">
                    {/* Editor */}
                        <Editor value={content} onTextChange={(e) => setContent(e.htmlValue)} style={{height:"300px"}} />
                </div>
                <div>
                <button
                    onClick={handleSubmit}
                    className="bg-blue-200">Create Post</button>
                    </div>

                {/* <TestContent blog={blog} /> */}
            </div>


    )
}

export default BlogContent