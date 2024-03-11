import React, { useState } from 'react';
// import userData from './UsersData';
import { MdDeleteForever } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";

const UsersList = ({ users, onDelete, onModalPopUp }) => {
    const [search, setSearch] = useState("");

    return (
        <div className="bg-red-200 w-[80%] min-h-[30rem]">
            <div className="flex justify-end items-end mr-32 mb-10">
                <input
                    className="w-60 rounded-md "
                    type="text"
                    placeholder='Search User'
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <table>
                <thead>
                    <tr>
                        <th className=""></th>
                        <th className="">First Name</th>
                        <th className="">Last Name</th>
                        <th className="">Mobile Number</th>
                        <th className="">Email Address</th>
                        <th className="">Role</th>
                        <th className="">Action</th>
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
                                        <FaUserEdit
                                            onClick={() => onModalPopUp(user)}
                                            className="text-green-600 text-xl cursor-pointer m-2"
                                        />
                                        <MdDeleteForever
                                            onClick={() => onDelete(user.id)}
                                            className="text-red-600 text-xl cursor-pointer m-2" />
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