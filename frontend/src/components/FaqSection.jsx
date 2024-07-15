import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import faq from "../assets/images/faq.png"; 

const faqData = [
    {
        question: "What is CarSell?",
        answer: "CarSell is an AI-powered tool that predicts the price of used cars based on various factors such as make, model, year, mileage, and condition. Additionally, it provides AI-generated expert advice to assist in buying or selling cars."
    },
    {
        question: "How accurate are CarSell's price predictions?",
        answer: "CarSell uses machine learning algorithms and market data to provide highly accurate price predictions. However, the final sale price may vary based on factors not captured by our model."
    },
    {
        question: "What information do I need to get a price prediction?",
        answer: "You'll need to provide details such as the car's make, model, year, mileage, condition, and any additional features. The more information you provide, the more accurate our prediction will be."
    },
    {
        question: "Can CarSell help me if I'm buying a car?",
        answer: "Absolutely! CarSell can help you determine if a car is fairly priced based on its specifications and current market trends. Our AI can also provide expert tips tailored to your needs."
    },
    {
        question: "Is CarSell free to use?",
        answer: "CarSell offers a free basic prediction service which is free as of now."
    }
];

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            className="bg-gradient-to-br from-blue-100 via-blue-150 to-blue-200 rounded-lg mb-4 overflow-hidden shadow-sm"
            initial={false}
            animate={{ backgroundColor: isOpen ? "#d4ebf7" : "#e0f7ff" }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
        >
            <motion.button
                className="flex justify-between items-center w-full text-left px-6 py-4"
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.02 }}
            >
                <motion.span 
                    className="text-md font-medium text-gray-900"
                    whileHover={{ color: "#007bff" }}
                    transition={{ duration: 0.3 }}
                >
                    {question}
                </motion.span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <FaChevronDown className="text-gray-500" />
                </motion.div>
            </motion.button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-4 text-sm text-gray-600"
                    >
                        {answer}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const FAQ = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <motion.h2 
                    className="text-3xl font-bold text-gray-900 text-center mb-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.span
                        className="bg-gradient-to-br from-blue-100 via-blue-150 to-blue-200 px-4 py-1 rounded inline-block"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        Frequently Asked Questions
                    </motion.span>
                </motion.h2>
                <div className="flex flex-col lg:flex-row items-start justify-between">
                    <div className="lg:w-3/5 pr-0 lg:pr-8">
                        {faqData.map((item, index) => (
                            <FAQItem key={index} question={item.question} answer={item.answer} />
                        ))}
                    </div>
                    <motion.div 
                        className="lg:w-2/5 mt-8 lg:mt-0 flex justify-center items-start lg:-mt-16"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.img 
                            src={faq} 
                            alt="Car Valuation Illustration" 
                            className="w-full max-w-md h-auto object-contain"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
