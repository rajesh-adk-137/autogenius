import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCarSide, FaRobot } from 'react-icons/fa';
import heroImage from "../assets/images/car-valuation.png"; // Add an appropriate image

const HeroSection = () => {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/predict');
    };

    return (
        <div className="bg-gradient-to-br from-blue-100 via-blue-150 to-blue-200 min-h-screen flex items-center">
            <div className="container mx-auto px-6 py-12 md:py-24">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <motion.div 
                        className="md:w-1/2 md:pr-12"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.h2 
                            className="text-3xl font-semibold text-blue-600 mb-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            AutoGenius: AI-Powered Car Valuation & Advice
                        </motion.h2>
                        <motion.h1 
                            className="text-5xl font-bold text-gray-800 mb-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            Predict Price & Get Expert Tips in Seconds
                        </motion.h1>
                        <motion.p 
                            className="mb-8 text-gray-600"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                        >
                            AutoGenius uses advanced AI to provide accurate price predictions for your used car. But we don't stop there - our AI also generates personalized tips to help you make the best decision, whether you're buying or selling.
                        </motion.p>
                        <motion.p 
                            className="mb-8 text-gray-600"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                        >
                            Enter your car details once, and get both a price estimate and tailored advice. It's like having a car expert and a data analyst at your fingertips!
                        </motion.p>
                        <motion.button
                            onClick={handleGetStarted}
                            className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg flex items-center hover:bg-blue-700 transition duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get Started
                            <FaCarSide className="ml-2 mr-2" />
                            <FaRobot className="ml-2" />
                        </motion.button>
                    </motion.div>
                    <motion.div 
                        className="md:w-1/2 mt-12 md:mt-0"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <img 
                            src={heroImage} 
                            alt="Car Valuation" 
                            className="rounded-lg w-full h-auto max-w-2xl mx-auto"
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
