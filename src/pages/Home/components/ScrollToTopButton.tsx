/* eslint-disable no-promise-executor-return */
import { ChevronUpIcon } from '@heroicons/react/outline';
import { useState, useEffect } from 'react';

function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        let lastScrollPosition = window.pageYOffset;

        const scrollUp = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        };

        // Primeira tentativa de rolar para o topo
        scrollUp();

        // Verifica a cada 200 ms se o scroll chegou ao topo ou parou
        const checkScroll = setInterval(() => {
            if (window.pageYOffset === 0) {
                clearInterval(checkScroll);
            } else if (window.pageYOffset === lastScrollPosition) {
                // Scroll parou, tenta novamente
                scrollUp();
            }
            // Atualiza a última posição de scroll para a próxima verificação
            lastScrollPosition = window.pageYOffset;
        }, 20);
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    if (!isVisible) return null;

    return (
        <button
            type="button"
            onClick={scrollToTop}
            className="bg-main-500 hover:bg-main-800 text-white font-bold py-2 px-4 rounded fixed bottom-4 right-4 flex items-center"
        >
            <ChevronUpIcon className="h-5 w-5 mr-2" />
            Voltar ao Início
        </button>
    );
}

export default ScrollToTopButton;
