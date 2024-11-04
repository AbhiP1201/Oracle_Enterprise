// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProductsSection from './components/ProductsSection';
import ProductDetail from './components/ProductDetail'; 
import CertificatesSection from './components/CertificateSection';
import ContactSection from './components/ContactUs';
import Footer from './components/Footer';
import AboutSection from './components/AboutUs';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <HeroSection />
        <Routes>
          <Route path="/" element={<ProductsSection />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
        </Routes>
        <CertificatesSection/>
        <AboutSection/>
        <ContactSection/>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
