import React from "react";
import ProjectsSection from "../components/ProjectSection";
import Cards from "../components/Cards";
import EnquirySection from "../components/Enquiry";

const Production = () => {
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
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Hero Section with improved typography and fade-in animation */}
        <div className="mb-16 animate-fade-in">
          <h1 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-fade-in-delay-1">
            <span className="text-5xl text-white" style={{ fontFamily: "SmileCandy" }}>Filmaatic</span> Productions
          </h1>
          
          <p className="text-2xl text-center text-gray-300 mb-6 max-w-2xl mx-auto animate-fade-in-delay-2">
             <span className="font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Turning talent</span> into Productions!
          </p>
          
          {/* Decorative divider with fade-in */}

        </div>

        {/* Main Content with card-like presentation and sequential fade-in */}
        <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10 shadow-xl animate-fade-in-delay-4">
          <div className="space-y-6">
            <p className="text-lg text-gray-200 leading-relaxed animate-fade-in-delay-5">
              Film production is the next step for our trained actors, dancers, and performers. It is where coursework from our Screen Acting, Dance Studio, and Theatre Workshop comes to life, giving students an opportunity to work on professional projects. This division is also closely tied to our Casting Calls & Auditions and Casting Directory, ensuring that talent finds the right roles in high-quality productions.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-center bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent animate-fade-in-delay-6">
              Our expertise :
            </h2>

            {/* Production Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 animate-fade-in-delay-7">
              {/* Feature Films Card */}
              <div className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10 transform transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/30 hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-purple-500 mr-4 animate-pulse">
                    <span className="text-xl">🎥</span>
                  </div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                    Feature Films
                  </h3>
                </div>
                <p className="text-gray-300 ml-16">
                  Full-length cinematic productions, crafted with powerful storytelling and high production values, providing a real industry experience for emerging talent.
                </p>
              </div>

              {/* Ad Films Card */}
              <div className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10 transform transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-500 mr-4 animate-pulse">
                    <span className="text-xl">📺</span>
                  </div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Ad Films
                  </h3>
                </div>
                <p className="text-gray-300 ml-16">
                  Visually captivating commercial projects that showcase brands creatively, offering fresh faces an opportunity to shine in the advertising industry.
                </p>
              </div>

              {/* Musical Albums Card */}
              <div className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10 transform transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 mr-4 animate-pulse">
                    <span className="text-xl">🎵</span>
                  </div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Musical Albums
                  </h3>
                </div>
                <p className="text-gray-300 ml-16">
                  Professionally produced music videos and conceptual performances, integrating acting, choreography, and storytelling into a single artistic vision.
                </p>
              </div>

              {/* Web Series Card */}
              <div className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10 transform transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-blue-500 mr-4 animate-pulse">
                    <span className="text-xl">🎞️</span>
                  </div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
                    Web Series
                  </h3>
                </div>
                <p className="text-gray-300 ml-16">
                  Episodic digital content created specifically for OTT platforms, allowing new actors and filmmakers to break into the fast-growing online entertainment industry.
                </p>
              </div>
            </div>

            <p className="text-lg text-gray-200 leading-relaxed mt-8 animate-fade-in-delay-8">
              Every project we create is not just about production—it is about launching careers. We believe in nurturing fresh talent and providing a platform where training meets real-world opportunities. Whether you are an actor, dancer, or filmmaker, our productions serve as your stepping stone into the industry.
            </p>
            
            {/* Call to action section with fade-in */}
            <div className="mt-10 pt-6 border-t border-white/10 animate-fade-in-delay-9">
              <p className="text-xl font-bold text-center bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-2">
                Ready to bring your talent to the screen?
              </p>
              
              <div className="flex justify-center">
              <button
          
          className="relative overflow-hidden px-6 py-3 text-white text-lg font-medium rounded-lg transition-all duration-500 font-montserrat"
          style={{
            background: "linear-gradient(45deg,rgb(227, 180, 12), #69007f, #fc0987)",
            marginTop: "40px",
            borderRadius: "30px",
          }}
        >
          <span className="relative z-10">Join Us</span>
          <span
            className="absolute inset-1 bg-[#272727] rounded-lg transition-opacity duration-500 opacity-100 hover:opacity-70"
            style={{ zIndex: 1, borderRadius: "30px" }}
          ></span>
          <span
            className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500"
            style={{
              background: "linear-gradient(45deg, #0ce39a, #69007f, #fc0987)",
              filter: "blur(20px)",
              zIndex: 0,
            }}
          ></span>
        </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer tagline with fade-in */}
        <p className="text-2xl text-center mt-12 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-fade-in-delay-10">
          Lights, Camera, Action!
        </p>
        
      </div>
      

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
        
        .animate-fade-in-delay-10 {
          opacity: 0;
          animation: fadeIn 0.8s ease-out 1s forwards;
        }
        
        .animate-fade-in-up {
          opacity: 0;
          animation: fadeInUp 0.8s ease-out 1s forwards;
        }
      `}</style>
      
    </div>
   
    
  );
};

export default Production;