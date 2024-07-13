import React from "react";
import BlogContent from "./BlogContent";
import CardPreview from "./CardPreview";

const BlogForm = ({
  onClose,
  blog,
  handleInputChange,
  isPreviewCard,
  handleOpenModal,
  handleOpenPreviewModal,
  submitBlog,
  cardImage,
}) => {
  if (!blog) return null; // Return null if blog is not available

  return (
    <form className="w-full flex flex-col justify-center items-center space-y-6">
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md">
        {/* Status */}
        <label className="label text-start">Status:</label>
        <select
          name="status"
          value={blog.status || ""}
          onChange={handleInputChange}
          className="inputField"
        >
          <option value="Select_status">Select status</option>
          <option value="CURRENT_POST">CURRENT_POST</option>
          <option value="UPCOMING_POST">UPCOMING_POST</option>
        </select>

        {/* Category */}
        <label className="label text-start">Category:</label>
        <select
          name="category"
          value={blog.category || ""}
          onChange={handleInputChange}
          className="inputField"
        >
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

        {/* Published date */}
        <label className="label text-start">Date:</label>
        <input
          name="date"
          value={blog.date || ""}
          onChange={handleInputChange}
          className="inputField"
          type="date"
        />

        {/* Title */}
        <label className="label text-start">Title:</label>
        <input
          name="title"
          value={blog.title || ""}
          onChange={handleInputChange}
          className="inputField"
          type="text"
        />

        {/* Topic */}
        <label className="label text-start">Topic:</label>
        <input
          name="topic"
          value={blog.topic || ""}
          onChange={handleInputChange}
          className="inputField"
          type="text"
        />

        {isPreviewCard && (
          <CardPreview onClose={onClose} blog={blog} cardImage={cardImage} />
        )}

        <div className="flex justify-between items-center mt-6">
          <button
            type="button"
            onClick={handleOpenPreviewModal}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Preview Card
          </button>
        </div>
      </div>
      <BlogContent blog={blog} submitBlog={submitBlog} />
    </form>
  );
};

export default BlogForm;
