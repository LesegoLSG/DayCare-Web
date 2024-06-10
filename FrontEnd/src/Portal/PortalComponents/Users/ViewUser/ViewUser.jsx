import React from 'react'

const ViewUser = ({ userToView, closeViewUserModal }) => {
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
        <div id="container" onClick={handleOnClose} className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 md:p-8 lg:p-12">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl lg:max-w-4xl p-4 md:p-6 lg:p-8">
                <div className="w-full flex justify-center items-center py-4">
                    <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full bg-center bg-cover"
                        style={{
                            backgroundImage: `url('data:image/**;base64,${userToView.image}')`,
                        }}>
                    </div>
                </div>
                <div className="w-full">
                    <h1 className="text-2xl font-bold underline text-center mb-4">Personal Details</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-start py-1">
                        <p className="text-lg"><span className="font-bold">First Name:</span> {userToView.firstName}</p>
                        <p className="text-lg"><span className="font-bold">Last Name:</span> {userToView.lastName}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-start py-1">
                        <p className="text-lg"><span className="font-bold">Email Address:</span> {userToView.email}</p>
                        <p className="text-lg"><span className="font-bold">Mobile Number:</span> {userToView.mobile}</p>
                    </div>
                    <h1 className="text-2xl font-bold underline text-center mt-6 mb-4">Socials</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-start py-1">
                        <p className="text-lg"><span className="font-bold">WhatsApp Number:</span> {userToView.whatsAppNo}</p>
                        <button className="text-white bg-green-500 hover:bg-green-600 rounded-lg px-4 py-2" onClick={handleWhatsAppClick}>
                            WhatsApp {userToView.firstName}
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-start py-1">
                        <p className="text-lg font-bold">Facebook Link:</p>
                        <button className="text-white bg-blue-600 hover:bg-blue-700 rounded-lg px-4 py-2" onClick={handleFacebookClick}>
                            Inbox
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-start py-1">
                        <p className="text-lg font-bold">Instagram Link:</p>
                        <button className="text-white bg-pink-500 hover:bg-pink-600 rounded-lg px-4 py-2">
                            Inbox
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-start py-1">
                        <p className="text-lg font-bold">LinkedIn Link:</p>
                        <button className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg px-4 py-2">
                            Inbox
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewUser
