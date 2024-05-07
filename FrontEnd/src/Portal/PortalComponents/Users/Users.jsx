import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './User.css';
import UsersList from './UsersList';
import userData from './UsersData';
import AddUser from './AddUser';
import NoUser from './NoUser';
import EditUser from './EditUser';
import AxiosPrivateInstance from '../../../AuthServices/Axios/AxiosPrivateInstance';

import { IoMdAdd } from "react-icons/io";
import ViewUser from './ViewUser/ViewUser';
import LoadingModal from '../../../ReusableComponents/LoadingSpinner/LoadingModal';

const Users = () => {
    const [users, setUsers] = useState([]);

    const [isAddUser, setIsAddUser] = useState(false);
    const [isEditUser, setIsEditUser] = useState(false);
    const [isUserList, setIsUserList] = useState(true);
    const [isViewUser, setIsViewUser] = useState(false);

    const [userToEdit, setUserToEdit] = useState(null);
    const [userToView, setUserToView] = useState({});
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleChangeToAdd = () => {
        setIsAddUser(true);
        setIsUserList(false);
        navigate("portal/users/add");
    }

    const fetchUsers = async () => {
        try {
            setLoading(true);
            const response = await AxiosPrivateInstance.get("/user/getAllUsers");
            setUsers(response.data);
            setLoading(false);

        } catch (error) {
            console.log("Error fetching users:", error);
        }
    }

    // useEffect hook to fetch users when component mounts
    useEffect(() => {
        fetchUsers();
    }, []);





    //Delete user
    const deleteUser = async (id) => {

        console.log("deleted id: ", id);
        if (id) {
            try {
                const response = await AxiosPrivateInstance.delete(`/user/deleteUser/${id}`)
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

    const ModalViewUserPopUp = (user) => {
        setIsViewUser(true);
        setUserToView(user);
    }

    const closeViewUserModal = () => {
        setIsViewUser(false);
    }

    return (
        <section>
            <div className=" w-full h-12 flex justify-between item-center p-2">
                {loading && <LoadingModal />}
                <h1 className="text-black w-40 h-8 text-2xl font-bold">Users</h1>
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
                        <UsersList users={users} onDelete={deleteUser} onModalPopUp={modalPopUp} onModalViewUserPopUp={ModalViewUserPopUp} />
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

                {isViewUser &&
                    <ViewUser userToView={userToView} closeViewUserModal={closeViewUserModal} />
                }




            </div>
        </section>
    )
}

export default Users