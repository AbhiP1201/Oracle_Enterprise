import React from 'react';
import { motion } from 'framer-motion';

// Import images from assets
import apedaLogo from '../Assets/certi1.png';
import spicesLogo from '../Assets/certi2.png';
import msmeLogo from '../Assets/certi3.png';
import fssaiLogo from '../Assets/certi4.png';

const CertificateCard = ({ logo, alt }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transform transition-all duration-300 ease-in-out cursor-pointer group"
    >
      <div className="relative w-full h-48 flex items-center justify-center">
        <img 
          src={logo} 
          alt={alt}
          className="max-w-[80%] max-h-[80%] object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>
    </motion.div>
  );
};

const CertificatesSection = () => {
  const certificates = [
    {
      logo: apedaLogo,
      alt: "APEDA Certificate"
    },
    {
      logo: spicesLogo,
      alt: "Spices Board Certificate"
    },
    {
      logo: msmeLogo,
      alt: "MSME Certificate"
    },
    {
      logo: fssaiLogo,
      alt: "FSSAI Certificate"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white" id='certificates'>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#003B95] mb-4">
            CERTIFICATES
          </h2>
          <div className="w-24 h-1 bg-orange-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certificates.map((cert, index) => (
            <CertificateCard 
              key={index} 
              logo={cert.logo} 
              alt={cert.alt} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
