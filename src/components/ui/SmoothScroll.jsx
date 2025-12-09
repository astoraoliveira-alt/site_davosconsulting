import React, { useEffect } from 'react';

const SmoothScroll = () => {
    useEffect(() => {
        // Smooth scroll for anchor links
        const handleClick = (e) => {
            const target = e.target.closest('a[href^="#"]');
            if (!target) return;

            const href = target.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const element = document.querySelector(href);

            if (element) {
                const offset = 80; // navbar height
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        };

        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    }, []);

    return null;
};

export default SmoothScroll;
