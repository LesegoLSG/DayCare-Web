import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import serviceData from "./ServicesData";
import { motion } from "framer-motion";

const ServiceInfo = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const serviceId = parseInt(id, 10);
  console.log("service id:", id);
  const service = serviceData.find((s) => s.id === serviceId);

  return (
    <section className="bg-primary w-full h-auto py-10 flex flex-col items-center">
      <div className="w-full max-w-6xl bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-extrabold mb-6 text-center text-touch">
          {service.title}
        </h1>
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8">
          <img
            src={service.imageMain}
            alt={service.title}
            className="w-full max-h-96 lg:w-1/2 rounded-lg shadow-lg mb-6 lg:mb-0"
          />
          <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2">
            {/* <div className="w-full h-64 mb-6">
                    <Lottie animationData={service.animation.props.animationData} />
                </div> */}
            <p className="text-lg leading-relaxed text-gray-700 text-start">
              {service.extendedDescription}
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-x-2">
          <div className="w-full mt-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 text-start">
              Key Features
            </h2>
            <ul className="list-disc list-inside text-gray-700 text-start">
              {service.keyFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className=" w-full mt-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 text-start">
              Benefits
            </h2>
            <ul className="list-disc list-inside text-gray-700 text-start">
              {service.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Customer Reviews
          </h2>
          <div className="w-full h-auto flex flex-col flex-wrap">
            {service.customerReviews.map((review, index) => (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                exit={{ opacity: 0, y: 50 }}
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg mb-4"
              >
                <p className="text-gray-700">{review.comment}</p>
                <p className="text-gray-600 mt-2 text-sm">{review.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <button className="button mt-8" onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
    </section>
  );
};

export default ServiceInfo;
