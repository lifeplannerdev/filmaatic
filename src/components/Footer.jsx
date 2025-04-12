import { Link } from 'react-router-dom';
import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FaSquareThreads } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-transparent to-black/30 backdrop-blur-sm text-white py-12">
      <div className="container mx-auto px-6">
        {/* Logo and Brand Section */}
        <div className="flex justify-center mb-12">
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <img 
                src="img/FIFAC3.png" 
                alt="Filmaatic Logo" 
                className="object-contain"
                style={{ width: "250px", height: "250px" }}
              />
            </div>
            <h2 className="text-3xl font-bold mb-2">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-500" style={{ fontFamily: "SmileCandy" }}>
                Filmaatic
              </span>
            </h2>
            <p className="text-lg text-gray-300 font-medium tracking-wider">
              INSTITUTE OF FASHION AND CINEMA
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/5 pt-8">
          {/* About Section */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4 text-indigo-300">About F.I.F.A.C.</h3>
            <p className="text-gray-400 leading-relaxed">
              F.I.F.A.C. is a premier academy offering world-class training in acting, dance, and screen casting. Join us to unleash your potential and achieve your dreams in the entertainment industry.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4 text-indigo-300">Quick Links</h3>
            <ul className="text-gray-400 space-y-3">
              <li>
                <Link to="/actingschool" className="hover:text-pink-500 transition-all duration-300 flex items-center justify-center group">
                  <span className="relative">
                    Acting School
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pink-500 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/dancestudio" className="hover:text-pink-500 transition-all duration-300 flex items-center justify-center group">
                  <span className="relative">
                    Dance Studio
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pink-500 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/screencast" className="hover:text-pink-500 transition-all duration-300 flex items-center justify-center group">
                  <span className="relative">
                    Screen Casting
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pink-500 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="mailto:hrlifeplanner@gmail.com" className="hover:text-pink-500 transition-all duration-300 flex items-center justify-center group">
                  <span className="relative">
                    Contact Us
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pink-500 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information Section */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-bold mb-4 text-indigo-300">Contact Us</h3>
            <ul className="text-gray-400 space-y-3">
              <li className="flex items-center justify-center md:justify-end">
                <div className="w-8 h-8 rounded-full bg-indigo-500/10 flex items-center justify-center mr-3">
                  <FaPhoneAlt className="text-indigo-300" />
                </div>
                <a href="tel:+919946232437" className="hover:text-pink-500 transition-all duration-300">+91 99462 32437</a>
              </li>
              <li className="flex items-center justify-center md:justify-end">
                <div className="w-8 h-8 rounded-full bg-indigo-500/10 flex items-center justify-center mr-3">
                  <FaEnvelope className="text-indigo-300" />
                </div>
                <a href="mailto:filmaaticproductions@gmail.com" className="hover:text-pink-500 transition-all duration-300">filmaaticproductions@gmail.com</a>
              </li>
              <li className="flex items-center justify-center md:justify-end">
                <div className="w-8 h-8 rounded-full bg-indigo-500/10 flex items-center justify-center mr-3">
                  <FaMapMarkerAlt className="text-indigo-300" />
                </div>
                <span>Pathadipalam, Edapally, Kochi, Kerala</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-12 mb-8">
          <div className="flex justify-center">
            <div className="w-full max-w-md flex justify-between items-center p-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
              <a
                href="https://www.facebook.com/Filmaatic/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-300 hover:text-pink-500 hover:bg-white/10 transition-all duration-300"
              >
                <FaFacebook className="text-xl" />
              </a>
              <a
                href="https://www.threads.net/@filmaatic_productions"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-300 hover:text-pink-500 hover:bg-white/10 transition-all duration-300"
              >
                <FaSquareThreads className="text-xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/f-i-f-a-c-bbb685250/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-300 hover:text-pink-500 hover:bg-white/10 transition-all duration-300"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a
                href="https://www.youtube.com/@filmaaticproductions1494"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-300 hover:text-pink-500 hover:bg-white/10 transition-all duration-300"
              >
                <FaYoutube className="text-xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="text-center border-t border-white/5 pt-6">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Filmaatic Productions. All rights reserved.
          </p>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-indigo-500/10 blur-3xl"></div>
      </div>
    </footer>
  );
};

export default Footer;