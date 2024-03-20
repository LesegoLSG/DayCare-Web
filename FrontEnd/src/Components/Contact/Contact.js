import React from 'react';
import Background from '../../Assets/Background.png';

const Contact = () => {
    return (
        <section id="contact" className="bg-blue-200 w-full h-auto pt-20">
            {/* <img
                className="bg-cover bg-no-repeat"
                src={Background} /> */}
            <div className="w-full h-auto">
                <div className="w-full md:w-3/4 h-auto md:flex md:flex-wrap">
                    {/* Left side */}
                    <div className="w-full md:w-3/4">
                        <div className="grid md:grid-cols-3 gap-4">
                            {/* Your blog cards */}
                            <div className="bg-gray-200 p-4">Blog Card 1</div>
                            <div className="bg-gray-200 p-4">Blog Card 2</div>
                            <div className="bg-gray-200 p-4">Blog Card 3</div>
                            {/* Add more blog cards as needed */}
                        </div>
                    </div>
                    {/* Right side */}
                    <div className="w-full md:w-1/4 md:ml-4">
                        <div className="md:flex md:flex-col md:justify-between">
                            {/* Latest Post */}
                            <div className="bg-gray-300 p-4 mb-4">Latest Post</div>
                            {/* Upcoming Events */}
                            <div className="bg-gray-300 p-4">Upcoming Events</div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Contact