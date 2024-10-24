'use client'
import React from 'react';
import { FaCode, FaMobileAlt, FaSearch, FaServer, FaPaintBrush, FaCloud } from 'react-icons/fa';
import { motion } from 'framer-motion';

const services = [
    {
        icon: <FaCode />,
        title: 'Web Development',
        description: 'Creating responsive and high-performance websites.',
    },
    {
        icon: <FaMobileAlt />,
        title: 'Frontend Development',
        description: 'Building Responsive and high-performance websites',
    },
    {
        icon: <FaSearch />,
        title: 'SEO Services',
        description: 'Improving search engine rankings to increase visibility.',
    },
    {
        icon: <FaServer />,
        title: 'Backend Development',
        description: 'Building scalable server-side solutions.',
    },
    {
        icon: <FaPaintBrush />,
        title: 'UI/UX Design',
        description: 'Designing intuitive and aesthetic user interfaces.',
    },
    {
        icon: <FaCloud />,
        title: 'Cloud Solutions',
        description: 'Deploying and managing applications on the cloud.',
    },
];

const Services = () => {
    return (
        <div className="services-section bg-[#1C315E] h-[85vh] py-10">
            <h1 className="animate-fade-in-top text-5xl text-white mt-10 mb-14 text-center font-bold">
                My <span className="text-[#19A7CE]">Services</span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-4 lg:mx-12 gap-6 px-4">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className="service-card p-6 bg-[#0B2447] rounded-lg text-white shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <div className="animate-fade-in-top text-cyan-400 text-4xl mb-4">{service.icon}</div>
                        <h3 className="animate-fade-in-top animate-delay-1 text-xl font-bold mb-2">{service.title}</h3>
                        <p className="italic animate-fade-in-top animate-delay-1 mb-4">{service.description}</p>
                        {/* <button
                           className="animate-fade-in-bottom animate-delay-1  bg-[#19A7CE] text-black fixed-glow px-4 py-2 rounded-lg hover:bg-transparent hover:border-[#19A7CE] hover:text-[#19A7CE]  hover:border-2 transition-all"
                        >
                            Learn More
                        </button> */}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Services;
