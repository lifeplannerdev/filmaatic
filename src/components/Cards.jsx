import React from "react";
import Tilt from "react-parallax-tilt";
import { useNavigate } from "react-router-dom";
import HeroSection from '../components/Header3';


const Cards = () => {
  const navigate = useNavigate();

  const cardData = [
    {
      title: "Casting",
      description: "Discover exceptional talent through our curated casting services.",
      image: "/img/mask.png",
      accentColor: "border-indigo-600",
      textColor: "text-indigo-400",
      glareColor: "from-indigo-500/30 to-indigo-600/20",
      path: "/screencast",
    },
    {
      title: "Acting School",
      description: "Elevate your craft with our prestigious acting masterclasses.",
      image: "/img/movie.png",
      accentColor: "border-rose-600",
      textColor: "text-rose-400",
      glareColor: "from-rose-500/30 to-rose-600/20",
      path: "/actingschool",
    },
    {
      title: "Dance Studio",
      description: "Choreograph your artistic journey with our elite dance programs.",
      image: "/img/dence3.png",
      accentColor: "border-emerald-600",
      textColor: "text-emerald-400",
      glareColor: "from-emerald-500/30 to-emerald-600/20",
      path: "/dancestudio",
    },
  ];

  const handleLearnMoreClick = (path) => {
    navigate(path);
  };

  return (
    <section className="py-24 px-6 bg-transparent relative overflow-hidden" style={{ marginBottom: "-50px",marginTop:"-50px" }}>
      {/* Enhanced background elements */}
      <HeroSection />
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
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-indigo-500/10 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        
        
        {/* Refined heading with consistent spacing */}
        <div className="text-center mb-20 mt-20">
          <h2 className="text-4xl font-light tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-rose-400 mb-4 mt-10">
            OUR SERVICES
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-rose-500 mx-auto mb-6 rounded-full opacity-80"></div>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Creating Talents into Production
          </p>
        </div>

        {/* Elegantly aligned card grid with consistent height */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cardData.map((card, index) => (
            <Tilt
              key={index}
              tiltMaxAngleX={4}
              tiltMaxAngleY={4}
              perspective={1800}
              scale={1.03}
              transitionSpeed={800}
              className="group h-full"
            >
              <div className={`
                relative 
                h-full
                flex
                flex-col
                bg-slate-800/60 
                backdrop-blur-lg 
                rounded-xl 
                border 
                ${card.accentColor}
                border-opacity-20
                hover:border-opacity-40
                transition-all
                duration-500
                overflow-hidden
                shadow-lg
                group-hover:shadow-xl
                group-hover:translate-y-[-5px]
              `}>
                {/* Refined gradient overlays */}
                <div className={`
                  absolute 
                  inset-0 
                  opacity-0 
                  group-hover:opacity-40 
                  transition-opacity 
                  duration-700 
                  bg-gradient-to-br 
                  ${card.glareColor}
                  pointer-events-none
                  z-20
                `}></div>

                <div className="absolute inset-0 opacity-5 group-hover:opacity-15 transition-opacity duration-700 bg-gradient-to-br from-white to-transparent"></div>

                <div className="p-10 text-center relative z-10 flex flex-col flex-grow">
                  {/* Refined icon container */}
                  <div className={`
                    w-20
                    h-20
                    mx-auto 
                    mb-8
                    flex 
                    items-center 
                    justify-center 
                    rounded-full 
                    bg-slate-700/50 
                    border 
                    ${card.accentColor}
                    border-opacity-30
                    group-hover:scale-105
                    transition-all
                    duration-500
                    shadow-lg
                  `}>
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-12 h-12 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                  </div>

                  {/* Consistent typography */}
                  <h3 className={`
                    text-2xl
                    font-light 
                    tracking-wide
                    mb-4 
                    ${card.textColor}
                  `}>
                    {card.title}
                  </h3>

                  {/* Aligned description with consistent height */}
                  <p className="text-slate-300 mb-8 text-base leading-relaxed flex-grow h-20">
                    {card.description}
                  </p>

                  {/* Refined button */}
                  <div className="mt-auto pt-4 border-t border-slate-700/50">
                    <button
                      onClick={() => handleLearnMoreClick(card.path)}
                      className={`
                        px-6
                        py-2.5
                        rounded-full 
                        text-xs
                        font-medium 
                        tracking-wider 
                        uppercase 
                        transition-all 
                        duration-500 
                        ${card.textColor}
                        border 
                        ${card.accentColor}
                        border-opacity-30
                        hover:border-opacity-70
                        bg-slate-800/40
                        hover:bg-slate-700/60
                        hover:shadow-md
                        group/button
                      `}
                    >
                      <span className="flex items-center">
                        Explore 
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-3.5 w-3.5 ml-2 group-hover/button:translate-x-1 transition-transform" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M14 5l7 7m0 0l-7 7m7-7H3" 
                          />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;