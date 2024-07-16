import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-[100dvh] bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300">
            <div>
                <Navbar />
            </div>
            <main className="flex-1 bg-gradient-to-b from-blue-100 to-green-100">
                <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
                    <div className="px-6 md:px-8 space-y-12 xl:space-y-16">
                        <div className="grid max-w-[1300px] mx-auto gap-6 md:gap-12 md:grid-cols-2">
                            <div>
                                <motion.h1 
                                    className="lg:leading-tighter text-4xl md:text-5xl xl:text-6xl font-bold text-[#0d0f2f]"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    Auto<span className="text-green-400">Genius</span>: Intelligent Car Price Predictor & Advisor
                                </motion.h1>
                                <motion.p 
                                    className="mt-4 text-lg text-gray-600"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3, duration: 0.5 }}
                                >
                                    Discover the future of car pricing with AutoGenius. Our AI-driven platform predicts pre-owned car prices and provides personalized tips, helping you make informed buying or selling decisions.
                                </motion.p>
                            </div>
                            <div className="flex flex-col items-start space-y-6">
                                <motion.div 
                                    className="inline-block rounded-lg bg-green-100 px-4 py-2 text-lg font-semibold text-green-700"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    Key Features
                                </motion.div>
                                <ul className="grid gap-3 py-6">
                                    {[
                                        "Expert level price predictions",
                                        "Personalized AI tips for buyers and sellers",
                                        "Analysis based on comprehensive car details",
                                        "User-friendly interface",
                                        "Accurate and reliable valuation"
                                    ].map((feature, index) => (
                                        <motion.li 
                                            key={index} 
                                            className="flex items-center gap-2"
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <span className="text-lg">{feature}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                                <div className="flex flex-wrap gap-4">
                                    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                                        <Link
                                            className="inline-flex items-center justify-center rounded-md bg-[#0d0f2f] px-6 py-3 text-lg text-white font-medium shadow-lg transition-colors hover:bg-[#1a1c4a] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0d0f2f] mb-4"
                                            to='/predict'
                                        >
                                            Get Started
                                        </Link>
                                    </motion.div>
                                    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                                        <Link
                                            className="inline-flex items-center justify-center rounded-md border border-[#0d0f2f] bg-white px-6 py-3 text-lg font-medium text-[#0d0f2f] shadow-lg transition-colors hover:bg-[#e6e6fa] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0d0f2f] mb-4"
                                            to='/'
                                        >
                                            Learn More
                                        </Link>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
                    <div className="container mx-auto px-6 md:px-8">
                        <motion.h2 
                            className="text-3xl md:text-4xl font-bold text-center text-[#0d0f2f] mb-12"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            How It Works
                        </motion.h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { title: "Enter Car Details", icon: "📝", description: "Input comprehensive information about the car you're interested in." },
                                { title: "AI Price Prediction", icon: "🧠", description: "Our AI analyzes the data to predict the car's price accurately." },
                                { title: "Get Personalized Tip", icon: "💡", description: "Receive an AI-generated tip tailored to your specific car details." },
                                { title: "View Results", icon: "📊", description: "See the predicted price and personalized advice in one place." },
                                { title: "Make Informed Decisions", icon: "🤝", description: "Use the insights to negotiate better or make smarter buying choices." },
                                { title: "Stay Updated", icon: "🔄", description: "Come back anytime for the latest predictions and market insights." }
                            ].map((step, index) => (
                                <motion.div 
                                    key={index} 
                                    className="bg-blue-50 rounded-lg p-6 text-center"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="text-4xl mb-4">{step.icon}</div>
                                    <h3 className="text-xl font-semibold text-[#0d0f2f] mb-2">{step.title}</h3>
                                    <p className="text-gray-600">{step.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
