import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './User.css';
import UsersList from './UsersList';
import userData from './UsersData';
import AddUser from './AddUser';
import NoUser from './NoUser';
import EditUser from './EditUser';

import { IoMdAdd } from "react-icons/io";

const Users = () => {
    const [users, setUsers] = useState([]);

    const [isAddUser, setIsAddUser] = useState(false);
    const [isEditUser, setIsEditUser] = useState(false);
    const [isUserList, setIsUserList] = useState(true);

    const [userToEdit, setUserToEdit] = useState(null);
    const navigate = useNavigate();

    const handleChangeToAdd = () => {
        setIsAddUser(true);
        setIsUserList(false);
        navigate("portal/users/add");
    }

    const fetchUsers = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/v1/admin/getAllUsers");
            setUsers(response.data);

        } catch (error) {
            console.log("Error fetching users:", error);
        }
    }

    // useEffect hook to fetch users when component mounts
    useEffect(() => {
        fetchUsers();
    }, []);

    //Add new user
    // const addUser = async (user, image) => {
    //     console.log("image from landing:", image);
    //     console.log("Json data:", user);

    // try {
    //     const formData = new FormData();
    //     if (image) {
    //         formData.append('image', image);
    //     }
    //     formData.append('user', JSON.stringify(user));

    //     const response = await axios.post("http://localhost:8080/api/v1/admin/add", formData, {
    //         headers: {
    //             'Content-Type': 'multipart/form-data',
    //         },
    //     });


    // } catch (error) {
    //     console.log("Error adding user:" + error);
    // }

    // }



    //Delete user
    const deleteUser = async (id) => {

        console.log("deleted id: ", id);
        if (id) {
            try {
                const response = await axios.delete(`http://localhost:8080/api/v1/admin/deleteUser/${id}`)
                if (response.data) {
                    setUsers(users.filter((user) => user.id !== id))
                }
            } catch (error) {
                console.log("Delete error", error);
            }

        }

    }

    const modalPopUp = (user) => {
        setIsEditUser(true);
        setUserToEdit(user);
    }

    const closeModal = () => {
        setIsEditUser(false);
    }

    return (
        <section>
            <div className=" w-full h-12 flex justify-between item-center p-2">
                <h1 className="text-black w-40 h-8 text-lg font-bold">Users</h1>
                <button
                    onClick={() => navigate("/portal/users/add")}
                    className="bg-blue-200 w-52 h-8 p-2 flex justify-center items-center"
                >
                    <IoMdAdd className="m-1" />  Add User
                </button>
            </div>

            <div className="w-full user-height flex justify-center items-center">

                {isUserList && users.length >= 1 ?
                    (
                        <UsersList users={users} onDelete={deleteUser} onModalPopUp={modalPopUp} />
                    ) : (
                        <NoUser />
                    )

                }
                {isAddUser &&
                    <AddUser />
                }

                {isEditUser &&
                    <EditUser userToEdit={userToEdit} closeModal={closeModal} />

                }




            </div>
        </section>
    )
}

export default Users