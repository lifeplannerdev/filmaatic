import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import SocialCard from '../components/SocialCards';

// Scroll to top component
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
      staggerChildren: 0.2,
    },
  },
};

const About = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white py-20 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary gradient orbs with improved animation */}
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.2),rgba(255,255,255,0))] animate-float"></div>
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(59,130,246,.2),rgba(255,255,255,0))] animate-float-delay"></div>
        
        {/* Additional subtle gradient elements */}
        <div className="absolute top-1/4 left-1/3 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(139,92,246,.1),rgba(255,255,255,0))] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(236,72,153,.1),rgba(255,255,255,0))] animate-pulse-slow"></div>
        
        {/* Fine grain noise overlay for texture */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-30"></div>
      </div>
      {/* Scroll to top component */}
      <ScrollToTop />

      <div className="container mx-auto px-6 relative z-10">
        {/* Page Title */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h1
            variants={fadeInUp}
            className="text-center mb-20"
            
          >
            <span className="text-5xl font-bold font-montserrat gradient-shimmer text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-red-500 "
           >
            ABOUT 
          </span>
          
            
          </motion.h1>
          
        </motion.div>
        

        {/* Mission Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.div variants={fadeInUp}>
            <p className="text-lg text-gray-300 leading-relaxed text-center max-w-2xl mx-auto p-6 bg-slate-900/50 backdrop-blur-lg rounded-lg border border-slate-800">
              At F.I.F.A.C. our mission is to empower aspiring artists by providing world-class training in acting, dance, and performance arts. We believe in nurturing creativity, building confidence, and preparing our students for success in the entertainment industry. Whether you're dreaming of the silver screen, the stage, or the dance floor, we're here to help you shine.
            </p>
          </motion.div>
        </motion.section>

        {/* Services Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 mt-20"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl font-semibold mb-6 text-center">
            What We Offer
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Acting School */}
            <motion.div
              variants={fadeInUp}
              className="bg-slate-900/50 backdrop-blur-lg p-6 rounded-lg border border-slate-800 hover:border-pink-500 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Acting School</h3>
              <p className="text-gray-300">
                Our acting school offers comprehensive training in film, theater, and television. From beginner workshops to advanced masterclasses, our experienced instructors guide students through every aspect of the craft.
              </p>
            </motion.div>

            {/* Dance Studio */}
            <motion.div
              variants={fadeInUp}
              className="bg-slate-900/50 backdrop-blur-lg p-6 rounded-lg border border-slate-800 hover:border-purple-500 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Dance Studio</h3>
              <p className="text-gray-300">
                Discover the joy of movement at our state-of-the-art dance studio. We offer classes in contemporary, hip-hop, ballet, and more, catering to all skill levels and ages.
              </p>
            </motion.div>

            {/* Casting Services */}
            <motion.div
              variants={fadeInUp}
              className="bg-slate-900/50 backdrop-blur-lg p-6 rounded-lg border border-slate-800 hover:border-pink-500 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Casting Services</h3>
              <p className="text-gray-300">
                Filmaatic Studio connects talented individuals with industry opportunities. Our casting services help actors and performers find roles in films, commercials, and stage productions.
              </p>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Values Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 mt-20"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl font-semibold mb-6 text-center">
            Our Values
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {/* Creativity */}
            <motion.div
              variants={fadeInUp}
              className="bg-slate-900/50 backdrop-blur-lg p-6 rounded-lg border border-slate-800 hover:border-pink-500 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Creativity</h3>
              <p className="text-gray-300">
                We foster an environment where creativity thrives, encouraging students to explore and express their unique artistic voices.
              </p>
            </motion.div>

            {/* Excellence */}
            <motion.div
              variants={fadeInUp}
              className="bg-slate-900/50 backdrop-blur-lg p-6 rounded-lg border border-slate-800 hover:border-purple-500 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Excellence</h3>
              <p className="text-gray-300">
                We are committed to delivering the highest standards of training, ensuring our students are industry-ready.
              </p>
            </motion.div>

            {/* Community */}
            <motion.div
              variants={fadeInUp}
              className="bg-slate-900/50 backdrop-blur-lg p-6 rounded-lg border border-slate-800 hover:border-pink-500 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Community</h3>
              <p className="text-gray-300">
                At Filmaatic Studio, we believe in the power of collaboration and building a supportive community of artists.
              </p>
            </motion.div>

            {/* Passion */}
            <motion.div
              variants={fadeInUp}
              className="bg-slate-900/50 backdrop-blur-lg p-6 rounded-lg border border-slate-800 hover:border-purple-500 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Passion</h3>
              <p className="text-gray-300">
                Our team is driven by a shared passion for the arts and a dedication to helping others achieve their dreams.
              </p>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 variants={fadeInUp} className="text-3xl font-semibold mb-6 text-center">
            Meet Our Team
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
      
            <motion.div
              variants={fadeInUp}
              className="bg-slate-900/50 backdrop-blur-lg p-6 rounded-lg border border-slate-800 hover:border-pink-500 transition-all duration-300"
            >
              <img
                src="https://i.pinimg.com/736x/52/46/49/524649971a55b2f3a0dae1d537c61098.jpg"
                alt="Team Member"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">John Doe</h3>
              <p className="text-gray-300">Founder & Creative Director</p>
            </motion.div>

          
            <motion.div
              variants={fadeInUp}
              className="bg-slate-900/50 backdrop-blur-lg p-6 rounded-lg border border-slate-800 hover:border-purple-500 transition-all duration-300"
            >
              <img
                src="https://i.pinimg.com/736x/52/46/49/524649971a55b2f3a0dae1d537c61098.jpg"
                alt="Team Member"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Jane Smith</h3>
              <p className="text-gray-300">Head of Acting</p>
            </motion.div>

         
            <motion.div
              variants={fadeInUp}
              className="bg-slate-900/50 backdrop-blur-lg p-6 rounded-lg border border-slate-800 hover:border-pink-500 transition-all duration-300"
            >
              <img
                src="https://i.pinimg.com/736x/52/46/49/524649971a55b2f3a0dae1d537c61098.jpg"
                alt="Team Member"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Emily Johnson</h3>
              <p className="text-gray-300">Dance Instructor</p>
            </motion.div>
          </motion.div>
        </motion.section> */}

        <SocialCard />
      </div>
    </div>
  );
};

export default About;