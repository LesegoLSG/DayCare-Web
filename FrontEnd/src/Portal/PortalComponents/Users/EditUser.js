import React from 'react'

const EditUser = ({ userToEdit, closeModal }) => {
    console.log(userToEdit);
    const handleOnClose = (e) => {
        if (e.target.id === "container")
            closeModal();
    }
    return (

        <div id="container" onClick={handleOnClose} className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className=" w-80 h-80 bg-white p-2 rounded ">
                <p>Modal</p>
                <p>{userToEdit.id}</p>
                <p>{userToEdit.email}</p>
                <p>{userToEdit.firstName}</p>
                <p>{userToEdit.lastName}</p>
                <p>{userToEdit.role}</p>


                <button onClick={() => closeModal()}>Close</button>
            </div>
        </div>
    )
}

export default EditUser