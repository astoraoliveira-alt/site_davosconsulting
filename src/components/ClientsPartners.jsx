import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Handshake, Cloud, Database, Lock, Zap, Cpu, Layers, Headset, Bot, Code, ShieldCheck, Mail, ArrowRight } from 'lucide-react';
import SectionWrapper from './ui/SectionWrapper';

const clients = [
    {
        id: 1,
        name: "BBVA",
        sector: "Serviços Financeiros",
        summary: "É um dos maiores grupos financeiros globais, com mais de 160 anos de história e presença em mais de 25 países. Reconhecido pela inovação digital e solidez internacional.",
        stats: [
            { label: "Presença", value: "25+ Países" },
            { label: "História", value: "160+ Anos" }
        ],
        logoColor: "from-blue-600 to-sky-700",
        logo: "/assets/clients/bbva-logo.png",
        image: "/assets/clients/bbva-building.jpg"
    },
    {
        id: 2,
        name: "Atlantica Hospitality International",
        sector: "Hotelaria & Turismo",
        summary: "Maior administradora hoteleira multimarcas da América Latina, com um portfólio de mais de 180 empreendimentos e cerca de 28 mil quartos.",
        stats: [
            { label: "Empreendimentos", value: "180+" },
            { label: "Quartos", value: "28k+" }
        ],
        logoColor: "from-slate-700 to-slate-900",
        logo: "/assets/clients/ahi-logo.jpg",
        image: "/assets/clients/ahi-interior.jpg"
    },
    {
        id: 3,
        name: "Esfera",
        sector: "Fidelidade & Recompensas",
        summary: "Programa de recompensas do Santander que oferece flexibilidade para acumular e trocar pontos por experiências, viagens e produtos exclusivos.",
        stats: [
            { label: "Plataforma", value: "100% Digital" },
            { label: "Benefícios", value: "Clube Exclusivo" }
        ],
        logoColor: "from-red-600 to-rose-700",
        logo: "/assets/clients/esfera-logo.png",
        image: "/assets/clients/esfera-app.jpg"
    },
    {
        id: 4,
        name: "Banco Fibra",
        sector: "Banco Corporativo",
        summary: "Especializado em soluções financeiras sob medida para empresas, do agro ao corporate, com foco em agilidade e atendimento personalizado.",
        stats: [
            { label: "Fundação", value: "1988" },
            { label: "Foco", value: "Agro & B2B" }
        ],
        logoColor: "from-blue-900 to-indigo-950",
        logo: "/assets/clients/fibra-logo.png",
        image: "/assets/clients/fibra-interior.jpg"
    }
];

const partnerCategories = [
    {
        id: "ia_automation",
        title: "IA & Hyperautomação",
        icon: <Bot size={28} />,
        color: "from-emerald-500 to-green-500",
        desc: "Soluções de vanguarda que utilizam Agentes de IA Autônomos e LLMs para automatizar processos de decisão e aumentar a capacidade produtiva em escala exponencial."
    },
    {
        id: "modernization",
        title: "Modernização Digital",
        icon: <Code size={28} />,
        color: "from-orange-500 to-amber-500",
        desc: "Transformação de sistemas legados em arquiteturas modernas de alta performance, utilizando microsserviços e aceleradores baseados em IA para reduzir o tempo de mercado."
    },
    {
        id: "cyber_infra",
        title: "Cyber, Infra e SRE",
        icon: <ShieldCheck size={28} />,
        color: "from-indigo-500 to-violet-500",
        desc: "Garantia de continuidade e segurança sistêmica com foco em defesa cibernética, monitoramento proativo e infraestrutura SRE resiliente."
    },
    {
        id: "specialties",
        title: "Especialidades e Nichos",
        icon: <Layers size={28} />,
        color: "from-blue-500 to-cyan-500",
        desc: "Especialistas focados em verticais críticas como Estratégias de Crédito, Blockchain/Tokenização de ativos (RWA) e Otimização de Benefícios Corporativos."
    },
    {
        id: "service",
        title: "Customer Experience",
        icon: <Headset size={28} />,
        color: "from-purple-500 to-pink-500",
        desc: "Evolução do atendimento humano com suporte tecnológico de ponta, BPO estratégico e soluções Omnichannel para elevar o NPS e a fidelização."
    }
];

const ClientsPartners = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const itemsPerPage = isMobile ? 1 : 2;
    const totalPages = Math.ceil(clients.length / itemsPerPage);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % totalPages);
        }, 5000);
        return () => clearInterval(timer);
    }, [totalPages]);

    const visibleClients = clients.slice(
        currentIndex * itemsPerPage,
        (currentIndex + 1) * itemsPerPage
    );

    return (
        <div className="bg-davos-black">
            {/* PARTNERS SECTION */}
            <SectionWrapper id="parceiros" className="pt-12 pb-32 relative bg-[#050505]">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                            Parceiros <span className="text-davos-orange">Comerciais</span>
                        </h2>
                        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                            Atuamos com os principais provedores mundiais para garantir a melhor solução técnica para cada desafio de negócio.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {partnerCategories.map((category) => (
                            <motion.div
                                key={category.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="group p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500 relative overflow-hidden"
                            >
                                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 blur-[60px] transition-opacity duration-700`} />

                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                                    {category.icon}
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-davos-orange transition-colors duration-300">
                                    {category.title}
                                </h3>

                                <p className="text-gray-400 font-light leading-relaxed mb-6 group-hover:text-gray-300 transition-colors">
                                    {category.desc}
                                </p>

                                <div className="flex items-center gap-2 text-xs font-bold text-davos-orange uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                                    Conhecer ecossistema <ArrowRight size={14} />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="mt-20 p-8 rounded-3xl bg-gradient-to-r from-davos-blue/10 via-davos-orange/10 to-transparent border border-white/5 text-center max-w-4xl mx-auto"
                    >
                        <p className="text-gray-300 leading-relaxed italic">
                            A Davos assume a <span className="text-davos-blue font-bold">corresponsabilidade técnica</span> e a gestão de ponta a ponta de todos os projetos implementados, garantindo que o ecossistema de parceiros entregue exatamente o valor acordado.
                        </p>
                    </motion.div>
                </div>
            </SectionWrapper>

            {/* CLIENTS SECTION */}
            <SectionWrapper id="clientes" className="pt-12 pb-32 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.15) 1px, transparent 1px)`,
                        backgroundSize: '30px 30px'
                    }} />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                            Nossos <span className="text-transparent bg-clip-text bg-gradient-to-r from-davos-blue to-cyan-400">Clientes</span>
                        </h2>
                        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                            A Davos é parceira de confiança das maiores marcas do mercado global.
                        </p>
                    </motion.div>

                    <div className="relative h-[600px] md:h-[450px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5 }}
                                className="grid md:grid-cols-2 gap-8 absolute w-full"
                            >
                                {visibleClients.map((client) => (
                                    <div key={client.id} className="group h-full relative rounded-3xl border border-white/10 overflow-hidden bg-gray-900/50 backdrop-blur-sm transition-all duration-500 hover:border-davos-blue/40">
                                        <div className="absolute inset-0">
                                            <img src={client.image} alt="" className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/80 to-transparent" />
                                        </div>
                                        <div className="relative p-8 z-10 flex flex-col h-full">
                                            <div className="flex items-center gap-4 mb-6">
                                                <div className="w-14 h-14 rounded-xl bg-white p-2 shadow-xl overflow-hidden">
                                                    <img src={client.logo} alt="" className="w-full h-full object-contain" />
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-white">{client.name}</h3>
                                                    <p className="text-xs text-davos-blue uppercase tracking-widest font-semibold">{client.sector}</p>
                                                </div>
                                            </div>
                                            <p className="text-gray-300 mb-8 leading-relaxed line-clamp-3">{client.summary}</p>
                                            <div className="grid grid-cols-2 gap-4 mt-auto">
                                                {client.stats.map((stat, idx) => (
                                                    <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/5">
                                                        <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1 font-bold">{stat.label}</p>
                                                        <p className="text-xl font-bold text-white">{stat.value}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="flex justify-center gap-3 mt-8">
                        {Array.from({ length: totalPages }).map((_, idx) => (
                            <button key={idx} onClick={() => setCurrentIndex(idx)} className={`h-[2px] rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-12 bg-davos-blue' : 'w-4 bg-gray-700 hover:bg-gray-500'}`} />
                        ))}
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
};

export default ClientsPartners;
