'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Github, ExternalLink } from 'lucide-react';
import SpotlightCard from '../components/SpotlightCard/SpotlightCard';
import SplitText from '../components/SplitText/SplitText';
import Aurora from '../components/Aurora/Aurora';
import Navbar from '../components/Navbar/Navbar';
import GradientText from '../components/GradientText/GradientText';
import SplashCursor from '../components/SplashCursor/SplashCursor';
import Footer from '../components/Footer/Footer';

const projects = [
  {
    title: 'TODOLIST',
    image: '/image/experience/download.jpg',
    description: 'A modern task management application with real-time updates.',
    tags: ['React', 'Firebase', 'Tailwind'],
    github: 'https://github.com/yourusername/todolist',
    live: 'https://todolist-demo.com'
  },
  {
    title: 'TIC TAC TOE',
    image: '/image/experience/project-2.jpg',
    description: 'Classic game reimagined with modern web technologies.',
    tags: ['JavaScript', 'HTML5', 'CSS3'],
    github: 'https://github.com/yourusername/tictactoe',
    live: 'https://tictactoe-demo.com'
  },
  {
    title: '2048',
    image: '/image/experience/project-3.jpg',
    description: 'Popular number puzzle game with smooth animations.',
    tags: ['React', 'TypeScript', 'GSAP'],
    github: 'https://github.com/yourusername/2048',
    live: 'https://2048-demo.com'
  },
  {
    title: 'SNAKE XENZIA',
    image: '/image/experience/project-4.jpg',
    description: 'Classic Nokia snake game with modern features.',
    tags: ['Canvas', 'JavaScript', 'HTML5'],
    github: 'https://github.com/yourusername/snake',
    live: 'https://snake-demo.com'
  },
  {
    title: 'SCHOOL WEBSITE',
    image: '/image/experience/project-5.jpg',
    description: 'Modern school management system with dashboard.',
    tags: ['Next.js', 'MongoDB', 'Tailwind'],
    github: 'https://github.com/yourusername/school',
    live: 'https://school-demo.com'
  },
  {
    title: 'TETRIS',
    image: '/image/experience/project-6.jpg',
    description: 'Classic tetris game with multiplayer support.',
    tags: ['React', 'Socket.io', 'Redux'],
    github: 'https://github.com/yourusername/tetris',
    live: 'https://tetris-demo.com'
  }
];


export default function Projects() {
  return (
    <body>
      <Navbar />
      <div className="min-h-screen overflow-x-hidden position-relative bg-[#000202]">
        <div className="absolute top-0 left-0 w-full h-full">
          <SplashCursor />
        </div>

        <div className="absolute top-0 left-0 w-full h-full">
          <Aurora
            colorStops={['#00171f', '#003459', '#adebff']}
            amplitude={1.7}
            blend={0.5}
            speed={0.9}
          />
        </div>

        <div className="container mx-auto py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <SplitText
              text="My Projects"
              className="text-5xl font-bold text-[#adebff] section-title"
              delay={150}
              animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
              animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              threshold={0.2}
              rootMargin="-50px"
            />
            <GradientText
              colors={["#40ffaa", "#4079ff"]}
              animationSpeed={3}
              className="text-xl mt-4"
            >
              A showcase of my best work
            </GradientText>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="mb-24 text-center mt-24 "
              >
                <SpotlightCard
                  className="w-full p-6 transform hover:scale-105 transition-all duration-300"
                  spotlightColor="rgba(0, 229, 255, 0.2)"
                >
                  <div className="flex flex-col gap-4">
                    <div className="relative w-full h-48 rounded-lg overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <h3 className="text-xl font-semibold text-[#adebff]">
                      {project.title}
                    </h3>

                    <p className="text-gray-400">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-sm rounded-full bg-[#003459] text-[#adebff]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex justify-end gap-3 mt-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-[#003459] transition-colors"
                      >
                        <Github size={20} className="text-[#adebff]" />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-[#003459] transition-colors"
                      >
                        <ExternalLink size={20} className="text-[#adebff]" />
                      </a>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </body>
  );
}