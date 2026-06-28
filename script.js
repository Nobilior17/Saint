// ===== Анимация появления карточек при скролле =====
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card, .stat-card, .practice-placeholder');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: '0px 0px -30px 0px'
    });

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(25px)';
        card.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
        observer.observe(card);
    });

    // ===== Анимация для навыков (заполнение шкал) =====
    const skillBars = document.querySelectorAll('.skill-fill');
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const width = bar.style.width;
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = width;
                }, 200);
            }
        });
    }, { threshold: 0.3 });

    skillBars.forEach(bar => skillObserver.observe(bar));

    // ===== ПОДСВЕТКА АКТИВНОГО ПУНКТА МЕНЮ ПРИ СКРОЛЛЕ =====
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('section[id], header[id]');

    function updateActiveNav() {
        let current = 'home';
        const scrollPosition = window.scrollY + 120;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.id;
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.dataset.section === current) {
                item.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav);
    window.addEventListener('load', updateActiveNav);

    // ===== Эффект скролла для навигационной панели =====
    const nav = document.getElementById('mainNav');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    console.log('✨ Фиолетовое портфолио Артёма загружено!');
    console.log('📌 Навигация работает!');
    console.log('👤 ФИО: Алейников Артём Анатольевич');
});