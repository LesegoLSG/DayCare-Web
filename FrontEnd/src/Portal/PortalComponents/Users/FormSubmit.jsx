import React from 'react';
import { useNavigate } from 'react-router-dom';


const FormSubmit = ({ handleSubmit, user, errorMessage, handleInputChange }) => {

    const navigate = useNavigate();

    return (
        <form className=" flex flex-col justify-center items-center" onSubmit={handleSubmit}>
            {/* user details */}
            <div className=" w-full p-2 ">

                <div>
                    <h1 className="text-xl font-semibold">User Details</h1>
                </div>
                <div className=" w-full h-[380px] overflow-y-auto">
                    <div className="flex flex-col justify-start items-start">
                        <label>FirstName:</label>
                        <input
                            className="w-full h-8 mb-2 border border-black hover:border-blue-200 px-2"
                            type="text"
                            name="firstName"
                            value={user.firstName}
                            onChange={handleInputChange}
                        />
                        {errorMessage.firstName &&
                            <span className="text-red-600">{errorMessage.firstName}</span>
                        }
                    </div>
                    <div className="flex flex-col justify-start items-start">
                        <label>Last Name:</label>
                        <input
                            className="w-full h-8 mb-2 border border-black hover:border-blue-200 px-2"
                            type="text"
                            name="lastName"
                            value={user.lastName}
                            onChange={handleInputChange}
                        />
                        {errorMessage.lastName &&
                            <span className="text-red-600">{errorMessage.lastName}</span>
                        }
                    </div>
                    <div className="flex flex-col justify-start items-start">
                        <label>Mobile Number:</label>
                        <input
                            className="w-full h-8 mt-2 border border-black hover:border-blue-200 px-2"
                            type="text"
                            name="mobile"
                            value={user.mobile}
                            onChange={handleInputChange}
                        />
                        {errorMessage.mobile &&
                            <span className="text-red-600">{errorMessage.mobile}</span>
                        }
                    </div>
                    <div className="flex flex-col justify-start items-start">
                        <label>Email Address:</label>
                        <input

                            className="w-full h-8 mt-2 border border-black hover:border-blue-200 px-2"
                            type="text"
                            name="email"
                            value={user.email}
                            onChange={handleInputChange}

                        />
                        {errorMessage.email &&
                            <span className="text-red-600">{errorMessage.email}</span>
                        }
                    </div>
                    <div className="flex flex-col justify-start items-start">
                        <label>Password:</label>
                        <input

                            className="w-full h-8 mt-2 border border-black hover:border-blue-200 px-2"
                            type="text"
                            name="password"
                            value={user.password}
                            onChange={handleInputChange}
                        />
                        {errorMessage.password &&
                            <span className="text-red-600 text-start">{errorMessage.password}</span>
                        }
                    </div>
                    <div className="flex flex-col justify-start items-start">
                        <label>Roles</label>
                        <select

                            className="w-full h-8 mt-2 border border-black hover:border-blue-200 px-2"
                            type="text"
                            name="role"
                            value={user.role}
                            onChange={handleInputChange}
                        >
                            <option value="">Select a role</option>
                            <option value="ADMIN">ADMIN</option>
                            <option value="CONTENT_CREATOR">CONTENT_CREATOR</option>
                        </select>
                        {errorMessage.role &&
                            <span className="text-red-600">{errorMessage.role}</span>
                        }
                    </div>
                    <div className="flex flex-col justify-start items-start">
                        <label>Whatsapp Number</label>
                        <input

                            className="w-full h-8 mt-2 border border-black hover:border-blue-200 px-2"
                            type="text"
                            name="whatsAppNo"
                            value={user.whatsAppNo}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="flex flex-col justify-start items-start">
                        <label>Facebook Link</label>
                        <input

                            className="w-full h-8 mt-2 border border-black hover:border-blue-200 px-2"
                            type="text"
                            name="facebookLink"
                            value={user.facebookLink}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="flex flex-col justify-start items-start">
                        <label>Instagram Link</label>
                        <input

                            className="w-full h-8 mt-2 border border-black hover:border-blue-200 px-2"
                            type="text"
                            name="instagramLink"
                            value={user.instagramLink}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="flex flex-col justify-start items-start">
                        <label>LinkedIn Link</label>
                        <input

                            className="w-full h-8 mt-2 border border-black hover:border-blue-200 px-2"
                            type="text"
                            name="linkedInLink"
                            value={user.linkedInLink}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
            </div>



            <div className="m-4">

                <button type="submit" className="bg-blue-200 w-40 h-8 m-1 p-1">Submit</button>
                <button
                    onClick={() => navigate("/portal/users")}
                    className="bg-red-600 w-40 h-8 m-1 p-1">Cancel</button>

            </div>
        </form>
    )
}

export default FormSubmit