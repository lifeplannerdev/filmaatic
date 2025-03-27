import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Sample data for projects with a `type` field
const projects = [
  {
    id: 1,
    title: 'Assamayam',
    description: '2020/Short-Film',
    image: '/img/asamayam.jpg',
    link: '#',
    type: 'shortfilm',
  },
  {
    id: 2,
    title: 'Canvas',
    description: '2021 / Short-Film',
    image: '/img/canvas.png',
    link: 'https://youtu.be/EBli6KsEHfY?si=jr006_QW9w50Vv8J',
    type: 'shortfilm',
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
    title: 'Hrudaya Malhar',
    description: '2021/Theatre',
    image: '/img/hrudaya.jpg',
    link: 'https://youtu.be/oK30lqPjHgk?si=ECqrPQrbb0kA7OiL',
    type: 'theatre',
  },
  {
    id: 5,
    title: 'Bloodline',
    description: '2025/theatre',
    image: 'https://m.media-amazon.com/images/M/MV5BODk0YTJlYjctZmNhNi00ZTA1LWIyYTQtNTJhNTk4ZWZlYjJiXkEyXkFqcGc@._V1_.jpg',
    link: 'https://youtu.be/BkR1m8npPsw?si=SclZY4k4I98HsM5T',
    type: 'shortfilm',
  },
  {
    id: 6,
    title: 'Paythu Thornaval',
    description: '2022/Short-film',
    image: '/img/paythuthornaval.webp',
    link: 'https://youtu.be/piVp-2_wFpI?si=zu1_TH8eBd_D_a-C',
    type: 'theatre',
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
                    className="text-center inline-block px-3 py-1 sm:px-4 sm:py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-all duration-300 backdrop-blur-lg border border-white/10 text-sm sm:text-base w-[100%]"
                  >
                    Watch
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