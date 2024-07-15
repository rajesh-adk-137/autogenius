import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaHome, FaInfoCircle, FaEnvelope, FaQuestionCircle, FaCarAlt } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold"> Auto<span className='text-yellow-400'>Genius</span></h3>
                        <p className="text-sm">AutoGenius offers AI-powered used car price predictions based on make, model, year, mileage, and condition.</p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Quick Links</h3>
                        <FooterLink icon={<FaInfoCircle />} text="About" to="/about" />
                        <FooterLink icon={<FaCarAlt />} text="Predict" to="/predict" />
                        <FooterLink icon={<FaQuestionCircle />} text="FAQ" to="/" />
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Follow Us</h3>
                        <div className="flex space-x-4">
                            <SocialIcon Icon={FaFacebook} />
                            <SocialIcon Icon={FaInstagram} />
                            <SocialIcon Icon={FaLinkedin} />
                            <SocialIcon Icon={FaTwitter} />
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-4 text-center">
                    <p className="text-sm">&copy; {new Date().getFullYear()} AutoGenius. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

const SocialIcon = ({ Icon }) => (
    <motion.div whileHover={{ scale: 1.1 }} className="text-white">
        <Icon size={24} />
    </motion.div>
);

const FooterLink = ({ icon, text, to }) => (
    <Link to={to} className="flex items-center space-x-2 text-sm text-gray-300 hover:text-white transition duration-300">
        {icon}
        <span>{text}</span>
    </Link>
);

export default Footer;
