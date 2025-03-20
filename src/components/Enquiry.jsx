// components/EnquirySection.jsx
import React from 'react';
import { FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa'; // Import icons from react-icons
import { FaPhone } from "react-icons/fa6";

const EnquirySection = () => {
  return (
    <section id="enquiry-section" className="py-12 bg-transparent mt-10"> {/* Added id */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Enquiry Form (Left Side) */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-white mb-6 font-poppins text-center">
              ENQUIRE <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">NOW</span>
            </h2>
            <form className="space-y-6 mx-auto w-[90%]"> {/* Added mx-auto and w-[90%] */}
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all shadow-lg hover:shadow-purple-500/30"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all shadow-lg hover:shadow-purple-500/30"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 block w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all shadow-lg hover:shadow-purple-500/30"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-4 py-3 text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-purple-500/50 animate-pulse backdrop-blur-sm bg-white/10 border border-white/20 hover:bg-white/20 hover:border-white/30"
              >
                Submit
              </button>
            </form>
          </div>


          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="grid grid-cols-2 gap-4 h-full w-[80%] mx-auto"> {/* Reduced gap and width */}

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-4 bg-slate-900 rounded-lg hover:bg-slate-700 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-pink-500/20"
              >
                <FaInstagram className="w-10 h-10 mb-2 text-pink-800" /> {/* Reduced icon size */}
                <span className="text-sm text-gray-300">Instagram</span>
              </a>


              <a
                href="https://wa.me/yournumber"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-4 bg-slate-900 rounded-lg hover:bg-slate-700 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/20"
              >
                <FaWhatsapp className="w-10 h-10 mb-2 text-pink-800" /> {/* Reduced icon size */}
                <span className="text-sm text-gray-300">WhatsApp</span>
              </a>


              <a
                href="tel:+1234567890"
                className="flex flex-col items-center justify-center p-4 bg-slate-900 rounded-lg hover:bg-slate-700 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <FaPhone className="w-10 h-10 mb-2 text-pink-800" /> {/* Reduced icon size */}
                <span className="text-sm text-gray-300">Phone</span>
              </a>


              <a
                href="mailto:info@example.com"
                className="flex flex-col items-center justify-center p-4 bg-slate-900 rounded-lg hover:bg-slate-700 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/20"
              >
                <FaEnvelope className="w-10 h-10 mb-2 text-pink-800" /> {/* Reduced icon size */}
                <span className="text-sm text-gray-300">Mail</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnquirySection;