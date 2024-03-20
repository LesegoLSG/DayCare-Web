import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const TeamsCard = ({ singleTeamMember }) => {

    return (
        // Card
        <div className=" w-[16rem] h-[18rem] overflow-hidden border border-blue-200 rounded-md m-2">
            {/* circle */}
            <div className="">
                {/* ImgBox */}
                <div className="rounded-b-full overflow-hidden hover:rounded-b-none duration-500">
                    <img src={singleTeamMember.image} />
                </div>

            </div>
            {/* content */}
            <div className="relative">
                <h2>{singleTeamMember.occupation}</h2>
                {/* Line divider */}
                <div className="flex justify-center">
                    <div className="border-b w-3/4 border-gray-300 my-2"></div>
                </div>
                <h2>{singleTeamMember.firstName} {singleTeamMember.lastName}</h2>
                <div className="flex justify-center items-center my-2">
                    <FaFacebook className="text-2xl cursor-pointer" />
                    <FaLinkedin className="text-2xl cursor-pointer" />
                </div>
            </div>
        </div>
    )
}

export default TeamsCard