import React from 'react';
import { IoSearch } from "react-icons/io5";

const SearchBar = ({ setSearch }) => {
    return (
        <div className="relative w-full max-w-96">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <IoSearch className="text-gray-600" />
            </div>
            <input
                className="inputField pl-10" // Added pl-10 for left padding to account for the icon
                type="text"
                placeholder="Search"
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    );
}

export default SearchBar;
