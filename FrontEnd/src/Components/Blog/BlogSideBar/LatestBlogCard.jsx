import React from 'react';
import { Link } from 'react-router-dom';


const LatestBlogCard = ({ latest }) => {

    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) return text;
        return text.slice(0, maxLength) + '...';
    };

    return (
        <div>
            <div className="w-full h-auto flex items-start">
                <p className="text-md font-bold">{latest.title}</p>
            </div>
            <div className="w-full h-auto flex justify-start items-start">
                <p className="text-start" style={{ whiteSpace: 'pre-line' }}>{truncateText(latest.briefDescription, 80)}</p>
            </div>
            <div className="w-full h-auto flex items-start">
                <p>{latest.date}</p>
            </div>
            <div className="w-full h-auto flex items-start">
                <Link to={`/blog/${latest.id}`} className=" border bg-[#5C8D89] border-balance rounded-xl font-semibold text-white hover:text-black hover:border-[#5C8D89] hover:bg-transparent p-1">
                    Read More
                </Link>
            </div>

        </div>
    )
}

export default LatestBlogCard