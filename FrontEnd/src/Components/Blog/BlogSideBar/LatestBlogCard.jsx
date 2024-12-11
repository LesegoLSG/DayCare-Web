import React from "react";
import { Link } from "react-router-dom";

const LatestBlogCard = ({ latest }) => {
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  return (
    <div className="space-y-1">
      <div className="w-full h-auto flex justify-start items-start">
        <p
          className="text-start font-semibold"
          style={{ whiteSpace: "pre-line" }}
        >
          {truncateText(latest.topic, 80)}
        </p>
      </div>
      <div className="w-full h-auto flex items-start">
        <p className="text-md text-start">{latest.title}</p>
      </div>
      <div className="w-full h-auto flex items-start">
        <p className="text-xs">{latest.date}</p>
      </div>
      <div className="w-full h-auto flex items-start">
        <Link to={`/bloginfo/${latest.id}`} className="button">
          Read More
        </Link>
      </div>
      <hr />
    </div>
  );
};

export default LatestBlogCard;
