import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './User.css';
import UsersList from './UsersList';
import userData from './UsersData';
import AddUser from './AddUser';
import NoUser from './NoUser';

const Users = () => {
    const [users, setUsers] = useState(userData);

    const [isAddUser, setIsAddUser] = useState(false);
    const [isUserList, setIsUserList] = useState(true);
    const navigate = useNavigate();

    const handleChangeToAdd = () => {
        setIsAddUser(true);
        setIsUserList(false);
        navigate("portal/users/add");
    }



    //Delete user
    const deleteUser = async (id) => {


        console.log("deleted id: ", id);
        if (id) {
            try {

                setUsers(users.filter((user) => user.id !== id))

            } catch (error) {
                console.log("Delete error", error);
            }

        }

    }

    return (
        <section>
            <div className="bg-red-200 w-full h-12 flex justify-between p-4">
                <h1 className="text-black text-lg font-bold">Users</h1>

            </div>
            <div className="bg-green-200 w-full h-auto flex justify-start m-2 ">
                <button
                    onClick={() => navigate("/portal/users/add")}
                    className="bg-blue-200 p-2"
                >
                    Add User
                </button>
            </div>
            <div className="bg-blue-400 w-full user-height flex justify-center items-center">

                {isUserList && users.length >= 1 ?
                    (
                        <UsersList users={users} onDelete={deleteUser} />
                    ) : (
                        <NoUser />
                    )

                }
                {isAddUser &&
                    <AddUser />
                }


            </div>
        </section>
    )
}

export default Users