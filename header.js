    // Efeito de navbar ao rolar
    const header = document.querySelector('header');
    const heroSection = document.querySelector('.hero-section') || document.querySelector('.about-hero') || 
                        document.querySelector('.projects-hero') || document.querySelector('.direct-contact');
    
    if (header && heroSection) {
        const headerScrollEffect = () => {
            if (window.scrollY > heroSection.offsetHeight * 0.2) {
                header.style.background = 'rgba(26, 26, 46, 0.98)';
                header.style.boxShadow = '0 5px 30px rgba(0,0,0,0.2)';
            } else {
                header.style.background = 'rgba(67, 97, 238, 0.95)';
                header.style.boxShadow = '0 4px 30px rgba(0,0,0,0.1)';
            }
        };
        
        window.addEventListener('scroll', headerScrollEffect);
        headerScrollEffect();
    }
