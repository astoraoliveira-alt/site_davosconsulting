import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Users, Award, Rocket, Target } from 'lucide-react';
import SectionWrapper from './ui/SectionWrapper';

const highlights = [
    {
        icon: <Users size={28} />,
        title: 'Consultoria “nova” com equipe experiente',
        description: "A DAVOS nasce moderna, ágil e sem burocracias — mas construída por profissionais que já lideraram projetos estratégicos em grandes empresas brasileiras. Nossa equipe combina visão atual de mercado com experiência prática para entrar rápido no contexto do cliente e gerar impacto desde o primeiro dia.",
        color: "from-blue-600 to-cyan-500",
        image: "/images/whoweare/new-consultancy.jpg"
    },
    {
        icon: <Target size={28} />,
        title: "Foco na execução e gestão de transformações",
        description: "Trabalhamos lado a lado com as equipes dos nossos clientes para tirar planos do papel, organizar a agenda de transformação e garantir avanço consistente. Entramos no detalhe do dia a dia, estruturamos governança, resolvemos impedimentos e ajudamos a manter ritmo, qualidade e previsibilidade nas entregas.",
        color: "from-purple-600 to-pink-500",
        image: "/images/whoweare/execution-management.jpg"
    },
    {
        icon: <Award size={28} />,
        title: "Ecossistema de parceiros",
        description: "Para ampliar capacidade e velocidade, operamos com um ecossistema selecionado de parceiros especializados. A DAVOS coordena tudo de ponta a ponta — da estratégia à entrega — assumindo corresponsabilidade pelos resultados e garantindo que cada parceiro esteja alinhado aos padrões de qualidade e ao que o cliente precisa.",
        color: "from-orange-600 to-red-500",
        image: "/images/whoweare/ecosystem-network.jpg"
    }
];

const WhoWeAre = () => {
    return (
        <SectionWrapper id="quem-somos" className="py-20 md:py-32 bg-black relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-20 w-96 h-96 bg-davos-blue rounded-full blur-[150px]" />
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600 rounded-full blur-[150px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-davos-blue/10 border border-davos-blue/20 mb-6">
                        <Rocket size={16} className="text-davos-blue" />
                        <span className="text-sm text-davos-blue font-medium">Nossa Essência</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                        Quem <span className="text-gradient bg-gradient-to-r from-davos-blue to-purple-500 bg-clip-text text-transparent">Somos</span>
                    </h2>
                    <p className="text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed">
                        Uma consultoria que combina <span className="text-white font-semibold">experiência sênior</span> com
                        <span className="text-davos-blue font-semibold"> agilidade e inovação</span>, focada em gerar resultados reais e mensuráveis
                    </p>
                </motion.div>

                {/* Main highlights with images */}
                <div className="space-y-12 mb-20">
                    {highlights.map((highlight, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="group"
                        >
                            <div className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>

                                {/* Image side */}
                                <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                    <div className="relative rounded-3xl overflow-hidden aspect-[4/3] border border-white/10 group-hover:border-white/20 transition-all duration-500">
                                        {/* Image */}
                                        <img
                                            src={highlight.image}
                                            alt={highlight.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />

                                        {/* Gradient overlay */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${highlight.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />

                                        {/* SPECIAL OVERLAY FOR 2ND IMAGE (DAVOS BRANDING) */}


                                        {/* Icon badge */}
                                        <div className="absolute top-6 right-6 z-20">
                                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${highlight.color} p-[2px] shadow-lg`}>
                                                <div className="w-full h-full rounded-2xl bg-davos-black/90 backdrop-blur-sm flex items-center justify-center text-white">
                                                    {highlight.icon}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Decorative corner */}
                                        <div className="absolute bottom-0 right-0 w-48 h-48 opacity-30 pointer-events-none">
                                            <div className={`absolute inset-0 bg-gradient-to-tl ${highlight.color} blur-3xl`} />
                                        </div>
                                    </div>
                                </div>

                                {/* Content side */}
                                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                    <motion.div
                                        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.2 + 0.2, duration: 0.6 }}
                                    >
                                        <div className="flex items-start gap-4 mb-6">
                                            <div className="flex-shrink-0">
                                                <CheckCircle2 className="text-davos-blue" size={28} />
                                            </div>
                                            <div>
                                                <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
                                                    {highlight.title}
                                                </h3>
                                                <p className="text-lg text-white leading-relaxed">
                                                    {highlight.description}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Decorative line */}
                                        <div className={`h-1 w-24 rounded-full bg-gradient-to-r ${highlight.color} mt-6`} />
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>


            </div>
        </SectionWrapper>
    );
};

export default WhoWeAre;
