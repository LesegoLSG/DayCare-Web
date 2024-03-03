import React from 'react';
import About from '../About/About'
import Contact from '../Contact/Contact';
import Hero from '../Hero/Hero';
import NavBar from '../NavBar/NavBar';
import Testimonials from '../Testimonials/Testimonials';
import Services from '../Services/Services';
import Transport from '../Transport/Transport';
import Blog from '../Blog/Blog'


const HomePage = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <About />
            <Services />
            <Blog />
            <Transport />
            <Testimonials />
            <Contact />

        </>
    )
}

export default HomePage