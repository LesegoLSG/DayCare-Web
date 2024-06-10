import React from 'react'

const CategorySlider = ({ categories, selectedCategory, handleCategoryFilter }) => {
    return (
        <div className=" w-full h-auto flex flex-wrap justify-center items-center py-2 px-6">
             {/* Button for All */}
             <button
                key="all"
                className={`inline-block px-4 py-2 mr-2 mb-2 rounded-lg ${selectedCategory === null ? 'bg-secondary text-white' : 'button'}`}
                onClick={() => handleCategoryFilter(null)} // Set selectedCategory to null for "All"
            >
                All
            </button>
            {categories.map((category, index) => (
                <button
                    key={index}
                    className={`inline-block px-4 py-2 mr-2 mb-2 rounded-lg ${selectedCategory === category ? 'bg-secondary text-white' : 'button'}`}
                    onClick={() => handleCategoryFilter(category)}
                >
                    {category}
                </button>
            ))}
        </div>
    )
}

export default CategorySlider