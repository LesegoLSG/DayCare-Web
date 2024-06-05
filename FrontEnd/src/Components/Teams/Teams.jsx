import React from 'react';
import teamData from './TeamsData';
import TeamsCard from './TeamsCard';

const Teams = () => {
    return (
        <div className="bg-white w-full h-auto flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center">
                <h1 className="h2 my-2">About Us</h1>
                <h2 className='h3'>Discover Our Story of Nurturing and Growth</h2>
            </div>
            <div className="flex flex-col md:flex-row">
                {
                    teamData.map((myTeamData, index) => (
                        <TeamsCard key={index} singleTeamMember={myTeamData} />
                    ))
                }
            </div>
        </div>
    )
}

export default Teams