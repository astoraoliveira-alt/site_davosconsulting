import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import TypewriterEffect from './ui/TypewriterEffect';
import ParticlesBackground from './ui/ParticlesBackground';

const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);

    return (
        <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden bg-davos-black">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <ParticlesBackground />
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-davos-blue/20 rounded-full blur-[128px]" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-davos-accent/10 rounded-full blur-[128px]" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
            </div>

            <motion.div
                style={{ y, opacity }}
                className="container mx-auto px-6 relative z-10 text-center"
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-sm md:text-base font-medium tracking-[0.2em] text-davos-blue uppercase mb-6">
                        Consultoria em Gestão & Tecnologia
                    </h2>
                    <div className="flex justify-center mb-8">
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-[0.3em] text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.5)]">
                            DAVOS
                        </h1>
                    </div>
                    <div className="text-xl md:text-3xl font-light text-transparent bg-gradient-to-r from-davos-accent via-blue-400 to-davos-blue bg-clip-text tracking-wide mb-8 h-12">
                        <TypewriterEffect words={["Driving. Agility. Partnership.", "Innovation. Execution. Impact.", "Strategy. Technology. Future."]} />
                    </div>

                    <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-12 leading-relaxed">
                        Transformando desafios complexos em resultados operacionais através de inovação,
                        tecnologia e uma parceria verdadeira.
                    </p>

                    <motion.a
                        href="#quem-somos"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-davos-blue text-white rounded-full font-medium transition-all hover:bg-davos-accent hover:shadow-[0_0_30px_rgba(0,102,255,0.5)]"
                    >
                        Saiba Mais
                        <ArrowRight size={18} />
                    </motion.a>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-gray-500 to-transparent" />
            </motion.div>
        </section>
    );
};

export default Hero;
