import React from 'react';
import teamData from './TeamsData';
import TeamsCard from './TeamsCard';

const Teams = () => {
    return (
        <div className="bg-primary w-full h-auto flex flex-col justify-center items-center">
            <div>
                <h1>Our Team</h1>
                <h2>Discover the faces behind our exceptional service</h2>
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