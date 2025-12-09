import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Handshake, Cloud, Database, Lock, Zap, Cpu, ChevronRight, Layers, Headset, Bot, Code, ShieldCheck, X, ExternalLink } from 'lucide-react';
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
        id: "specialties",
        title: "Especialidades e Nichos",
        icon: <Layers size={24} />,
        color: "from-blue-500 to-cyan-500",
        partners: [
            { name: "Inteligência Digital", desc: "Estratégia de Crédito e Cobrança", tags: ["Crédito", "Cobrança", "Analytics"] },
            { name: "be.rh", desc: "Otimização de Benefícios VT", tags: ["RH Tech", "Benefícios", "Economia"] },
            { name: "GoLedger", desc: "Blockchain e Tokenização", tags: ["Hyperledger", "Smart Contracts", "RWA"] },
            { name: "Insightly", desc: "Cultura e Organização", tags: ["Transformação Cultural", "Gestão de Pessoas"] }
        ]
    },
    {
        id: "service",
        title: "Atendimento",
        icon: <Headset size={24} />,
        color: "from-purple-500 to-pink-500",
        partners: [
            { name: "Fortuna", desc: "Operadora de Telecom", tags: ["VoIP", "Telefonia", "Infraestrutura"] },
            {
                name: "Unite",
                desc: "Contact Center",
                tags: ["BPO", "Atendimento", "Experiência do Cliente"],
                fullDesc: "A Unite é referência em terceirização de processos de negócios (BPO) e gestão de relacionamento com o cliente. Combinando tecnologia de ponta, inteligência de dados e uma equipe altamente capacitada, a Unite entrega soluções de atendimento que elevam a satisfação do consumidor e otimizam a operação das empresas. Seus serviços abrangem desde SAC multicanal até vendas e retenção.",
                website: "https://www.grupounite.com.br/",
                logo: null // Placeholder for logo if we had one
            },
            { name: "Lemit", desc: "Enriquecimento de dados", tags: ["Data Enrichment", "Big Data", "Assertividade"] },
            { name: "Genesys", desc: "Contact Center", tags: ["Omnichannel", "CX", "Cloud Contact"] }
        ]
    },
    {
        id: "ia_automation",
        title: "IA, Dados & Hyperautomação",
        icon: <Bot size={24} />,
        color: "from-emerald-500 to-green-500",
        partners: [
            { name: "Amazônia", desc: "IA Brasileira", tags: ["LLM", "Brasil", "Generative AI"] },
            { name: "Une", desc: "Agentes de IA", tags: ["Agentes Autônomos", "Automação", "Produtividade"] },
            { name: "Biti9", desc: "Automação RPA e IA", tags: ["RPA", "Hyperautomation", "Processos"] },
            { name: "AIDDA", desc: "Dados e Tokenização", tags: ["Data", "Tokenization", "Web3"] }
        ]
    },
    {
        id: "modernization",
        title: "Modernização de Aplicações",
        icon: <Code size={24} />,
        color: "from-orange-500 to-amber-500",
        partners: [
            { name: "Widelabs", desc: "Desenvolvimento de modelos de IA", tags: ["IA Models", "Inovação", "Dev"] },
            { name: "Inspira", desc: "Desenv. com aceleradores de IA", tags: ["Aceleradores", "Software", "Produtividade"] },
            { name: "T10", desc: "Staff Augmentation", tags: ["Squads", "Talentos Tech", "Alta Performance"] },
            { name: "Curling AI", desc: "Eficiência de codificação com IA", tags: ["Coding AI", "DevTools", "Efficiency"] }
        ]
    },
    {
        id: "cyber_infra",
        title: "Cyber, Infra e SRE",
        icon: <ShieldCheck size={24} />,
        color: "from-indigo-500 to-violet-500",
        partners: [
            { name: "Freshworks", desc: "Gestão de Infraestrutura", tags: ["ITSM", "Monitoramento", "Cloud"] },
            { name: "Redbelt Security", desc: "Cibersegurança", tags: ["SOC", "Pentest", "Defesa Cibernética"] }
        ]
    }
];

const ClientsPartners = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [activeCategory, setActiveCategory] = useState(partnerCategories[0].id);
    const [selectedPartner, setSelectedPartner] = useState(null);

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize(); // Initial check
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
    }, [totalPages, itemsPerPage]);

    const visibleClients = clients.slice(
        currentIndex * itemsPerPage,
        (currentIndex + 1) * itemsPerPage
    );

    return (
        <>
            <SectionWrapper id="parceiros" className="py-20 md:py-32 bg-davos-black relative overflow-hidden">
                {/* Background decoration - Lighter and more visible */}
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.15) 1px, transparent 1px)`,
                        backgroundSize: '30px 30px'
                    }} />
                    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-davos-blue/20 rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]" />
                </div>

                <div className="container mx-auto px-6 relative z-10">

                    {/* CLIENTS SECTION */}
                    <div className="mb-40">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-davos-blue/20 border border-davos-blue/40 mb-6">
                                <Building2 size={16} className="text-davos-blue" />
                                <span className="text-sm text-white font-semibold tracking-wide">CONFIANÇA CORPORATIVA</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-lg">
                                Nossos <span className="text-transparent bg-clip-text bg-gradient-to-r from-davos-blue to-cyan-400 brightness-125">Clientes</span>
                            </h2>
                            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed">
                                Empresas líderes que confiam na DAVOS para suas transformações mais críticas
                            </p>
                        </motion.div>

                        {/* Automatic Carousel */}
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
                                        <div key={client.id} className="group relative h-full">
                                            <div className="h-full relative rounded-3xl border border-white/10 overflow-hidden group hover:border-davos-blue/50 transition-all duration-500 shadow-2xl hover:shadow-davos-blue/10 bg-gray-900">

                                                {/* Background Image & Overlay */}
                                                <div className="absolute inset-0">
                                                    <img
                                                        src={client.image}
                                                        alt="Background"
                                                        className="w-full h-full object-cover opacity-40 group-hover:scale-105 group-hover:opacity-30 transition-all duration-700"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/95 to-gray-900/60" />
                                                </div>

                                                {/* Content Container */}
                                                <div className="relative p-8 z-10 flex flex-col h-full">
                                                    {/* Header: Logo & Name */}
                                                    <div className="flex items-center gap-6 mb-6">
                                                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${client.logoColor} p-[2px] shadow-lg group-hover:shadow-xl transition-shadow`}>
                                                            <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center overflow-hidden relative">
                                                                <img
                                                                    src={client.logo}
                                                                    alt={`${client.name} logo`}
                                                                    className="w-full h-full object-contain p-2"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <h3 className="text-2xl font-bold text-white mb-1 line-clamp-1">{client.name}</h3>
                                                            <p className="text-sm text-gray-300 font-medium bg-white/5 px-3 py-1 rounded-full inline-block border border-white/5 backdrop-blur-md">
                                                                {client.sector}
                                                            </p>
                                                        </div>
                                                    </div>

                                                    {/* Summary */}
                                                    <p className="text-gray-300 mb-8 leading-relaxed text-lg flex-grow">
                                                        {client.summary}
                                                    </p>

                                                    {/* Stats Grid */}
                                                    <div className="grid grid-cols-2 gap-4 mt-auto">
                                                        {client.stats.map((stat, idx) => (
                                                            <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10 group-hover:bg-davos-blue/10 group-hover:border-davos-blue/20 transition-all backdrop-blur-sm">
                                                                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1 font-semibold">{stat.label}</p>
                                                                <p className="text-2xl font-bold text-white">{stat.value}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Carousel Indicators */}
                        <div className="flex justify-center gap-3 mt-4">
                            {Array.from({ length: totalPages }).map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-10 bg-davos-blue shadow-[0_0_10px_rgba(0,68,204,0.5)]' : 'w-2 bg-gray-600 hover:bg-gray-400'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* PARTNERS SECTION */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-600/20 border border-purple-600/40 mb-6">
                                <Handshake size={16} className="text-purple-400" />
                                <span className="text-sm text-white font-semibold tracking-wide">ECOSSISTEMA DE EXCELÊNCIA</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-lg">
                                Parceiros <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 brightness-125">Comerciais</span>
                            </h2>
                            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-light">
                                Uma rede estratégica de parceiros tecnológicos dividida em áreas de especialização
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                            {/* Categories Sidebar */}
                            <div className="lg:col-span-4 space-y-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-0 lg:space-y-3">
                                {partnerCategories.map((category) => (
                                    <button
                                        key={category.id}
                                        onClick={() => setActiveCategory(category.id)}
                                        className={`w-full text-left p-4 rounded-2xl transition-all duration-300 flex items-center justify-between group border ${activeCategory === category.id
                                            ? `bg-gradient-to-r ${category.color} border-transparent shadow-lg`
                                            : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10'
                                            }`}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className={`p-2 rounded-lg ${activeCategory === category.id ? 'bg-white/20 text-white' : 'bg-black/20 text-gray-400 group-hover:text-white'}`}>
                                                {category.icon}
                                            </div>
                                            <span className={`font-semibold text-lg ${activeCategory === category.id ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                                                {category.title}
                                            </span>
                                        </div>
                                        {activeCategory === category.id && (
                                            <ChevronRight className="text-white animate-pulse" size={20} />
                                        )}
                                    </button>
                                ))}
                            </div>

                            {/* Partners Display Area */}
                            <div className="lg:col-span-8">
                                <div className="bg-gray-900/50 border border-white/10 rounded-3xl p-8 min-h-[400px] backdrop-blur-sm relative overflow-hidden">
                                    {partnerCategories.map((category) => (
                                        activeCategory === category.id && (
                                            <motion.div
                                                key={category.id}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.4 }}
                                                className="relative z-10"
                                            >
                                                <div className="flex items-center gap-3 mb-8">
                                                    <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color}`}>
                                                        <div className="text-white">
                                                            {category.icon}
                                                        </div>
                                                    </div>
                                                    <h3 className="text-3xl font-bold text-white">{category.title}</h3>
                                                </div>

                                                <div className="grid md:grid-cols-2 gap-6">
                                                    {category.partners.map((partner, idx) => (
                                                        <motion.div
                                                            key={idx}
                                                            initial={{ opacity: 0, y: 20 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            transition={{ delay: idx * 0.1 }}
                                                            onClick={() => setSelectedPartner({ ...partner, categoryColor: category.color })}
                                                            className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all group cursor-pointer relative overflow-hidden"
                                                        >
                                                            <div className={`absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity`}>
                                                                <ExternalLink size={20} className="text-white/50" />
                                                            </div>
                                                            <h4 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text">
                                                                {partner.name}
                                                            </h4>
                                                            <p className="text-gray-400 text-sm mb-4">{partner.desc}</p>
                                                            <div className="flex flex-wrap gap-2">
                                                                {partner.tags.map((tag, i) => (
                                                                    <span key={i} className="text-xs font-medium px-2 py-1 rounded-md bg-white/5 text-gray-300 border border-white/5">
                                                                        {tag}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )
                                    ))}

                                    {/* Background Glow */}
                                    {partnerCategories.map((category) => (
                                        activeCategory === category.id && (
                                            <div key={category.id} className={`absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br ${category.color} opacity-10 blur-[100px] pointer-events-none`} />
                                        )
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Partnership value proposition */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-davos-blue/10 via-purple-600/10 to-pink-600/10 border border-white/10 backdrop-blur-sm text-center"
                        >
                            <h3 className="text-2xl font-bold text-white mb-4">
                                Gestão Efetiva e Corresponsabilidade
                            </h3>
                            <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
                                A DAVOS não apenas conecta você aos melhores parceiros — nós fazemos a <span className="text-white font-semibold">gestão efetiva dos projetos</span> e somos <span className="text-white font-semibold">corresponsáveis pelas entregas</span> de toda nossa rede de trabalho.
                            </p>
                        </motion.div>
                    </div>
                </div>

            </SectionWrapper >

            {/* Partner Detail Modal */}
            <AnimatePresence>
                {selectedPartner && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedPartner(null)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-md"
                        />
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="relative bg-gray-900 border border-white/10 rounded-3xl p-6 md:p-8 max-w-2xl w-full shadow-2xl overflow-hidden mx-4 md:mx-0 max-h-[90vh] overflow-y-auto"
                        >
                            {/* Modal Background Gradient */}
                            <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${selectedPartner.categoryColor || 'from-blue-500 to-purple-500'} opacity-10 blur-[80px] rounded-full pointer-events-none`} />

                            <div className="relative z-10">
                                <button
                                    onClick={() => setSelectedPartner(null)}
                                    className="absolute -top-2 -right-2 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                                >
                                    <X size={20} />
                                </button>

                                <div className="flex items-start gap-6 mb-8">
                                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${selectedPartner.categoryColor || 'from-gray-700 to-gray-800'} p-[2px] shadow-lg flex-shrink-0`}>
                                        <div className="w-full h-full rounded-2xl bg-gray-900 flex items-center justify-center text-white overflow-hidden">
                                            {/* Placeholder for actual logo or icon */}
                                            {selectedPartner.logo ? (
                                                <img src={selectedPartner.logo} alt={selectedPartner.name} className="w-full h-full object-contain p-2" />
                                            ) : (
                                                <span className="text-2xl font-bold">{selectedPartner.name.substring(0, 1)}</span>
                                            )}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-3xl font-bold text-white mb-2">{selectedPartner.name}</h3>
                                        <p className="text-lg text-davos-blue font-medium">{selectedPartner.desc}</p>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <h4 className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-3">Sobre</h4>
                                        <p className="text-gray-300 leading-relaxed text-lg">
                                            {selectedPartner.fullDesc || `A ${selectedPartner.name} é um parceiro estratégico da DAVOS focado em ${selectedPartner.desc.toLowerCase()}. Juntos entregamos soluções de valor agregado para nossos clientes, combinando expertise técnica e visão de negócios.`}
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-3">Especialidades</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedPartner.tags.map((tag, i) => (
                                                <span key={i} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-sm">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {selectedPartner.website && (
                                        <div className="pt-6 border-t border-white/10 mt-8">
                                            <a
                                                href={selectedPartner.website}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-davos-blue hover:bg-davos-blue/80 text-white font-semibold transition-colors group"
                                            >
                                                Visitar Site
                                                <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence >
        </>
    );
};

export default ClientsPartners;
