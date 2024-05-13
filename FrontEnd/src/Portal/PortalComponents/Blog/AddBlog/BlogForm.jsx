import React from 'react';
import BlogContent from './BlogContent';
import CardPreview from './CardPreview';

const BlogForm = ({onClose,blog,handleInputChange,isPreviewCard,handleOpenModal,handleOpenPreviewModal,submitBlog}) => {
  return (
    <form className="bg-red-200 w-full flex flex-col justify-center items-center gap-y-6 ">
    <div className="bg-green-400 w-3/5 h-auto grid grid-cols-1 gap-1 mt-4 pr-4 pl-4 items-center ">
    {/* Status */}
<label className="flex justify-start items-start">Status:</label>
     <select name="status" value={blog.status} onChange={handleInputChange} className="h-[2rem] border border-black rounded-md hover:border-blue-100">
        <option value="CURRENT_POST">CURRENT_POST</option>
        <option value="UPCOMING_POST">UPCOMING_POST</option>
     
    </select>
    {/* Category */}
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
    </select>
    {/* {isOtherCategory  && 
             <input
             name="category"
             value={blog.otherCategory}
             onChange={handleInputChange}
             className="h-[2rem] border border-black rounded-md hover:border-blue-100 " type="text" placeholder='Other Category'
         />
    } */}
   

    {/* Published date */}
    {/* Date input field */}
    <label className="flex justify-start items-start">Date:</label>
    <input
        name="date"
        value={blog.date}
        onChange={handleInputChange}
        className="h-[2rem] border border-black rounded-md hover:border-blue-100"
        type="date"
        placeholder="YYYY-MM-DD"
    />
    {/* Title */}
    <label className="flex justify-start items-start">Title:</label>
    <input
        name="title"
        value={blog.title}
        onChange={handleInputChange}
        className="h-[2rem] border border-black rounded-md hover:border-blue-100 " type="text" placeholder='Title'
    />

    {/* Topic */}
    <label className="flex justify-start items-start">Topic:</label>
    <input
        name="topic"
        value={blog.topic}
        onChange={handleInputChange}
        className="h-[2rem] border border-black rounded-md hover:border-blue-100 " type="text" placeholder='Topic'
    />

    {isPreviewCard &&
        <CardPreview onClose={onClose} blog={blog} />
    }
    <div className=' mt-4'>
        <button onClick={handleOpenPreviewModal}>Preview card</button>
        
    </div>
    </div>
    <BlogContent  blog={blog} submitBlog={submitBlog} />

</form>
  )
}

export default BlogForm