import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdDeleteForever } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import SearchBar from '../../../ReusableComponents/SearchBar/SearchBar';
import Pagination from '../../../ReusableComponents/SearchBar/Pagination/Pagination';
import EmptyUser from '../../../Assets/EmptyUser.png';

const UsersList = ({ users, onDelete, onModalPopUp, onModalViewUserPopUp }) => {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 5;

    const filteredUsers = users.filter((user) => {
        if (search === "") return true;
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
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    }

    return (
        <div className="w-full min-h-[30rem] p-4">
            <div className="w-full flex justify-end items-end mb-4">
                <SearchBar setSearch={setSearch} />
            </div>
            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-200 text-left">
                            <th className="p-2">Profile</th>
                            <th className="p-2">First Name</th>
                            <th className="p-2">Last Name</th>
                            <th className="p-2">Mobile Number</th>
                            <th className="p-2">Email Address</th>
                            <th className="p-2">Role</th>
                            <th className="p-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {records.map((user) => (
                            <tr key={user.id} className="border-b">
                                <td className="p-2">
                                    <div className="flex justify-center items-center">
                                        <div className="bg-cover bg-center w-16 h-16 rounded-full"
                                            style={{
                                                backgroundImage: `url('${user.image ? `data:image/**;base64,${user.image}` : EmptyUser}')`
                                            }}>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-2 text-start">{user.firstName}</td>
                                <td className="p-2 text-start">{user.lastName}</td>
                                <td className="p-2 text-start">{user.mobile}</td>
                                <td className="p-2 text-start">{user.email}</td>
                                <td className="p-2 text-start">{user.role}</td>
                                <td className="p-2 text-start">
                                    <div className="flex space-x-2">
                                        <button
                                            onClick={() => onModalViewUserPopUp(user)}
                                            className="bg-blue-500 text-white p-1 rounded hover:bg-blue-600">View</button>
                                        <FaUserEdit
                                            onClick={() => navigate(`edit/${user.id}`)}
                                            className="text-green-600 text-xl cursor-pointer hover:text-green-700"
                                        />
                                        <MdDeleteForever
                                            onClick={() => onDelete(user.id)}
                                            className="text-red-600 text-xl cursor-pointer hover:text-red-700" />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Pagination
                handleNextPage={handleNextPage}
                handlePreviousPage={handlePreviousPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalPages={totalPages}
            />
        </div>
    )
}

export default UsersList;
