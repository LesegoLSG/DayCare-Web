import React from 'react';
import teamData from './TeamsData';
import TeamsCard from './TeamsCard';
import './Teams.css';

const Teams = () => {
    return (
        <section className="bg-white w-full h-auto flex flex-col justify-center items-center relative py-16">
            <div className="flex flex-col justify-center items-center">
                <h1 className="h2 my-2">Our Team</h1>
                <h2 className='h3'>Caring Experts in Child Development</h2>
            </div>
            <div className="flex flex-col md:flex-row  py-16">
                {
                    teamData.map((myTeamData, index) => (
                        <TeamsCard key={index} singleTeamMember={myTeamData} />
                    ))
                }
            </div>
            <div class="custom-shape-divider-bottom-1717894530">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
        </section>
    )
}

export default Teams