
import React from 'react';

const HeroSection = () => {
  const scrollToEnquirySection = () => {
    const enquirySection = document.getElementById("enquiry-section");
    if (enquirySection) {
      enquirySection.scrollIntoView({ behavior: "smooth" }); // Smooth scroll
    }
  };
  return (
    <section className="relative text-white" style={{marginTop: '40px'}}>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-transparent z-0">
        {/* Animated gradient shapes - matched with enquiry section style */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl"></div>
        
        {/* Subtle pattern overlay */}
        <div 
          className="absolute inset-0 opacity-5" 
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0) 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}
        >
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text content */}
          <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-8">
            {/* Institute badge - removed dark overlay */}
            <div className="inline-flex px-4 py-1.5 mb-6 rounded-full border border-white/10">
              <span className="text-indigo-300 font-medium text-sm">F . I . F . A . C</span>
            </div>

            {/* Main heading with gradient text */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-7xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-blue-500" style={{ fontFamily: "SmileCandy" }}>Filmaatic</span> 
              <span className="text-white"> INSTITUTE OF FASHION AND CINEMA</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg text-slate-300 mb-8 max-w-lg">
            F.I.F.A.C. is a premier academy offering world-class training in acting, dance, and screen casting. Join us to unleash your potential and achieve your dreams in the entertainment industry.
            </p>

            {/* CTA Buttons - using same style as enquiry section */}
            <div className="flex flex-wrap gap-4">
              <button className="px-5 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/40 transition-all duration-300 transform hover:-translate-y-1 flex items-center group">
                <span>Projects</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              <button className="px-5 py-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1">
                Productions
              </button>
            </div>
          </div>

          {/* Fashion showcase */}
          <div className="w-full md:w-1/2 relative" style={{marginTop:"10px"}}>
            <div className="relative z-10 grid grid-cols-2 gap-4 md:p-4">
              {/* Main featured product */}
              <div className="col-span-2 h-50 md:h-70 overflow-hidden rounded-xl">
                <div className="h-full w-full overflow-hidden rounded-lg">
                  <img
                    src="img/logo7.png"
                    alt="Featured Collection"
                    className="h-full w-[100%] object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
              </div>

              {/* Secondary products */}
              <div className="h-48 overflow-hidden rounded-lg">
                <div className="h-full w-full overflow-hidden rounded-md">
                  <img
                    src="img/std.jpg"
                    alt="Urban Collection"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
              </div>
              
              <div className="h-48 overflow-hidden rounded-lg">
                <div className="h-full w-full overflow-hidden rounded-md">
                  <img
                    src="https://i.pinimg.com/736x/6d/e0/9d/6de09dd7151ab2a1f58a94a4928cad18.jpg"
                    alt="Avant Garde Collection"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
              </div>
              
            </div>

          </div>
          
        </div>
        
      </div>
      
    </section>
  );
};

export default HeroSection;