import React from 'react'
import NavBar from '../../NavBar/NavBar';
import SchoolTransport from '../../../Assets/SchoolTransport.jpg';

const Transports = () => {
    return (
        <section className="bg-gray-200 w-full h-screen " id="transports">
            {/* <NavBar /> */}
            {/* top image */}
            <div className="bg-blue-100 w-full h-[40%]">
                <img className="w-full h-full object-fill" src={SchoolTransport} />
            </div>
        </section>
    )
}

export default Transports