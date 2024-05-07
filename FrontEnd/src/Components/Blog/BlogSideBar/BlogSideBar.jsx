import React, { useState } from 'react';
import LatestData from './LatestData';
import LatestBlogCard from './LatestBlogCard';
import UpcomingData from './UpcomingData';
import UpcomingCard from './UpcomingCard';

const BlogSideBar = () => {
    const [latestdata, setLatestData] = useState(LatestData);
    const [upcomingData, setUpcomingData] = useState(UpcomingData);
    return (
        <div className=" w-full md:w-1/4 ">
            <div className="md:flex md:flex-col md:justify-between">
                {/* Latest Post */}
                <div className=" p-4 mb-4">
                    <h1 className="text-lg font-bold">Latest Blogs</h1>
                    <div className="">
                        {latestdata.map((latest, index) => (
                            <React.Fragment key={index}>
                                <LatestBlogCard latest={latest} />
                                {index !== latestdata.length - 1 && <hr className="my-1" />}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
                {/* Upcoming Events */}
                <div className="p-4">
                    <h1 className="text-lg font-bold">Upcoming Events</h1>
                    <div className="">
                        {upcomingData.map((upcoming, index) => (
                            <React.Fragment key={index}>
                                <UpcomingCard upcoming={upcoming} />
                                {index !== upcomingData.length - 1 && <hr className="my-1" />}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default BlogSideBar