import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Users, RefreshCw } from 'lucide-react';
import SectionWrapper from './ui/SectionWrapper';

const values = [
    {
        icon: <RefreshCw size={48} />,
        title: "Transformação",
        description: "Transformamos negócios resolvendo problemas reais, com foco direto no resultado. Atuamos na prática: mapeamos dores, priorizamos iniciativas críticas e conduzimos frentes de trabalho que melhoram eficiência operacional, experiência do cliente e desempenho das áreas. Cada transformação é feita junto com o cliente, conectando tecnologia, processos e pessoas para gerar evolução contínua e mensurável.",
        color: "from-blue-600 to-cyan-500",
        features: ["Otimização de processos críticos", "Estruturação e execução de jornadas digitais", "Redução de custos e aceleração de entregas"]
    },
    {
        icon: <Zap size={48} />,
        title: "Agilidade",
        description: "Entregamos valor rápido, com clareza e disciplina. Usamos métodos ágeis com propósito: reduzir incertezas, dar visibilidade e manter todos alinhados ao que realmente importa. Nossas squads e frentes de projeto trabalham com rituais objetivos, prazos reais e foco total no que move o ponteiro do negócio — sempre priorizando entregas incrementais e consistentes.",
        color: "from-purple-600 to-pink-500",
        features: ["Ciclos curtos com entregas contínuas", "Ritos simples, eficientes e sem burocracia", "Adaptação rápida sem perder o rumo estratégico"]
    },
    {
        icon: <Users size={48} />,
        title: "Parceria",
        description: "Trabalhamos lado a lado com o cliente — não como fornecedores, mas como um time único. Participamos das decisões, compartilhamos responsabilidades e assumimos a execução junto com as equipes internas. Mantemos acompanhamento próximo, comunicação diária e alinhamento total com metas de negócio. Quando o desafio é grande, estamos presentes; quando o contexto muda, movemos juntos.",
        color: "from-orange-600 to-red-500",
        features: ["Co-criação e execução conjunta", "Corresponsabilidade pelos resultados", "Presença ativa no dia a dia e nos fóruns"]
    }
];

const Values = () => {
    return (
        <SectionWrapper id="valores" className="py-20 md:py-32 bg-davos-black relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-20 right-20 w-72 h-72 bg-davos-blue rounded-full blur-[120px]" />
                <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-600 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                            Nossos <span className="text-gradient bg-gradient-to-r from-davos-blue to-purple-500 bg-clip-text text-transparent">Valores</span>
                        </h2>
                        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
                            Transformação, Agilidade e Parceria — os pilares que guiam cada decisão e ação da DAVOS
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="group relative"
                        >
                            {/* Card */}
                            <div className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-500 overflow-hidden">

                                {/* Gradient overlay on hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                                {/* Icon with gradient background */}
                                <div className="relative mb-6">
                                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${value.color} p-[2px] group-hover:scale-110 transition-transform duration-500`}>
                                        <div className="w-full h-full rounded-2xl bg-davos-black flex items-center justify-center text-white">
                                            {value.icon}
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                                    {value.title}
                                </h3>

                                <p className="text-gray-400 leading-relaxed mb-6">
                                    {value.description}
                                </p>

                                {/* Features list */}
                                <div className="space-y-3">
                                    {value.features.map((feature, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.2 + i * 0.1 }}
                                            className="flex items-center gap-2"
                                        >
                                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${value.color}`} />
                                            <span className="text-sm text-gray-500">{feature}</span>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Decorative corner */}
                                <div className="absolute top-0 right-0 w-32 h-32 opacity-20">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${value.color} blur-2xl`} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom tagline */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="text-center mt-20"
                >
                    <p className="text-gray-600 text-sm uppercase tracking-[0.3em]">
                        Valores que transformam visão em realidade
                    </p>
                </motion.div>
            </div>
        </SectionWrapper>
    );
};

export default Values;
