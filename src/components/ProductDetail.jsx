import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams, useLocation, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowLeft, Check, Package, Clock, Award } from 'lucide-react';

const ProductDetail = () => {
  const { productId } = useParams();
  const location = useLocation();
  const { productDetails } = location.state || {};
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedTab, setSelectedTab] = useState('description');

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === productDetails?.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? productDetails?.images.length - 1 : prev - 1
    );
  };

  if (!productDetails) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <motion.p 
          className="text-xl text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Product not found
        </motion.p>
        <Link 
          to="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 text-lg md:text-xl font-medium"
        >
          <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 mr-2" />
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <motion.div 
      className="max-w-7xl mx-auto px-4 py-16 min-h-screen pt-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Link 
        to="/"
        className="inline-flex items-center text-gray-700 hover:text-blue-600 mb-8 transition-colors text-lg md:text-xl font-medium bg-gray-50 hover:bg-gray-100 px-4 py-2 rounded-lg shadow-sm"
      >
        <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 mr-2" />
        Back to Products
      </Link>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <motion.div 
            className="relative aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden bg-gray-100"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              key={currentImageIndex}
              src={productDetails.images[currentImageIndex]}
              alt={productId}
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute inset-0 flex items-center justify-between p-4">
              <motion.button 
                onClick={prevImage}
                className="p-3 rounded-full bg-white/90 hover:bg-white text-gray-800 transition-all duration-300 hover:shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>
              <motion.button 
                onClick={nextImage}
                className="p-3 rounded-full bg-white/90 hover:bg-white text-gray-800 transition-all duration-300 hover:shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>
          </motion.div>

          <div className="flex gap-3 overflow-x-auto py-2">
            {productDetails.images.map((image, index) => (
              <motion.button
                key={index}
                className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  index === currentImageIndex ? 'border-blue-500 shadow-md' : 'border-transparent hover:border-blue-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentImageIndex(index)}
              >
                <img 
                  src={image} 
                  alt={`Product view ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.button>
            ))}
          </div>
        </div>

        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div>
            <h1 className="text-4xl font-bold text-gray-900 capitalize mb-4">
              {productId.replace(/-/g, ' ')}
            </h1>
            <div className="flex flex-wrap gap-3">
              {productDetails.features.map((feature, index) => (
                <span 
                  key={index}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-50 text-blue-700"
                >
                  <Check className="w-4 h-4 mr-1" />
                  {feature}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4 border-b">
            {['description', 'specifications', 'shipping'].map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`pb-2 px-1 capitalize transition-colors relative ${
                  selectedTab === tab ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
                {selectedTab === tab && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                    layoutId="activeTab"
                  />
                )}
              </button>
            ))}
          </div>

          <motion.div
            key={selectedTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="min-h-[200px]"
          >
            {selectedTab === 'description' && (
              <div className="prose prose-blue max-w-none">
                <p className="text-gray-600 leading-relaxed">
                  {productDetails.details.description}
                </p>
              </div>
            )}

            {selectedTab === 'specifications' && (
              <div className="space-y-4">
                {Object.entries(productDetails.details.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b">
                    <span className="text-gray-600 capitalize">{key}</span>
                    <span className="text-gray-900 font-medium">{value}</span>
                  </div>
                ))}
              </div>
            )}

            {selectedTab === 'shipping' && (
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Package className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-900">Packaging</h3>
                    <p className="text-gray-600">Custom packaging available as per requirements</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-900">Processing Time</h3>
                    <p className="text-gray-600">7-14 business days</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Award className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-900">Quality Assurance</h3>
                    <p className="text-gray-600">All products undergo strict quality control</p>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProductDetail;