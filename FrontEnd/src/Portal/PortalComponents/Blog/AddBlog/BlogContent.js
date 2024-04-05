import React, { useState } from 'react';
import '../blog.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { IoMdCloseCircleOutline } from "react-icons/io";
import TestContent from './TestContent';

const BlogContent = ({ onCloseModal, blog, submitBlog }) => {
    const [content, setContent] = useState('');
    console.log("value", content);

    const modules = {
        toolbar: [
            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
            [{ size: [] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' },
            { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image'],
            ['clean']
        ],
        clipboard: {
            matchVisual: false,

        }
    };

    const formats = [
        'header', 'font', 'size',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
    ];

    const handleOnClose = (e) => {
        if (e.target.id === "fullContainer") onCloseModal();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        blog.content = content;
        submitBlog();
        // onCloseModal();
    };

    return (
        <div
            id="fullContainer"
            onClick={handleOnClose}
            className="fixed inset-0 z-50 bg-black bg-opacity-30 backdrop:blur-sm flex justify-center items-center">


            <div className="bg-white w-[80%] min-h-[95vh] p-2 rounded overflow-y-auto">
                <div className="bg-green-200 w-[100%] flex justify-end">
                    <IoMdCloseCircleOutline
                        className="text-red-600 text-2xl font-semibold cursor-pointer"
                        onClick={() => onCloseModal()} />
                </div>
                <div className="myQuill bg-blue-400 min-h-[85vh] flex justify-center items-center ">
                    <ReactQuill
                        className="text-2xl border border-black max-h-80 overflow-y-auto"
                        theme="snow" value={content} onChange={setContent} modules={modules} formats={formats} />
                </div>
                {
                    blog.Category
                }
                {
                    blog.title
                }
                {
                    blog.topic
                }





                <button
                    onClick={handleSubmit}
                    className="bg-blue-200">Create Post</button>

                {/* <TestContent blog={blog} /> */}
            </div>

        </div>
    )
}

export default BlogContent