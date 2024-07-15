import React from 'react';
import { FaGithub, FaHome, FaInfoCircle, FaCarAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const Navbar = () => {
    return (
        <header className="bg-blue-900 text-white">
            <nav className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <Link to="/" className="flex items-center">
                        <FaCarAlt className="h-8 w-8 mr-3 text-blue-400" />
                        <motion.div className='text-2xl font-bold' whileHover={{ scale: 1.05 }}>
                            Auto<span className='text-blue-400'>Genius</span>
                        </motion.div>
                    </Link>
                    
                    {/* Desktop Menu */}
                    <div className="flex items-center space-x-6">
                        <NavItem icon={<FaHome />} text="Home" to="/" />
                        <NavItem icon={<FaCarAlt />} text="Predict" to="/predict" />
                        <NavItem icon={<FaInfoCircle />} text="About" to="/about" />
                        <a href="https://github.com/rajesh-adk-137/autogenius" target="_blank" rel="noopener noreferrer">
                            <motion.button whileHover={{ scale: 1.05 }} className="text-white">
                                <FaGithub size={24} />
                            </motion.button>
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
}

const NavItem = ({ icon, text, to }) => {
    return (
        <Link to={to} className="text-white hover:text-blue-400 transition duration-300">
            <motion.div
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                {icon}
                <span>{text}</span>
            </motion.div>
        </Link>
    );
}

export default Navbar;
