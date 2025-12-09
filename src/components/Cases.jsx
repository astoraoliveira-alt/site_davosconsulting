import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight, TrendingUp, CheckCircle2 } from 'lucide-react';
import SectionWrapper from './ui/SectionWrapper';

const cases = [
    {
        id: 1,
        client: "Grande Varejista Nacional",
        industry: "Varejo & E-commerce",
        title: "Logística Inteligente",
        description: "Plataforma de otimização logística que integrou toda a cadeia de suprimentos, reduzindo custos operacionais e tempo de entrega.",
        image: "/images/case_retail.png",
        tags: ["Logística 4.0", "Supply Chain", "Dashboard"],
        stats: { label: "Economia Anual", value: "R$ 12M" },
        color: "from-blue-600 to-cyan-500",
        bg: "bg-blue-500/10"
    },
    {
        id: 2,
        client: "Fintech de Pagamentos",
        industry: "Tecnologia Financeira",
        title: "Governança Ágil",
        description: "Reestruturação completa dos processos de desenvolvimento, acelerando o time-to-market de novos produtos financeiros.",
        image: "/images/case_fintech.png",
        tags: ["Agile", "Fintech", "Transformação Digital"],
        stats: { label: "Time-to-market", value: "-40%" },
        color: "from-purple-600 to-pink-500",
        bg: "bg-purple-500/10"
    },
    {
        id: 3,
        client: "Indústria Farmacêutica",
        industry: "Saúde & Farmacêutica",
        title: "Qualidade 4.0",
        description: "Sistema de gestão de qualidade digital com rastreabilidade total, garantindo compliance regulatório e eficiência.",
        image: "/images/case_pharma.png",
        tags: ["Compliance", "Pharma", "Automação"],
        stats: { label: "Compliance", value: "100%" },
        color: "from-orange-600 to-red-500",
        bg: "bg-orange-500/10"
    }
];

const Cases = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.8
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.8
        })
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset, velocity) => {
        return Math.abs(offset) * velocity;
    };

    const paginate = (newDirection) => {
        setDirection(newDirection);
        setCurrentIndex((prevIndex) => (prevIndex + newDirection + cases.length) % cases.length);
    };

    const currentCase = cases[currentIndex];

    return (
        <SectionWrapper id="cases" className="py-32 bg-davos-black relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br ${currentCase.color} rounded-full blur-[150px] transition-colors duration-700`} />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between mb-12 gap-8">
                    <div>
                        <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
                            Cases de <span className="text-transparent bg-clip-text bg-gradient-to-r from-davos-blue to-purple-500">Sucesso</span>
                        </h2>
                        <p className="text-xl text-gray-400">Projetos que transformam realidades</p>
                    </div>

                    {/* Navigation Controls */}
                    <div className="flex gap-4">
                        <button
                            onClick={() => paginate(-1)}
                            className="p-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-davos-blue/50 transition-all group"
                        >
                            <ArrowLeft className="text-white group-hover:text-davos-blue transition-colors" size={24} />
                        </button>
                        <button
                            onClick={() => paginate(1)}
                            className="p-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-davos-blue/50 transition-all group"
                        >
                            <ArrowRight className="text-white group-hover:text-davos-blue transition-colors" size={24} />
                        </button>
                    </div>
                </div>

                {/* Carousel Content */}
                <div className="relative h-[600px] lg:h-[500px]">
                    <AnimatePresence initial={false} custom={direction} mode="wait">
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={1}
                            onDragEnd={(e, { offset, velocity }) => {
                                const swipe = swipePower(offset.x, velocity.x);
                                if (swipe < -swipeConfidenceThreshold) {
                                    paginate(1);
                                } else if (swipe > swipeConfidenceThreshold) {
                                    paginate(-1);
                                }
                            }}
                            className="absolute w-full h-full"
                        >
                            <div className="grid lg:grid-cols-2 gap-12 h-full items-center">

                                {/* Left Side: Image/Mockup */}
                                <div className="relative h-full w-full flex items-center justify-center group">
                                    {/* Laptop/Screen Frame Mockup */}
                                    <div className="relative w-full max-w-2xl aspect-video bg-gray-900 rounded-xl border border-gray-700 shadow-2xl overflow-hidden transform transition-transform duration-500 group-hover:scale-[1.02]">
                                        {/* Screen Content */}
                                        <div className="absolute inset-0 bg-gray-800">
                                            <img
                                                src={currentCase.image}
                                                alt={currentCase.title}
                                                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                                            />
                                            {/* Overlay Gradient */}
                                            <div className={`absolute inset-0 bg-gradient-to-br ${currentCase.color} opacity-10 mix-blend-overlay`} />
                                        </div>

                                        {/* Reflection/Gloss */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
                                    </div>

                                    {/* Floating Mobile Mockup (Decorative) */}
                                    <div className="absolute -bottom-6 -right-6 w-1/4 aspect-[9/19] bg-gray-900 rounded-3xl border-4 border-gray-800 shadow-2xl overflow-hidden hidden md:block transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <img
                                            src={currentCase.image}
                                            alt="Mobile view"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Right Side: Content */}
                                <div className="flex flex-col justify-center space-y-8">
                                    <div>
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${currentCase.bg} text-white border border-white/10`}>
                                                {currentCase.industry}
                                            </span>
                                            <span className="text-gray-500 text-sm flex items-center gap-1">
                                                <CheckCircle2 size={14} /> Projeto Concluído
                                            </span>
                                        </div>

                                        <h3 className="text-4xl font-bold text-white mb-2">{currentCase.client}</h3>
                                        <h4 className={`text-2xl font-medium bg-gradient-to-r ${currentCase.color} bg-clip-text text-transparent mb-6`}>
                                            {currentCase.title}
                                        </h4>

                                        <p className="text-xl text-gray-400 leading-relaxed max-w-lg">
                                            {currentCase.description}
                                        </p>
                                    </div>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {currentCase.tags.map((tag, idx) => (
                                            <span key={idx} className="px-4 py-2 rounded-lg bg-white/5 text-gray-300 text-sm border border-white/5">
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Stats & CTA */}
                                    <div className="flex items-center gap-8 pt-6 border-t border-white/10">
                                        <div>
                                            <p className="text-sm text-gray-500 mb-1">{currentCase.stats.label}</p>
                                            <p className="text-3xl font-bold text-white">{currentCase.stats.value}</p>
                                        </div>

                                        <div className="h-12 w-px bg-white/10" />

                                        <button className="flex items-center gap-2 text-davos-blue hover:text-white transition-colors group/btn">
                                            <span className="font-medium">Ver Case Completo</span>
                                            <ArrowUpRight className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" size={20} />
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Indicators */}
                <div className="flex justify-center gap-3 mt-12">
                    {cases.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => {
                                setDirection(idx > currentIndex ? 1 : -1);
                                setCurrentIndex(idx);
                            }}
                            className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-davos-blue' : 'w-2 bg-white/20 hover:bg-white/40'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Cases;
