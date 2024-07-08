import React, { useState } from "react";

const PasswordChanger = ({ user, setIsPassword, handlePasswordChange }) => {
  const [passwords, setPasswords] = useState({
    password: "",
    confirmPassword: "",
  });
  const handleInputChange = (e) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwords.password === passwords.confirmPassword) {
      handlePasswordChange(passwords.password);
    } else {
      alert("Passwords do not match!");
    }
  };

  console.log("password--:", passwords.password);
  console.log("confirm passowrd--", passwords.confirmPassword);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label className="label text-start">Password:</label>
          <input
            className="inputField"
            type="text"
            name="password"
            value={passwords.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col">
          <label className="label text-start">Confirm Password:</label>
          <input
            className="inputField"
            type="text"
            name="confirmPassword"
            value={passwords.confirmPassword}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="bg-blue-200">
          Change Password
        </button>
        <button className="bg-red-200" onClick={() => setIsPassword(false)}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default PasswordChanger;
