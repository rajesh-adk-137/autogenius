import React, { useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCar, FaRobot, FaDollarSign, FaExclamationTriangle } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CarForm from '../components/CarForm';

const HomePage = () => {
  const [formData, setFormData] = useState({
    fuel_type: '',
    transmission: '',
    color: '',
    clean_title: '',
    mileage: '',
    accident: '',
    brand: '',
    years_used: '',
    model: '',
    trade_type: ''
  });
  const [prediction, setPrediction] = useState(null);
  const [aiTip, setAiTip] = useState(null);
  const [loading, setLoading] = useState(false);
  const [tipLoading, setTipLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setPrediction(null);
    setError(null);
    try {
      const response = await axios.post('http://127.0.0.1:8000/predict', {
        fuel_type: formData.fuel_type,
        transmission: formData.transmission,
        clean_title: formData.clean_title === 'yes' ? 1 : 0,
        mileage: parseFloat(formData.mileage),
        accident: parseInt(formData.accident) >= 1 ? 1 : 0,
        brand: formData.brand,
        years_used: parseFloat(formData.years_used)
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      setPrediction(response.data.price);
    } catch (error) {
      setError('Failed to get prediction. Please try again.');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleGetAiTip = async () => {
    setTipLoading(true);
    setAiTip(null);
    setError(null);
    try {
      const response = await axios.post('http://127.0.0.1:8000/ai_tip', {
        ...formData,
        mileage: parseFloat(formData.mileage),
        accident: parseInt(formData.accident),
        years_used: parseFloat(formData.years_used)
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      setAiTip(response.data.tip);
    } catch (error) {
      setError('Failed to get AI tip. Please ensure you have filled the form correctly.');
      console.error('Error:', error);
    } finally {
      setTipLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-[100dvh] bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300">
      <Navbar />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <CarForm
              formData={formData}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
              handleGetAiTip={handleGetAiTip}
              loading={loading}
              tipLoading={tipLoading}
            />

            <AnimatePresence>
            {aiTip && (
                <motion.div 
                  className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg shadow-md mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center mb-4">
                    <FaRobot className="text-3xl text-blue-600 mr-2" />
                    <h3 className="text-2xl font-bold text-blue-700">AI Tip</h3>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed font-semibold">{aiTip}</p>
                </motion.div>
              
              )}


              {error && (
                <motion.div
                  className="bg-red-100 border-l-4 border-red-500 p-4 mb-8 rounded-lg shadow-md"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center">
                    <FaExclamationTriangle className="text-red-500 mr-3" />
                    <p className="text-red-700 font-semibold">{error}</p>
                  </div>
                </motion.div>
              )}

              {(tipLoading) && (
                <motion.div 
                  className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg shadow-md mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-700"></div>
                    <h3 className="text-2xl font-semibold text-blue-700">Generating Response...</h3>
                  </div>
                </motion.div>
              )}

{(loading ) && (
                <motion.div 
                  className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg shadow-md mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-700"></div>
                    <h3 className="text-2xl font-semibold text-blue-700">Predicting...</h3>
                  </div>
                </motion.div>
              )}

              {prediction !== null && (
                <motion.div 
                  className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg shadow-md mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-semibold text-green-700 mb-4">Predicted Price:</h3>
                  <div className="flex items-center">
                    <FaDollarSign className="text-4xl text-green-600 mr-2" />
                    <p className="text-4xl font-bold text-green-600">{prediction.toFixed(2)}</p>
                  </div>
                </motion.div>
              )}


            </AnimatePresence>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;