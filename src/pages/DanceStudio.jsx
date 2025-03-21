import React from "react";
import SocialCard from "../components/SocialCards";

const DanceStudio = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white py-20 px-6 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary gradient orbs with improved animation */}
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.2),rgba(255,255,255,0))] animate-float"></div>
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(59,130,246,.2),rgba(255,255,255,0))] animate-float-delay"></div>
        
        {/* Additional subtle gradient elements */}
        <div className="absolute top-1/4 left-1/3 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(139,92,246,.1),rgba(255,255,255,0))] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(236,72,153,.1),rgba(255,255,255,0))] animate-pulse-slow"></div>
        
        {/* Fine grain noise overlay for texture */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-30"></div>
      </div>

      {/* Content Container with refined spacing */}
      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Hero Section with improved typography and fade-in animation */}
        <div className="mb-16 animate-fade-in">
          <h1 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-fade-in-delay-1">
            Dance Studio
          </h1>
          
          <p className="text-2xl text-center text-gray-300 mb-6 max-w-2xl mx-auto animate-fade-in-delay-2">
            Discover the joy of dance with our <span className="font-semibold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">expert-led classes</span>
          </p>
          
          {/* Decorative divider with fade-in */}
          <div className="flex items-center justify-center gap-4 my-8 animate-fade-in-delay-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>
            <div className="text-pink-500">✨</div>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
          </div>
        </div>

        {/* Main Content with card-like presentation and sequential fade-in */}
        <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10 shadow-xl animate-fade-in-delay-4">
          <div className="space-y-6">
            <p className="text-lg text-gray-200 leading-relaxed animate-fade-in-delay-5">
              Step into a world of <span className="font-bold text-pink-400">rhythm</span>, <span className="font-bold">creativity</span>, and <span className="font-bold">self-expression</span> at our <span className="font-bold">premier dance studio</span>. Whether you're a <span className="font-bold">beginner</span> or a <span className="font-bold">seasoned dancer</span>, we offer <span className="font-bold">professional training</span> in <span className="font-bold">contemporary</span>, <span className="font-bold">hip-hop</span>, <span className="font-bold">South Indian</span>, and <span className="font-bold">Bollywood dance forms</span> for all ages and genders.
            </p>

            <p className="text-lg text-gray-200 leading-relaxed animate-fade-in-delay-6">
              Our <span className="font-bold">expert choreographers</span> bring years of experience and passion to every class, helping you master the art of dance. From <span className="font-bold">graceful contemporary moves</span> to the <span className="font-bold">high-energy beats of hip-hop</span>, we offer a <span className="font-bold">spectrum of styles</span> to suit every dancer’s passion.
            </p>

            <p className="text-lg text-gray-200 leading-relaxed animate-fade-in-delay-7">
              Beyond classes, we provide <span className="font-bold">choreography services</span> for <span className="font-bold">weddings</span>, <span className="font-bold">competitions</span>, and <span className="font-bold">special events</span>. Our <span className="font-bold">in-house dance team</span> delivers <span className="font-bold">jaw-dropping performances</span> that leave audiences spellbound.
            </p>
            
            {/* Call to action section with fade-in */}
            <div className="mt-10 pt-6 border-t border-white/10 animate-fade-in-delay-8">
              <p className="text-xl font-bold text-center bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Your dance journey starts here!
              </p>
              
              <div className="flex justify-center mt-6">
                <button className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up">
                  Join Us !!
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer tagline with fade-in */}
        
      </div>
      < SocialCard />

      {/* Enhanced Animation Styles with added fade-in animations */}
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
        
        .animate-fade-in-delay-7 {
          opacity: 0;
          animation: fadeIn 0.8s ease-out 0.7s forwards;
        }
        
        .animate-fade-in-delay-8 {
          opacity: 0;
          animation: fadeIn 0.8s ease-out 0.8s forwards;
        }
        
        .animate-fade-in-delay-9 {
          opacity: 0;
          animation: fadeIn 0.8s ease-out 0.9s forwards;
        }
        
        .animate-fade-in-up {
          opacity: 0;
          animation: fadeInUp 0.8s ease-out 1s forwards;
        }
      `}</style>
    </div>
  );
};

export default DanceStudio;