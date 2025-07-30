// pages/Home.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Cards from '../components/Cards';
import ProjectsSection from '../components/ProjectSection';
import EnquirySection from '../components/Enquiry';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';



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

const InaugurationModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            className="bg-gradient-to-br from-slate-900 to-indigo-900 rounded-lg p-1 w-full max-w-md shadow-2xl relative overflow-hidden mx-4 sm:mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Animated gradient shapes */}
            <div className="absolute top-1/4 left-1/3 w-64 h-64 rounded-full bg-indigo-500/10 blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-blue-500/10 blur-3xl"></div>
            
            <div className="border border-white/10 rounded-lg p-5 sm:p-6 relative backdrop-blur-sm">
              {/* Decorative corner elements */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-indigo-400/30 rounded-tl-lg"></div>
              <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-indigo-400/30 rounded-tr-lg"></div>
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-indigo-400/30 rounded-bl-lg"></div>
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-indigo-400/30 rounded-br-lg"></div>
              
              <div className="text-center relative z-10">
                <div className="inline-flex px-3 py-1 mb-4 rounded-full border border-white/10">
                  <span className="text-white font-medium text-xs sm:text-sm">F . I . F . A . C</span>
                </div>

                <h2 className="text-3xl sm:text-5xl mb-4 bg-clip-text text-white bg-gradient-to-r from-indigo-400 to-blue-500 font-[SmileCandy]">Grand Opening!</h2>
                <div className="w-24 h-0.5 bg-gradient-to-r from-indigo-400 to-blue-500 mx-auto mb-4"></div>
                
                <p className="text-xl sm:text-2xl font-semibold mb-4 text-slate-300">
                  We're thrilled to open our new campus & dance studio in Kottayam!
                </p>
                
                <p className="text-base sm:text-lg mb-4 text-slate-300">
                  You're cordially invited to join our special inauguration ceremony on
                  <br />
                  <span className="font-bold text-xl sm:text-2xl block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-blue-500">Monday, August 4th 2025</span>
                </p>
                
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-3 rounded-lg mb-4">
                  <p className="text-slate-300 text-sm sm:text-base mb-1">
                    <span className="block font-semibold text-indigo-300">Venue:</span>
                    Railway Rd Nagampadam, Kottayam, Kerala
                  </p>
                  <p className="text-lg sm:text-xl font-bold text-indigo-300">10:00 AM onwards</p>
                </div>
                
                <div className="bg-indigo-600/10 backdrop-blur-sm border border-indigo-400/20 p-3 rounded-lg mb-4">
                  <p className="text-indigo-300 text-sm sm:text-base">Refreshments & Social events</p>
                </div>
                
                <p className="text-lg sm:text-xl italic text-indigo-300 font-[CreamCake]">Let's make this grand opening memorable together!</p>
                
                <button
                  onClick={onClose}
                  className="mt-6 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/40 transition-all duration-300 transform hover:-translate-y-1 flex items-center group mx-auto text-sm sm:text-base"
                >
                  <span>close</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <ScrollToTop />
      <InaugurationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      {/* Header Section */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        
        
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