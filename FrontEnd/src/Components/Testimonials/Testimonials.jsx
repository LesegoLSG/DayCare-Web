import React from "react";
import "./Testimonial.css";
import testimonialData from "./TestimonialData";
import TestimonialCard from "./TestimonialCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion } from "framer-motion";

const Testimonials = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    // centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section
      id="testimonials"
      className="bg-primary w-full h-auto relative py-16"
    >
      <div className="flex flex-col justify-center">
        <h1 className="h2 my-2 text-touch">What People Say</h1>
        <motion.h2
          initial={{ rotateX: 0 }}
          whileInView={{ rotateX: "360deg" }}
          transition={{ duration: 2 }}
          className="h3"
        >
          Hear From Our Happy Families
        </motion.h2>
      </div>
      <div className="w-full min-h-[50%] flex justify-center items-center py-16">
        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          exit={{ y: 50 }}
          className="w-4/5 h-auto "
        >
          <div className="slider-container">
            <Slider {...settings}>
              {testimonialData.map((myTestimonial, index) => (
                <TestimonialCard
                  key={index}
                  singleTestimonial={myTestimonial}
                />
              ))}
            </Slider>
          </div>
        </motion.div>
      </div>
      <div class="custom-shape-divider-bottom-1717994980">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Testimonials;
