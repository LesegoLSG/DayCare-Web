import React from 'react';
import EmptyUser from '../../../Assets/EmptyUser.png';
import { useUser } from '../../../Contexts/UserLoggedIn';

const TopNav = () => {
    const { loggedInUser, setLoggedInUser } = useUser();
    const userImage = loggedInUser.image || EmptyUser;
    return (
        <div className="bg-gray-400 w-full h-[50px] flex justify-end items-center pr-4  gap-x-2">
            <h1 className="text-md font-bold">{`${loggedInUser.firstName} ${loggedInUser.lastName}`}</h1>
            <div className="bg-red-400 w-10 h-10 rounded-full border border-solid border-action"
                style={{
                    backgroundImage: `url('data:image/**;base64,${userImage}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}

            >

            </div>
        </div>
    )
}

export default TopNav