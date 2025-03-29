import React from "react";
import Tilt from "react-parallax-tilt";
import { useNavigate } from "react-router-dom";
import ModernHeader from "./Header2";

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
    <section className="py-24 px-6 bg-transparent from-slate-900 to-slate-800 relative overflow-hidden" style={{marginBottom:"-50px"}}>
      {/* Subtle decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-transparent from-indigo-500 to-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-transparent from-emerald-500 to-teal-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Sophisticated Header */}
        <div className="text-center mb-16" style={{ marginTop:"-90px", }}>
          
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
           
          </p>
        </div>

        {/* Elegant Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cardData.map((card, index) => (
            <Tilt
              key={index}
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              perspective={1500}
              scale={1.05}
              transitionSpeed={600}
              className="group h-full"
            >
              <div className={`
                relative 
                h-full
                flex
                flex-col
                bg-slate-800/60 
                backdrop-blur-lg 
                rounded-2xl 
                border 
                ${card.accentColor}
                border-opacity-20
                hover:border-opacity-50
                transition-all
                duration-500
                overflow-hidden
                shadow-2xl
                group-hover:shadow-xl
                group-hover:translate-y-[-10px]
              `}>
                {/* Gradient Glare Overlay */}
                <div className={`
                  absolute 
                  inset-0 
                  opacity-0 
                  group-hover:opacity-50 
                  transition-opacity 
                  duration-500 
                  bg-gradient-to-br 
                  ${card.glareColor}
                  pointer-events-none
                  z-20
                `}></div>

                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br from-white to-transparent"></div>

                <div className="p-10 text-center relative z-10 flex flex-col flex-grow">
                  {/* Animated Icon Container */}
                  <div className={`
                    w-24 
                    h-24 
                    mx-auto 
                    mb-6 
                    flex 
                    items-center 
                    justify-center 
                    rounded-full 
                    bg-slate-700/50 
                    border 
                    ${card.accentColor}
                    border-opacity-30
                    group-hover:scale-110
                    transition-all
                    duration-500
                  `}>
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-16 h-16 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                  </div>

                  {/* Title */}
                  <h3 className={`
                    text-3xl 
                    font-light 
                    tracking-tight 
                    mb-4 
                    ${card.textColor}
                    group-hover:text-opacity-100
                  `}>
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 mb-8 text-base leading-relaxed flex-grow">
                    {card.description}
                  </p>

                  {/* Sophisticated Button */}
                  <div className="mt-auto">
                    <button
                      onClick={() => handleLearnMoreClick(card.path)}
                      className={`
                        px-8 
                        py-3 
                        rounded-full 
                        text-sm 
                        font-medium 
                        tracking-wider 
                        uppercase 
                        transition-all 
                        duration-500 
                        ${card.textColor}
                        border 
                        ${card.accentColor}
                        border-opacity-30
                        hover:border-opacity-100
                        bg-slate-800/30
                        hover:bg-slate-700/50
                        hover:shadow-lg
                        group/button
                      `}
                    >
                      <span className="flex items-center">
                        Explore 
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-4 w-4 ml-2 group-hover/button:translate-x-1 transition-transform" 
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
        <ModernHeader />
      </div>
      
    </section>
  );
};

export default Cards;