import React from "react";
import EmptyUser from "../../../Assets/EmptyUser.png";
import { useUser } from "../../../Contexts/UserLoggedIn";

const TopNav = () => {
  const { loggedInUser } = useUser();
  const userImage = loggedInUser.image
    ? `data:image/**;base64,${loggedInUser.image}`
    : EmptyUser;

  return (
    <div className="bg-gray-400 w-full h-[50px] flex justify-end items-center pr-4 gap-x-2">
      <h1 className="text-md font-bold">{`${loggedInUser.firstName} ${loggedInUser.lastName}`}</h1>
      <div className="w-10 h-10 rounded-full border border-solid border-action overflow-hidden">
        <img
          src={userImage}
          alt="User"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default TopNav;
