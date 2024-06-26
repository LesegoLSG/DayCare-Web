import React from 'react';
import { useNavigate } from 'react-router-dom';
import PlayingKid from '../../Assets/PlayingKid.png';


const AboutInfo = () => {
    const navigate = useNavigate();
    return (
        <section className="about-info-container bg-white w-full h-auto pt-20 px-12">
            <div className="flex flex-col justify-center items-center">
                <h1 className="h2 my-2">About Us</h1>
                <h2 className='h3'>Discover Our Story of Nurturing and Growth</h2>
            </div>
            <div className="about-info-content w-full h-auto grid sm:grid-cols-1 md:grid-cols-2 p-6">
                <div className="about-info-image">
                    <img src={PlayingKid} alt="Playing Kid"/>
                </div>
                <div className="about-info-text flex flex-col justify-center items-start">
                    <p>We are a trusted daycare center with over 10 years of experience in providing a nurturing and playful environment for children to blossom and thrive. At [Mamoriti], we believe in fostering creativity, curiosity, and compassion in every child, preparing them for a lifetime of success.</p>
                    <p>Our daycare center is equipped with state-of-the-art facilities and a team of dedicated educators who are passionate about early childhood development. We offer a variety of programs tailored to meet the unique needs and interests of each child, ensuring a well-rounded and engaging learning experience.</p>
                    <p>From arts and crafts to outdoor exploration and music, our activities are designed to promote physical, emotional, and cognitive growth. We emphasize the importance of play in learning and strive to create a safe and inclusive environment where every child feels valued and supported.</p>
                    <button className="button mt-4" onClick={() => navigate("/")}>Back to Home</button>
                </div>
            </div>
        </section>
    );
}

export default AboutInfo;
