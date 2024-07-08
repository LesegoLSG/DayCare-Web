import React, { useState } from "react";
import { motion } from "framer-motion";
import serviceData from "./ServicesData";
import ServicesCard from "./ServicesCard";
import "./Service.css";

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleOpenModal = (service) => {
    setSelectedService(service);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  return (
    <section
      className="bg-primary w-full h-auto flex flex-col justify-center items-center relative py-16"
      id="services"
    >
      <div className="flex flex-col justify-center">
        <h1 className="h2 my-2">Services</h1>
        <motion.h2
          className="h3"
          initial={{ rotateX: 0 }}
          whileInView={{ rotateX: "360deg" }}
          transition={{ duration: 2 }}
        >
          Explore Our Comprehensive Offerings
        </motion.h2>
      </div>

      {/* Main box */}
      <div className="w-full h-auto mt-6 grid grid-cols-1 gap-1 md:grid-cols-3 place-items-center px-16">
        {serviceData.map((myService, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            exit={{ opacity: 0, y: 50 }}
            className="service-card"
          >
            <ServicesCard
              singleService={myService}
              onOpenModal={handleOpenModal}
              index={index}
            />
          </motion.div>
        ))}
      </div>

      {/* {selectedService && <Modal service={selectedService} onCloseModal={handleCloseModal} />} */}

      <div className="custom-shape-divider-bottom-1717994980">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Services;
