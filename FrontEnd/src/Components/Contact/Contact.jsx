import React from 'react';
import { FiMail, FiPhone, FiSend } from 'react-icons/fi';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="bg-primary w-full h-auto pt-20">
           <div className="container mx-auto flex justify-center items-center">
                <div className="bg-white shadow-md rounded-lg w-full lg:w-3/4 xl:w-1/2 p-8">
                    <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Contact Us</h2>
                    <div className="flex items-center mb-4">
                        <FiMail className="text-gray-600 text-lg" />
                        <span className="ml-2">info@example.com</span>
                    </div>
                    <div className="flex items-center mb-4">
                        <FiPhone className="text-gray-600 text-lg" />
                        <span className="ml-2">+1234567890</span>
                    </div>
                    <form className="mb-4">
                        <div className="w-full flex flex-col mb-4">
                            <label htmlFor="name" className="label text-start">Name</label>
                            <input type="text" id="name" name="name" className="inputField" />
                        </div>
                        <div className="w-full flex flex-row justify-center items-center gap-x-2">
                        <div className="w-full flex flex-col">
                                 <label htmlFor="email" className="label text-start">Email</label>
                                 <input type="email" id="email" name="email" className="inputField" />
                                   </div>
                               <div className="w-full flex flex-col">
                               <label htmlFor="contact" className="label text-start">Contact</label>
                               <input type="text" id="contact" name="contact" className="inputField" />
                            </div>
                        </div>
                      
                        <div className="flex flex-col mb-4">
                            <label htmlFor="message" className="label text-start">Message</label>
                            <textarea id="message" name="message" rows="4" className="w-full border-b-2 border-gray-400 focus:outline-none focus:border-action"></textarea>
                        </div>
                        <button type="submit" className="button">Send Message <FiSend className="inline-block ml-2" /></button>
                    </form>
                    <div className="flex justify-center mt-4">
                        <a href="#" className="text-gray-600 hover:text-blue-500 mx-2"><FaFacebook className="text-2xl" /></a>
                        <a href="#" className="text-gray-600 hover:text-blue-500 mx-2"><FaTwitter className="text-2xl" /></a>
                        <a href="#" className="text-gray-600 hover:text-blue-500 mx-2"><FaInstagram className="text-2xl" /></a>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Contact