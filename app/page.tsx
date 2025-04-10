'use client';

import { useState } from "react";
import Image from "next/image";
import Lanyard from "./components/Lanyard/Lanyard";
import RotatingText from "./components/RotatingText/RotatingText";
import SplitText from "./components/SplitText/SplitText";
import BlurText from "./components/BlurText/BlurText";
import Aurora from "./components/Aurora/Aurora";
import MagnetLines from "./components/MagnetLines/MagnetLines";
import SpotlightCard from "./components/SpotlightCard/SpotlightCard";
import { Github, ExternalLink, ChevronDown} from "lucide-react";
import GradientText from "./components/GradientText/GradientText";
import Link from 'next/link';
import SplashCursor from "./components/SplashCursor/SplashCursor";
import ImageTrail from "./components/ImageTrail/ImageTrail";
import CircularText from "./components/CircularText/CircularText";
import MetaBalls from "./components/MetaBalls/MetaBalls";
import ScrollVelocity from "./components/ScrollVelocity/ScrollVelocity";
import Particles from "./components/Particles/Particles";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const Project = [
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

export default function Home() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  return (
    <body >
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
        {/* hero section */}
        <div className="container mx-auto h-screen z-10">
          <div className="grid grid-cols-12">
            <div className="col-span-6">
              <Lanyard position={[0, 0, 15]} gravity={[0, -30, 0]} />
              <div className="absolute top-20 left-20 z-0" style={{ width: '15px', height: '15px' }}>

                <CircularText
                  text="AHMAD*HASAN*"
                  onHover="speedUp"
                  spinDuration={20}
                  className="custom-class"
                />
              </div>

            </div>
            <div className="col-span-6 ">
              <div className="flex flex-col justify-center items-start h-full px-10 gap-7">

                <div className="flex flex-col gap-2 items-start">
                  <SplitText
                    text="Hi! I am AHMAD HASAN"
                    className="text-4xl font-bold text-center hero-title"
                    delay={150}
                    animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                    threshold={0.2}
                    rootMargin="-50px"
                  />

                  <SplitText
                    text="Fullstack web developer"
                    className="text-2xl text-center italic text-[#549fd4]"
                    delay={150}
                    animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                    threshold={0.9}
                    rootMargin="-50px"
                  />
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <h1 className="text-xl text-white font-bold z-10">I am ready for job</h1>
                  <RotatingText
                    texts={['frontend Web dev', 'backend web dev', 'database dev', 'prompt engineer']}
                    mainClassName="px-2 sm:px-2 md:px-3 text-[aqua] overflow-hidden py-0.5 sm:py-1 justify-center rounded-lg text-2xl font-bold inline-flex"
                    staggerFrom={"last"}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={2000}
                  />
                </div>

                <div>
                  <BlurText
                    text='"I am a web developer passionate about creating refined, high-performance websites. I blend clean design with modern technologies to build seamless digital experiences that are both visually compelling and functionally powerful—crafted with precision, purpose, and a touch of sophistication."'
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="text-sm mb-8 text-gray-500 italic"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <MagnetLines
            rows={4}
            columns={9}
            containerSize="60vmin"
            lineColor="#003459"
            lineWidth="0.8vmin"
            lineHeight="5vmin"
            baseAngle={0}
          />
          <MagnetLines
            rows={4}
            columns={9}
            containerSize="60vmin"
            lineColor="#003459"
            lineWidth="0.8vmin"
            lineHeight="5vmin"
            baseAngle={0}
          />
          <MagnetLines
            rows={4}
            columns={9}
            containerSize="60vmin"
            lineColor="#003459"
            lineWidth="0.8vmin"
            lineHeight="5vmin"
            baseAngle={0}
          />
        </div>

        {/* project section */}
        <div className="container mx-auto py-20">
          <div className="mb-16 text-center">
            <SplitText
              text="My Projects"
              className="text-4xl font-bold text-[#adebff] section-title"
              delay={150}
              animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
              animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              threshold={0.2}
              rootMargin="-50px"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {Project.map((project, index) => (
              <SpotlightCard
                key={project.title}
                className="custom-spotlight-card w-full p-4 transform hover:scale-105 transition-all duration-300"
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

                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-[#adebff] project-title">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs rounded-full bg-[#003459] text-[#adebff]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex justify-end gap-3">
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
                </div>
              </SpotlightCard>
            ))}
          </div>
          
          <div className="flex justify-center mt-10">
            <Link
              href="/projects"
              className="group flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#003459] hover:bg-[#003459] transition-all duration-300"
            >
              <GradientText
                colors={["#40ffaa", "#4079ff"]}
                animationSpeed={3}
                showBorder={false}
                className="text-2xl font-bold gradient-text"
              >
                View All Projects
              </GradientText>
              <ChevronDown
                size={24}
                className="text-[#adebff] group-hover:scale-110 transition-all duration-300 rotate-[-90deg]"
              />
            </Link>
          </div>
        </div>

        <div className="py-20">
          <ScrollVelocity
            texts={['Ahmad hasan']}
            velocity={100}
            className="text-[adebff]"
          />
        </div>

        {/* gallery section */}
        <div>
          <div className="mb-16 text-center">
            <SplitText
              text="My Gallery"
              className="text-4xl font-bold text-[#adebff] section-title"
              delay={150}
              animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
              animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              threshold={0.2}
              rootMargin="-50px"
            />
          </div>
          <div className="flex justify-center mb-8">
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", " #40ffaa"]}
              animationSpeed={3}
              showBorder={false}
              className="text-2xl font-bold gradient-text"
            >
              A collection of my favorite images
            </GradientText>
          </div>
          <div style={{ height: '500px', position: 'relative', overflow: 'hidden' }}>
            <div className="absolute top-0 left-0 w-full h-full">
              <Particles
                particleColors={['#ffffff', '#ffffff']}
                particleCount={200}
                particleSpread={10}
                speed={0.1}
                particleBaseSize={100}
                moveParticlesOnHover={true}
                alphaParticles={false}
                disableRotation={false}
              />
            </div>

            <ImageTrail
              items={[
                '/image/gallery/gallery-1.jpg',
                '/image/gallery/gallery-2.jpg',
                '/image/gallery/gallery-3.jpg',
                '/image/gallery/gallery-4.jpg',
                '/image/gallery/gallery-5.jpg',
                '/image/gallery/gallery-6.jpg',
                '/image/gallery/gallery-7.jpg',
                '/image/gallery/gallery-8.jpg',
                '/image/gallery/gallery-9.jpg',
                '/image/gallery/gallery-10.jpg',              // ...
              ]}
              variant={6}
            />
          </div>
        </div>

        {/* what i do */}
        <div className="container mx-auto py-20">
          <div className="mb-16 text-center">
            <SplitText
              text="What I Do"
              className="text-4xl font-bold text-[#adebff] section-title"
              delay={150}
              animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
              animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              threshold={0.2}
              rootMargin="-50px"
            />
          </div>

          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-6">
              <div className="z-10 h-full flex justify-center items-center">

                <MetaBalls
                  color="#adebff"
                  cursorBallColor="#adebff"
                  cursorBallSize={2}
                  ballCount={15}
                  animationSize={15}
                  enableMouseInteraction={true}
                  enableTransparency={true}
                  hoverSmoothness={0.05}
                  clumpFactor={1}
                  speed={0.3}
                />
              </div>
            </div>

            <div className="col-span-6">
              <div className="space-y-4">
                {/* Frontend Development */}
                <div className="border border-[#003459] rounded-lg overflow-hidden">
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === 0 ? null : 0)}
                    className="w-full px-6 py-4 flex justify-between items-center text-[#adebff]"
                  >
                    <h3 className="text-xl font-semibold">Frontend Development</h3>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${activeAccordion === 0 ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {activeAccordion === 0 && (
                    <div className="px-6 py-4 body-text text-gray-400">
                      <p>Building responsive and interactive user interfaces using modern frameworks like React and Next.js.
                        Implementing pixel-perfect designs with Tailwind CSS and creating smooth animations.</p>
                    </div>
                  )}
                </div>

                {/* Backend Development */}
                <div className="border border-[#003459] rounded-lg overflow-hidden">
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === 1 ? null : 1)}
                    className="w-full px-6 py-4 flex justify-between items-center text-[#adebff]"
                  >
                    <h3 className="text-xl font-semibold">Backend Development</h3>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${activeAccordion === 1 ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {activeAccordion === 1 && (
                    <div className="px-6 py-4 body-text text-gray-400">
                      <p>Developing robust server-side applications using Node.js and Express.
                        Creating RESTful APIs and handling database operations with MongoDB.</p>
                    </div>
                  )}
                </div>

                {/* AI interactiom */}
                <div className="border border-[#003459] rounded-lg overflow-hidden">
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === 2 ? null : 2)}
                    className="w-full px-6 py-4 flex justify-between items-center text-[#adebff]"
                  >
                    <h3 className="text-xl font-semibold">Database Design</h3>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${activeAccordion === 2 ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {activeAccordion === 2 && (
                    <div className="px-6 py-4 body-text text-gray-400">
                      <p>Designing and implementing efficient database schemas.
                        Working with both SQL and NoSQL databases to ensure optimal data storage and retrieval.</p>
                    </div>
                  )}
                </div>

                {/* API Integration */}
                <div className="border border-[#003459] rounded-lg overflow-hidden">
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === 3 ? null : 3)}
                    className="w-full px-6 py-4 flex justify-between items-center text-[#adebff]"
                  >
                    <h3 className="text-xl font-semibold">Interaction with AI</h3>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${activeAccordion === 3 ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {activeAccordion === 3 && (
                    <div className="px-6 py-4 body-text text-gray-400">
                      <p>Integrating third-party APIs and services.
                        Building secure and efficient API endpoints for seamless data exchange.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Me Section */}
        <div className="container mx-auto py-20">
          <div className="mb-16 text-center">
            <SplitText
              text="Contact Me"
              className="text-4xl font-bold text-[#adebff] section-title"
              delay={150}
              animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
              animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              threshold={0.2}
              rootMargin="-50px"
            />
          </div>

          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-[#001824]/50 backdrop-blur-lg rounded-2xl p-8 border border-[#003459]">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const message = `*New Contact Form Submission*\n\nName: ${formData.get('name')}\nWhatsApp: ${formData.get('whatsapp')}\n\nMessage: ${formData.get('message')}`;
                  window.open(`https://wa.me/+6285640054840?text=${encodeURIComponent(message)}`, '_blank');
                }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-[#adebff] text-sm font-medium">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full bg-[#002436] border border-[#003459] rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#549fd4] transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="whatsapp" className="text-[#adebff] text-sm font-medium">
                      Your WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      id="whatsapp"
                      name="whatsapp"
                      required
                      pattern="[0-9]+"
                      className="w-full bg-[#002436] border border-[#003459] rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#549fd4] transition-all duration-300"
                      placeholder="628xxxxxxxxxx"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-[#adebff] text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full bg-[#002436] border border-[#003459] rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#549fd4] transition-all duration-300 resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="group relative px-8 py-4 bg-gradient-to-r from-[#003459] to-[#549fd4] rounded-full overflow-hidden transition-all duration-300 hover:scale-105"
                  >
                    <div className="absolute inset-0 bg-[#adebff] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    <span className="relative flex items-center gap-2 text-[#adebff] font-semibold">
                      Send via WhatsApp
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="group-hover:translate-x-1 transition-transform duration-300"
                      >
                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"/>
                      </svg>
                    </span>
                  </button>
                </div>
              </form>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-400">
                Or reach me directly via WhatsApp at{' '}
                <a
                  href="https://wa.me/085640054840"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#549fd4] hover:text-[#adebff] transition-colors"
                >
                  +62 856-4005-4840
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Footer section */}
        <Footer />
      </div>
    </body>
  );
}
