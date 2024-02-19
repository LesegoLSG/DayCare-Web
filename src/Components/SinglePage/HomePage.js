import React from 'react';
import About from '../About/About'
import Contact from '../Contact/Contact';
import Hero from '../../Hero/Hero';
import NavBar from '../NavBar/NavBar';


const HomePage = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <About />
            <Contact />
        </>
    )
}

export default HomePage