import React, { useRef } from 'react';
import { Slide } from 'react-slideshow-image';
import { IoLogoFacebook, IoLogoWhatsapp, IoLogoInstagram } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import 'react-slideshow-image/dist/styles.css';
import Image1 from '../../Assets/Image1.jpg';
import Image2 from '../../Assets/Image2.jpg';
import Image3 from '../../Assets/Image3.jpg';
import Image4 from '../../Assets/Image4.jpg';
import './Hero.css';

const spanStyle = {
    padding: '20px',
    background: 'transparent',
    color: 'black',
    marginTop: '16rem',
    fontSize: '1.9rem',
    fontWeight: 'bold'
}

const divStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '500px',
    position: 'relative',
    zIndex: '1'
}

const slideImages = [
    {
        url: Image4,
        caption: 'Explore the colorful world of learning',
        sectionId: 'about',
        buttonName: 'Explore Learning'
        //About section
    },
    {
        url: Image2,
        caption: 'Empowering solutions for your needs',
        sectionId: 'services',
        buttonName: 'Discover Solutions'
        //Services section
    },
    {
        url: Image3,
        caption: 'Creating unforgettable memories with us',
        sectionId: '',
        buttonName: 'Explore Memories'
        //Blog
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

    // const handleTouchStartPrev = (event) => {
    //     event.preventDefault();
    //     handleSlidePrev();
    // };

    // const handleTouchStartNext = (event) => {
    //     event.preventDefault();
    //     handleSlideNext();
    // };

    //Navigation control
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }
    return (
        <section id="home" className="bg-secondary w-full h-auto pt-14">
            <div className="slide-container" style={{ overflowX: 'hidden', WebkitOverflowScrolling: 'touch' }}>
                <Slide autoplay={true} duration={5000} ref={slideRef} >
                    {slideImages.map((slideImage, index) => (
                        <div key={index}>
                            <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                                <span style={spanStyle}>{slideImage.caption}</span>
                                <button
                                    className=" relative m-4 p-2 text-lg  "
                                    onClick={() => scrollToSection(slideImage.sectionId)}
                                >
                                    {slideImage.buttonName}
                                </button>
                            </div>
                        </div>
                    ))}

                </Slide>

            </div>
            <div>
                <h1 className="font-bold text-2xl">Welcome To</h1>
                <h1 className="font-bold text-6xl">
                    {[...'Mamoriti'].map((letter, index) => (
                        <span key={index} style={{ color: `#${Math.floor(Math.random() * 16777215).toString(16)}`, fontFamily: 'Lobster' }}>{letter}</span>
                    ))}
                </h1>

                <h1 className="font-bold text-2xl">Daycare center</h1>



            </div>


        </section>
    )
}

export default Hero