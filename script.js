// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopBtn = document.querySelector('.scroll-to-top');
    
    // Scroll to top functionality
    function toggleScrollToTopButton() {
        if (scrollToTopBtn) {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
        }
    }
    
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    // Add click event to scroll to top button
    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', scrollToTop);
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Asset cards animation on scroll
    function animateAssetCards() {
        const assetCards = document.querySelectorAll('.asset-card');
        
        assetCards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (cardTop < windowHeight - 100) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Review cards animation on scroll
    function animateReviewCards() {
        const reviewCards = document.querySelectorAll('.review-card');
        
        reviewCards.forEach((card, index) => {
            const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (cardTop < windowHeight - 100) {
                // Staggered animation for review cards
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 200);
            }
        });
    }
    
    // Feature cards animation on scroll
    function animateFeatureCards() {
        const featureCards = document.querySelectorAll('.feature-card');
        
        featureCards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (cardTop < windowHeight - 100) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Initialize asset cards with initial styles for animation
    const assetCards = document.querySelectorAll('.asset-card');
    assetCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Initialize review cards with initial styles for animation
    const reviewCards = document.querySelectorAll('.review-card');
    reviewCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Initialize feature cards with initial styles for animation
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    window.addEventListener('scroll', function() {
        animateAssetCards();
        animateReviewCards();
        animateFeatureCards();
        toggleScrollToTopButton();
    });
    
    // Run animations on load
    animateAssetCards();
    animateReviewCards();
    animateFeatureCards();
    
    // Add loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // Initialize scroll to top button visibility
        toggleScrollToTopButton();
    });
    
    // CTA button hover effects enhancement
    const ctaButtons = document.querySelectorAll('.cta-button, .features-btn');
    
    ctaButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.02)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add star animation for reviews
    const starIcons = document.querySelectorAll('.review-stars i');
    starIcons.forEach((star, index) => {
        star.style.animationDelay = `${index * 0.1}s`;
    });
    
    console.log('Webze Crypto Leverage platform loaded successfully!');
});// script.js - Основные скрипты для сайта

document.addEventListener('DOMContentLoaded', function() {
    // Инициализация всех функций
    initScrollToTop();
    initSmoothScrolling();
    initAnimations();
    initStatsCounter();
    initNewsletterForm();
    initNavigation();
});

// Функция для кнопки "Scroll to Top"
function initScrollToTop() {
    const scrollButton = document.querySelector('.scroll-to-top');
    
    if (!scrollButton) return;
    
    // Показать/скрыть кнопку при скролле
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollButton.classList.add('visible');
        } else {
            scrollButton.classList.remove('visible');
        }
    });
    
    // Обработчик клика
    scrollButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Плавная прокрутка для якорных ссылок
function initSmoothScrolling() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Анимации при скролле
function initAnimations() {
    const animatedElements = document.querySelectorAll('.asset-card, .feature-card, .review-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Анимация счетчиков статистики
function initStatsCounter() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = getFinalValue(target.textContent);
                animateCounter(target, 0, finalValue, 2000);
                observer.unobserve(target);
            }
        });
    }, {
        threshold: 0.5
    });
    
    statNumbers.forEach(stat => {
        observer.observe(stat);
    });
    
    function getFinalValue(text) {
        if (text.includes('+')) return parseInt(text);
        if (text === '24/7') return 100;
        if (text === 'DEX') return 50;
        return 0;
    }
    
    function animateCounter(element, start, end, duration) {
        if (element.textContent === 'DEX') {
            setTimeout(() => {
                element.textContent = 'DEX';
            }, 500);
            return;
        }
        
        if (element.textContent === '24/7') {
            setTimeout(() => {
                element.textContent = '24/7';
            }, 500);
            return;
        }
        
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const value = Math.floor(progress * (end - start) + start);
            element.textContent = value + '+';
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }
}

// Форма подписки на новости
function initNewsletterForm() {
    const newsletterForm = document.getElementById('newsletterForm');
    
    if (!newsletterForm) return;
    
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const emailInput = this.querySelector('.newsletter-input');
        const email = emailInput.value.trim();
        
        if (!validateEmail(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        // Имитация отправки данных
        simulateNewsletterSignup(email)
            .then(() => {
                showNotification('Thank you for subscribing!', 'success');
                emailInput.value = '';
            })
            .catch(() => {
                showNotification('Subscription failed. Please try again.', 'error');
            });
    });
    
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function simulateNewsletterSignup(email) {
        return new Promise((resolve, reject) => {
            // Имитация задержки сети
            setTimeout(() => {
                // В реальном приложении здесь был бы AJAX запрос
                if (Math.random() > 0.1) { // 90% успеха для демонстрации
                    resolve();
                } else {
                    reject();
                }
            }, 1000);
        });
    }
}

// Уведомления
function showNotification(message, type = 'info') {
    // Создаем элемент уведомления
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Стили для уведомления
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    // Цвета в зависимости от типа
    const colors = {
        success: 'linear-gradient(45deg, #10B981, #059669)',
        error: 'linear-gradient(45deg, #EF4444, #DC2626)',
        info: 'linear-gradient(45deg, #3B82F6, #2563EB)'
    };
    
    notification.style.background = colors[type] || colors.info;
    
    document.body.appendChild(notification);
    
    // Анимация появления
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Автоматическое скрытие через 5 секунд
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Навигация
function initNavigation() {
    // Добавляем активный класс к текущему разделу
    window.addEventListener('scroll', debounce(function() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.pageYOffset + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                // Обновляем активные ссылки в навигации
                updateActiveNavLink(sectionId);
            }
        });
    }, 10));
    
    function updateActiveNavLink(sectionId) {
        const navLinks = document.querySelectorAll('.footer-link, .cta-button[href*="#"]');
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
                link.classList.add('active');
            }
        });
    }
}

// Функция для отслеживания конверсий Facebook Pixel
function trackFacebookLead() {
    // Здесь может быть код для Facebook Pixel
    console.log('Lead event tracked - Telegram button clicked');
    
    // Можно добавить аналитику Google или другие системы отслеживания
    if (typeof gtag !== 'undefined') {
        gtag('event', 'conversion', {
            'send_to': 'AW-123456789/AbC-D_EFGhIJKLmnopQRSt'
        });
    }
    
    // Показываем уведомление
    showNotification('Redirecting to Telegram...', 'info');
}

// Утилиты
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            timeout = null;
            if (!immediate) func(...args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func(...args);
    };
}

// Оптимизация производительности при скролле
window.addEventListener('scroll', debounce(function() {
    // Код, который должен выполняться при скролле с задержкой
}, 10));

// Обработка ошибок
window.addEventListener('error', function(e) {
    console.error('JavaScript Error:', e.error);
});

// Загрузка страницы
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});