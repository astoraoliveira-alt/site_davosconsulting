import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

const IMAGES = [
    { src: '/1.png', transition: { initial: { opacity: 0, scale: 1.1 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.95 } } },
    { src: '/2.png', transition: { initial: { opacity: 0, x: 100 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: -50 } } },
    { src: '/3.png', transition: { initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -20 } } },
    { src: '/4.png', transition: { initial: { opacity: 0, filter: 'blur(20px)' }, animate: { opacity: 1, filter: 'blur(0px)' }, exit: { opacity: 0, filter: 'blur(10px)' } } },
    { src: '/5.png', transition: { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 1.05 } } },
    { src: '/6.png', transition: { initial: { opacity: 0, x: -100 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: 50 } } },
];

const TECH_PILLARS = [
    {
        title: "Agentes de IA",
        desc: "Automação inteligente e agentes autônomos aplicados a processos complexos.",
        image: "/images/tech_ai_agents.png",
        stat: "24/7",
        statLabel: "Operação"
    },
    {
        title: "Eficiência",
        desc: "Ecossistema proprietário de produtos focados no aumento real de produtividade.",
        image: "/images/tech_efficiency.png",
        stat: "+100%",
        statLabel: "Performance"
    },
    {
        title: "QA & Testes",
        desc: "Garantia de qualidade e confiabilidade sistêmica com testes avançados.",
        image: "/images/tech_software_testing.png",
        stat: "Zero",
        statLabel: "Friction"
    }
];

const Hero = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % IMAGES.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    // Scene ranges:
    // S1 Hero: 0 - 0.12
    // S2 Pragmatismo Focal: 0.15 - 0.32
    // S3 Reassembly (Blue): 0.35 - 0.48
    // S4 Eficiência Focal: 0.50 - 0.68
    // S5 Reassembly (Black): 0.70 - 0.80
    // S6 Tecnologia Focal: 0.82 - 0.92
    // S7 Final: 0.95 - 1.0

    // Backgrounds
    const heroBgOpacity = useTransform(scrollYProgress, [0.08, 0.15], [1, 0]);
    const lightBgOpacity = useTransform(scrollYProgress, [0.12, 0.18, 0.32, 0.38], [0, 1, 1, 0]);
    const darkBlueBgOpacity = useTransform(scrollYProgress, [0.38, 0.45, 0.68, 0.75], [0, 1, 1, 0]);

    // Indicators (Bottom bars)
    const indicatorsOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);

    // ALL common text elements (static parts and non-focal words) should use a strict binary visibility.

    // --- STATIC PARTS ("Transformação com", ",", "e") ---
    const staticPartsOpacity = useTransform(
        scrollYProgress,
        [0.10, 0.15, 0.32, 0.35, 0.48, 0.50, 0.68, 0.70, 0.80, 0.82],
        [1, 0, 0, 1, 1, 0, 0, 1, 1, 0]
    );

    // --- PRAGMATISMO ---
    const pragmatismoPosX = useTransform(scrollYProgress, [0.15, 0.22, 0.28, 0.35], ["0vw", "-36vw", "-36vw", "0vw"]);
    const pragmatismoPosY = useTransform(scrollYProgress, [0.15, 0.22, 0.28, 0.35], ["0vh", "-32vh", "-32vh", "0vh"]);
    const pragmatismoScale = useTransform(scrollYProgress, [0.15, 0.22, 0.28, 0.35], [1, 1.2, 1.2, 1]);
    const pragmatismoColor = useTransform(scrollYProgress, [0.15, 0.22, 0.32, 0.38], ["#ffffff", "#FF4D00", "#FF4D00", "#ffffff"]);

    const pragmatismoVisibility = useTransform(
        scrollYProgress,
        [0.10, 0.15, 0.35, 0.48, 0.50, 0.68, 0.70, 0.80, 0.82],
        [1, 1, 1, 1, 0, 0, 1, 1, 0]
    );

    // --- EFICIÊNCIA ---
    const eficienciaPosX = useTransform(scrollYProgress, [0.50, 0.58, 0.62, 0.70], ["0vw", "-25vw", "-25vw", "0vw"]);
    const eficienciaPosY = useTransform(scrollYProgress, [0.50, 0.58, 0.62, 0.70], ["0vh", "-32vh", "-32vh", "0vh"]);
    const eficienciaScale = useTransform(scrollYProgress, [0.50, 0.58, 0.62, 0.70], [1, 1.2, 1.2, 1]);
    const eficienciaColor = useTransform(scrollYProgress, [0.50, 0.58, 0.68, 0.75], ["#ffffff", "#FF4D00", "#FF4D00", "#ffffff"]);

    const eficienciaVisibility = useTransform(
        scrollYProgress,
        [0.10, 0.15, 0.32, 0.35, 0.48, 0.50, 0.70, 0.80, 0.82],
        [1, 0, 0, 1, 1, 1, 1, 1, 0]
    );

    // --- TECNOLOGIA ---
    const tecnologiaPosX = useTransform(scrollYProgress, [0.82, 0.90], ["0vw", "-32vw"]);
    const tecnologiaPosY = useTransform(scrollYProgress, [0.82, 0.90], ["0vh", "-32vh"]);
    const tecnologiaScale = useTransform(scrollYProgress, [0.82, 0.90], [1, 1.2]);
    const tecnologiaColor = useTransform(scrollYProgress, [0.82, 0.88, 0.95], ["#ffffff", "#FF4D00", "#FF4D00"]);

    const tecnologiaVisibility = useTransform(
        scrollYProgress,
        [0.10, 0.15, 0.32, 0.35, 0.48, 0.50, 0.68, 0.70, 0.80, 0.82],
        [1, 0, 0, 1, 1, 0, 0, 1, 1, 1]
    );

    // New content reveal
    const techContentOpacity = useTransform(scrollYProgress, [0.88, 0.94], [0, 1]);
    const techContentY = useTransform(scrollYProgress, [0.88, 0.94], [50, 0]);

    return (
        <div ref={containerRef} className="relative h-[1300vh] bg-[#000000]">
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden font-sans">

                {/* Backgrounds */}
                <motion.div style={{ opacity: lightBgOpacity }} className="absolute inset-0 bg-[#f8f9fa] z-10" />
                <motion.div style={{ opacity: darkBlueBgOpacity }} className="absolute inset-0 bg-[#001533] z-20" />

                <motion.div style={{ opacity: heroBgOpacity }} className="absolute inset-0 z-0">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentImage}
                            initial={IMAGES[currentImage].transition.initial}
                            animate={IMAGES[currentImage].transition.animate}
                            exit={IMAGES[currentImage].transition.exit}
                            transition={{ duration: 2, ease: "easeInOut" }}
                            className="absolute inset-0"
                        >
                            <div className="w-full h-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${IMAGES[currentImage].src})` }} />
                            <div className="absolute inset-0 bg-black/85" />
                        </motion.div>
                    </AnimatePresence>
                </motion.div>

                {/* Main Phrase */}
                <div className="relative z-30 w-full px-6 max-w-7xl mx-auto text-center pointer-events-none">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white select-none leading-tight">
                        <motion.span style={{ opacity: staticPartsOpacity }}>Transformação com </motion.span>

                        <motion.span
                            style={{
                                color: pragmatismoColor,
                                scale: pragmatismoScale,
                                x: pragmatismoPosX,
                                y: pragmatismoPosY,
                                opacity: pragmatismoVisibility,
                                display: 'inline-block'
                            }}
                            className="font-semibold"
                        >
                            pragmatismo
                        </motion.span>

                        <motion.span style={{ opacity: staticPartsOpacity }}>,</motion.span>
                        <br className="hidden md:block" />

                        <motion.span
                            style={{
                                color: eficienciaColor,
                                scale: eficienciaScale,
                                x: eficienciaPosX,
                                y: eficienciaPosY,
                                opacity: eficienciaVisibility,
                                display: 'inline-block'
                            }}
                            className="font-semibold"
                        >
                            eficiência
                        </motion.span>

                        <motion.span style={{ opacity: staticPartsOpacity }}> e </motion.span>

                        <motion.span
                            style={{
                                color: tecnologiaColor,
                                scale: tecnologiaScale,
                                x: tecnologiaPosX,
                                y: tecnologiaPosY,
                                opacity: tecnologiaVisibility,
                                display: 'inline-block'
                            }}
                            className="font-semibold"
                        >
                            tecnologia
                        </motion.span>
                    </h1>
                </div>

                {/* Cards Grid */}
                <motion.div
                    style={{ opacity: techContentOpacity, y: techContentY }}
                    className="absolute inset-0 z-40 flex items-center justify-center pointer-events-none"
                >
                    <div className="max-w-7xl w-full px-6 grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
                        {TECH_PILLARS.map((pillar, idx) => (
                            <div key={idx} className="group relative bg-[#0a0a0a]/40 backdrop-blur-xl border border-white/5 p-8 rounded-2xl overflow-hidden pointer-events-auto">
                                <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700">
                                    <img src={pillar.image} alt="" className="w-full h-full object-cover grayscale brightness-50" />
                                </div>
                                <div className="relative z-10">
                                    <div className="mb-6">
                                        <span className="text-4xl lg:text-5xl font-bold text-davos-orange tracking-tighter">{pillar.stat}</span>
                                        <p className="text-[10px] uppercase tracking-widest text-davos-orange/60 font-semibold mt-1">{pillar.statLabel}</p>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-davos-orange transition-colors duration-300">{pillar.title}</h3>
                                    <p className="text-gray-400 font-light leading-relaxed text-sm md:text-base">{pillar.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Scroll Indicators */}
                <motion.div style={{ opacity: indicatorsOpacity }} className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-40">
                    {IMAGES.map((_, index) => (
                        <div key={index} className="relative h-[2px] w-12 bg-white/10 overflow-hidden">
                            {index === currentImage && (
                                <motion.div initial={{ x: '-100%' }} animate={{ x: '100%' }} transition={{ duration: 6, ease: "linear" }} className="absolute inset-0 bg-white" />
                            )}
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
