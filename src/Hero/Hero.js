import React, { useRef } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Image1 from '../Assets/Image1.jpg';
import Image2 from '../Assets/Image2.jpg';
import Image3 from '../Assets/Image3.jpg';
import Image4 from '../Assets/Image4.jpg';
import './Hero.css';

const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000'
}

const divStyle = {
    display: 'flex',
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
        caption: 'Explore the colorful world of learning'
    },
    {
        url: Image2,
        caption: 'Discover new adventures every day'
    },
    {
        url: Image3,
        caption: 'Create unforgettable memories with us'
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
    return (
        <section id="home" className="bg-blue-200 w-full h-screen pt-14">
            <div className="slide-container" style={{ overflowX: 'hidden', WebkitOverflowScrolling: 'touch' }}>
                <Slide autoplay={true} duration={5000} ref={slideRef} >
                    {slideImages.map((slideImage, index) => (
                        <div key={index}>
                            <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                                <span style={spanStyle}>{slideImage.caption}</span>
                            </div>
                        </div>
                    ))}

                </Slide>

            </div>
            <div>
                <h1>Welcome To Mamoriti Daycare center.</h1>
            </div>

        </section>
    )
}

export default Hero