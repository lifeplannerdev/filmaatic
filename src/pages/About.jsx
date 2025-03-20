import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion

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

const About = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white py-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))] animate-float"></div>
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))] animate-float-delay"></div>
      </div>

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
            className="text-5xl font-bold text-center mb-8 mt-10"
          >
            ABOUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500" style={{ fontFamily: "SmileCandy", }}>FILMAATIC</span>
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
              At Filmaatic Studio, our mission is to empower aspiring artists by providing world-class training in acting, dance, and performance arts. We believe in nurturing creativity, building confidence, and preparing our students for success in the entertainment industry. Whether you're dreaming of the silver screen, the stage, or the dance floor, we're here to help you shine.
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

        {/* Team Section */}
        <motion.section
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
            {/* Team Member 1 */}
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

            {/* Team Member 2 */}
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

            {/* Team Member 3 */}
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
        </motion.section>
      </div>
    </div>
  );
};

export default About;