import React from 'react';
import './Testimonial.css';
import testimonialData from './TestimonialData';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
    return (
        <section id="testimonials" className="bg-blue-300 w-full h-auto">
            <div className=" w-full h-auto flex justify-start items-center pl-16">
                <h3>Testimonials</h3>
            </div>
            <div className=" w-full h-auto flex justify-start items-center pl-16">
                <h1 className="text-xl font-bold">Parents Say About Us</h1>
            </div>

            <div className="testimonial-box-container">
                {
                    testimonialData.map((myTestimonial, index) => (
                        <TestimonialCard key={index} singleTestimonial={myTestimonial} />
                    ))
                }
            </div>
        </section>
    )
}

export default Testimonials