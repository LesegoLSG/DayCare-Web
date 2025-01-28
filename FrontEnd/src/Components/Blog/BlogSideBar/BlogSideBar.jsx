import React, { useState } from "react";
import LatestData from "./LatestData";
import LatestBlogCard from "./LatestBlogCard";
import UpcomingData from "./UpcomingData";
import UpcomingCard from "./UpcomingCard";

const BlogSideBar = ({ blogs }) => {
  const latestBlogs = blogs
    .filter((blog) => blog.status === "CURRENT_POST")
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3); // Displaying top 3 latest blogs

  const upcomingBlogs = blogs
    .filter((blog) => blog.status === "UPCOMING_POST")
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, 3); // Displaying top 3 upcoming blogs

  return (
    <div className=" w-full md:w-1/4 ">
      <div className="md:flex md:flex-col md:justify-between">
        {/* Latest Post */}
        <div className=" p-4 mb-4">
          <h1 className="text-lg font-bold mb-1">Latest Blogs</h1>
          <div className="space-y-2">
            {latestBlogs.map((latest, index) => (
              <React.Fragment key={index}>
                <LatestBlogCard latest={latest} />
                {/* {index !== latestBlogs.length - 1 && <hr className="my-1" />} */}
              </React.Fragment>
            ))}
          </div>
        </div>
        {/* Upcoming Events */}
        <div className="p-4">
          <h1 className="text-start text-lg font-bold mb-1">Upcoming Events</h1>
          <div className="">
            {upcomingBlogs.map((upcoming, index) => (
              <React.Fragment key={index}>
                <UpcomingCard upcoming={upcoming} />
                {/* {index !== upcomingBlogs.length - 1 && <hr className="my-1" />} */}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSideBar;
