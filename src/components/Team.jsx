import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Lightbulb, Target, Rocket, Award, TrendingUp, Mail, ArrowRight, Zap, Users2 } from 'lucide-react';
import SectionWrapper from './ui/SectionWrapper';

const qualities = [
    { icon: <Brain size={24} />, title: "Mentes Inquietas", label: "Pessoas que questionam o status quo e buscam soluções fora da caixa." },
    { icon: <Zap size={24} />, title: "Pragmatismo", label: "Foco no que gera resultado real e imediato para o cliente." },
    { icon: <Target size={24} />, title: "Autonomia", label: "Ambiente que valoriza a proatividade e a tomada de decisão." },
    { icon: <Rocket size={24} />, title: "Crescimento Ágil", label: "Evolução constante em um ambiente de alta performance." },
];

const Team = () => {
    return (
        <SectionWrapper id="trabalhe-conosco" className="pt-16 pb-32 bg-davos-dark relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-[0.02]">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(rgba(0, 102, 255, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 102, 255, 0.5) 1px, transparent 1px)`,
                    backgroundSize: '80px 80px'
                }} />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight">
                            Redefina o <span className="text-davos-blue italic">Futuro</span> conosco
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
                            Na Davos, não apenas implementamos tecnologia; nós desenhamos estratégias que mudam o patamar de grandes negócios. Buscamos profissionais de alto nível que queiram um ambiente de liberdade com responsabilidade.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {qualities.map((q, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-davos-blue/30 transition-all group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-davos-blue/20 flex items-center justify-center text-davos-blue mb-6 group-hover:scale-110 transition-transform">
                                {q.icon}
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">{q.title}</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">{q.label}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative p-8 md:p-10 rounded-3xl bg-davos-blue border border-davos-blue/50 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl shadow-davos-blue/20 max-w-5xl mx-auto"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent" />

                    <div className="relative z-10 max-w-md text-center md:text-left">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                            Pronto para o próximo desafio?
                        </h3>
                        <p className="text-white/80 text-base md:text-lg">
                            Envie seu currículo ou portfólio diretamente para nossa equipe de talentos.
                        </p>
                    </div>

                    <div className="relative z-10 flex-shrink-0">
                        <a
                            href="mailto:contato@davosbr.com"
                            className="group flex items-center gap-3 bg-white text-davos-blue px-8 py-4 rounded-xl font-bold text-base md:text-lg hover:bg-gray-100 transition-all shadow-xl hover:translate-y-[-2px]"
                        >
                            Enviar E-mail <Mail size={20} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </motion.div>

            </div>
        </SectionWrapper>
    );
};

export default Team;
