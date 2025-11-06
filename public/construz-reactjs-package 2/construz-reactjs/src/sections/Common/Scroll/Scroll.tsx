
import { useState, useEffect } from 'react';

const ScrollTopButton = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    const updateScrollProgress = () => {
        if (typeof window !== undefined) {
            const scrollTop = window.scrollY;
            const scrollHeight = document.documentElement.scrollHeight;
            const clientHeight = window.innerHeight;
            const totalHeight = scrollHeight - clientHeight;
            const progress = (scrollTop / totalHeight) * 100;

            setScrollProgress(progress);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', updateScrollProgress);
        return () => {
            window.removeEventListener('scroll', updateScrollProgress);
        };
    }, []);

    const scrollToTop = () => {
        if (typeof window !== undefined) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    };

    const strokeDashoffset = (307.919 * (100 - scrollProgress)) / 100;

    return (typeof window !== undefined &&
        <a
            href="#"
            className={`scroll-top ${scrollProgress > 1 ? 'show' : ''}`}
            onClick={(e) => {
                e.preventDefault();
                scrollToTop();
            }}
        >
            <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                <path
                    d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
                    style={{
                        transition: 'stroke-dashoffset 10ms linear',
                        strokeDasharray: '307.919, 307.919',
                        strokeDashoffset: strokeDashoffset
                    }}
                ></path>
            </svg>
        </a>
    );
};

export default ScrollTopButton;











