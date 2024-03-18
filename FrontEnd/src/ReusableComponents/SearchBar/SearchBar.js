import React from 'react';
import { IoSearch } from "react-icons/io5";

const SearchBar = ({ setSearch }) => {
    return (
        <div className="bg-red-400 relative">
            <input
                className="w-80 h-8 border border-black rounded-md p-2 pl-8" // Added pl-8 for left padding
                type="text"
                placeholder="Search"
                onChange={(e) => setSearch(e.target.value)}
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-2">
                <IoSearch className="text-gray-600" />
            </div>
        </div>
    )
}

export default SearchBar