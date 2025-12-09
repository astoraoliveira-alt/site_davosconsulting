import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Lightbulb, Target, Rocket, Award, TrendingUp } from 'lucide-react';
import SectionWrapper from './ui/SectionWrapper';

const qualities = [
    { icon: <Brain size={24} />, label: "Pensamento Estratégico" },
    { icon: <Lightbulb size={24} />, label: "Inovação Constante" },
    { icon: <Target size={24} />, label: "Foco em Resultados" },
    { icon: <Rocket size={24} />, label: "Execução Ágil" },
    { icon: <Award size={24} />, label: "Excelência Técnica" },
    { icon: <TrendingUp size={24} />, label: "Crescimento Contínuo" },
];

const Team = () => {
    return (
        <SectionWrapper id="equipe" className="py-32 bg-davos-dark relative overflow-hidden">
            {/* Animated background grid */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(rgba(0, 102, 255, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 102, 255, 0.5) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }} />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left side - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white leading-tight">
                            Nossa <span className="text-davos-blue">Equipe</span>
                        </h2>

                        <div className="space-y-6 mb-10">
                            <p className="text-xl text-gray-300 leading-relaxed">
                                Acreditamos que a verdadeira <span className="text-white font-semibold">inovação</span> nasce da diversidade de pensamentos.
                            </p>

                            <p className="text-lg text-gray-400 leading-relaxed">
                                Nossa equipe é formada por <span className="text-davos-blue font-medium">mentes criativas</span>, estrategistas experientes e especialistas em tecnologia, unidos pelo propósito de gerar impacto positivo e duradouro.
                            </p>

                            <p className="text-lg text-gray-400 leading-relaxed">
                                Valorizamos a <span className="text-white font-medium">multidisciplinaridade</span> e a capacidade de adaptação para enfrentar os desafios mais complexos do mercado.
                            </p>
                        </div>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="inline-block"
                        >
                            <div className="px-6 py-3 rounded-full bg-davos-blue/10 border border-davos-blue/30 backdrop-blur-sm">
                                <p className="text-davos-blue font-medium">
                                    💡 Experiência média de <span className="text-white font-bold">15+ anos</span> por profissional
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right side - Visual representation */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            {/* Main card */}
                            <div className="relative rounded-3xl bg-gradient-to-br from-davos-blue/20 via-purple-600/10 to-transparent border border-white/10 p-8 backdrop-blur-sm">

                                {/* Qualities grid */}
                                <div className="grid grid-cols-2 gap-4">
                                    {qualities.map((quality, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1, duration: 0.5 }}
                                            whileHover={{ scale: 1.05, y: -5 }}
                                            className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-davos-blue/50 hover:bg-white/10 transition-all duration-300 group cursor-pointer"
                                        >
                                            <div className="flex flex-col items-center text-center gap-3">
                                                <div className="w-12 h-12 rounded-xl bg-davos-blue/20 flex items-center justify-center text-davos-blue group-hover:bg-davos-blue group-hover:text-white transition-all duration-300">
                                                    {quality.icon}
                                                </div>
                                                <p className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                                                    {quality.label}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Floating badge */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.6 }}
                                    className="absolute -top-4 -right-4 px-6 py-3 rounded-full bg-gradient-to-r from-davos-blue to-purple-600 shadow-lg shadow-davos-blue/50"
                                >
                                    <p className="text-white font-bold text-sm">Time Multidisciplinar</p>
                                </motion.div>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -z-10 top-10 -right-10 w-64 h-64 bg-davos-blue/20 rounded-full blur-[100px]" />
                            <div className="absolute -z-10 -bottom-10 -left-10 w-64 h-64 bg-purple-600/20 rounded-full blur-[100px]" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Team;
