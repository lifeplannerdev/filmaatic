import React from 'react';
import { FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa'; 
import { FaPhone } from "react-icons/fa6";

const EnquirySection = () => {
  // Contact method data
  const contactMethods = [
    {
      name: "Instagram",
      icon: <FaInstagram className="w-10 h-10 mb-2" />,
      href: "https://instagram.com",
      gradient: "from-pink-600 to-purple-600",
      hoverGlow: "hover:shadow-pink-500/30",
      animation: "animate-float"
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp className="w-10 h-10 mb-2" />,
      href: "https://wa.me/yournumber",
      gradient: "from-green-500 to-emerald-500",
      hoverGlow: "hover:shadow-green-500/30",
      animation: "animate-float-delay"
    },
    {
      name: "Phone",
      icon: <FaPhone className="w-10 h-10 mb-2" />,
      href: "tel:+1234567890",
      gradient: "from-blue-500 to-cyan-500",
      hoverGlow: "hover:shadow-blue-500/30",
      animation: "animate-float-delay-2"
    },
    {
      name: "Mail",
      icon: <FaEnvelope className="w-10 h-10 mb-2" />,
      href: "mailto:info@example.com",
      gradient: "from-red-500 to-orange-500",
      hoverGlow: "hover:shadow-red-500/30",
      animation: "animate-float-delay-3"
    }
  ];

  return (
    <section id="enquiry-section" className="min-h-screen bg-slate-950 text-white py-20 px-6 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary gradient orbs with improved animation */}
        
        {/* Additional subtle gradient elements */}
        <div className="absolute top-1/4 left-1/3 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(139,92,246,.1),rgba(255,255,255,0))] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(236,72,153,.1),rgba(255,255,255,0))] animate-pulse-slow"></div>
        
        {/* Fine grain noise overlay for texture */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-30"></div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Hero Section with fade-in animation */}
        <div className="mb-16 animate-fade-in">
          <h1 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-fade-in-delay-1">
            Get In Touch
          </h1>
          
          <p className="text-2xl text-center text-gray-300 mb-6 max-w-2xl mx-auto animate-fade-in-delay-2">
            Let's bring your <span className=" bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">vision to life</span>
          </p>
          
          {/* Decorative divider with fade-in */}
          
        </div>

        {/* Main Content Container */}
        <div className="flex flex-col lg:flex-row gap-10 items-stretch animate-fade-in-delay-4">
          {/* Enquiry Form (Left Side) */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10 shadow-xl animate-fade-in-delay-5">
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mb-6 text-center">
                ENQUIRE NOW
              </h2>
              <form className="space-y-6">
                <div className="group">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full px-4 py-3 bg-slate-800/80 border border-slate-700/80 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all shadow-lg group-hover:shadow-purple-500/20 backdrop-blur-sm"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full px-4 py-3 bg-slate-800/80 border border-slate-700/80 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all shadow-lg group-hover:shadow-purple-500/20 backdrop-blur-sm"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="group">
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="mt-1 block w-full px-4 py-3 bg-slate-800/80 border border-slate-700/80 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all shadow-lg group-hover:shadow-purple-500/20 backdrop-blur-sm"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg transition-all shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transform hover:-translate-y-1 hover:scale-102 animate-fade-in-up"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Methods (Right Side) */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="grid grid-cols-2 gap-6 h-full animate-fade-in-delay-6">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10 shadow-xl flex flex-col items-center justify-center transition-all duration-500 transform hover:-translate-y-2 ${method.hoverGlow} ${method.animation}`}
                >
                  <div className={`mb-4 p-4 rounded-full bg-gradient-to-br ${method.gradient} bg-opacity-20 animate-pulse`}>
                    {React.cloneElement(method.icon, { className: `w-8 h-8 text-white` })}
                  </div>
                  <span className={`text-lg font-bold bg-gradient-to-r ${method.gradient} bg-clip-text text-transparent`}>
                    {method.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
        
       
      </div>

      {/* Enhanced Animation Styles */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(1deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.7; }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fadeInUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-delay {
          animation: float 8s ease-in-out infinite 2s;
        }
        
        .animate-float-delay-2 {
          animation: float 8s ease-in-out infinite 4s;
        }
        
        .animate-float-delay-3 {
          animation: float 8s ease-in-out infinite 6s;
        }
        
        .animate-pulse {
          animation: pulse 6s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite 2s;
        }
        
        .animate-fade-in {
          opacity: 0;
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .animate-fade-in-delay-1 {
          opacity: 0;
          animation: fadeIn 0.8s ease-out 0.1s forwards;
        }
        
        .animate-fade-in-delay-2 {
          opacity: 0;
          animation: fadeIn 0.8s ease-out 0.2s forwards;
        }
        
        .animate-fade-in-delay-3 {
          opacity: 0;
          animation: fadeIn 0.8s ease-out 0.3s forwards;
        }
        
        .animate-fade-in-delay-4 {
          opacity: 0;
          animation: fadeIn 0.8s ease-out 0.4s forwards;
        }
        
        .animate-fade-in-delay-5 {
          opacity: 0;
          animation: fadeIn 0.8s ease-out 0.5s forwards;
        }
        
        .animate-fade-in-delay-6 {
          opacity: 0;
          animation: fadeIn 0.8s ease-out 0.6s forwards;
        }
        
        .animate-fade-in-delay-9 {
          opacity: 0;
          animation: fadeIn 0.8s ease-out 0.9s forwards;
        }
        
        .animate-fade-in-up {
          opacity: 0;
          animation: fadeInUp 0.8s ease-out 0.5s forwards;
        }
      `}</style>
    </section>
  );
};

export default EnquirySection;