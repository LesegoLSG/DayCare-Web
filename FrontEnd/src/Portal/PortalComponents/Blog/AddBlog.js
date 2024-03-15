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
                        <button>Preview</button>
                        <button className="bg-blue-200 w-60 h-8">CREATE POST</button>
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