import React from 'react';
import About from '../About/About'
import Contact from '../Contact/Contact';
import Hero from '../Hero/Hero';
import NavBar from '../NavBar/NavBar';
import Testimonials from '../Testimonials/Testimonials';
import Services from '../Services/Services';
import Blog from '../Blog/Blog'
import Teams from '../Teams/Teams'
import Footer from '../Footer/Footer';


const HomePage = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <About />
            <Services />
            <Blog />
            <Testimonials />
            <Teams />
            <Contact />
            <Footer />

        </>
    )
}

export default HomePage