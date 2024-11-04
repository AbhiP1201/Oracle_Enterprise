import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll'; // Import Link for scrolling
import heroImage from '../Assets/herobg.jpg';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen pt-16 overflow-hidden" id="hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[calc(100vh-4rem)]">
          
          {/* Text Content - Left Side */}
          <motion.div
            className="order-2 lg:order-1 py-12"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="text-blue-900">Welcome To</span>
              <br />
              <motion.span
                className="inline-block mt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <span className="text-blue-900">ORACLE</span>
                <br />
                <span className="text-red-600">ENTERPRISE</span>
              </motion.span>
            </motion.h1>
            
            <motion.div
              className="w-20 h-1 bg-red-600 my-6"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            />
            
            <motion.p
              className="text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              We are exporters of authentic Indian products, offering fresh fruits & vegetables, 
              artisanal handicrafts, and carpets crafted with traditional methods.
            </motion.p>
            
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <Link
                to="products" // Link to the products section
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                className="px-8 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-all duration-300 shadow-sm hover:shadow-lg transform hover:-translate-y-1 cursor-pointer"
              >
                Explore Products
              </Link>
              <Link
                to="contact" // Link to the contact section
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                className="px-8 py-3 border-2 border-blue-900 text-blue-900 rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Image - Right Side */}
          <motion.div
            className="order-1 lg:order-2 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative h-[300px] md:h-[400px] lg:h-[600px] w-full rounded-lg overflow-hidden shadow-2xl">
              <motion.img
                src={heroImage}
                alt="Container Ship"
                className="w-full h-full object-cover"
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2 }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-transparent" />
            </div>
            
            <motion.div
              className="absolute -z-10 top-10 right-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.2, 0.3] 
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            />
            <motion.div
              className="absolute -z-10 bottom-10 left-10 w-72 h-72 bg-red-100 rounded-full blur-3xl opacity-30"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.2, 0.3] 
              }}
              transition={{ 
                duration: 4,
                delay: 2,
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
