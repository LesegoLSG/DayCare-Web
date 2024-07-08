import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

const TeamsCard = ({ singleTeamMember }) => {
  return (
    <div className="w-[18rem] h-[20rem] overflow-hidden border border-blue-200 rounded-md m-2">
      <div className="relative w-full h-3/5 overflow-hidden">
        <img
          src={singleTeamMember.image}
          alt={`${singleTeamMember.firstName} ${singleTeamMember.lastName}`}
          className="object-fit w-full h-full"
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-1">
          {singleTeamMember.occupation}
        </h2>
        <div className=" border-b w-full border-gray-300 mb-2"></div>
        <h2 className="text-lg mb-2">
          {singleTeamMember.firstName} {singleTeamMember.lastName}
        </h2>
        <div className="flex justify-center items-center">
          <FaFacebook className="text-2xl cursor-pointer mr-2 text-action" />
          <FaLinkedin className="text-2xl cursor-pointer text-action" />
        </div>
      </div>
    </div>
  );
};

export default TeamsCard;
