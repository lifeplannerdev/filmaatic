import React from "react";
import SocialCard from "../components/SocialCards";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};



const ActingSchool = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white py-20 px-6 relative overflow-hidden">
      <ScrollToTop />
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
            Acting School
          </h1>
          
          <p className="text-2xl text-center text-gray-300 mb-6 max-w-2xl mx-auto animate-fade-in-delay-2">
            Master the art of acting with our <span className="font-semibold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">world-class training programmes</span>!
          </p>
          
          {/* Decorative divider with fade-in */}
          <div className="flex items-center justify-center gap-4 my-8 animate-fade-in-delay-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>
            <div className="text-pink-500">🎭</div>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
          </div>
        </div>

        {/* Main Content with card-like presentation and sequential fade-in */}
        <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10 shadow-xl animate-fade-in-delay-4">
          <div className="space-y-8">
            {/* Introduction */}
            <p className="text-lg text-gray-200 leading-relaxed animate-fade-in-delay-5">
              Step into the <span className="font-bold text-pink-400">limelight</span> and transform your passion into a <span className="font-bold">stellar career</span> with our <span className="font-bold">elite acting school</span>! Whether you're a <span className="font-bold">budding talent</span> or a <span className="font-bold">seasoned performer</span>, our <span className="font-bold">immersive three-month screen acting course</span> is meticulously crafted to unleash your full potential.
            </p>

            {/* Why Choose Us section */}
            <div className="animate-fade-in-delay-6">
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Why Choose Us?</h2>
              <ul className="space-y-3 list-none pl-5">
                <li className="flex items-start">
                  <span className="text-pink-400 mr-2">•</span>
                  <span><span className="font-bold">Exclusive Training</span>: Limited to a <span className="font-bold">select group of aspiring actors</span> of all ages and genders, ensuring <span className="font-bold">personalized attention</span> and a <span className="font-bold">collaborative learning environment</span>.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-400 mr-2">•</span>
                  <span><span className="font-bold">Hands-On Experience</span>: Dive into <span className="font-bold">real-world scenarios</span> with hands-on training in front of the camera. Learn to <span className="font-bold">embody characters</span>, <span className="font-bold">deliver powerful performances</span>, and <span className="font-bold">command the screen</span> like a true professional.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-400 mr-2">•</span>
                  <span><span className="font-bold">Industry-Ready Skills</span>: From <span className="font-bold">script analysis</span> to <span className="font-bold">camera techniques</span>, our curriculum is designed to equip you with the <span className="font-bold">tools and confidence</span> needed to thrive in the competitive world of acting.</span>
                </li>
              </ul>
            </div>

            {/* The Ultimate Showcase section */}
            <div className="animate-fade-in-delay-7">
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">The Ultimate Showcase</h2>
              <p className="mb-4 text-gray-200">
                The course culminates in a <span className="font-bold">professional project</span>—a <span className="font-bold">feature film</span> or <span className="font-bold">web series</span> exclusively developed for <span className="font-bold">OTT platforms</span>. This isn't just a class project; it's your <span className="font-bold">ticket to the industry</span>!
              </p>
              <ul className="space-y-3 list-none pl-5">
                <li className="flex items-start">
                  <span className="text-pink-400 mr-2">•</span>
                  <span><span className="font-bold">Real-World Exposure</span>: Work on a <span className="font-bold">professional set</span>, collaborate with <span className="font-bold">industry experts</span>, and experience the <span className="font-bold">thrill of a live shoot</span>.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-400 mr-2">•</span>
                  <span><span className="font-bold">Portfolio Builder</span>: Walk away with a <span className="font-bold">showreel</span> and <span className="font-bold">portfolio</span> that showcases your talent and sets you apart from the crowd.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-400 mr-2">•</span>
                  <span><span className="font-bold">OTT Launchpad</span>: Your work will be showcased on <span className="font-bold">popular OTT platforms</span>, giving you <span className="font-bold">global visibility</span> and a <span className="font-bold">head start</span> in your acting career.</span>
                </li>
              </ul>
            </div>

            {/* Exclusive Workshops section */}
            <div className="animate-fade-in-delay-8">
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Exclusive Workshops</h2>
              <p className="mb-4 text-gray-200">
                In addition to our <span className="font-bold">three-month course</span>, we offer <span className="font-bold">specialized workshops</span> designed to sharpen your skills and expand your horizons. These workshops are led by <span className="font-bold">renowned industry professionals</span> and cover a wide range of topics:
              </p>
              <ul className="space-y-3 list-none pl-5">
                <li className="flex items-start">
                  <span className="text-pink-400 mr-2">•</span>
                  <span><span className="font-bold">Method Acting Masterclass</span>: Dive deep into the techniques of method acting and learn how to <span className="font-bold">fully immerse yourself in your character</span>.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-400 mr-2">•</span>
                  <span><span className="font-bold">Voice Modulation & Dubbing</span>: Master the art of <span className="font-bold">voice control</span>, <span className="font-bold">dialogue delivery</span>, and <span className="font-bold">dubbing</span> for films and series.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-400 mr-2">•</span>
                  <span><span className="font-bold">Improvisation & Spontaneity</span>: Develop your ability to <span className="font-bold">think on your feet</span> and deliver <span className="font-bold">authentic performances</span> in any situation.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-400 mr-2">•</span>
                  <span><span className="font-bold">Audition Techniques</span>: Learn how to <span className="font-bold">ace auditions</span> with confidence, from <span className="font-bold">script reading</span> to <span className="font-bold">on-camera presence</span>.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-400 mr-2">•</span>
                  <span><span className="font-bold">Emotional Range & Expression</span>: Explore the <span className="font-bold">full spectrum of emotions</span> and learn how to <span className="font-bold">convey them convincingly</span> on screen.</span>
                </li>
              </ul>
              <p className="mt-4 text-gray-200">
                These workshops are perfect for actors looking to <span className="font-bold">refine specific skills</span> or <span className="font-bold">explore new areas of acting</span>. Whether you're a beginner or a professional, there's something for everyone!
              </p>
            </div>

            {/* Your Journey to Stardom */}
            <div className="animate-fade-in-delay-9">
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Your Journey to Stardom</h2>
              <p className="text-gray-200">
                This is more than just a course—it's a <span className="font-bold">transformative experience</span> that prepares you for the <span className="font-bold">big stage</span>. Whether you dream of <span className="font-bold">Hollywood</span>, <span className="font-bold">Bollywood</span>, or <span className="font-bold">global OTT platforms</span>, we'll help you <span className="font-bold">hone your craft</span>, <span className="font-bold">build your brand</span>, and <span className="font-bold">make your mark</span> in the entertainment industry.
              </p>
            </div>
            
            {/* Call to action section with fade-in */}
            <div className="mt-10 pt-6 border-t border-white/10 animate-fade-in-delay-10">
              <div className="flex justify-center mt-6">
                <button className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </div>
        
    
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
        
        .animate-fade-in-delay-10 {
          opacity: 0;
          animation: fadeIn 0.8s ease-out 1s forwards;
        }
        
        .animate-fade-in-delay-11 {
          opacity: 0;
          animation: fadeIn 0.8s ease-out 1.1s forwards;
        }
        
        .animate-fade-in-up {
          opacity: 0;
          animation: fadeInUp 0.8s ease-out 1.2s forwards;
        }
      `}</style>
    </div>
  );
};

export default ActingSchool;