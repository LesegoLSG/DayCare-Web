import React, { useState } from 'react';
import './blog.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AddBlog = () => {
    const [value, setValue] = useState('');
    const [category, setCategory] = useState('');
    console.log("value", value);

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

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };


    return (
        <div className=" w-full " style={{ height: 'calc(100vh - 50px)' }}>
            <div className="w-full h-[40px] flex justify-center items-center p-4">
                <h1 className="text-2xl font-semibold">Create Blog</h1>
            </div>
            <div className="w-full h-[80%] flex justify-center items-center ">
                <form className=" w-3/5 h-auto grid grid-cols-1 gap-1 mt-4 pr-4 pl-4 items-start">
                    <label className="flex justify-start items-start">Category:</label>
                    <select value={category} onChange={handleCategoryChange} className="h-[2rem] border border-black rounded-md hover:border-blue-100">
                        <option value="">Select category...</option>
                        <option value="Technology">Technology</option>
                        <option value="Travel">Travel</option>
                        <option value="Food">Food</option>
                        {/* Add more options as needed */}
                    </select>
                    <label className="flex justify-start items-start">Title:</label>
                    <input className="h-[2rem] border border-black rounded-md hover:border-blue-100 " type="text" placeholder='Title' />
                    <label className="flex justify-start items-start">Topic:</label>
                    <input className="h-[2rem] border border-black rounded-md hover:border-blue-100 " type="text" placeholder='Topic' />
                    <label className="flex justify-start items-start">Body:</label>
                    <div className="">
                        <ReactQuill
                            className="text-2xl border border-black max-h-80 overflow-y-auto"
                            theme="snow" value={value} onChange={setValue} modules={modules} formats={formats} />
                    </div>
                    <div className=' mt-4'>
                        <button className="bg-blue-200 w-60 h-8">CREATE POST</button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default AddBlog