import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Instagram, ArrowRight, MessageCircle } from 'lucide-react';
import SectionWrapper from './ui/SectionWrapper';

const Contact = () => {
    const contactInfo = [
        {
            icon: <Mail className="text-davos-orange" size={24} />,
            title: "E-mail",
            value: "contato@davosbr.com",
            link: "mailto:contato@davosbr.com"
        },
        {
            icon: <Phone className="text-davos-orange" size={24} />,
            title: "Telefone",
            value: "+55 (11) 98038-0808",
            link: "tel:+5511980380808"
        },
        {
            icon: <MapPin className="text-davos-orange" size={24} />,
            title: "Endereço",
            value: "Av. Paulista, 1000 - Bela Vista - São Paulo/SP",
            link: "https://maps.app.goo.gl/uXh9U9uYcYXbYFfX8"
        }
    ];

    const socialLinks = [
        { name: 'LinkedIn', icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/company/davosbr/' },
        { name: 'Instagram', icon: <Instagram size={20} />, href: 'https://www.instagram.com/davos.consulting/' },
    ];

    return (
        <SectionWrapper id="fale-conosco" className="py-24 md:py-32 bg-davos-black relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-davos-orange/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16 md:mb-24"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Fale <span className="text-davos-orange">Conosco</span>
                        </h2>
                        <p className="text-lg md:text-xl text-gray-400 font-light max-w-2xl leading-relaxed">
                            Estamos prontos para transformar seu negócio através de estratégia, processos e tecnologia de ponta.
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        {/* Info Column */}
                        <div className="space-y-12">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-8">
                                {contactInfo.map((item, idx) => (
                                    <motion.a
                                        key={idx}
                                        href={item.link}
                                        target={item.title === 'Endereço' ? '_blank' : undefined}
                                        rel={item.title === 'Endereço' ? 'noopener noreferrer' : undefined}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="flex items-start gap-6 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all group"
                                    >
                                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-davos-orange/10 flex items-center justify-center transition-transform group-hover:scale-110">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-bold text-davos-orange uppercase tracking-widest mb-1">{item.title}</h3>
                                            <p className="text-lg text-white font-light group-hover:text-davos-orange transition-colors">{item.value}</p>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>

                            <div className="pt-8 border-t border-white/10">
                                <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6">Redes Sociais</h3>
                                <div className="flex gap-4">
                                    {socialLinks.map((social) => (
                                        <a
                                            key={social.name}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-davos-orange hover:text-white hover:border-davos-orange transition-all"
                                            title={social.name}
                                        >
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Map Column */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative h-[400px] lg:h-full min-h-[450px] rounded-3xl overflow-hidden grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700 border border-white/10 shadow-2xl"
                        >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.106692345678!2d-46.653905523758!3d-23.5646162356789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f94d444393605!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-100!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                            <div className="absolute top-6 left-6 p-4 bg-davos-black/80 backdrop-blur-md rounded-2xl border border-white/10 flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-davos-orange animate-pulse" />
                                <span className="text-xs font-bold text-white uppercase tracking-widest">Sede Corporativa</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Company Details Bottom */}
                    <div className="mt-20 p-8 rounded-3xl border border-white/5 bg-gradient-to-tr from-white/[0.02] to-transparent">
                        <div className="grid md:grid-cols-3 gap-8">
                            <div>
                                <h4 className="text-xs font-bold text-davos-orange uppercase tracking-widest mb-2">Razão Social</h4>
                                <p className="text-sm text-gray-400">Davos Consulting Group Ltda.</p>
                            </div>
                            <div>
                                <h4 className="text-xs font-bold text-davos-orange uppercase tracking-widest mb-2">CNPJ</h4>
                                <p className="text-sm text-gray-400">42.251.107/0001-46</p>
                            </div>
                            <div>
                                <h4 className="text-xs font-bold text-davos-orange uppercase tracking-widest mb-2">Atendimento</h4>
                                <p className="text-sm text-gray-400">Segunda à Sexta, das 09h às 18h</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Contact;
