import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 800) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-[60] w-12 h-12 rounded-full bg-davos-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-davos-orange hover:border-davos-orange hover:text-white transition-all shadow-xl group"
                    title="Voltar ao Topo"
                >
                    <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />

                    {/* Ring animation */}
                    <div className="absolute inset-0 rounded-full border border-davos-orange opacity-0 group-hover:animate-ping" />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default BackToTop;
