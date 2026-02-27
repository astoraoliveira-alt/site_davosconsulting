import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

const IMAGES = [
    { src: '/202602262200.mp4', transition: { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } } },
];

const TECH_FLOW = [
    {
        step: "Pensar",
        phrase: "Entende contexto antes de agir.",
        tech: "LLMs • RAG • Memória Vetorial",
        internalTitle: "Arquitetura de Inteligência",
        status: "Inteligência ativa",
        statusSub: "Base vetorial sincronizada",
        details: [
            "Modelos LLM integrados",
            "RAG com memória vetorial",
            "Enriquecimento de contexto",
            "Indexação semântica",
            "Context memory persistente"
        ]
    },
    {
        step: "Decidir",
        phrase: "Define a melhor ação com base em dados.",
        tech: "Regras • Score • Orquestração",
        internalTitle: "Camada de Orquestração",
        status: "Orquestração ativa",
        statusSub: "Regras em execução",
        details: [
            "Engine de regras",
            "Score dinâmico",
            "Avaliação de risco",
            "Priorização automática",
            "Fallback inteligente"
        ]
    },
    {
        step: "Executar",
        phrase: "Opera em tempo real.",
        tech: "APIs • Eventos • Automação",
        internalTitle: "Camada Operacional",
        status: "Operação em tempo real",
        statusSub: "Eventos processando",
        details: [
            "APIs e Webhooks",
            "Execução assíncrona",
            "Eventos e filas",
            "Integração multi canal",
            "RPC dedicada"
        ]
    },
    {
        step: "Auditar",
        phrase: "Tudo rastreável. Nada invisível.",
        tech: "Logs • SLA • Monitoramento",
        internalTitle: "Camada de Governança",
        status: "Governança ativa",
        statusSub: "Logs sincronizados",
        details: [
            "Logs imutáveis",
            "SLA monitorado",
            "Rastreamento completo",
            "Versionamento",
            "Trilhas de auditoria"
        ]
    }
];

const EF_INPUTS = [
    "Cloud & Infraestrutura",
    "Dados & Analytics",
    "IA & Automação",
    "QA & Confiabilidade",
    "Segurança"
];

const EF_OUTPUTS = [
    "Redução de Custos",
    "Ganho de Velocidade",
    "Orquestração Estratégica",
    "ROI Acelerado"
];

const PRAGMATISMO_PILLARS = [
    { id: "01", title: "Governança Clara", content: "Papéis definidos, decisões rastreáveis e responsabilidade objetiva." },
    { id: "02", title: "Processos Estruturados", content: "Fluxos bem definidos, marcos claros e disciplina operacional." },
    { id: "03", title: "Entrega Orientada a Valor", content: "Prioridade no impacto real, não em volume de atividade." },
    { id: "04", title: "Medição Contínua", content: "Indicadores objetivos, acompanhamento recorrente e ajustes rápidos." }
];

const Hero = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [activeNodeIdx, setActiveNodeIdx] = useState(null);
    const [isLineFinished, setIsLineFinished] = useState(false);
    const [activeCycle, setActiveCycle] = useState({ stage: 'idle', inputIdx: 0, outputIdx: 0 });
    const containerRef = useRef(null);

    // Random values for Efficiency Metrics (avoiding impurity in JSX)
    const [efficiencyMetrics, setEfficiencyMetrics] = useState([]);
    useEffect(() => {
        setEfficiencyMetrics(EF_OUTPUTS.map(() => Math.floor(Math.random() * 40) + 20));
    }, []);

    const syncValue = React.useMemo(() => Math.floor(Math.random() * 20) + 80, [activeCycle.inputIdx]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Video loop is handled by onEnded in the <video> tag

    // Efficiency Coordinated Animation Cycle
    useEffect(() => {
        const runCycle = () => {
            const inputIdx = Math.floor(Math.random() * EF_INPUTS.length);
            const outputIdx = Math.floor(Math.random() * EF_OUTPUTS.length);

            // 1. Input Pulse (From Left to Center)
            setActiveCycle({ stage: 'input', inputIdx, outputIdx });

            setTimeout(() => {
                // 2. Core Intake (Process)
                setActiveCycle(prev => ({ ...prev, stage: 'core' }));

                setTimeout(() => {
                    // 3. Output Discharge (From Center to Right)
                    setActiveCycle(prev => ({ ...prev, stage: 'output' }));

                    setTimeout(() => {
                        // 4. Result Impact (Highlight)
                        setActiveCycle(prev => ({ ...prev, stage: 'result' }));

                        setTimeout(() => {
                            setActiveCycle({ stage: 'idle', inputIdx: 0, outputIdx: 0 });
                        }, 2000);
                    }, 2000);
                }, 800);
            }, 2000);
        };

        const interval = setInterval(runCycle, 9000);
        const initialDelay = setTimeout(runCycle, 4000);

        return () => {
            clearInterval(interval);
            clearTimeout(initialDelay);
        };
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
    const pragmatismoContentOpacity = useTransform(scrollYProgress, [0.18, 0.22, 0.28, 0.32], [0, 1, 1, 0]);
    const pragmatismoContentY = useTransform(scrollYProgress, [0.18, 0.22, 0.28, 0.32], [40, 0, 0, -20]);

    const eficienciaContentOpacity = useTransform(scrollYProgress, [0.56, 0.62, 0.68, 0.72], [0, 1, 1, 0]);
    const eficienciaContentY = useTransform(scrollYProgress, [0.56, 0.62], [40, 0]);

    const techContentOpacity = useTransform(scrollYProgress, [0.88, 0.94], [0, 1]);
    const techContentY = useTransform(scrollYProgress, [0.88, 0.94], [50, 0]);

    return (
        <div id="home" ref={containerRef} className="relative h-[1300vh] bg-[#000000]">
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden font-sans">

                {/* Backgrounds */}
                <motion.div style={{ opacity: lightBgOpacity }} className="absolute inset-0 bg-[#f8f9fa] z-10" />
                <motion.div style={{ opacity: darkBlueBgOpacity }} className="absolute inset-0 bg-[#001533] z-20" />

                <motion.div style={{ opacity: heroBgOpacity }} className="absolute inset-0 z-0">
                    <AnimatePresence>
                        <motion.div
                            key={currentImage}
                            initial={IMAGES[currentImage].transition.initial}
                            animate={IMAGES[currentImage].transition.animate}
                            exit={IMAGES[currentImage].transition.exit}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="absolute inset-0"
                        >
                            <video
                                src={IMAGES[currentImage].src}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full object-cover scale-110"
                            />
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

                {/* Pragmatismo Structure Display */}
                <motion.div
                    style={{ opacity: pragmatismoContentOpacity, y: pragmatismoContentY }}
                    className="absolute inset-0 z-40 flex flex-col items-center justify-center pointer-events-none"
                >
                    <div className="w-full max-w-7xl px-6 flex flex-col items-center">
                        {/* Title Context - Positioned below the moved title */}
                        <div className="absolute top-[24vh] left-[14vw] flex flex-col items-start translate-x-[2vw]">
                            <motion.span
                                initial={{ opacity: 0, y: 5 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="text-[11px] md:text-[13px] font-mono tracking-[0.6em] text-davos-orange uppercase font-bold"
                            >
                                Método antes de movimento.
                            </motion.span>
                            <div className="w-16 h-px bg-davos-orange/60 mt-4" />
                        </div>

                        <div className="grid md:grid-cols-[1fr_280px] gap-20 pointer-events-auto items-center mt-32 w-full">
                            {/* Pillars Grid */}
                            <div className="grid md:grid-cols-2 gap-x-16 gap-y-20 relative">
                                {PRAGMATISMO_PILLARS.map((pillar, idx) => (
                                    <div key={idx} className="relative group">
                                        <div className="flex flex-col">
                                            <span className="text-7xl md:text-9xl font-bold text-black/[0.05] absolute -top-12 -left-6 select-none pointer-events-none">
                                                {pillar.id}
                                            </span>
                                            <div className="relative z-10">
                                                <h3 className="text-davos-orange text-[10px] md:text-[11px] font-mono tracking-[0.4em] uppercase mb-5 font-bold">
                                                    {pillar.title}
                                                </h3>
                                                <p className="text-black text-xl md:text-[28px] font-normal leading-normal max-w-sm tracking-tight">
                                                    {pillar.content}
                                                </p>
                                            </div>
                                            {/* Vertical technical accent */}
                                            <div className="w-px h-8 bg-davos-orange/30 mt-8 ml-0.5 group-hover:h-12 transition-all duration-500" />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Sidebar: Modelo de Atuação */}
                            <div className="hidden md:flex flex-col border-l border-black/5 pl-16 py-4">
                                <h4 className="text-[12px] font-mono tracking-[0.6em] text-black uppercase mb-12 font-bold italic">Modelo de Atuação</h4>
                                <div className="space-y-8 relative">
                                    {['Diagnóstico', 'Estruturação', 'Execução', 'Monitoramento', 'Evolução'].map((step, sIdx) => (
                                        <div key={sIdx} className="flex items-center gap-6 group cursor-default">
                                            <div className="relative">
                                                <div className="w-1.5 h-1.5 rounded-full border border-davos-orange/30 group-hover:bg-davos-orange group-hover:border-davos-orange transition-all duration-300" />
                                                {sIdx < 4 && (
                                                    <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-px h-8 bg-black/[0.08]" />
                                                )}
                                            </div>
                                            <span className="text-sm font-light text-black tracking-[0.1em] uppercase group-hover:translate-x-1 transition-all">
                                                {step}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Efficiency Amplification Motor Display */}
                <motion.div
                    style={{ opacity: eficienciaContentOpacity, y: eficienciaContentY }}
                    className="absolute inset-0 z-40 flex flex-col items-center justify-center pointer-events-none"
                >
                    <div className="w-full max-w-7xl px-6 flex flex-col items-center justify-center">
                        <div className="relative w-full flex items-center justify-between pointer-events-auto min-h-[500px]">

                            {/* 1. Left Column: Ecossistema (Inputs) */}
                            <div className="flex flex-col gap-10 items-start w-[240px] z-20">
                                {EF_INPUTS.map((item, i) => {
                                    const isActive = activeCycle.stage === 'input' && activeCycle.inputIdx === i;
                                    return (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 + i * 0.1, duration: 0.8 }}
                                            className="relative group"
                                        >
                                            <div className="flex items-center gap-4">
                                                <motion.div
                                                    animate={{
                                                        backgroundColor: isActive ? "#FF4D00" : "rgba(255,77,0,0.1)",
                                                        scale: isActive ? 1.4 : 1,
                                                        borderColor: isActive ? "#FF4D00" : "rgba(255,255,255,0.1)"
                                                    }}
                                                    className="w-1.5 h-1.5 rounded-full border transition-all duration-500"
                                                />
                                                <span className={`text-base md:text-lg font-light tracking-wide transition-all duration-700 cursor-default uppercase ${isActive ? "text-davos-orange scale-105" : "text-white/70"}`}>
                                                    {item}
                                                </span>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>

                            {/* 2. Center: Núcleo de Integração (The Motor) */}
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.4, duration: 1 }}
                                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center pt-8"
                            >
                                <div className="relative flex items-center justify-center">
                                    {/* Static Technical Rings */}
                                    <motion.div
                                        animate={{ scale: activeCycle.stage === 'core' ? 1.1 : 1, opacity: activeCycle.stage === 'core' ? 0.3 : 1 }}
                                        className="absolute w-56 h-56 rounded-full border border-white/[0.04]"
                                    />
                                    <motion.div
                                        animate={{ scale: activeCycle.stage === 'core' ? 1.15 : 1, opacity: activeCycle.stage === 'core' ? 0.2 : 1 }}
                                        className="absolute w-44 h-44 rounded-full border border-white/[0.07]"
                                    />
                                    <motion.div
                                        animate={{ scale: activeCycle.stage === 'core' ? 1.2 : 1, opacity: activeCycle.stage === 'core' ? 0.1 : 1 }}
                                        className="absolute w-32 h-32 rounded-full border border-white/[0.12]"
                                    />

                                    {/* Core Block */}
                                    <motion.div
                                        animate={{
                                            scale: activeCycle.stage === 'core' ? 1.15 : [1, 1.05, 1],
                                            opacity: activeCycle.stage === 'core' ? 1 : [0.8, 1, 0.8],
                                            backgroundColor: activeCycle.stage === 'core' ? "#FF6000" : "#FF4D00",
                                            boxShadow: activeCycle.stage === 'core'
                                                ? "0 0 80px rgba(255,77,0,0.6)"
                                                : ["0 0 20px rgba(255,77,0,0.1)", "0 0 55px rgba(255,77,0,0.4)", "0 0 20px rgba(255,77,0,0.1)"]
                                        }}
                                        transition={{
                                            duration: activeCycle.stage === 'core' ? 0.4 : 4,
                                            repeat: activeCycle.stage === 'core' ? 0 : Infinity,
                                            ease: "easeInOut"
                                        }}
                                        className="w-20 h-20 rounded-full border border-davos-orange/40 flex items-center justify-center relative z-10"
                                    >
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-black/30 to-transparent" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-white/50 blur-[1px]" />

                                        {/* Resonant Expanding Rings */}
                                        <AnimatePresence>
                                            {activeCycle.stage === 'core' && [1, 2, 3, 4, 5].map((ring) => (
                                                <motion.div
                                                    key={ring}
                                                    initial={{ scale: 0.8, opacity: 0.8 }}
                                                    animate={{ scale: 6, opacity: 0 }}
                                                    exit={{ opacity: 0 }}
                                                    transition={{ duration: 2.5, delay: ring * 0.12, ease: "easeOut" }}
                                                    className="absolute inset-0 rounded-full border border-davos-orange/40 shadow-[0_0_20px_rgba(255,77,0,0.3)] pointer-events-none"
                                                />
                                            ))}
                                        </AnimatePresence>
                                    </motion.div>
                                </div>
                                <div className="mt-8 flex flex-col items-center text-center">
                                    <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-davos-orange/80">Núcleo</span>
                                    <span className="text-[8px] font-mono tracking-[0.3em] uppercase text-white/30 mt-1.5">Integração Sistêmica</span>
                                </div>
                            </motion.div>

                            {/* 3. Right Column: Impacto Operacional (Results) */}
                            <div className="flex flex-col gap-12 items-end w-[260px] z-20">
                                {EF_OUTPUTS.map((item, i) => {
                                    const isImpacted = activeCycle.stage === 'result' && activeCycle.outputIdx === i;
                                    const isReceiving = activeCycle.stage === 'output' && activeCycle.outputIdx === i;
                                    return (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.9 + i * 0.1, duration: 0.8 }}
                                            className="relative group text-right"
                                        >
                                            <div className="flex items-center justify-end gap-5">
                                                <div className="flex flex-col items-end">
                                                    <motion.span
                                                        animate={{
                                                            color: isImpacted ? "#FF4D00" : "rgba(255,255,255,0.7)",
                                                            scale: isImpacted ? 1.05 : 1
                                                        }}
                                                        className={`text-base md:text-lg font-light tracking-wide transition-all duration-500 cursor-default uppercase ${isImpacted ? "text-davos-orange" : ""}`}
                                                    >
                                                        {item}
                                                    </motion.span>
                                                    <span className="text-[10px] font-mono text-davos-orange/0 group-hover:text-davos-orange/60 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0 uppercase tracking-widest leading-none mt-1">
                                                        +{efficiencyMetrics[i] || 30}% Eficiência
                                                    </span>
                                                </div>
                                                <motion.div
                                                    animate={{
                                                        scale: isImpacted ? 1.6 : (isReceiving ? 1.3 : 1),
                                                        backgroundColor: isImpacted || isReceiving ? "#FF4D00" : "rgba(255,77,0,0.2)",
                                                        boxShadow: isImpacted ? "0 0 15px rgba(255,77,0,0.5)" : "none"
                                                    }}
                                                    className="w-2.5 h-2.5 rounded-full border border-davos-orange/40 transition-all duration-500 group-hover:shadow-[0_0_15px_rgba(255,77,0,0.6)]"
                                                />
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>

                            {/* Connection System (SVG Pulse Lines) */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible px-20">
                                <defs>
                                    <filter id="glowPulse" x="-20%" y="-20%" width="140%" height="140%">
                                        <feGaussianBlur stdDeviation="1" result="blur" />
                                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                                    </filter>
                                </defs>

                                {/* Converging Pulses (Left to Center) */}
                                {EF_INPUTS.map((_, i) => {
                                    const pathD = `M 220 ${100 + i * 75} Q 400 ${100 + i * 75}, 50% 50%`;
                                    const isCurrent = activeCycle.stage === 'input' && activeCycle.inputIdx === i;
                                    return (
                                        <g key={`l-${i}`}>
                                            <path d={pathD} stroke="white" strokeOpacity="0.03" fill="none" strokeWidth="1" />
                                            <AnimatePresence>
                                                {isCurrent && (
                                                    <motion.path
                                                        d={pathD}
                                                        stroke="#FF4D00"
                                                        strokeWidth="1.5"
                                                        fill="none"
                                                        initial={{ pathLength: 0, opacity: 0 }}
                                                        animate={{ pathLength: 1, opacity: [0, 1, 1, 0] }}
                                                        exit={{ opacity: 0 }}
                                                        transition={{ duration: 2, ease: "easeInOut" }}
                                                    />
                                                )}
                                            </AnimatePresence>
                                        </g>
                                    );
                                })}

                                {/* Synergy Web & Persistent Flows */}
                                <g opacity="0.05">
                                    <path d="M 220 175 Q 350 250, 220 325" stroke="white" fill="none" strokeWidth="0.5" strokeDasharray="2 4" />
                                    <path d="M 220 100 Q 100 212, 220 400" stroke="white" fill="none" strokeWidth="0.5" strokeDasharray="1 3" />
                                    <path d="M calc(100% - 220px) 80 Q calc(100% - 350px) 190, calc(100% - 220px) 300" stroke="white" fill="none" strokeWidth="0.5" strokeDasharray="2 4" />

                                    {/* Constant Background Pulses */}
                                    <motion.circle r="1" fill="white" opacity="0.4">
                                        <animateMotion dur="8s" repeatCount="Indefinite" path="M 220 100 L calc(100% - 220px) 80" />
                                    </motion.circle>
                                    <motion.circle r="1" fill="#FF4D00" opacity="0.6">
                                        <animateMotion dur="12s" repeatCount="Indefinite" path="M 220 400 L calc(100% - 220px) 410" />
                                    </motion.circle>

                                    {/* Direct Cross-Side Synergy Lines */}
                                    <path d="M 220 100 L calc(100% - 220px) 80" stroke="white" strokeDasharray="4 8" strokeOpacity="0.2" />
                                    <path d="M 220 400 L calc(100% - 220px) 410" stroke="white" strokeDasharray="4 8" strokeOpacity="0.2" />
                                </g>

                                <AnimatePresence>
                                    {activeCycle.stage === 'input' && (
                                        <>
                                            <motion.path
                                                d="M 220 175 Q 300 250, 220 325"
                                                stroke="#FF4D00"
                                                strokeWidth="1"
                                                fill="none"
                                                initial={{ pathLength: 0, opacity: 0 }}
                                                animate={{ pathLength: 1, opacity: [0, 0.4, 0] }}
                                                transition={{ duration: 1, delay: 0.5 }}
                                            />
                                            {/* Technical Bitstream Overlay (floating numbers) */}
                                            <motion.text
                                                x="300" y="200"
                                                fill="#FF4D00"
                                                fontSize="8"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: [0, 0.5, 0], y: 150 }}
                                                transition={{ duration: 2 }}
                                                className="font-mono"
                                            >
                                                SYNC_RESONANCE: {syncValue}%
                                            </motion.text>

                                            {/* Extra Synergy Packets */}
                                            <motion.circle r="0.8" fill="#FF4D00">
                                                <animateMotion dur="1.5s" repeatCount="1" path="M 220 175 Q 300 250, 220 325" />
                                            </motion.circle>
                                            <motion.circle r="0.8" fill="#FF4D00">
                                                <animateMotion dur="2s" delay="0.5s" repeatCount="1" path="M 220 100 Q 150 212, 220 325" />
                                            </motion.circle>
                                        </>
                                    )}
                                </AnimatePresence>

                                {/* Diverging Pulses (Center to Right) */}
                                {EF_OUTPUTS.map((_, i) => {
                                    const pathD = `M 50% 50% Q calc(100% - 400px) ${80 + i * 110}, calc(100% - 220px) ${80 + i * 110}`;
                                    const isCurrent = activeCycle.stage === 'output' && activeCycle.outputIdx === i;
                                    return (
                                        <g key={`r-${i}`}>
                                            <path d={pathD} stroke="white" strokeOpacity="0.03" fill="none" strokeWidth="1" />
                                            <AnimatePresence>
                                                {isCurrent && (
                                                    <motion.path
                                                        d={pathD}
                                                        stroke="#FF4D00"
                                                        strokeWidth="2"
                                                        fill="none"
                                                        initial={{ pathLength: 0, opacity: 0 }}
                                                        animate={{ pathLength: 1, opacity: [0, 1, 1, 0] }}
                                                        exit={{ opacity: 0 }}
                                                        transition={{ duration: 2, ease: "easeInOut" }}
                                                    />
                                                )}
                                            </AnimatePresence>
                                        </g>
                                    );
                                })}
                            </svg>
                        </div>

                        {/* Contextual Bottom Phrase */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 0.5, y: 0 }}
                            transition={{ delay: 1.5, duration: 2 }}
                            className="text-center mt-20"
                        >
                            <p className="text-[10px] md:text-sm font-mono tracking-[0.6em] uppercase text-gray-400">
                                Transformamos ecossistema em impacto mensurável.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Architecture Flow Display */}
                <motion.div
                    style={{ opacity: techContentOpacity, y: techContentY }}
                    className="absolute inset-0 z-40 flex flex-col items-center justify-center pointer-events-none"
                >
                    <div className="max-w-7xl w-full px-6 flex flex-col items-center mt-32">
                        <div className="relative w-full flex items-center justify-between pointer-events-auto">

                            {/* Intelligent Circuit Base Line */}
                            <div className="absolute top-[15px] left-0 w-full h-[1px] bg-white/10" />

                            {/* Global Active Pulse (Only when nothing is selected) */}
                            {activeNodeIdx === null && (
                                <div className="absolute top-[15px] left-0 w-full h-[1px] overflow-hidden">
                                    <motion.div
                                        animate={{
                                            x: ['-100%', '100%'],
                                            opacity: [0, 1, 0]
                                        }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                        className="w-1/4 h-full bg-gradient-to-r from-transparent via-davos-orange/30 to-transparent"
                                    />
                                </div>
                            )}

                            {/* Illuminated Path to Active Node */}
                            {activeNodeIdx !== null && (
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${(activeNodeIdx / (TECH_FLOW.length - 1)) * 100}%` }}
                                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    className="absolute top-[15px] left-0 h-[1px] bg-davos-orange/40 shadow-[0_0_10px_rgba(255,77,0,0.4)] z-0"
                                >
                                    <motion.div
                                        animate={{ x: ['-100%', '100%'] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-davos-orange/40 to-transparent p-0"
                                    />
                                </motion.div>
                            )}

                            {TECH_FLOW.map((node, idx) => (
                                <motion.div
                                    key={idx}
                                    onClick={() => {
                                        if (activeNodeIdx === idx) {
                                            setActiveNodeIdx(null);
                                            setIsLineFinished(false);
                                        } else {
                                            setActiveNodeIdx(idx);
                                            setIsLineFinished(false);
                                            // Reliable sequence delay
                                            setTimeout(() => setIsLineFinished(true), 800);
                                        }
                                    }}
                                    animate={{
                                        scale: activeNodeIdx === idx ? 1.05 : 1,
                                        opacity: activeNodeIdx !== null && activeNodeIdx !== idx ? 0.3 : 1
                                    }}
                                    className="relative flex flex-col items-center text-center group cursor-pointer z-10 pt-2"
                                >
                                    {/* Node Point */}
                                    <div className={`w-3.5 h-3.5 rounded-full relative transition-all duration-700 mb-6 ${activeNodeIdx === idx ? 'bg-davos-orange shadow-[0_0_15px_rgba(255,77,0,0.6)] scale-110' : 'bg-white/10 border border-white/20'}`}>
                                        <div className={`absolute inset-0 rounded-full bg-davos-orange/40 ${activeNodeIdx === idx ? 'animate-ping' : 'opacity-0'}`} />
                                        <div className="absolute inset-0 rounded-full bg-davos-orange scale-0 group-hover:scale-100 transition-transform duration-300 pointer-events-none opacity-30" />
                                    </div>

                                    {/* Vertical Connector */}
                                    <AnimatePresence>
                                        {activeNodeIdx === idx && isLineFinished && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 100, opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.4 }}
                                                className="absolute top-[25px] left-1/2 -translate-x-1/2 w-[1px] bg-davos-orange/40 z-0 pointer-events-none"
                                            />
                                        )}
                                    </AnimatePresence>

                                    {/* Content Area */}
                                    <div className="space-y-2 pointer-events-none mt-4">
                                        <h3 className={`text-xl font-bold transition-colors tracking-tight ${activeNodeIdx === idx ? 'text-davos-orange' : 'text-white'}`}>
                                            {node.step}
                                        </h3>
                                        <p className="text-[12px] text-gray-500 font-light max-w-[150px] leading-tight">
                                            {node.phrase}
                                        </p>
                                        <p className={`text-[9px] font-mono tracking-widest uppercase transition-colors ${activeNodeIdx === idx ? 'text-davos-orange/60' : 'text-gray-700'}`}>
                                            {node.tech}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Expansion Panel (Circuit Enclosure) */}
                        <div className="w-full relative mt-10 pointer-events-auto min-h-[0px]">
                            <AnimatePresence>
                                {activeNodeIdx !== null && isLineFinished && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 5 }}
                                        transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
                                        className="w-full relative"
                                    >
                                        {/* Minimal Outer Border Segment - only top connect */}
                                        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-[1px] h-1 bg-davos-orange/30" />

                                        <div className="w-full bg-[#080808]/40 backdrop-blur-3xl rounded-[1.5rem] p-8 md:p-12 border-t border-white/5 border-l border-white/5">
                                            <div className="grid md:grid-cols-2 gap-16 items-center">
                                                <div className="space-y-4">
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-6 h-px bg-davos-orange/30" />
                                                        <h4 className="text-[9px] font-mono tracking-[0.4em] text-davos-orange/60 uppercase">Módulo Davos</h4>
                                                    </div>
                                                    <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                                                        {TECH_FLOW[activeNodeIdx].internalTitle}
                                                    </h3>
                                                </div>
                                                <div className="grid grid-cols-1 gap-5">
                                                    {TECH_FLOW[activeNodeIdx].details.map((detail, dIdx) => (
                                                        <motion.div
                                                            key={dIdx}
                                                            initial={{ opacity: 0, x: 15 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: 0.5 + dIdx * 0.05 }}
                                                            className="flex items-center gap-6 group/item"
                                                        >
                                                            <div className="relative flex items-center justify-center">
                                                                <div className="w-1 h-1 rounded-full bg-davos-orange/40" />
                                                                <div className="absolute inset-x-[-8px] h-px bg-davos-orange/20 scale-x-0 group-hover/item:scale-x-100 transition-transform duration-500" />
                                                            </div>
                                                            <span className="text-gray-400 text-base md:text-lg font-light group-hover/item:text-white transition-colors">{detail}</span>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* System Status - Bottom Right */}
                    <div className="absolute bottom-32 right-12 text-right overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeNodeIdx === null ? "idle" : activeNodeIdx}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.4 }}
                                className="flex flex-col items-end"
                            >
                                <div className="flex items-center justify-end gap-2 mb-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                    <span className="text-[10px] font-mono text-emerald-500/80 uppercase tracking-widest">
                                        {activeNodeIdx !== null ? TECH_FLOW[activeNodeIdx].status : "Sistema ativo"}
                                    </span>
                                </div>
                                <p className="text-[10px] font-mono text-gray-600 tracking-tighter">
                                    {activeNodeIdx !== null ? TECH_FLOW[activeNodeIdx].statusSub : "99.98% uptime"}
                                </p>
                                {activeNodeIdx !== null && (
                                    <p className="text-[9px] font-mono text-gray-700 tracking-tighter mt-1 opacity-50">99.98% uptime</p>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </motion.div>

                {/* Scroll Indicators */}
                {/* Scroll Indicators removed for single video */}


            </div>
        </div >
    );
};

export default Hero;
