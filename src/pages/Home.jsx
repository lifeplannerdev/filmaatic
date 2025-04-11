// pages/Home.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Cards from '../components/Cards';
import ProjectsSection from '../components/ProjectSection';
import EnquirySection from '../components/Enquiry';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSection from '../components/Header3';


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger animations for child elements
    },
  },
};

const Home = () => {
  return (
    <>
      {/* Header Section */}
      <ScrollToTop />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        
        
      </motion.div>
      
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={fadeInUp}>
          <HeroSection />
          
        </motion.div>
      </motion.div>
      {/* Cards Section */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={fadeInUp}>
          <Cards />
          
        </motion.div>
      </motion.div>

      {/* Projects Section */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={fadeInUp}>
          <ProjectsSection />
        </motion.div>
      </motion.div>

      {/* Enquiry Section */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={fadeInUp}>
          <EnquirySection />
        </motion.div>
      </motion.div>
    </>
  );
};

export default Home;