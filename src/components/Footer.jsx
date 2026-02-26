import React from 'react';
import { Mail, Linkedin, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="footer" className="bg-davos-black border-t border-white/10 pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                    <div className="mb-8 md:mb-0 text-center md:text-left">
                        <h2 className="text-3xl font-bold text-white mb-2">DAVOS</h2>
                        <p className="text-gray-500">Driving. Agility. Partnership.</p>
                    </div>

                    <div className="flex gap-8">
                        <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-davos-blue hover:text-white transition-colors text-gray-400">
                            <Phone size={20} />
                        </a>
                        <a href="mailto:contato@davosbr.com" className="p-3 bg-white/5 rounded-full hover:bg-davos-blue hover:text-white transition-colors text-gray-400">
                            <Mail size={20} />
                        </a>
                        <a href="https://www.linkedin.com/company/davosbr/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-davos-blue hover:text-white transition-colors text-gray-400">
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 text-center text-sm text-gray-600">
                    <p>&copy; {new Date().getFullYear()} DAVOS. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
