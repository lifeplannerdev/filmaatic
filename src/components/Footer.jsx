
import { Link } from 'react-router-dom';
import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FaSquareThreads } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-transparent text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* About Section */}
          <div className="text-center md:text-left">
          
            <h3 className="text-2xl font-bold mb-4"><span className="text-4xl" style={{ fontFamily: "SmileCandy" }}>Filmaatic</span> Productions</h3>
            <p className="text-gray-400">
              Filmaatic Studio is a premier academy offering world-class training in acting, dance, and screen casting. Join us to unleash your potential and achieve your dreams in the entertainment industry.
            </p>
          </div>

         {/* Quick Links Section */}
<div className="text-center">
  <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
  <ul className="text-gray-400">
    <li className="mb-2">
      <Link to="/actingschool" className="hover:text-pink-500 transition-all duration-300">Acting School</Link>
    </li>
    <li className="mb-2">
      <Link to="/dancestudio" className="hover:text-pink-500 transition-all duration-300">Dance Studio</Link>
    </li>
    <li className="mb-2">
      <Link to="/screencast" className="hover:text-pink-500 transition-all duration-300">Screen Casting</Link>
    </li>
    <li className="mb-2">
      <Link to="mailto:hrlifeplanner@gmail.com" className="hover:text-pink-500 transition-all duration-300">Contact Us</Link>
    </li>
  </ul>
</div>

          {/* Contact Information Section */}
          <div className="text-center md:text-right">
            <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
            <ul className="text-gray-400">
              <li className="mb-2 flex items-center justify-center md:justify-end">
                <FaPhoneAlt className="mr-2" />
                <a href="tel:+919946232437" className="hover:text-pink-500 transition-all duration-300">+91 99462 32437</a>
              </li>
              <li className="mb-2 flex items-center justify-center md:justify-end">
                <FaEnvelope className="mr-2" />
                <a href="mailto:filmaaticproductions@gmail.com" className="hover:text-pink-500 transition-all duration-300">filmaaticproductions@gmail.com</a>
              </li>
              <li className="mb-2 flex items-center justify-center md:justify-end">
                
                <span>Pathadipalam,Edapally,Kochi, Kerala</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mt-8">
          <a
            href="https://www.facebook.com/Filmaatic/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-pink-500 transition-all duration-300"
          >
            <FaFacebook className="text-2xl" />
          </a>
          <a
            href="https://www.threads.net/@filmaatic_productions"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-pink-500 transition-all duration-300"
          >
            <FaSquareThreads className="text-2xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/f-i-f-a-c-bbb685250/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-pink-500 transition-all duration-300"
          >
            <FaLinkedin className="text-2xl" />
          </a>
          <a
            href="https://www.youtube.com/@filmaaticproductions1494"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-pink-500 transition-all duration-300"
          >
            <FaYoutube className="text-2xl" />
          </a>
        </div>

        {/* Copyright Notice */}
        <div className="text-center mt-8 border-t border-gray-800 pt-8">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Filmaatic Productions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

