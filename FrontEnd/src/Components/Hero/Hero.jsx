import React, { useRef } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Learning1 from "../../Assets/HeroSectionImages/Learning1.jpg";
import Memories1 from "../../Assets/HeroSectionImages/Memories1.jpg";
import ServicesSolutions1 from "../../Assets/HeroSectionImages/ServicesSolutions1.jpg";
import "./Hero.css";

const slideImages = [
  {
    url: Learning1,
    caption: "Explore the colorful world of learning",
    sectionId: "about",
    buttonName: "Explore Learning",
  },
  {
    url: ServicesSolutions1,
    caption: "Empowering solutions for your needs",
    sectionId: "services",
    buttonName: "Discover Solutions",
  },
  {
    url: Memories1,
    caption: "Creating unforgettable memories with us",
    sectionId: "blog",
    buttonName: "Explore Memories",
  },
];

const Hero = () => {
  const slideRef = useRef(null);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="bg-primary w-full h-auto pt-14 relative">
      <div
        className="slide-container"
        style={{ overflowX: "hidden", WebkitOverflowScrolling: "touch" }}
      >
        <Slide autoplay={true} duration={5000} ref={slideRef}>
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              <div
                className="slide-content"
                style={{
                  backgroundImage: `url(${slideImage.url})`,
                }}
              >
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
          <h1 className="font-bold text-6xl font-serif mb-2 text-touch">
            Star Bright
          </h1>
          <h1 className="font-bold text-2xl">Daycare Center</h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
