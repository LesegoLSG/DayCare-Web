import React from 'react'

const CategorySlider = ({ categories, selectedCategory, handleCategoryFilter }) => {
    return (
        <div className="category-slider-container overflow-x-auto whitespace-nowrap  px-1">
            {categories.map((category, index) => (
                <button
                    key={index}
                    className={`inline-block px-4 py-2 mr-2 mb-2 rounded-lg ${selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
                    onClick={() => handleCategoryFilter(category)}
                >
                    {category}
                </button>
            ))}
        </div>
    )
}

export default CategorySlider