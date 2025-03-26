import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Sample data for projects with a `type` field
const projects = [
  {
    id: 1,
    title: 'Brand X',
    description: '2024/Ad',
    image: 'https://i.pinimg.com/736x/88/4b/12/884b12559994f374a6708ac85453db94.jpg',
    link: '#',
    type: 'adfilm',
  },
  {
    id: 2,
    title: 'The Joker',
    description: '2023/ Theatre',
    image: 'https://i.pinimg.com/736x/89/95/f2/8995f2aac245134ec3a4a13b669123b3.jpg',
    link: '#',
    type: 'theatre',
  },
  {
    id: 3,
    title: 'Asianet-Ad ',
    description: '2023/Ad',
    image: 'https://i.pinimg.com/736x/c9/7e/a1/c97ea10a78625dbe45ed6089ad2b5401.jpg',
    link: '#',
    type: 'adfilm',
  },
  {
    id: 4,
    title: 'John Wick',
    description: '2021/Theatre',
    image: 'https://i.pinimg.com/736x/38/d3/de/38d3decf56cfa25a6c908db48ec90030.jpg',
    link: '#',
    type: 'theatre',
  },
  {
    id: 5,
    title: 'Bloodline',
    description: '2025/theatre',
    image: 'https://m.media-amazon.com/images/M/MV5BODk0YTJlYjctZmNhNi00ZTA1LWIyYTQtNTJhNTk4ZWZlYjJiXkEyXkFqcGc@._V1_.jpg',
    link: '#',
    type: 'theatre',
  },
  {
    id: 6,
    title: 'Tumbbad 2018',
    description: '2020/Short-film',
    image: '/img/paythuthornaval.webp',
    link: '#',
    type: 'shortfilm',
  },
];

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState('films'); // Default to 'films'

  // Filter projects based on the active tab
  const filteredProjects = activeTab === 'musicals' 
    ? projects.filter((project) => project.type === 'theatre')
    : projects.filter((project) => project.type === 'adfilm' || project.type === 'shortfilm');

  return (
    <section className="py-12 bg-transparent" style={{ marginTop:"-50px" }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-10 mt-10">OUR PROJECTS</h2>

        {/* Tabs for filtering */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab('films')}
            onMouseDown={(e) => e.preventDefault()}
            className={`px-4 py-2 relative ${
              activeTab === 'films'
                ? 'text-white'
                : 'text-gray-300 hover:text-white'
            } transition-all duration-300 text-sm sm:text-base focus:outline-none`}
          >
            Films
            {activeTab === 'films' && (
              <motion.span
                className="absolute bottom-0 left-0 w-full h-0.5 bg-white"
                layoutId="underline"
              />
            )}
          </button>
          <button
            onClick={() => setActiveTab('musicals')}
            onMouseDown={(e) => e.preventDefault()}
            className={`px-4 py-2 relative ${
              activeTab === 'musicals'
                ? 'text-white'
                : 'text-gray-300 hover:text-white'
            } transition-all duration-300 text-sm sm:text-base focus:outline-none`}
          >
            Musicals
            {activeTab === 'musicals' && (
              <motion.span
                className="absolute bottom-0 left-0 w-full h-0.5 bg-white"
                layoutId="underline"
              />
            )}
          </button>
        </div>

        {/* Project cards */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-transparent"
          layout
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="rounded-[25px] overflow-hidden aspect-[3/4] w-full relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
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