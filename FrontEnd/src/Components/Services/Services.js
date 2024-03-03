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
        <section className="bg-blue-200 w-full h-auto flex flex-col justify-center items-center" id="services">
            <div className="bg-green-400 w-full h-auto flex justify-start items-center pl-16">
                <h3>Our offer</h3>
            </div>
            <div className="bg-red-400 w-full h-auto flex justify-start items-center pl-16">
                <h1 className="text-xl font-bold">Our Best Offer <br></br>For Your Kid</h1>
            </div>
            {/* Main box */}
            <div className="bg-green-300 w-full md:w-[1000px] h-auto mt-6 grid grid-cols-1 gap-1 md:grid-cols-3 place-items-center">
                {
                    serviceData.map((myService, index) => (
                        <ServicesCard key={index} singleService={myService} onOpenModal={handleOpenModal} index={index} />
                    ))
                }
            </div>

            {selectedService && <Modal service={selectedService} onCloseModal={handleCloseModal} />}

        </section>
    )
}

export default Services