import React, { useState, useEffect } from 'react';
import { Menu, X, Search, Linkedin, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Quem Somos', href: '#quem-somos' },
        { name: 'Valores', href: '#valores' },
        { name: 'Equipe', href: '#equipe' },
        { name: 'Cases', href: '#cases' },
        { name: 'Parceiros', href: '#parceiros' },
    ];

    const socialLinks = [
        { name: 'Linkedin', icon: Linkedin, href: '#' },
        { name: 'Instagram', icon: Instagram, href: '#' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-davos-black/80 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#" className="text-2xl font-bold tracking-tighter text-white z-50">
                    DAVOS
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-gray-300 hover:text-white transition-colors tracking-wide"
                        >
                            {link.name}
                        </a>
                    ))}

                    <div className="flex items-center space-x-5 ml-4 border-l border-white/10 pl-8">
                        <button className="text-gray-400 hover:text-white transition-colors p-1">
                            <Search size={20} />
                        </button>
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                className="text-gray-400 hover:text-white transition-colors p-1"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <social.icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white z-50 p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="absolute top-0 left-0 w-full h-screen bg-davos-black flex flex-col items-center justify-center space-y-8 md:hidden"
                        >
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-2xl font-medium text-gray-300 hover:text-white"
                                >
                                    {link.name}
                                </a>
                            ))}

                            <div className="flex items-center space-x-10 mt-8 pt-8 border-t border-white/10 w-48 justify-center">
                                <button className="text-gray-400 hover:text-white transition-colors">
                                    <Search size={24} />
                                </button>
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        <social.icon size={24} />
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav >
    );
};

export default Navbar;
