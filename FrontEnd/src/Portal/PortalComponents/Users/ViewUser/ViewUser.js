import React from 'react'

const ViewUser = ({ userToView, closeViewUserModal }) => {
    const handleOnClose = (e) => {
        if (e.target.id === "container")
            closeViewUserModal();
    }
    return (
        <div id="container" onClick={handleOnClose} className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-white w-80 h-80">
                <div className="bg-green-500 w-[4rem] h-[4rem] rounded-full"
                    style={{
                        backgroundImage: `url('data:image/**;base64,${userToView.image}')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}>
                </div>
                <p>{userToView.firstName}</p>
                <p>{userToView.lastName}</p>
                <p>{userToView.email}</p>
            </div>

        </div>
    )
}

export default ViewUser