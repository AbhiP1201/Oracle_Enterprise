import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import logo from "../Assets/logo.png";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', to: 'hero' },
    { name: 'Products', to: 'products' },
    { name: 'Certificate', to: 'certificates' },
    { name: 'About Us', to: 'about' },
    { name: 'Why Us', to: 'footer' },
    { name: 'Contact Us', to: 'contact' }
  ];

  return (
    <motion.nav 
      className="bg-white/95 backdrop-blur-sm shadow-sm fixed w-full top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center space-x-2">
              <img 
                src={logo}
                alt="Oracle Enterprise" 
                className="h-10 w-auto"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={500}
                  className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium rounded-full hover:bg-blue-50 transition-all duration-300 cursor-pointer"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile menu button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-full bg-blue-50 text-blue-900 hover:bg-blue-100 focus:outline-none"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="sr-only">Open main menu</span>
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 180 }}
                  exit={{ rotate: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 180 }}
                  animate={{ rotate: 0 }}
                  exit={{ rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="md:hidden bg-white border-t"
    >
      <motion.div 
        className="px-2 pt-2 pb-3 space-y-1"
        initial="closed"
        animate="open"
        variants={{
          open: {
            transition: {
              staggerChildren: 0.1,
            },
          },
          closed: {
            transition: {
              staggerChildren: 0.05,
              staggerDirection: -1,
            },
          },
        }}
      >
        {navItems.map((item) => (
          <motion.div
            key={item.name}
            variants={{
              open: { x: 0, opacity: 1 },
              closed: { x: -20, opacity: 0 },
            }}
          >
            <Link
              to={item.to}
              spy={true}
              smooth={true}
              offset={-64}
              duration={500}
              className="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-all duration-300 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

    </motion.nav>
  );
};

export default Navbar;