import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUserGraduate } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { SiBloglovin } from "react-icons/si";
import { ImProfile } from "react-icons/im";

const BottomBar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-gray-800 text-white flex justify-around py-3">
      <button
        onClick={() => handleNavigation("/portal/")}
        className="flex flex-col items-center"
      >
        <MdOutlineDashboard size={24} />
        <span className="text-xs">Dashboard</span>
      </button>
      <button
        onClick={() => handleNavigation("/portal/users")}
        className="flex flex-col items-center"
      >
        <FaUserFriends size={24} />
        <span className="text-xs">Users</span>
      </button>
      <button
        onClick={() => handleNavigation("/portal/Blog")}
        className="flex flex-col items-center"
      >
        <SiBloglovin size={24} />
        <span className="text-xs">Blogs</span>
      </button>
      <button
        onClick={() => handleNavigation("/portal/subscriptions")}
        className="flex flex-col items-center"
      >
        <ImProfile size={24} />
        <span className="text-xs">Profile</span>
      </button>
    </div>
  );
};

export default BottomBar;
