import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Import framer-motion components

// Sample data for projects with a `type` field
const projects = [
  {
    id: 1,
    title: 'Brand X',
    description: '2024/Ad',
    image: 'https://i.pinimg.com/736x/88/4b/12/884b12559994f374a6708ac85453db94.jpg',
    link: '#',
    type: 'adfilm', // Added type
  },
  {
    id: 2,
    title: 'The Joker',
    description: '2023/ Theatre',
    image: 'https://i.pinimg.com/736x/89/95/f2/8995f2aac245134ec3a4a13b669123b3.jpg',
    link: '#',
    type: 'theatre', // Added type
  },
  {
    id: 3,
    title: 'Asianet-Ad ',
    description: '2023/Ad',
    image: 'https://i.pinimg.com/736x/c9/7e/a1/c97ea10a78625dbe45ed6089ad2b5401.jpg',
    link: '#',
    type: 'adfilm', // Added type
  },
  {
    id: 4,
    title: 'John Wick',
    description: '2021/Theatre',
    image: 'https://i.pinimg.com/736x/38/d3/de/38d3decf56cfa25a6c908db48ec90030.jpg',
    link: '#',
    type: 'theatre', // Added type
  },
  {
    id: 5,
    title: 'Bloodline',
    description: '2025/theatre',
    image: 'https://m.media-amazon.com/images/M/MV5BODk0YTJlYjctZmNhNi00ZTA1LWIyYTQtNTJhNTk4ZWZlYjJiXkEyXkFqcGc@._V1_.jpg',
    link: '#',
    type: 'theatre', // Added type
  },
  {
    id: 6,
    title: 'Tumbbad 2018',
    description: '2020/Short-film',
    image: 'https://i.pinimg.com/736x/1d/a0/87/1da087163181848b0535101a4c719b10.jpg',
    link: '#',
    type: 'shortfilm', // Added type
  },
];

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState('adfilm'); // State to manage active tab

  // Filter projects based on the active tab
  const filteredProjects = projects.filter((project) => project.type === activeTab);

  return (
    <section className="py-12 bg-transparent">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-10 mt-10">OUR PROJECTS</h2>

        {/* Tabs for filtering */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab('adfilm')}
            onMouseDown={(e) => e.preventDefault()} // Prevent focus on mouse down
            className={`px-4 py-2 relative ${
              activeTab === 'adfilm'
                ? 'text-white' // Active tab text color
                : 'text-gray-300 hover:text-white' // Inactive tab text color
            } transition-all duration-300 text-sm sm:text-base focus:outline-none`}
          >
            Ad Films
            {/* Active tab underline */}
            {activeTab === 'adfilm' && (
              <motion.span
                className="absolute bottom-0 left-0 w-full h-0.5 bg-white"
                layoutId="underline" // Unique ID for the underline animation
              />
            )}
          </button>
          <button
            onClick={() => setActiveTab('theatre')}
            onMouseDown={(e) => e.preventDefault()} // Prevent focus on mouse down
            className={`px-4 py-2 relative ${
              activeTab === 'theatre'
                ? 'text-white' // Active tab text color
                : 'text-gray-300 hover:text-white' // Inactive tab text color
            } transition-all duration-300 text-sm sm:text-base focus:outline-none`}
          >
            Theatre
            {/* Active tab underline */}
            {activeTab === 'theatre' && (
              <motion.span
                className="absolute bottom-0 left-0 w-full h-0.5 bg-white"
                layoutId="underline" // Unique ID for the underline animation
              />
            )}
          </button>
          <button
            onClick={() => setActiveTab('shortfilm')}
            onMouseDown={(e) => e.preventDefault()} // Prevent focus on mouse down
            className={`px-4 py-2 relative ${
              activeTab === 'shortfilm'
                ? 'text-white' // Active tab text color
                : 'text-gray-300 hover:text-white' // Inactive tab text color
            } transition-all duration-300 text-sm sm:text-base focus:outline-none`}
          >
            Short Films
            {/* Active tab underline */}
            {activeTab === 'shortfilm' && (
              <motion.span
                className="absolute bottom-0 left-0 w-full h-0.5 bg-white"
                layoutId="underline" // Unique ID for the underline animation
              />
            )}
          </button>
        </div>

        {/* Project cards */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-transparent"
          layout // Enable layout animations
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="rounded-[25px] overflow-hidden aspect-[3/4] w-full relative"
                initial={{ opacity: 0, y: 20 }} // Initial animation state
                animate={{ opacity: 1, y: 0 }} // Animate to this state
                exit={{ opacity: 0, y: 20 }} // Exit animation state
                transition={{ duration: 0.3 }} // Animation duration
              >
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-4 sm:p-6">
                  <p className="text-sm text-white mb-2">{project.title}</p>
                  <p className="text-sm text-gray-200 mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    className="inline-block px-3 py-1 sm:px-4 sm:py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-all duration-300 backdrop-blur-lg border border-white/10 text-sm sm:text-base w-[100%]"
                  >
                    Watch Trailer
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;