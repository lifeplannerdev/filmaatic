import React, { useState } from 'react';
import { School, Film, Star, FileText, ArrowRight } from 'lucide-react';

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
      color: "from-blue-600 to-blue-400"
    },
    { 
      icon: Film, 
      title: "Productions", 
      description: "Professional film & media projects",
      color: "from-purple-600 to-purple-400" 
    },
    { 
      icon: Star, 
      title: "Projects", 
      description: "Cutting-edge creative collaborations",
      color: "from-amber-500 to-yellow-400" 
    },
    { 
      icon: FileText, 
      title: "Enquire", 
      description: "Start your creative journey with us",
      color: "from-emerald-600 to-green-400" 
    }
  ];

  return (
    <section className="relative bg-transparent text-white overflow-hidden">
      {/* Elegant Background Elements */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none overflow-hidden">
        {[...Array(40)].map((_, i) => (
          <div 
            key={i} 
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 10 + 2}px`,
              height: `${Math.random() * 10 + 2}px`,
              backgroundColor: `hsla(${Math.random() * 260}, 70%, 70%, 0.3)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(1px)',
              animation: `float ${Math.random() * 20 + 15}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
          {/* Logo Section */}
          <div className="flex flex-col items-center lg:items-start lg:w-5/12">
            <div className="relative group transition-all duration-500">
              <div className="absolute inset-0 bg-transparent rounded-xl blur-xl group-hover:opacity-100 opacity-70 transition-opacity duration-700"></div>
              <img 
                src="/img/logo.png"  
                alt="F.I.F.A.C Logo" 
                className="relative h-auto w-full max-w-md object-contain 
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
                  <div 
                    key={index} 
                    className="group relative p-5 rounded-lg border border-white/5 transition-all duration-300 
                      hover:bg-white/5 cursor-pointer overflow-hidden"
                    onMouseEnter={() => setHoverItem(index)}
                    onMouseLeave={() => setHoverItem(null)}
                    onClick={service.title === "Enquire" ? scrollToEnquirySection : undefined}
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
                  </div>
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