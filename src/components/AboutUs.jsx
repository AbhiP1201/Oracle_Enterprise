import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TrendingUp, Shield, Globe, Users } from 'lucide-react';

const AboutSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const features = [
    {
      icon: Globe,
      title: "Global Reach",
      description: "Operating across multiple continents, delivering quality products worldwide."
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous quality control measures ensuring premium product standards."
    },
    {
      icon: TrendingUp,
      title: "Sustainable Growth",
      description: "Committed to sustainable practices and continuous improvement."
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Dedicated to exceeding customer expectations with personalized service."
    }
  ];

  return (
    <motion.section
      ref={ref}
      id="about"
      className="py-24 bg-gradient-to-b from-gray-100 to-gray-200 relative overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.2, 0.3],
          rotate: [0, 90, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          easings: ["easeInOut"],
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-red-100/50 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.2, 0.3],
          rotate: [0, -90, 0]
        }}
        transition={{
          duration: 8,
          delay: 4,
          repeat: Infinity,
          easings: ["easeInOut"],
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <motion.div
            className="inline-block"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h2 className="text-3xl font-bold text-[#003B95] mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8 }}
            >
              About Oracle Enterprise
            </motion.h2>
          </motion.div>
          <motion.div
            className="w-24 h-1 bg-orange-400 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto mt-4 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Oracle Enterprise is a leading import-export company specializing in delivering premium Indian products to global markets. With years of experience and dedication to quality, we've established ourselves as a trusted partner for businesses worldwide.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <motion.div
                className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <feature.icon className="w-7 h-7 text-white" />
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;