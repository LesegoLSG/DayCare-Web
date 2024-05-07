import React from 'react';
import { IoMdCloseCircleOutline } from "react-icons/io";
import Image2 from '../../../Assets/Image2.jpg';

const Modal = ({ service, onCloseModal }) => {
    const { title, briefDescription, icon, extendedDescription, imageMain } = service;
    //Close the modal when click on the outer div
    const handleOnClose = (e) => {
        if (e.target.id === "fullContainer") onCloseModal();
    }
    return (
        <div
            id="fullContainer"
            onClick={handleOnClose}
            className="fixed inset-0 z-50 bg-black bg-opacity-30 backdrop:blur-sm flex justify-center items-center">

            <div className="bg-primary border-secondary border-2 w-[80%] max-h-[80vh] p-2 rounded">
                <div className=" w-[100%] flex justify-end">
                    {/* <button className="bg-red-600 " onClick={() => onCloseModal()}>Close</button> */}
                    <IoMdCloseCircleOutline
                        className=" text-2xl font-semibold cursor-pointer"
                        onClick={() => onCloseModal()} />
                </div>
                <h1 className="text-2xl font-semibold">{service.title}</h1>

                <div className=" grid sm:grid-cols-1 md:grid-cols-2 justify-center items-center">
                    {/* Image div */}
                    <div className=" h-[20rem] flex justify-center items-center">
                        <img
                            className="object-cover w-full h-full"
                            src={imageMain}
                        />
                    </div>

                    {/* Full description div */}
                    <div className=" flex justify-center items-center">
                        <p>{extendedDescription}</p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Modal