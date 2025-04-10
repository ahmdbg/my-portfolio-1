'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '../components/Navbar/Navbar';
import Aurora from '../components/Aurora/Aurora';
import SplitText from '../components/SplitText/SplitText';
import GradientText from '../components/GradientText/GradientText';
import BlurText from '../components/BlurText/BlurText';
import ScrollVelocity from '../components/ScrollVelocity/ScrollVelocity';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import Footer from '../components/Footer/Footer';
import SplashCursor from '../components/SplashCursor/SplashCursor';

const skills = [
    { name: 'Frontend Development', level: 90 },
    { name: 'Backend Development', level: 65 },
    { name: 'Chat GPT prompt eng', level: 98 },
    { name: 'UI/UX Design', level: 80 },
    { name: 'Database Management', level: 70 },
    { name: 'Deepseek R1 prompt eng', level: 90 },
];

const experiences = [
    {
        year: '2022 - Present',
        title: 'Senior Web Developer',
        company: 'Tech Company',
        description: 'Leading development of enterprise web applications using modern technologies.',
    },
    {
        year: '2020 - 2022',
        title: 'Full Stack Developer',
        company: 'Digital Agency',
        description: 'Developed and maintained multiple client projects using React and Node.js.',
    },
    {
        year: '2018 - 2020',
        title: 'Frontend Developer',
        company: 'Startup',
        description: 'Built responsive and interactive web interfaces using modern JavaScript frameworks.',
    },
];

export default function About() {
    return (
        <body className="bg-[#000202]">
            <Navbar />
            <div className="min-h-screen overflow-x-hidden position-relative">
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

                {/* Main Content Container */}
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
                    {/* Header Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-20 mt-24"
                    >
                        <SplitText
                            text="About Me"
                            className="text-5xl font-bold text-[#adebff] section-title"
                            delay={150}
                            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                        />
                        <GradientText
                            colors={["#40ffaa", "#4079ff"]}
                            animationSpeed={3}
                            className="text-xl mt-4"
                        >
                            Crafting digital experiences with passion
                        </GradientText>
                    </motion.div>

                    {/* Profile Section with adjusted spacing */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="aspect-square relative rounded-2xl overflow-hidden">
                                <Image
                                    src="/image/profile.jpg"
                                    alt="Profile"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#000202]/80 to-transparent" />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex flex-col justify-center"
                        >
                            <BlurText
                                text="Hi, I'm Ahmad"
                                className="text-3xl font-bold text-[#adebff] mb-4"
                                delay={150}
                            />
                            <div className="prose prose-invert">
                                <BlurText
                                    text="A passionate web developer with a knack for creating stunning and functional websites.I specialize in building responsive and user-friendly websites using the latest technologies."
                                    className="text-lg text-gray-300 leading-relaxed mb-6"
                                    delay={150}
                                />
                            </div>

                            <div className="flex gap-4 mt-6">
                                <a
                                    href="/resume.pdf"
                                    className="flex items-center gap-2 px-6 py-3 bg-[#003459] text-[#adebff] rounded-full hover:bg-[#004879] transition-all duration-300"
                                >
                                    <Download size={20} />
                                    Download CV
                                </a>
                                <div className="flex gap-4">
                                    <a href="https://github.com/yourusername" className="p-3 bg-[#003459] rounded-full hover:bg-[#004879] transition-colors">
                                        <Github size={20} className="text-[#adebff]" />
                                    </a>
                                    <a href="https://linkedin.com/in/yourusername" className="p-3 bg-[#003459] rounded-full hover:bg-[#004879] transition-colors">
                                        <Linkedin size={20} className="text-[#adebff]" />
                                    </a>
                                    <a href="mailto:your.email@example.com" className="p-3 bg-[#003459] rounded-full hover:bg-[#004879] transition-colors">
                                        <Mail size={20} className="text-[#adebff]" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Skills Section with better spacing */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="mb-20 max-w-5xl mx-auto"
                    >
                        <h2 className="text-3xl font-bold text-[#adebff] mb-8">Skills</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {skills.map((skill, index) => (
                                <div key={skill.name} className="bg-[#001824]/50 p-6 rounded-xl backdrop-blur-sm">
                                    <div className="flex justify-between mb-2">
                                        <span className="text-[#adebff]">{skill.name}</span>
                                        <span className="text-[#549fd4]">{skill.level}%</span>
                                    </div>
                                    <div className="h-2 bg-[#003459]/30 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                                            className="h-full bg-gradient-to-r from-[#003459] to-[#549fd4]"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Experience Section with consistent spacing */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="max-w-5xl mx-auto"
                    >
                        <h2 className="text-3xl font-bold text-[#adebff] mb-8">Experience</h2>
                        <div className="space-y-8">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                                    className="bg-[#001824]/50 p-6 rounded-xl backdrop-blur-sm"
                                >
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                        <h3 className="text-xl font-semibold text-[#adebff]">{exp.title}</h3>
                                        <span className="text-[#549fd4]">{exp.year}</span>
                                    </div>
                                    <p className="text-gray-400 mb-2">{exp.company}</p>
                                    <p className="text-gray-300">{exp.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* ScrollVelocity outside the main container for full width */}
            <div className="w-full">
                <ScrollVelocity
                    texts={['Ahmad hasan']}
                    velocity={100}
                    className="custom-scroll-text"
                />
            </div>
            <Footer />
        </body>
    );
}