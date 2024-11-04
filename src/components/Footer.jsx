import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-scroll';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Mail, 
  Phone, 
  MapPin,
  ExternalLink 
} from 'lucide-react';

const Footer = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const quickLinks = [
    { name: 'About Us', to: 'contact' },
    { name: 'Products', to: 'products' },
    { name: 'Certificates', to: 'certificates' },
    { name: 'Why Us', to: 'footer' },
    { name: 'Contact Us', to: 'contact' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61563892614420&mibextid=ZbWKwL' },
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/oracleenterprise24?igsh=aGZmOHFndDhjamNi' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/oracleenterprise/posts/?feedView=all' },
  ];

  return (
    <motion.footer
      ref={ref}
      id="footer"
      className="bg-gray-900 text-gray-300"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Company Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="text-white">ORACLE</span><br />
              <span className="text-red-600">ENTERPRISE</span>
            </motion.div>
            <p className="text-sm leading-relaxed">
              We connect businesses across the globe through efficient import and export services, ensuring seamless transactions and customer satisfaction.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.2, color: "#ffffff" }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-5 h-5" />
                  <span className="sr-only">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-white font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <motion.li key={link.name} whileHover={{ x: 5 }}>
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-64}
                    duration={500}
                    className="text-gray-400 hover:text-white transition-colors flex items-center space-x-1 cursor-pointer"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>{link.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-white font-semibold text-lg">Contact Us</h3>
            <ul className="space-y-4">
              <motion.li className="flex items-start space-x-3" whileHover={{ x: 5 }}>
                <MapPin className="w-12 h-12 text-blue-500 mt-1" />
                <span className="text-sm leading-tight">GF-02, GALAXY ARCHADE, NADIAD ROAD, KAPADWANJ, KHEDA 387620, GUJARAT, INDIA</span>
              </motion.li>
              <motion.li className="flex items-center space-x-3" whileHover={{ x: 5 }}>
                <Phone className="w-5 h-5 text-blue-500" />
                <span className="text-sm">(+91) 72030-53124</span>
              </motion.li>
              <motion.li className="flex items-center space-x-3" whileHover={{ x: 5 }}>
                <Mail className="w-5 h-5 text-blue-500" />
                <span className="text-sm">sales@oracleexim.com</span>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="mt-12 pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm">
              © {new Date().getFullYear()} Oracle Enterprise. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <motion.a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                Terms of Service
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                Cookie Policy
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;