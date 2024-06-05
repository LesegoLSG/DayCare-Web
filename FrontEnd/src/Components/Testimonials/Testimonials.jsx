import React from 'react';
import './Testimonial.css';
import testimonialData from './TestimonialData';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
    return (
        <section id="testimonials" className="bg-primary w-full h-auto">
            <div className="flex flex-col justify-center">
                <h1 className="h2 my-2">Testimonials</h1>
                <h2 className='h3'>Hear From Our Happy Families</h2>
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