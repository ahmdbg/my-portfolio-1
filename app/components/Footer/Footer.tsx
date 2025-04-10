'use client'

import { Github, Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-[#001824] mt-20">
            <div className="container mx-auto py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-[#adebff] mb-6 nav-text">Contact Info</h3>
                        <div className="flex items-center gap-3 text-gray-400">
                            <Mail size={20} className="text-[#549fd4]" />
                            <a href="mailto:your.email@example.com" className="hover:text-[#adebff] transition-colors">
                                aaahmaaad.hsn@gmail.com
                            </a>
                        </div>
                        <div className="flex items-center gap-3 text-gray-400">
                            <Phone size={20} className="text-[#549fd4]" />
                            <a href="tel:+1234567890" className="hover:text-[#adebff] transition-colors">
                                +0856 4005 4840
                            </a>
                        </div>
                        <div className="flex items-center gap-3 text-gray-400">
                            <MapPin size={20} className="text-[#549fd4]" />
                            <span>Your Location, City, Country</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-[#adebff] mb-6">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#about" className="text-gray-400 hover:text-[#adebff] transition-colors">
                                    About Me
                                </Link>
                            </li>
                            <li>
                                <Link href="#projects" className="text-gray-400 hover:text-[#adebff] transition-colors">
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link href="#skills" className="text-gray-400 hover:text-[#adebff] transition-colors">
                                    Skills
                                </Link>
                            </li>
                            <li>
                                <Link href="#contact" className="text-gray-400 hover:text-[#adebff] transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-[#adebff] mb-6">Follow Me</h3>
                        <div className="flex gap-4">
                            <a
                                href="https://github.com/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-[#003459] rounded-full hover:bg-[#004879] transition-colors"
                            >
                                <Github size={20} className="text-[#adebff]" />
                            </a>
                            <a
                                href="https://linkedin.com/in/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-[#003459] rounded-full hover:bg-[#004879] transition-colors"
                            >
                                <Linkedin size={20} className="text-[#adebff]" />
                            </a>
                            <a
                                href="https://instagram.com/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-[#003459] rounded-full hover:bg-[#004879] transition-colors"
                            >
                                <Instagram size={20} className="text-[#adebff]" />
                            </a>
                        </div>
                    </div>

                    {/* Logo */}
                    <div className="space-y-4">
                        <div className="flex flex-col items-start">
                            <Image 
                                src="/image/logo/logo-search-grid-2x.png" // Adjust the path based on your logo file name
                                alt="Ahmad Logo"
                                width={300}
                                height={120}
                                className="object-contain"
                            />
                       </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-[#003459] mt-12 pt-8 text-center">
                    <p className="text-gray-400">
                        © {new Date().getFullYear()} Ahmad Hasan. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>

    )
}

export default Footer;
