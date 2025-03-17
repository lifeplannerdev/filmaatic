import React from 'react';

// Sample data for projects (ad films and short films)
const projects = [
  {
    id: 1,
    title: 'Brand X',
    description: '2024/Ad',
    image: 'https://i.pinimg.com/736x/88/4b/12/884b12559994f374a6708ac85453db94.jpg',
    link: '#',
  },
  {
    id: 2,
    title: 'The Joker',
    description: '2023/ Theatre',
    image: 'https://i.pinimg.com/736x/89/95/f2/8995f2aac245134ec3a4a13b669123b3.jpg',
    link: '#',
  },
  {
    id: 3,
    title: 'Asianet-Ad ',
    description: '2023/Ad',
    image: 'https://i.pinimg.com/736x/c9/7e/a1/c97ea10a78625dbe45ed6089ad2b5401.jpg',
    link: '#',
  },
  {
    id: 4,
    title: 'John Wick',
    description: '2021/Theatre',
    image: 'https://i.pinimg.com/736x/38/d3/de/38d3decf56cfa25a6c908db48ec90030.jpg',
    link: '#',
  },
  {
    id: 5,
    title: 'Bloodline',
    description: '2025/theatre',
    image: 'https://m.media-amazon.com/images/M/MV5BODk0YTJlYjctZmNhNi00ZTA1LWIyYTQtNTJhNTk4ZWZlYjJiXkEyXkFqcGc@._V1_.jpg',
    link: '#',
  },
  {
    id: 6,
    title: 'Tumbbad 2018',
    description: '2020/Short-film',
    image: 'https://i.pinimg.com/736x/1d/a0/87/1da087163181848b0535101a4c719b10.jpg',
    link: '#',
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-12 bg-transparent">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-20 mt-10">OUR PROJECTS</h2>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-transparent">
          {projects.map((project, index) => (
            index === 6 ? (
              <div key={project.id} className="card">
                <div className="background"></div>
                <div className="logo">Socials</div>
                <a href="#" className="box box1"></a>
                <a href="##" className="box box2"></a>
                <a href="###" className="box box3"></a>
              </div>
            ) : (
              <div
                key={project.id}
                className="rounded-[25px] overflow-hidden aspect-[3/4] w-full relative"
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
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;