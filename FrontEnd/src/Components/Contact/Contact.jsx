import React, { useState } from "react";
import { FiMail, FiPhone, FiSend } from "react-icons/fi";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import {
  errorPopUp,
  successPopUp,
  warningPopUp,
} from "../../ReusableComponents/Notification/Notification";
import { ToastContainer } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let errors = {};
    let formIsValid = true;

    // Name
    if (!formData.name.match(/^[a-zA-Z ]*$/)) {
      formIsValid = false;
      errors.name = "Please enter only alphabets";
    }
    if (!formData.name) {
      formIsValid = false;
      errors.name = "Name cannot be empty";
    }

    // Email
    if (!formData.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      formIsValid = false;
      errors.email = "Please enter a valid email address";
    }
    if (!formData.email) {
      formIsValid = false;
      errors.email = "Email cannot be empty";
    }

    // Contact
    if (!formData.contact.match(/^\d{10}$/)) {
      formIsValid = false;
      errors.contact = "Please enter a 10-digit contact number";
    }
    if (!formData.contact) {
      formIsValid = false;
      errors.contact = "Contact number cannot be empty";
    }

    // Message
    if (!formData.message) {
      formIsValid = false;
      errors.message = "Message cannot be empty";
    }

    setErrors(errors);
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Send email using EmailJS
      emailjs
        .send(
          "service_l7z7oae",
          "template_jntnwjc",
          formData,
          "MgNl6yOFehtnPiqvN"
        )
        .then((response) => {
          successPopUp("Message sent successfully");
          console.log(
            "Email sent successfully:",
            response.status,
            response.text
          );
          // Clear form data after submission (optional)
          setFormData({
            name: "",
            email: "",
            contact: "",
            message: "",
          });
        })
        .catch((error) => {
          // console.error("Failed to send email:", error);
          errorPopUp("Sorry something went wrong, please try again later");
        });
    } else {
      // console.error("Form validation failed");
      warningPopUp("Form validation failed");
    }
  };

  return (
    <section id="contact" className="bg-primary w-full h-auto pt-20 py-16">
      <div className="flex flex-col justify-center items-center">
        <h1 className="h2 my-2 text-touch">Get in Touch</h1>
        <motion.h2
          initial={{ rotateX: 0 }}
          whileInView={{ rotateX: "360deg" }}
          transition={{ duration: 2 }}
          className="h3"
        >
          Let's Connect and Grow Together
        </motion.h2>
      </div>
      <div className="container mx-auto flex justify-center items-center  py-16 px-12 md:px-0">
        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          exit={{ y: 50 }}
          className="bg-white shadow-md rounded-lg w-full lg:w-3/4 xl:w-1/2 p-8"
        >
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
            Contact Us
          </h2>
          <div className="flex items-center mb-4">
            <FiMail className="text-gray-600 text-lg" />
            <span className="text-center">lesegomhlongo78@gmail.com</span>
          </div>
          <div className="flex items-center mb-4">
            <FiPhone className="text-gray-600 text-lg" />
            <span className="ml-2">+27 64 037 3089</span>
          </div>
          <form className="mb-4" onSubmit={handleSubmit}>
            <div className="w-full flex flex-col mb-4">
              <label htmlFor="name" className="label text-start">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className={`inputField ${errors.name ? "border-red-500" : ""}`}
                value={formData.name}
                onChange={handleInputChange}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>
            <div className="w-full flex flex-row justify-center items-center gap-x-2">
              <div className="w-full flex flex-col">
                <label htmlFor="email" className="label text-start">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`inputField ${
                    errors.email ? "border-red-500" : ""
                  }`}
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
              <div className="w-full flex flex-col">
                <label htmlFor="contact" className="label text-start">
                  Contact
                </label>
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  className={`inputField ${
                    errors.contact ? "border-red-500" : ""
                  }`}
                  value={formData.contact}
                  onChange={handleInputChange}
                />
                {errors.contact && (
                  <p className="text-red-500 text-sm">{errors.contact}</p>
                )}
              </div>
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="message" className="label text-start">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className={`w-full border-b-2 border-gray-400 focus:outline-none focus:border-action ${
                  errors.message ? "border-red-500" : ""
                }`}
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message}</p>
              )}
            </div>
            <button type="submit" className="button">
              Send Message <FiSend className="inline-block ml-2" />
            </button>
          </form>
          <div className="flex justify-center mt-4">
            <a href="#" className="text-action mx-2">
              <FaFacebook className="text-2xl" />
            </a>
            <a href="#" className="text-action mx-2">
              <FaTwitter className="text-2xl" />
            </a>
            <a href="#" className="text-action mx-2">
              <FaInstagram className="text-2xl" />
            </a>
          </div>
        </motion.div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
