import React from "react";

const SocialCard = () => {
  // Social card data
  const socialCards = [
    {
      title: "Instagram Gallery",
      description: "Explore our curated visual stories and behind-the-scenes moments from our latest productions.",
      icon: "📸",
      gradient: "from-pink-500 to-orange-400",
      animation: "animate-float",
      hover: "hover:shadow-pink-500/40",
    },
    {
      title: "Filmaatic Productions",
      description: "Discover our award-winning film portfolio showcasing cinematic excellence and creative storytelling.",
      icon: "🎬",
      gradient: "from-purple-500 to-blue-500",
      animation: "animate-float-delay",
      hover: "hover:shadow-purple-500/40",
    },
    {
      title: "YouTube Channel",
      description: "Subscribe to our channel for exclusive content, tutorials, and filmmaker insights.",
      icon: "▶️",
      gradient: "from-red-500 to-pink-500",
      animation: "animate-float-delay-2",
      hover: "hover:shadow-red-500/40",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white py-20 px-6 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary gradient orbs with improved animation */}
        
        {/* Additional subtle gradient elements */}
        <div className="absolute top-1/4 left-1/3 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(139,92,246,.1),rgba(255,255,255,0))] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(236,72,153,.1),rgba(255,255,255,0))] animate-pulse-slow"></div>
        
        {/* Fine grain noise overlay for texture */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-30"></div>
      </div>

      {/* Content Container with refined spacing */}
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Hero Section with improved typography and fade-in animation */}
        <div className="mb-16 animate-fade-in">
          <h1 className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-fade-in-delay-1">
            Connect With Us
          </h1>
          
          <p className="text-2xl text-center text-gray-300 mb-6 max-w-2xl mx-auto animate-fade-in-delay-2">
            Discover our <span className="font-semibold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">digital presence</span> across platforms
          </p>
          
          {/* Decorative divider with fade-in */}
          <div className="flex items-center justify-center gap-4 my-8 animate-fade-in-delay-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>
            <div className="text-pink-500">✨</div>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
          </div>
        </div>

        {/* Social Cards Grid - Responsive with animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-delay-4">
          {socialCards.map((card, index) => (
            <div 
              key={index}
              className={`backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10 shadow-xl transform transition-all duration-500 hover:-translate-y-2 ${card.hover} ${card.animation}`}
            >
              {/* Card Header with Icon and Gradient Border */}
              <div className="flex items-center mb-6">
                <div className={`text-4xl mr-4 p-3 rounded-full bg-gradient-to-br ${card.gradient} bg-opacity-20 animate-pulse`}>
                  {card.icon}
                </div>
                <h3 className={`text-2xl font-bold bg-gradient-to-r ${card.gradient} bg-clip-text text-transparent`}>
                  {card.title}
                </h3>
              </div>
              
              {/* Card Content */}
              <p className="text-gray-300 mb-6">
                {card.description}
              </p>
              
              {/* Interactive Button with Gradient */}
              <div className="mt-auto">
                <button className={`w-full py-3 rounded-full bg-gradient-to-r ${card.gradient} text-white font-bold shadow-lg shadow-purple-500/20 hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fade-in-up`}>
                  Explore Now
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Footer tagline with fade-in */}
        <p className="text-2xl text-center mt-12 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-fade-in-delay-9">
          Follow • Share • Connect
        </p>
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
          animation: float 8s ease-in-out infinite 4s;
        }
        
        .animate-float-delay-2 {
          animation: float 8s ease-in-out infinite 2s;
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
        
        .animate-fade-in-delay-9 {
          opacity: 0;
          animation: fadeIn 0.8s ease-out 0.9s forwards;
        }
        
        .animate-fade-in-up {
          opacity: 0;
          animation: fadeInUp 0.8s ease-out 0.5s forwards;
        }
      `}</style>
    </div>
  );
};

export default SocialCard;