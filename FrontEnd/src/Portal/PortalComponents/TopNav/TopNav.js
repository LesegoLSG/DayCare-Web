import React from 'react';
import EmptyUser from '../../../Assets/EmptyUser.png'

const TopNav = () => {
    return (
        <div className="bg-gray-400 w-full h-[50px] flex justify-end items-center pr-4  gap-x-2">
            <h1>Lesego Mhlongo</h1>
            <div className="bg-red-400 w-10 h-10 rounded-full ">
                <img className="object-cover" src={EmptyUser} />
            </div>
        </div>
    )
}

export default TopNav