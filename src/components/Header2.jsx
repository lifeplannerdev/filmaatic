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
      color: "from-indigo-600 to-indigo-400",
      link: "/service"
    },
    { 
      icon: Film, 
      title: "Productions", 
      description: "Professional film & media projects",
      color: "from-rose-600 to-rose-400",
      link: "/productions" 
    },
  ];

  return (
    <section className="relative bg-transparent text-white" style={{marginBottom: "-50px"}}>
      {/* Enhanced background with more premium gradients */}
      <div className="relative h-full w-full bg-slate-950">
        {/* Refined gradient spots */}
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.12),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.12),rgba(255,255,255,0))]"></div>
        
        {/* Additional subtle gradients for depth */}
        <div className="absolute top-[-5%] left-[30%] h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(79,70,229,.08),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-[-10%] left-[10%] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(59,130,246,.08),rgba(255,255,255,0))]"></div>
        
        {/* Subtle line accent */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent"></div>
      </div>
      
      {/* Refined background effects with improved animation */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none overflow-hidden">
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
      <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 items-center justify-between">
          {/* Logo Section - Enhanced with premium glassmorphism effect */}
          <div className="flex flex-col items-center justify-center lg:w-5/12">
            <div className="relative group transition-all duration-500 flex items-center justify-center w-full">
              {/* Premium glassmorphism container */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/15 to-rose-500/15 rounded-xl 
                backdrop-blur-lg border border-white/15 shadow-xl transform -rotate-1 scale-105 group-hover:scale-110 
                group-hover:rotate-0 transition-all duration-700 max-w-xs mx-auto"></div>
              
              {/* Subtle inner texture */}
              <div className="absolute inset-0 opacity-5 rounded-xl" 
                style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M0 40L40 0H20L0 20M40 40V20L20 40\'/%3E%3C/g%3E%3C/svg%3E")'}}></div>
              
              {/* Premium glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-fuchsia-600/20 rounded-xl 
                opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-700 animate-pulse max-w-xs mx-auto"
                style={{animationDuration: '5s'}}></div>
              
              {/* Decorative accents */}
              <div className="absolute top-4 left-4 w-12 h-12 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-6 right-8 w-10 h-10 bg-indigo-500/20 rounded-full blur-lg"></div>
              <div className="absolute -bottom-2 left-1/3 w-16 h-1 bg-gradient-to-r from-indigo-500/40 to-rose-500/40 
                rounded-full blur-md group-hover:w-20 transition-all duration-700"></div>
              
              {/* Logo image with refined styling */}
              <img 
                src="/img/FIFAC3.png"  
                alt="F.I.F.A.C Logo" 
                className="relative h-auto w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%] max-w-xs object-contain 
                  transform transition-all duration-500 p-5
                  hover:scale-105 z-10 drop-shadow-lg"
              />
            </div>
          </div>

          {/* Content Section - Enhanced with more premium styling */}
          <div className="space-y-6 lg:w-7/12">
            <div className="backdrop-blur-md border border-white/10 rounded-xl p-7 shadow-xl bg-gradient-to-br from-slate-900/80 to-slate-800/60">
              {/* Premium header with accent */}
              <div className="flex items-center mb-5">
                <div className="w-1 h-6 bg-gradient-to-b from-indigo-400 to-rose-400 rounded-full mr-3"></div>
                <h2 className="text-2xl font-light tracking-wider">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-rose-300">F.I.F.A.C</span>
                </h2>
                <div className="h-px flex-grow ml-6 bg-gradient-to-r from-indigo-500/40 to-transparent"></div>
              </div>
              
              {/* Services with refined styling */}
              <div className="grid sm:grid-cols-2 gap-5">
                {services.map((service, index) => (
                  <Link 
                    to={service.link}
                    key={index}
                    className="group relative p-4 rounded-lg border border-white/10 transition-all duration-300 
                      hover:bg-white/5 hover:border-opacity-30 hover:shadow-lg cursor-pointer overflow-hidden block
                      bg-gradient-to-br from-slate-900/60 to-slate-800/40"
                    onMouseEnter={() => setHoverItem(index)}
                    onMouseLeave={() => setHoverItem(null)}
                  >
                    {/* Refined hover effect */}
                    <div 
                      className={`absolute inset-0 opacity-0 bg-gradient-to-br ${service.color} group-hover:opacity-8 transition-opacity duration-500`}>
                    </div>
                    
                    {/* Top accent line */}
                    <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${service.color} opacity-40`}></div>
                    
                    {/* Icon and title with refined styling */}
                    <div className="flex items-center mb-3 relative z-10">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${service.color} mr-3 shadow-md`}>
                        <service.icon className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                      </div>
                      <h3 className="font-light text-base tracking-wide">{service.title}</h3>
                    </div>
                    
                    <p className="text-sm text-slate-300 mb-3 h-10">{service.description}</p>
                    
                    {/* Premium learn more link */}
                    <div className="flex items-center text-xs text-white/70 
                      transition-all duration-300 transform group-hover:translate-x-1">
                      <span className="mr-1 group-hover:text-white/90 transition-colors duration-300">Learn more</span>
                      <ArrowRight className="w-3 h-3 group-hover:text-white/90 transition-colors duration-300" />
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