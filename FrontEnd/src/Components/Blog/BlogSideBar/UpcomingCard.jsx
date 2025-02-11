import React from "react";
import { Link } from "react-router-dom";

const UpcomingCard = ({ upcoming }) => {
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  return (
    <div className="space-y-2">
      <div className="w-full h-auto flex justify-start items-start">
        <p
          className="text-start font-semibold"
          style={{ whiteSpace: "pre-line" }}
        >
          {truncateText(upcoming.topic, 80)}
        </p>
      </div>
      <div className="w-full h-auto flex items-start">
        <p className="text-md text-start">{upcoming.title}</p>
      </div>
      <div className="w-full h-auto flex items-start">
        <p className="text-xs">{upcoming.date}</p>
      </div>

      <div className="w-full h-auto flex items-start">
        <Link to={`/bloginfo/${upcoming.id}`} className=" button">
          Read More
        </Link>
      </div>
      <hr />
    </div>
  );
};

export default UpcomingCard;
