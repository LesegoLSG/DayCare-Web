import React from 'react';
import { Link } from 'react-router-dom';

const UpcomingCard = ({ upcoming }) => {

    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) return text;
        return text.slice(0, maxLength) + '...';
    };

    return (
        <div>

            <div className="w-full h-auto flex justify-start items-start">
                <p className="text-start" style={{ whiteSpace: 'pre-line' }}>{truncateText(upcoming.briefDescription, 80)}</p>
            </div>

            <div className="w-full h-auto flex items-start">
                <Link to={`/blog/${upcoming.id}`} className=" button">
                    Read More
                </Link>
            </div>

        </div>
    )
}

export default UpcomingCard