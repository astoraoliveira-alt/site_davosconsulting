import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const SectionWrapper = ({ children, className = "", id = "" }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.2 1"]
    });

    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

    return (
        <motion.section
            ref={ref}
            id={id}
            style={{ opacity, y, scale }}
            className={`relative ${className}`}
        >
            {children}
        </motion.section>
    );
};

export default SectionWrapper;
