import React, { useState } from 'react';
// import userData from './UsersData';
import { MdDeleteForever } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

const UsersList = ({ users, onDelete, onModalPopUp, onModalViewUserPopUp }) => {
    const [search, setSearch] = useState("");

    return (
        <div className="w-[80%] min-h-[30rem]">
            <div className="w-full flex justify-end items-end mr-32 mb-10">
                <div className="relative">
                    <input
                        className="w-80 h-8 border border-black rounded-md p-2 pl-8" // Added pl-8 for left padding
                        type="text"
                        placeholder="Search"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <IoSearch className="text-gray-400" />
                    </div>
                </div>
            </div>
            <table className="w-full">
                <thead className="text-lg">
                    <tr>
                        <th></th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Mobile Number</th>
                        <th>Email Address</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.filter((user) => {
                        if (search === "") return true; // Show all users if search is empty
                        const searchTerm = search.toLowerCase();
                        return Object.values(user).some((value) =>
                            typeof value === 'string' && value.toLowerCase().includes(searchTerm)
                        );
                    })
                        .map((user) => (
                            <tr>
                                <td>
                                    <div className="flex justify-center items-center">
                                        <div className="bg-green-500 w-[4rem] h-[4rem] rounded-full"
                                            style={{
                                                backgroundImage: `url('data:image/**;base64,${user.image}')`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                            }}>
                                        </div>

                                    </div>
                                </td>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.mobile}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>
                                    <div className="flex justify-between">
                                        <button
                                            onClick={() => onModalViewUserPopUp(user)}
                                            className="bg-blue-200 w-20">View</button>
                                        <FaUserEdit
                                            onClick={() => onModalPopUp(user)}
                                            className="text-green-600 text-2xl cursor-pointer m-1"
                                        />
                                        <MdDeleteForever
                                            onClick={() => onDelete(user.id)}
                                            className="text-red-600 text-2xl cursor-pointer m-1" />
                                    </div>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )
}

export default UsersList