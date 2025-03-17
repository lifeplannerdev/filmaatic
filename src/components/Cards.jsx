import React from "react";
import Tilt from "react-parallax-tilt";

const Cards = () => {
  const cardData = [
    {
      title: "Casting",
      description: "Find your next big role with our professional casting services.",
      image: "/img/mask.png", // Public URL path
      gradient: "bg-gradient-to-br from-purple-600 to-blue-900",
    },
    {
      title: "Acting School",
      description: "Master the art of acting with our world-class training programs.",
      image: "/img/movie.png", // Public URL path
      gradient: "bg-gradient-to-br from-pink-600 to-orange-900",
    },
    {
      title: "Dance School",
      description: "Discover the joy of dance with our expert-led classes.",
      image: "/img/dance.png", // Public URL path
      gradient: "bg-gradient-to-br from-teal-600 to-green-900",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 mt-20 justify-center">
      {cardData.map((card, index) => (
        <Tilt
          key={index}
          tiltMaxAngleX={15}
          tiltMaxAngleY={15}
          perspective={1000}
          scale={1.05}
          transitionSpeed={500}
          className="rounded-[25px] p-6 border border-[rgba(255,255,255,0.1)] shadow-lg w-[95%] mx-auto backdrop-blur-lg bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] transition-all duration-300"
        >
          {/* Gradient Overlay */}
          <div
            className={`absolute inset-0 ${card.gradient} opacity-20 rounded-[25px] -z-10`}
          ></div>

          {/* Card Content */}
          <div className="text-center">
            {/* Image */}
            <div className="flex justify-center mb-4">
              <img
                src={card.image} // Use the public URL path
                alt={card.title}
                className="w-20 h-20 object-contain" // Adjust size as needed
              />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">{card.title}</h2>
            <p className="text-gray-300 mb-4">{card.description}</p>
            <button
              className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-all duration-300 backdrop-blur-lg border border-white/10"
            >
              Learn More
            </button>
          </div>
        </Tilt>
      ))}
    </div>
  );
};

export default Cards;