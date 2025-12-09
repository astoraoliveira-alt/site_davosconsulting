import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './ui/SectionWrapper';
import CountUp from './ui/CountUp';

const stats = [
    { number: 15, suffix: "+", label: "Anos de Experiência Média" },
    { number: 50, suffix: "+", label: "Projetos Entregues" },
    { number: 98, suffix: "%", label: "Taxa de Satisfação" },
    { number: 30, suffix: "+", label: "Parceiros Estratégicos" },
];

const Stats = () => {
    return (
        <SectionWrapper className="py-24 bg-davos-black border-y border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="text-center"
                        >
                            <div className="text-4xl md:text-5xl font-bold text-davos-blue mb-2">
                                <CountUp end={stat.number} suffix={stat.suffix} />
                            </div>
                            <p className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Stats;
