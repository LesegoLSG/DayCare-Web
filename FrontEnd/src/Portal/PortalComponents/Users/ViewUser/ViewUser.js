import React from 'react'

const ViewUser = ({ userToView, closeViewUserModal, users }) => {
    console.log("UserToView", userToView)
    const handleOnClose = (e) => {
        if (e.target.id === "container")
            closeViewUserModal();
    }
    return (
        <div id="container" onClick={handleOnClose} className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-white w-[40rem] h-[30rem]">
                <div className="w-full h-auto flex justify-center items-center py-4">
                    <div className="bg-green-500 w-[8rem] h-[8rem] rounded-full"
                        style={{
                            backgroundImage: `url('data:image/**;base64,${userToView.image}')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}>
                    </div>
                </div>
                <div className="w-full h-auto">
                    <div className="flex justify-start items-center">
                        <p className="text-lg"><span className="font-bold">First Name:</span>{userToView.firstName}</p>
                    </div>
                    <div className="flex justify-start items-center">
                        <p className="text-lg"><span className="font-bold">Last Name:</span>{userToView.lastName}</p>
                    </div>
                    <div className="flex justify-start items-center">
                        <p className="text-lg"><span className="font-bold">Email Address:</span>{userToView.email}</p>
                    </div>
                    <div className="flex justify-start items-center">
                        <p className="text-lg"><span className="font-bold">Mobile Number:</span>{userToView.mobile}</p>
                    </div>
                    <div className="flex justify-start items-center">
                        <p className="text-lg"><span className="font-bold">WhatsApp Number:</span>{userToView.whatsAppNo}</p>
                    </div>
                    <div className="flex justify-start items-center">
                        <p className="text-lg"><span className="font-bold">Facebook Link:</span>{userToView.facebookLink}</p>
                    </div>
                    <div className="flex justify-start items-center">
                        <p className="text-lg"><span className="font-bold">Instagram Link:</span>{userToView.instagramLink}</p>
                    </div>
                    <div className="flex justify-start items-center">
                        <p className="text-lg"><span className="font-bold">Linkedin Link:</span>{userToView.linkedInLink}</p>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default ViewUser