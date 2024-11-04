import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronRight, Sun } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import fruit from "../Assets/imagefruit.png"; 
import apple from "../Assets/fruits/apple.jpg";
import chikoo from "../Assets/fruits/chikoo.jpg";
import drag from "../Assets/fruits/drag.jpg"
import guava from "../Assets/fruits/guava.jpg"
import man from "../Assets/fruits/man.jpg"
import mel from "../Assets/fruits/mel.jpg"
// import papa from "../Assets/fruits/papa.jpg"
// import pm from "../Assets/fruits/pm.jpg"
// import star from "../Assets/fruits/star.jpg"
// import water from "../Assets/fruits/water.jpg"
import Footer from './Footer';
import organic from "../Assets/organicveg.png";
import cabba from "../Assets/vege/cabba.jpg"
import onion from "../Assets/vege/onion.jpg"
import potato from "../Assets/vege/potato.jpg"
import beet from "../Assets/vege/beet.jpg"
import chilli from "../Assets/vege/chilli.jpg"

import spices from "../Assets/imagespices.png";
import term from "../Assets/spices/term.jpg"
import bt from "../Assets/spices/bt.jpg"
import car from "../Assets/spices/car.jpg"
import cina from "../Assets/spices/cina.jpg"
import clove from "../Assets/spices/clove.jpg"

import dehydrated from "../Assets/imagedehyd.png";
import dm from "../Assets/dehy/dm.jpg"
import dv from "../Assets/dehy/dv.jpg"
import gf from "../Assets/dehy/gf.jpg"
import of from "../Assets/dehy/of.jpg"
import dt from "../Assets/dehy/dt.jpg"

import processedfood from "../Assets/imageprocess.png";
import rte from "../Assets/pro/rte.jpg"
import snacks from "../Assets/pro/snacks.jpg"
import bav from "../Assets/pro/bav.jpg"
import condi from "../Assets/pro/condi.jpg"
import pre from "../Assets/pro/pre.jpg"

import edibleoil from "../Assets/imageoil.png";
import mustad from "../Assets/oil/mustad.jpg"
import sun from "../Assets/oil/sun.jpg"
import ground from "../Assets/oil/ground.jpg"
import soya from "../Assets/oil/soya.jpg"
import olive from "../Assets/oil/olive.jpg"
import backgroundImage from "../Assets/productbg.png";

const ProductCard = ({ image, title, description, index, productDetails }) => {
    const navigate = useNavigate();
    const [ref, inView] = useInView({
      threshold: 0.1,
      triggerOnce: true
    });

    // Stagger animation for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      id='product'
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
    >
      <div className="aspect-w-16 aspect-h-12 w-full overflow-hidden">
        <img 
          src={image} 
          alt={title}
          loading="lazy" // Add lazy loading
          className="w-full h-64 object-cover transform hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        <motion.button
          onClick={() => {
            // Update the navigation to include all required details
            navigate(`/products/${title.toLowerCase().replace(/\s+/g, '-')}`, {
              state: {
                productDetails: {
                  images: productDetails.images,
                  title: title,
                  details: {
                    description: productDetails.description,
                    specifications: productDetails.specifications
                  },
                  features: productDetails.features
                }
              }
            });
          }}
          className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors duration-200"
          whileHover={{ x: 5 }}
        >
          View More
          <ChevronRight className="ml-1 w-4 h-4" />
        </motion.button>
      </div>
    </motion.div>
  );
};

const ProductsSection = () => {
  const products = [
    {
      image: fruit,
      title: "Fresh Fruits",
      description: "We source fresh fruits for our clients, ensuring they receive the best produce that meets the highest international standards.",
      productDetails: {
        images: [apple,mel,chikoo,drag,guava,man],
        varieties: ["Apple", "Melon", "Chikoo", "Dragon Fruit", "Guava", "Mango"],
        description: "Our fresh fruits collection represents the finest selection of Indian fruits, carefully harvested and processed to meet international export standards. We ensure optimal freshness and quality through advanced storage and transportation methods.",
        features: [
          "Freshly harvested from selected farms",
          "Quality checked and graded",
          "Advanced cold storage facility",
          "Safe packaging for long-distance transport",
          "Competitive pricing"
        ],
        specifications: {
          packaging: "Customized packaging available",
          certification: "FSSAI Certified",
          shelfLife: "Varies by fruit type",
          storage: "Temperature controlled environment"
        }
      }
    },
    {
      image: organic,
      title: "Organic Vegetables",
      description: "We source fresh vegetables for our clients, ensuring they receive the best produce that meets the highest international standards.",
      productDetails: {
        images: [cabba, onion, potato, beet, chilli],
        varieties: ["Beet", "Potato", "Onion", "Chilli", "Cabbage"],
        description: "Our organic vegetables are grown without harmful pesticides and chemicals, offering the best of Indian agriculture to global markets. Each vegetable is carefully selected to ensure premium quality.",
        features: [
          "100% Organic cultivation",
          "Pesticide-free",
          "Farm-fresh produce",
          "Sustainably grown",
          "Regular quality checks"
        ],
        specifications: {
          packaging: "Eco-friendly packaging",
          certification: "Organic Certified",
          shelfLife: "Varies by vegetable type",
          storage: "Cold storage facility"
        }
      }
    },
    {
      image: spices,
      title: "Spices",
      description: "We source a variety of spices from across India, ensuring our clients receive the best produce that meets the highest international standards.",
      productDetails: {
        images: [term, bt, car, cina, clove],
        varieties: ["Turmeric", "Black Pepper", "Cardamom", "Cinnamon", "Clove"],
        description: "Our spice collection brings the authentic flavors of India to the world. Each spice is carefully sourced from traditional spice-growing regions and processed under strict quality control.",
        features: [
          "Premium quality spices",
          "Traditional processing methods",
          "Rich in natural oils",
          "Authentic Indian flavors",
          "Strict quality control"
        ],
        specifications: {
          packaging: "Moisture-proof packaging",
          certification: "Spices Board Certified",
          shelfLife: "24 months",
          storage: "Cool and dry place"
        }
      }
    },
    {
      image: dehydrated,
      title: "Dehydrated Food",
      description: "We source dehydrated foods from across India, ensuring our clients receive the best produce that meets the highest international standards.",
      productDetails: {
        images: [dm, dv, gf, of, dt],
        varieties: ["Mushroom", "Mixed Vegetables", "Garlic", "Onion", "Tomato"],
        description: "Our dehydrated food products offer convenience without compromising on taste. Using advanced dehydration technology, we preserve the natural flavors and nutrients.",
        features: [
          "Advanced dehydration process",
          "Preserved nutrients",
          "Long shelf life",
          "Easy to store",
          "Cost-effective"
        ],
        specifications: {
          packaging: "Airtight packaging",
          certification: "ISO Certified",
          shelfLife: "12 months",
          storage: "Room temperature"
        }
      }
    },
    {
      image: processedfood,
      title: "Processed Food",
      description: "We source processed foods from across India, ensuring our clients receive the best produce that meets the highest international standards.",
      productDetails: {
        images: [rte, snacks, bav, condi, pre],
        varieties: ["Ready-to-eat meals", "Snacks", "Beverages", "Condiments", "Preserved Foods"],
        description: "Our processed food range combines traditional Indian recipes with modern food processing techniques. We maintain high quality standards throughout the production process.",
        features: [
          "Hygienic processing",
          "Traditional recipes",
          "Quality ingredients",
          "Modern packaging",
          "Extended shelf life"
        ],
        specifications: {
          packaging: "Food-grade packaging",
          certification: "FSSAI Certified",
          shelfLife: "Varies by product",
          storage: "As per product requirement"
        }
      }
    },
    {
      image: edibleoil,
      title: "Edible Oil",
      description: "We source premium edible oils from across India, ensuring our clients receive the best products that meet the highest international standards.",
      productDetails: {
        images: [mustad, sun, ground, soya, olive],
        varieties: ["Mustard Oil", "Sunflower Oil", "Groundnut Oil", "Soybean Oil", "Olive Oil"],
        description: "Our edible oils are extracted using the finest quality seeds and modern extraction methods. We ensure each product meets international food safety standards.",
        features: [
          "Pure and natural",
          "Cold pressed options",
          "Rich in nutrients",
          "Multiple varieties",
          "Quality assured"
        ],
        specifications: {
          packaging: "Food-grade containers",
          certification: "FSSAI Certified",
          shelfLife: "12 months",
          storage: "Cool and dry place"
        }
      }
    }
  ];

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section 
      ref={ref}
      className="py-16 px-4 bg-gray-50 relative overflow-hidden" id='products'
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-30" />
      <motion.div 
        className="relative max-w-7xl mx-auto z-10"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-12">
          <motion.h2 
            className="text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our Premium Products
          </motion.h2>
          <motion.p 
            className="text-gray-200 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover our selection of premium products sourced from the finest producers across India.
            Each product is carefully selected to ensure exceptional quality and authentic taste.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProductsSection;