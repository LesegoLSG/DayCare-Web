import React from 'react'

const ViewUser = ({ userToView, closeViewUserModal, users }) => {
    console.log("UserToView", userToView)
    const handleOnClose = (e) => {
        if (e.target.id === "container")
            closeViewUserModal();
    }
    const handleWhatsAppClick = () => {
        window.open(`whatsapp://send?phone=${userToView.whatsAppNo}`, '_blank');
    };
    const handleFacebookClick = () => {
        window.open(userToView.facebookLink, '_blank');
    };
    return (
        <div id="container" onClick={handleOnClose} className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-white w-[46rem] h-[30rem]">
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
                    <h1 className="text-xl font-bold underline">Personal Details</h1>
                    <div className="grid grid-cols-2 text-start py-1">
                        <p className="text-lg"><span className="font-bold">First Name:</span>{userToView.firstName}</p>
                        <p className="text-lg"><span className="font-bold">Last Name:</span>{userToView.lastName}</p>
                    </div>
                    <div className="grid grid-cols-2 text-start py-1">
                        <p className="text-lg"><span className="font-bold">Email Address:</span>{userToView.email}</p>
                        <p className="text-lg"><span className="font-bold">Mobile Number:</span>{userToView.mobile}</p>
                    </div>
                    <h1 className="text-xl font-bold underline">Socials</h1>
                    <div className="grid grid-cols-2 text-start py-1">
                        <p className="text-lg"><span className="font-bold">WhatsApp Number:</span>{userToView.whatsAppNo}</p>
                        <button>WhatsApp {userToView.firstName}</button>
                    </div>
                    <div className="grid grid-cols-2 text-start py-1">
                        <p className="text-lg font-bold">Facebook Link:</p>
                        <button onClick={handleFacebookClick}>Inbox</button>
                    </div>
                    <div className="grid grid-cols-2 text-start py-1">
                        <p className="text-lg font-bold">Instagram Link:</p>
                        <button>Inbox</button>
                    </div>
                    <div className="grid grid-cols-2 text-start py-1">
                        <p className="text-lg font-bold">Linkedin Link:</p>
                        <button>Inbox</button>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default ViewUser