import React from 'react';
import { useNavigate } from 'react-router-dom';
import './User.css';
import Image4 from '../../../Assets/Image4.jpg';
import Image1 from '../../../Assets/Image1.jpg';


const AddUser = () => {
    const navigate = useNavigate();
    return (
        <div className="bg-blue-400 w-full user-height">
            <h1>Hello</h1>
            <form className="flex justify-center items-center">
                <div className="flex flex-col w-[80%]">
                    <div className="bg-blue-200 w-[100%] h-[500px] grid grid-col-1 md:grid-cols-2 gap-2 relative">
                        {/* Profile picture */}
                        <div className="bg-red-200 w-full h-auto ">
                            <div>
                                <h1 className="">Profile Picture</h1>
                            </div>
                            <img src={Image4}
                                className="object-cover" />
                        </div>
                        {/* user details */}
                        <div className="bg-green-400 w-full p-2 ">
                            <div>
                                <h1 className="">User Details</h1>
                            </div>

                            <div className="flex flex-col justify-start items-start">
                                <label>FirstName:</label>
                                <input

                                    className="w-full mb-2 "
                                    type="text"
                                />
                            </div>
                            <div className="flex flex-col justify-start items-start">
                                <label>Last Name:</label>
                                <input

                                    className="w-full mb-2 "
                                    type="text"
                                />
                            </div>
                            <div className="flex flex-col justify-start items-start">
                                <label>Mobile Number:</label>
                                <input

                                    className="w-full mb-2 "
                                    type="text"
                                />
                            </div>
                            <div className="flex flex-col justify-start items-start">
                                <label>Email Address:</label>
                                <input

                                    className="w-full mb-2 "
                                    type="text"
                                />
                            </div>
                            <div className="flex flex-col justify-start items-start">
                                <label>Designation:</label>
                                <input

                                    className="w-full mb-2 "
                                    type="text"
                                />
                            </div>
                            <div className="flex flex-col justify-start items-start">
                                <label>Role</label>
                                <input

                                    className="w-full mb-2 "
                                    type="text"
                                />
                            </div>
                        </div>


                    </div>
                    <div className="bg-gray-400 m-4">
                        <button className="bg-green-600 m-1 p-1">Submit</button>
                        <button
                            onClick={() => navigate("/portal/users")}
                            className="bg-red-400 m-1 p-1">Cancel</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddUser