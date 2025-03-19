import React from 'react';
import { FaTheaterMasks, FaFilm, FaDumbbell, FaMicrophone, FaTv, FaAd } from 'react-icons/fa';
import { FaPhoneAlt, FaWhatsapp, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Service = () => {
  // Functions to handle icon clicks
  const handleDialerClick = () => {
    window.location.href = 'tel:+1234567890'; // Replace with your phone number
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/1234567890', '_blank'); // Replace with your WhatsApp link
  };

  const handleInstagramClick = () => {
    window.open('https://instagram.com/yourprofile', '_blank'); // Replace with your Instagram link
  };

  const handleMailClick = () => {
    window.location.href = 'mailto:info@filmaatic.com'; // Replace with your email
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white py-20">
      {/* Background Gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))] animate-float"></div>
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))] animate-float-delay"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        {/* Hero Section */}
        <section className="text-center md:text-left mb-16 animate-fade-in">
  <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center md:items-start gap-6">
    
    {/* Image on the left */}
    <div className="w-full md:w-1/2 flex justify-center md:justify-start">
      <img
        src="/img/logo.png"
        className="w-[60%] md:w-[70%] h-auto object-contain"
        alt="Academy Logo"
      />
    </div>

    {/* Compact Glassmorphic Card */}
    <div className="w-full md:w-1/2 bg-[rgba(255,255,255,0.1)] backdrop-blur-lg border border-[rgba(255,255,255,0.2)] rounded-xl p-12 shadow-lg transition-all duration-300 hover:bg-[rgba(255,255,255,0.15)] hover:scale-105">
      <h2 className="text-4xl font-bold mb-3">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
          Our Academy
        </span>
      </h2>
      <p className="text-base text-gray-300 leading-relaxed">
        At <span className="font-semibold text-white">Filmaatic Studio</span>, we nurture talent and shape future stars with expert training in  
        <span className="text-pink-400 font-semibold"> acting</span>, <span className="text-purple-400 font-semibold"> dance</span>, and <span className="text-blue-400 font-semibold"> screen casting</span>.
        <br /><br />
        Whether you're a beginner or an experienced artist, our top-tier instructors and modern facilities will guide you toward success. 
        <br /><br />
        Join us and turn your **artistic dreams into reality!**
      </p>
    </div>

  </div>
</section>



        {/* Acting School Card */}
        <section className="mb-16 animate-fade-in-up">
          <div className="rounded-[25px] p-8 border border-[rgba(255,255,255,0.1)] shadow-lg backdrop-blur-lg bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] transition-all duration-300 transform hover:scale-105">
            <h2 className="text-3xl font-semibold mb-8">
              Acting School
            </h2>
            <div className="space-y-8">
              <div>
                <div className="flex items-center mb-4">
                  <FaTheaterMasks className="text-4xl text-pink-500 mr-4" />
                  <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Beginner Workshops</h3>
                </div>
                <p className="text-gray-300">
                  Perfect for newcomers, our beginner workshops introduce you to the fundamentals of acting, including voice modulation, body language, and character development.
                </p>
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <FaFilm className="text-4xl text-purple-500 mr-4" />
                  <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Advanced Masterclasses</h3>
                </div>
                <p className="text-gray-300">
                  For experienced actors, our advanced masterclasses focus on refining techniques, exploring complex characters, and preparing for auditions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Dance Studio Card */}
        <section className="mb-16 animate-fade-in-up">
          <div className="rounded-[25px] p-8 border border-[rgba(255,255,255,0.1)] shadow-lg backdrop-blur-lg bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] transition-all duration-300 transform hover:scale-105">
            <h2 className="text-3xl font-semibold mb-8">
              Dance Studio
            </h2>
            <div className="space-y-8">
              <div>
                <div className="flex items-center mb-4">
                  <FaDumbbell className="text-4xl text-pink-500 mr-4" />
                  <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Contemporary Dance</h3>
                </div>
                <p className="text-gray-300">
                  Explore the fluidity and expression of contemporary dance with our expert instructors. Suitable for all skill levels.
                </p>
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <FaMicrophone className="text-4xl text-purple-500 mr-4" />
                  <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Hip-Hop & Street Dance</h3>
                </div>
                <p className="text-gray-300">
                  Learn the latest moves and techniques in hip-hop and street dance. High-energy classes designed to get you moving!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Screen Casting Card */}
        <section className="mb-16 animate-fade-in-up">
          <div className="rounded-[25px] p-8 border border-[rgba(255,255,255,0.1)] shadow-lg backdrop-blur-lg bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] transition-all duration-300 transform hover:scale-105">
            <h2 className="text-3xl font-semibold mb-8">
              Screen Casting
            </h2>
            <div className="space-y-8">
              <div>
                <div className="flex items-center mb-4">
                  <FaTv className="text-4xl text-pink-500 mr-4" />
                  <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Film & TV Casting</h3>
                </div>
                <p className="text-gray-300">
                  We connect talented actors with casting directors for film and television projects. Our team helps you prepare for auditions and land your dream role.
                </p>
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <FaAd className="text-4xl text-purple-500 mr-4" />
                  <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Commercial Casting</h3>
                </div>
                <p className="text-gray-300">
                  From TV commercials to online ads, we help actors find opportunities in the commercial space. Perfect for building your portfolio.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Icons Section */}
        <section className="text-center animate-fade-in-up">
          <h2 className='font-bold text-5xl mb-10 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-500'>Join Us</h2>
          <p className="text-gray-300 mb-8">
            Whether you're an aspiring actor, dancer, or performer, Filmaatic Studio is here to help you achieve your dreams. Join our community today!
          </p>
          <div className="flex justify-center space-x-6 mt-10">
            <button
              onClick={handleDialerClick}
              className="p-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full hover:from-pink-600 hover:to-purple-600 transition-all duration-300 floating"
            >
              <FaPhoneAlt className="text-2xl" />
            </button>
            <button
              onClick={handleWhatsAppClick}
              className="p-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full hover:from-pink-600 hover:to-purple-600 transition-all duration-300 floating"
              style={{ animationDelay: '0.2s' }}
            >
              <FaWhatsapp className="text-2xl" />
            </button>
            <button
              onClick={handleInstagramClick}
              className="p-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full hover:from-pink-600 hover:to-purple-600 transition-all duration-300 floating"
              style={{ animationDelay: '0.4s' }}
            >
              <FaInstagram className="text-2xl" />
            </button>
            <button
              onClick={handleMailClick}
              className="p-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full hover:from-pink-600 hover:to-purple-600 transition-all duration-300 floating"
              style={{ animationDelay: '0.6s' }}
            >
              <FaEnvelope className="text-2xl" />
            </button>
          </div>
        </section>
      </div>

      {/* Floating Animation Styles */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(0px); }
          }

          .floating {
            animation: float 3s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Service;