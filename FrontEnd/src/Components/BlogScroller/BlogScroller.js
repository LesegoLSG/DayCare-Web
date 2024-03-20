import React from 'react';
const categoryListSelection = ["All", "Fashion", "Graduations", "Career Day", "Parental Guide", "Adventure"];

const BlogScroller = () => {
    return (
        <div className='bg-blue-400 w-[30rem] h-4'>
            <ul className="flex flex-row gap-4 overflow-y-auto">
                {
                    categoryListSelection.map((category) => (
                        <button className="bg-gray-800 w-28 h-6 text-white">
                            {category}
                        </button>
                    ))
                }
            </ul>
        </div>
    )
}

export default BlogScroller