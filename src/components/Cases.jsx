import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, TrendingUp, Zap, Target } from 'lucide-react';
import SectionWrapper from './ui/SectionWrapper';

const cases = [
    {
        id: 1,
        client: "Grande Varejista Nacional",
        industry: "Varejo & E-commerce",
        description: "Revolucionamos a cadeia de suprimentos através de algoritmos preditivos e automação de fluxos internos.",
        impacts: [
            "Integração total da malha logística",
            "Redução de gargalos em CDs",
            "Otimização em tempo real de rotas"
        ],
        benefits: [
            "Visibilidade total do estoque em trânsito",
            "Redução expressiva em perdas de carga",
            "Melhoria no NPS de entrega"
        ],
        mainMetric: { label: "Economia Anual", value: "R$ 12M", icon: TrendingUp, tags: ["ROI", "OPEX"] },
        color: "from-davos-blue to-cyan-500",
    },
    {
        id: 2,
        client: "Fintech de Pagamentos",
        industry: "Tecnologia Financeira",
        description: "Implementamos uma arquitetura de governança que permitiu o escalonamento seguro de produtos de alto volume.",
        impacts: [
            "Padronização de pipelines CI/CD",
            "Redução de falhas em produção",
            "Cultura de autonomia escalável"
        ],
        benefits: [
            "Aumento da confiança dos stakeholders",
            "Segurança total em transações críticas",
            "Aceleração do desenvolvimento interno"
        ],
        mainMetric: { label: "Time-to-Market", value: "-40%", icon: Zap, tags: ["Agilidade", "Scale"] },
        color: "from-purple-600 to-davos-blue",
    },
    {
        id: 3,
        client: "Indústria Farmacêutica",
        industry: "Saúde & Farmacêutica",
        description: "Digitalização completa dos processos de qualidade, garantindo rastreabilidade e aderência normativa rigorosa.",
        impacts: [
            "Eliminação de registros manuais",
            "Rastreabilidade 'end-to-end'",
            "Auditorias digitais instantâneas"
        ],
        benefits: [
            "Redução de erros humanos",
            "Aprovação acelerada de lotes",
            "Conformidade total (FDA/Anvisa)"
        ],
        mainMetric: { label: "Produtividade", value: "+35%", icon: Target, tags: ["Qualidade", "Tech"] },
        color: "from-davos-orange to-red-600",
    },
    {
        id: 4,
        client: "Conglomerado Energético",
        industry: "Energia & Utilities",
        description: "Modernização de sistemas legados para gestão inteligente de rede e manutenção preditiva.",
        impacts: [
            "Sensores IoT para monitoramento",
            "IA para detecção de anomalias",
            "Manutenção focada em dados"
        ],
        benefits: [
            "Redução drástica de downtimes",
            "Aumento da vida útil de ativos",
            "Redução de emissão de carbono"
        ],
        mainMetric: { label: "Manutenção", value: "-25%", icon: TrendingUp, tags: ["IA", "Greentech"] },
        color: "from-emerald-600 to-davos-blue",
    }
];

const CaseColumn = ({ caseData, isFirst }) => (
    <div className={`flex flex-col h-full p-8 lg:p-12 transition-all duration-500 ${isFirst ? 'lg:border-r border-white/5' : ''}`}>
        {/* Context Header */}
        <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 bg-white/5 border border-white/10 text-davos-orange text-[9px] font-bold uppercase tracking-[0.2em] rounded-sm">
                    {caseData.industry}
                </span>
                <div className="h-px w-6 bg-white/20" />
                <span className="text-gray-500 text-[9px] font-bold uppercase tracking-widest">Case Sucesso</span>
            </div>

            <h3 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter leading-none">
                {caseData.client}
            </h3>

            <p className="text-lg text-gray-400 font-light leading-relaxed">
                {caseData.description}
            </p>
        </div>

        {/* Dual Lists */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-8 mb-12 flex-grow">
            <div className="space-y-6">
                <h4 className="text-white font-bold uppercase tracking-widest text-[10px] opacity-40">Impacto Direto</h4>
                <ul className="space-y-4">
                    {caseData.impacts.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 group/item">
                            <div className="mt-1.5 min-w-[5px] h-[5px] rounded-full bg-davos-orange shadow-[0_0_8px_rgba(255,102,0,0.6)]" />
                            <span className="text-gray-400 text-sm leading-snug group-hover/item:text-white transition-colors">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="space-y-6">
                <h4 className="text-white font-bold uppercase tracking-widest text-[10px] opacity-40">Benefícios</h4>
                <ul className="space-y-4">
                    {caseData.benefits.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 group/item">
                            <div className="mt-1.5 min-w-[5px] h-[5px] rounded-full bg-davos-blue shadow-[0_0_8px_rgba(0,123,255,0.6)]" />
                            <span className="text-gray-400 text-sm leading-snug group-hover/item:text-white transition-colors">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

        {/* Big Number Card */}
        <div className="mt-auto pt-8 border-t border-white/5">
            <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="relative p-8 rounded-2xl bg-white/5 border border-white/10 overflow-hidden text-center group"
            >
                <div className={`absolute inset-0 bg-gradient-to-br ${caseData.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700`} />

                <div className="flex justify-center gap-2 mb-4">
                    {caseData.mainMetric.tags.map((tag) => (
                        <span key={tag} className="text-[8px] uppercase tracking-widest font-black text-davos-orange/60 border border-davos-orange/20 px-1.5 py-0.5 rounded-sm">
                            {tag}
                        </span>
                    ))}
                </div>

                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em] mb-1">{caseData.mainMetric.label}</p>
                <span className="text-6xl lg:text-7xl font-black text-white tracking-tighter block mb-2 leading-none">
                    {caseData.mainMetric.value}
                </span>
                <div className="flex justify-center text-davos-orange/30">
                    <caseData.mainMetric.icon size={20} />
                </div>
            </motion.div>
        </div>
    </div>
);

const Cases = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 2;
    const totalPages = Math.ceil(cases.length / itemsPerPage);

    const paginate = (dir) => {
        setCurrentPage((prev) => (prev + dir + totalPages) % totalPages);
    };

    const currentCases = cases.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

    return (
        <SectionWrapper id="cases" className="py-32 bg-davos-black relative overflow-hidden">
            {/* Dynamic Glow background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-davos-blue/5 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-davos-orange/5 rounded-full blur-[150px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
                    <div className="max-w-xl">
                        <h2 className="text-sm font-bold text-davos-orange uppercase tracking-[0.3em] mb-4">Resultados que Transformam</h2>
                        <p className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-tight">
                            Impacto real em escala global.
                        </p>
                    </div>

                    <div className="flex items-center gap-6">
                        <span className="font-mono text-xs text-gray-500">
                            PAG <strong className="text-white">{(currentPage + 1).toString().padStart(2, '0')}</strong> / {totalPages.toString().padStart(2, '0')}
                        </span>
                        <div className="flex gap-2">
                            <button
                                onClick={() => paginate(-1)}
                                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group"
                            >
                                <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                            </button>
                            <button
                                onClick={() => paginate(1)}
                                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group"
                            >
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentPage}
                            initial={{ opacity: 0, scale: 0.98, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 1.02, y: -10 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="grid lg:grid-cols-2 gap-0 bg-white/[0.02] border border-white/5 rounded-[3rem] overflow-hidden backdrop-blur-sm"
                        >
                            {currentCases.map((c, i) => (
                                <CaseColumn key={c.id} caseData={c} isFirst={i === 0} />
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Cases;
