import React, { useState } from 'react';
// import userData from './UsersData';
import { MdDeleteForever } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import SearchBar from '../../../ReusableComponents/SearchBar/SearchBar';
import Pagination from '../../../ReusableComponents/SearchBar/Pagination/Pagination';

const UsersList = ({ users, onDelete, onModalPopUp, onModalViewUserPopUp }) => {
    const [search, setSearch] = useState("");

    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 5;


    // Filter users based on search term
    const filteredUsers = users.filter((user) => {
        if (search === "") return true; // Show all users if search is empty
        const searchTerm = search.toLowerCase();
        return Object.values(user).some((value) =>
            typeof value === 'string' && value.toLowerCase().includes(searchTerm)
        );
    });

    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = filteredUsers.slice(firstIndex, lastIndex);
    const totalPages = Math.ceil(filteredUsers.length / recordsPerPage);

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    const handleNextPage = () => {
        if (currentPage < lastIndex) {
            setCurrentPage(currentPage + 1);
        }
    }


    return (
        <div className="w-[80%] min-h-[30rem]">
            <div className="w-full flex justify-end items-end mr-32 mb-10">
                <SearchBar setSearch={setSearch} />
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
                    {records.map((user) => (
                        <tr key={user.id}>
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


            <Pagination handleNextPage={handleNextPage} handlePreviousPage={handlePreviousPage} currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
        </div>
    )
}

export default UsersList