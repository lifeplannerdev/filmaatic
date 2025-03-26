


import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-transparent text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* About Section */}
          <div className="text-center md:text-left">
          
            <h3 className="text-2xl font-bold mb-4"><span className="text-4xl" style={{ fontFamily: "SmileCandy" }}>Filmaatic</span> Studio</h3>
            <p className="text-gray-400">
              Filmaatic Studio is a premier academy offering world-class training in acting, dance, and screen casting. Join us to unleash your potential and achieve your dreams in the entertainment industry.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
            <ul className="text-gray-400">
              <li className="mb-2">
                <a href="#acting" className="hover:text-pink-500 transition-all duration-300">Acting School</a>
              </li>
              <li className="mb-2">
                <a href="#dance" className="hover:text-pink-500 transition-all duration-300">Dance Studio</a>
              </li>
              <li className="mb-2">
                <a href="#casting" className="hover:text-pink-500 transition-all duration-300">Screen Casting</a>
              </li>
              <li className="mb-2">
                <a href="#contact" className="hover:text-pink-500 transition-all duration-300">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Contact Information Section */}
          <div className="text-center md:text-right">
            <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
            <ul className="text-gray-400">
              <li className="mb-2 flex items-center justify-center md:justify-end">
                <FaPhoneAlt className="mr-2" />
                <a href="tel:+1234567890" className="hover:text-pink-500 transition-all duration-300">+123 456 7890</a>
              </li>
              <li className="mb-2 flex items-center justify-center md:justify-end">
                <FaEnvelope className="mr-2" />
                <a href="mailto:info@filmaatic.com" className="hover:text-pink-500 transition-all duration-300">info@filmaatic.com</a>
              </li>
              <li className="mb-2 flex items-center justify-center md:justify-end">
                <FaMapMarkerAlt className="mr-2" />
                <span>123 Film Street, Hollywood, USA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mt-8">
          <a
            href="https://facebook.com/filmaatic"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-pink-500 transition-all duration-300"
          >
            <FaFacebook className="text-2xl" />
          </a>
          <a
            href="https://twitter.com/filmaatic"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-pink-500 transition-all duration-300"
          >
            <FaTwitter className="text-2xl" />
          </a>
          <a
            href="https://linkedin.com/company/filmaatic"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-pink-500 transition-all duration-300"
          >
            <FaLinkedin className="text-2xl" />
          </a>
          <a
            href="https://youtube.com/filmaatic"
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
            &copy; {new Date().getFullYear()} Filmaatic Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

