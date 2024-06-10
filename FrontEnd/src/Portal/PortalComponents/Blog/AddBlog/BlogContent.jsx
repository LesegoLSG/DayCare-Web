import React, { useState,useEffect } from 'react';
import { Editor } from "primereact/editor";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const BlogContent = ({ blog, submitBlog }) => {
  const [content, setContent] = useState('');


  // Update the content state if the blog content prop changes
  useEffect(() => {
    if (blog.content) {
      setContent(blog.content);
    }
  }, [blog.content]);

  console.log("CONTENT TO DISPLAY:", blog.content);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update blog content
    blog.content = content;
    console.log("Inside BlogContent", JSON.stringify(blog))
    submitBlog();
  };

  return (
    <div className="w-full flex flex-col justify-center items-center space-y-6">
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md">
        <label className="block text-sm font-medium text-gray-700">Content:</label>
        <Editor
          value={content}
          onTextChange={(e) => setContent(e.htmlValue)}
          style={{ height: "300px" }}
          className="mt-1"
        />
        <div className="flex justify-end mt-4">
          <button
            onClick={handleSubmit}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          >
             {blog.id ? "Update Post" : "Create Post"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogContent;
