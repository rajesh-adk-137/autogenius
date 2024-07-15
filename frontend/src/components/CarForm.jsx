import React from 'react';
import { motion } from 'framer-motion';
import { FaCar, FaGasPump, FaCog, FaPaintBrush, FaCheckCircle, FaTachometerAlt, FaCarCrash, FaCalendarAlt, FaCarSide, FaExchangeAlt, FaCogs, FaCalculator, FaLightbulb } from 'react-icons/fa';

const carBrands = [
  "Ford", "Hyundai", "Lexus", "INFINITI", "Audi", "Acura", "BMW", "Tesla",
  "Land Rover", "Aston Martin", "Toyota", "Lincoln", "Jaguar", "Mercedes-Benz",
  "Dodge", "Nissan", "Genesis", "Chevrolet", "Kia", "Jeep", "Bentley", "Honda",
  "Lucid", "MINI", "Porsche", "Hummer", "Chrysler", "Volvo", "Cadillac", "Other",
  "Volkswagen", "Subaru", "Rivian"
];

const FormField = ({ icon, label, children }) => (
  <div className="mb-4">
    <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
      {icon}
      <span className="ml-2">{label}</span>
    </label>
    {children}
  </div>
);

const CarForm = ({ formData, handleInputChange, handleSubmit, handleGetAiTip, loading, tipLoading }) => {
    return (
      <motion.form 
        onSubmit={handleSubmit}
        className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-8 mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center flex items-center justify-center">
          Car Value Estimation and Analysis
          <FaCogs className="ml-2 text-blue-600" />
        </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField icon={<FaCar className="text-blue-500" />} label="Brand">
          <select
            name="brand"
            value={formData.brand}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out"
            required
          >
            <option value="">Select a brand</option>
            {carBrands.map((brand) => (
              <option key={brand} value={brand}>{brand}</option>
            ))}
          </select>
        </FormField>

        <FormField icon={<FaGasPump className="text-green-500" />} label="Fuel Type">
          <select
            name="fuel_type"
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out"
          >
            <option value="">Select fuel type</option>
            <option value="Gasoline">Gasoline</option>
            <option value="Diesel">Diesel</option>
            <option value="Electric">Electric</option>
            <option value="Hybrid">Hybrid</option>
            <option value="E85 Flex Fuel">E85 Flex Fuel</option>
            <option value="Other">Other</option>
          </select>
        </FormField>

        <FormField icon={<FaCog className="text-gray-500" />} label="Transmission">
          <select
            name="transmission"
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out"
          >
            <option value="">Select transmission</option>
            <option value="Automatic">Automatic</option>
            <option value="Manual">Manual</option>
            <option value="CVT">CVT</option>
            <option value="Other">Other</option>
          </select>
        </FormField>

        <FormField icon={<FaPaintBrush className="text-purple-500" />} label="Color">
          <input
            type="text"
            name="color"
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out"
            placeholder="e.g., Black, White, Red"
          />
        </FormField>

        <FormField icon={<FaCheckCircle className="text-green-500" />} label="Clean Title">
          <select
            name="clean_title"
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out"
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </FormField>

        <FormField icon={<FaTachometerAlt className="text-red-500" />} label="Mileage">
          <input
            type="number"
            name="mileage"
            value={formData.mileage}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out"
            placeholder="e.g., 50000 (in miles)"
            required
          />
        </FormField>

        <FormField icon={<FaCarCrash className="text-yellow-500" />} label="Number of Accidents">
          <input
            type="number"
            name="accident"
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out"
            placeholder="e.g., 0, 1, 2"
          />
        </FormField>

        <FormField icon={<FaCalendarAlt className="text-blue-500" />} label="Years Used">
          <input
            type="number"
            name="years_used"
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out"
            placeholder="e.g., 3, 5, 10"
          />
        </FormField>

        <FormField icon={<FaCarSide className="text-indigo-500" />} label="Model">
          <input
            type="text"
            name="model"
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out"
            placeholder="e.g., Model S"
          />
        </FormField>

        <FormField icon={<FaExchangeAlt className="text-orange-500" />} label="Trade Type">
          <select
            name="trade_type"
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out"
          >
            <option value="">Select trade type</option>
            <option value="buying">Buying</option>
            <option value="selling">Selling</option>
          </select>
        </FormField>
      </div>
      
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
        <motion.button
          type="submit"
          className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-6 rounded-md font-medium shadow-lg transition-all duration-200 hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={loading}
        >
          <FaCalculator className="mr-2" />
          {loading ? 'Predicting...' : 'Predict Price'}
        </motion.button>
        <motion.button
          type="button"
          onClick={handleGetAiTip}
          className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-6 rounded-md font-medium shadow-lg transition-all duration-200 hover:from-green-600 hover:to-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={tipLoading}
        >
          <FaLightbulb className="mr-2" />
          {tipLoading ? 'Getting Tip...' : 'Get AI Tip'}
        </motion.button>
      </div>
    </motion.form>
  );
};

export default CarForm;