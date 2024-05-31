import React from 'react';
import { useNavigate } from 'react-router-dom';

const FormSubmit = ({ handleSubmit, user, errorMessage, handleInputChange }) => {
  const navigate = useNavigate();

  return (
    <form className="p-4" onSubmit={handleSubmit}>
      <div>
        <h1 className="text-xl font-semibold mb-4">User Details</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label className="label text-start">First Name:</label>
          <input
            className="inputField"
            type="text"
            name="firstName"
            value={user.firstName}
            onChange={handleInputChange}
          />
          {errorMessage.firstName && <span className="text-red-600">{errorMessage.firstName}</span>}
        </div>
        <div className="flex flex-col">
          <label className="label text-start">Last Name:</label>
          <input
            className="inputField"
            type="text"
            name="lastName"
            value={user.lastName}
            onChange={handleInputChange}
          />
          {errorMessage.lastName && <span className="text-red-600">{errorMessage.lastName}</span>}
        </div>
        <div className="flex flex-col">
          <label className="label text-start">Mobile Number:</label>
          <input
            className="inputField"
            type="text"
            name="mobile"
            value={user.mobile}
            onChange={handleInputChange}
          />
          {errorMessage.mobile && <span className="text-red-600">{errorMessage.mobile}</span>}
        </div>
        <div className="flex flex-col">
          <label className="label text-start">Email Address:</label>
          <input
            className="inputField"
            type="text"
            name="email"
            value={user.email}
            onChange={handleInputChange}
          />
          {errorMessage.email && <span className="text-red-600">{errorMessage.email}</span>}
        </div>
        <div className="flex flex-col">
          <label className="label text-start">Password:</label>
          <input
            className="inputField"
            type="text"
            name="password"
            value={user.password}
            onChange={handleInputChange}
          />
          {errorMessage.password && <span className="text-red-600 text-start">{errorMessage.password}</span>}
        </div>
        <div className="flex flex-col">
          <label className="label text-start">Roles:</label>
          <select
            className="inputField"
            type="text"
            name="role"
            value={user.role}
            onChange={handleInputChange}
          >
            <option value="">Select a role</option>
            <option value="ADMIN">ADMIN</option>
            <option value="CONTENT_CREATOR">CONTENT_CREATOR</option>
          </select>
          {errorMessage.role && <span className="text-red-600">{errorMessage.role}</span>}
        </div>
        <div className="flex flex-col">
          <label className="label text-start">Whatsapp Number:</label>
          <input
            className="inputField"
            type="text"
            name="whatsAppNo"
            value={user.whatsAppNo}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col">
          <label className="label text-start">Facebook Link:</label>
          <input
            className="inputField"
            type="text"
            name="facebookLink"
            value={user.facebookLink}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col">
          <label className="label text-start">Instagram Link:</label>
          <input
            className="inputField"
            type="text"
            name="instagramLink"
            value={user.instagramLink}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col">
          <label className="label text-start">LinkedIn Link:</label>
          <input
            className="inputField"
            type="text"
            name="linkedInLink"
            value={user.linkedInLink}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <button type="submit" className="bg-blue-200 w-40 h-8 p-1">
          Submit
        </button>
        <button onClick={() => navigate('/portal/users')} className="bg-red-600 w-40 h-8 p-1">
          Cancel
        </button>
      </div>
    </form>
  );
};

export default FormSubmit;
