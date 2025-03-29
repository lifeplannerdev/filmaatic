import React, { useState } from 'react';
import { School, Film, Star, FileText, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ModernHeader = () => {
  const [hoverItem, setHoverItem] = useState(null);

  // Function to scroll to the enquiry section
  const scrollToEnquirySection = () => {
    const enquirySection = document.getElementById("enquiry-section");
    if (enquirySection) {
      enquirySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Services data with improved descriptions
  const services = [
    { 
      icon: School, 
      title: "School", 
      description: "Expert-led creative education & workshops",
      color: "from-blue-600 to-blue-400",
      link: "/service"
    },
    { 
      icon: Film, 
      title: "Productions", 
      description: "Professional film & media projects",
      color: "from-purple-600 to-purple-400",
      link: "/productions" 
    },
  ];

  return (
    <section className="relative bg-transparent text-white overflow-hidden" style={{marginBottom:"-100px"}}>
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none overflow-hidden">
        {/* Top-right large purple flare */}
        
        {/* Bottom-left blue flare */}
        
        {/* Center-right indigo pulsing flare */}
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-indigo-600/15 rounded-full filter blur-3xl animate-pulse" 
             style={{animationDuration: '8s'}}></div>
        
        {/* Top-left small flare */}
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-cyan-500/15 rounded-full filter blur-2xl animate-pulse"
             style={{animationDuration: '12s'}}></div>
        
        {/* Bottom-right medium flare */}
        <div className="absolute bottom-1/4 right-1/3 w-56 h-56 bg-fuchsia-500/15 rounded-full filter blur-2xl animate-pulse"
             style={{animationDuration: '10s'}}></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
          {/* Logo Section */}
          <div className="flex flex-col items-center justify-center lg:w-5/12">
            <div className="relative group transition-all duration-500 flex items-center justify-center w-full">
              <div className="absolute inset-0 bg-transparent rounded-xl blur-xl group-hover:opacity-100 opacity-70 transition-opacity duration-700"></div>
              <img 
                src="/img/logo.png"  
                alt="F.I.F.A.C Logo" 
                className="relative h-auto w-[65%] max-w-md object-contain 
                  transform transition-all duration-500 
                  hover:scale-102 rounded-lg z-10"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8 lg:w-7/12">
            <div className="backdrop-blur-md border border-white/10 rounded-xl p-8 shadow-2xl bg-white/5">
              <div className="flex items-center mb-8">
                <h2 className="text-3xl font-light tracking-wider">
                  <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">F.I.F.A.C</span>
                </h2>
                <div className="h-px flex-grow ml-6 bg-gradient-to-r from-indigo-500/50 to-transparent"></div>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <Link 
                    to={service.link}
                    key={index}
                    className="group relative p-5 rounded-lg border border-white/5 transition-all duration-300 
                      hover:bg-white/5 cursor-pointer overflow-hidden block"
                  >
                    {/* Background gradient that appears on hover */}
                    <div 
                      className={`absolute inset-0 opacity-0 bg-gradient-to-br ${service.color} group-hover:opacity-10 transition-opacity duration-500`}>
                    </div>
                    
                    <div className="flex items-center mb-3 relative z-10">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${service.color} mr-3 shadow-lg`}>
                        <service.icon className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                      </div>
                      <h3 className="font-medium text-lg">{service.title}</h3>
                    </div>
                    
                    <p className="text-sm text-slate-300 mb-2">{service.description}</p>
                    
                    <div className={`flex items-center text-xs text-white/60 
                      transition-all duration-300 transform 
                      ${hoverItem === index ? 'translate-x-1 opacity-100' : 'opacity-0'}`}
                    >
                      <span className="mr-1">Learn more</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernHeader;