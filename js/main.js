document.addEventListener('DOMContentLoaded', () => {
    // Fade-in анимации
    const animatedElements = document.querySelectorAll(
        '.service-card, .project-card, .approach__content, .tech__group, .contact-item'
    );

    animatedElements.forEach(el => el.classList.add('fade-in'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 80);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    });

    animatedElements.forEach(el => observer.observe(el));

    // Модальное окно для скриншотов
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const modalClose = document.getElementById('modal-close');
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            const img = card.querySelector('.project-card__preview img');
            if (img) {
                modalImg.src = img.src;
                modalImg.alt = img.alt;
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target === modalImg) closeModal();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    // Кнопка "наверх"
    const backToTop = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
});
