import React, { useRef } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Image1 from '../../Assets/Image1.jpg';
import Image2 from '../../Assets/Image2.jpg';
import Image3 from '../../Assets/Image3.jpg';
import Image4 from '../../Assets/Image4.jpg';
import './Hero.css';

const slideImages = [
    {
        url: Image4,
        caption: 'Explore the colorful world of learning',
        sectionId: 'about',
        buttonName: 'Explore Learning'
    },
    {
        url: Image2,
        caption: 'Empowering solutions for your needs',
        sectionId: 'services',
        buttonName: 'Discover Solutions'
    },
    {
        url: Image3,
        caption: 'Creating unforgettable memories with us',
        sectionId: '',
        buttonName: 'Explore Memories'
    },
];

const Hero = () => {
    const slideRef = useRef(null);

    const handleSlidePrev = () => {
        if (slideRef.current) {
            slideRef.current.goBack();
        }
    };

    const handleSlideNext = () => {
        if (slideRef.current) {
            slideRef.current.goNext();
        }
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section id="home" className="bg-primary w-full h-auto pt-14 relative">
            <div className="slide-container" style={{ overflowX: 'hidden', WebkitOverflowScrolling: 'touch' }}>
                <Slide autoplay={true} duration={5000} ref={slideRef}>
                    {slideImages.map((slideImage, index) => (
                        <div key={index}>
                            <div className="slide-content" style={{ backgroundImage: `url(${slideImage.url})` }}>
                                <div className="slide-overlay">
                                    <span className="slide-caption">{slideImage.caption}</span>
                                    <button
                                        className="slide-button button"
                                        onClick={() => scrollToSection(slideImage.sectionId)}
                                    >
                                        {slideImage.buttonName}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slide>
                <div className="welcome-text">
                    <h1 className="font-bold text-2xl mb-2">Welcome To</h1>
                    <h1 className="font-bold text-6xl font-serif mb-2">Mamoriti</h1>
                    <h1 className="font-bold text-2xl">Daycare Center</h1>
                </div>
            </div>
        </section>
    );
};

export default Hero;
