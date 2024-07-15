import React, { useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const carBrands = [
  "Ford", "Hyundai", "Lexus", "INFINITI", "Audi", "Acura", "BMW", "Tesla",
  "Land Rover", "Aston Martin", "Toyota", "Lincoln", "Jaguar", "Mercedes-Benz",
  "Dodge", "Nissan", "Genesis", "Chevrolet", "Kia", "Jeep", "Bentley", "Honda",
  "Lucid", "MINI", "Porsche", "Hummer", "Chrysler", "Volvo", "Cadillac", "Other",
  "Volkswagen", "Subaru", "Rivian"
];

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
    setPrediction(null); // Reset prediction while loading
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
    setAiTip(null); // Reset AI Tip while loading
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
      setError('Failed to get AI tip. Please try again.');
      console.error('Error:', error);
    } finally {
      setTipLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-[100dvh] bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300">
      <Navbar />
      <main className="flex-1 bg-gradient-to-b from-blue-50 to-green-50 py-12 md:py-24">
        <div className="container mx-auto px-6 md:px-8">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-[#0d0f2f] mb-8 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Car Price Prediction
          </motion.h1>
          <motion.form 
            onSubmit={handleSubmit}
            className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-8"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Brand</label>
                <select
                  name="brand"
                  value={formData.brand}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">Select a brand</option>
                  {carBrands.map((brand) => (
                    <option key={brand} value={brand}>{brand}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Fuel Type</label>
                <select
                  name="fuel_type"
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select fuel type</option>
                  <option value="Gasoline">Gasoline</option>
                  <option value="Diesel">Diesel</option>
                  <option value="Electric">Electric</option>
                  <option value="Hybrid">Hybrid</option>
                  <option value="E85 Flex Fuel">E85 Flex Fuel</option>
                  <option value="Other">Other</option>
                  
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Transmission</label>
                <select
                  name="transmission"
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select transmission</option>
                  <option value="Automatic">Automatic</option>
                  <option value="Manual">Manual</option>
                  <option value="CVT">CVT</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Color</label>
                <input
                  type="text"
                  name="color"
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., Black, White, Red"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Clean Title</label>
                <select
                  name="clean_title"
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mileage</label>
                <input
                  type="number"
                  name="mileage"
                  value={formData.mileage}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., 50000(in miles)"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Number of Accidents</label>
                <input
                  type="number"
                  name="accident"
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., 0, 1, 2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Years Used</label>
                <input
                  type="number"
                  name="years_used"
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., 3, 5, 10"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Model</label>
                <input
                  type="text"
                  name="model"
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., Model S"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Trade Type</label>
                <select
                  name="trade_type"
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select trade type</option>
                  <option value="buying">Buying</option>
                  <option value="selling">Selling</option>
                </select>
              </div>
            </div>
            
            <div className="flex space-x-4 mt-8">
              <motion.button
                type="submit"
                className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-md font-medium shadow-lg transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={loading}
              >
                {loading ? 'Predicting...' : 'Predict Price'}
              </motion.button>
              <motion.button
                type="button"
                onClick={handleGetAiTip}
                className="flex-1 bg-green-600 text-white py-3 px-6 rounded-md font-medium shadow-lg transition-colors hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={tipLoading}
              >
                {tipLoading ? 'Getting Tip...' : 'Get AI Tip'}
              </motion.button>
            </div>
          </motion.form>

          <div className="max-w-4xl mx-auto">
            <AnimatePresence>
              {loading && (
                <motion.div 
                  className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg shadow-md mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-semibold text-blue-700">Processing...</h3>
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
                  <h3 className="text-2xl font-semibold text-green-700">Predicted Price:</h3>
                  <p className="text-4xl font-bold text-green-600">${prediction.toFixed(2)}</p>
                </motion.div>
              )}

              {tipLoading && (
                <motion.div 
                  className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-semibold text-blue-700">Processing...</h3>
                </motion.div>
              )}

              {aiTip && (
                <motion.div 
                  className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-semibold text-blue-700">AI Tip:</h3>
                  <p className="text-gray-700 mt-2">{aiTip}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {error && (
            <motion.p 
              className="mt-4 text-red-600 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {error}
            </motion.p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
