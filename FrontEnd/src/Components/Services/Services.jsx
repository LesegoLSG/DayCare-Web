import React, { useState } from 'react';
import serviceData from './ServicesData';
import ServicesCard from './ServicesCard';
import Modal from './Modal/Modal';

const Services = () => {
    const [selectedService, setSelectedService] = useState(null);

    const handleOpenModal = (service) => {
        setSelectedService(service);
    };

    const handleCloseModal = () => {
        setSelectedService(null);
    };

    return (
        <section className="bg-primary w-full h-auto flex flex-col justify-center items-center" id="services">
           <div className="flex flex-col justify-center">
                <h1 className="h2 my-2">Services</h1>
                <h2 className='h3'>Explore Our Comprehensive Offerings</h2>
            </div>
        
            {/* Main box */}
            <div className=" w-full h-auto mt-6 grid grid-cols-1 gap-1 md:grid-cols-3 place-items-center px-16">
                {
                    serviceData.map((myService, index) => (
                        <ServicesCard key={index} singleService={myService} onOpenModal={handleOpenModal} index={index} />
                    ))
                }
            </div>

            {/* {selectedService && <Modal service={selectedService} onCloseModal={handleCloseModal} />} */}

        </section>
    )
}

export default Services