import React from 'react';
import SectionWrapper from './ui/SectionWrapper';
import TextReveal from './ui/TextReveal';

const Mission = () => {
    return (
        <SectionWrapper className="py-24 bg-davos-dark border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-sm font-medium tracking-[0.2em] text-gray-500 uppercase mb-8">
                        Nossa Missão
                    </h3>
                    <div className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-white">
                        <TextReveal text="Apoiar verdadeiramente nossos clientes a executar e gerir seus principais desafios de transformação." />
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Mission;
