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
import DeleteDialog from '../../../ReusableComponents/ConfirmationsDialogs/DeleteDialog';

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

     //State for controlling the opeing and closing of a dialog
     const [isDialogOpen, setIsDialogOpen] = useState(false);
      //Blog to delete id
    const [blogToDelete, setBlogToDelete] = useState(null);

 

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

     //Pass an id of a blog to be deleted and opens the dialog
     const handleDeleteClick = (id) => {
        setBlogToDelete(id);
        setIsDialogOpen(true);
    }

    //Confirm delete
    const handleConfirmDelete = () => {
        if (blogToDelete) {
            deleteUser(blogToDelete);
        }
        setIsDialogOpen(false);
        setBlogToDelete(null);
    }
    //Cancel delete operation
    const handleCancelDelete = () => {
        setIsDialogOpen(false);
        setBlogToDelete(null);
    }

    return (
        <section>
            <div className=" w-full h-12 flex justify-between item-center p-2">
                {loading && <LoadingModal />}
                {/* Delete dialog */}
            <DeleteDialog 
                 isOpen={isDialogOpen}
                 onConfirm={handleConfirmDelete}
                 onCancel={handleCancelDelete}
                 message="Are you sure you want to delete this user?"
            />
                <h1 className="text-black w-40 h-8 text-2xl font-bold">Users</h1>
                <button
                    onClick={() => navigate("/portal/users/add")}
                    className="button flex justify-center items-center"
                >
                    <IoMdAdd className="m-1" />  Add User
                </button>
            </div>

            <div className="w-full user-height flex justify-center items-center">

                {isUserList && users.length >= 1 ?
                    (
                        <UsersList users={users} onDelete={handleDeleteClick} onModalPopUp={modalPopUp} onModalViewUserPopUp={ModalViewUserPopUp} />
                    ) : (
                        <NoUser />
                    )

                }
                {/* {isAddUser &&
                    <AddUser />
                }

                {isEditUser &&
                    <EditUser userToEdit={userToEdit} closeModal={closeModal} />

                } */}

                {isViewUser &&
                    <ViewUser userToView={userToView} closeViewUserModal={closeViewUserModal} />
                }




            </div>
        </section>
    )
}

export default Users