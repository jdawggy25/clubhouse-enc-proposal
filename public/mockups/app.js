/**
 * Premium Mockup Interactions Engine
 * Template Theme
 */

document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const loaderProgress = document.querySelector('.loader-progress');
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    const nav = document.querySelector('.nav');

    console.log('Premium Mockup Engine v1.0 Initialized');

    // ===========================================
    // 0. Theme & Mode Switcher
    // ===========================================
    function initThemeSwitcher() {
        const themeBtns = document.querySelectorAll('.theme-btn');
        const modeToggle = document.getElementById('modeToggle');
        const html = document.documentElement;

        // Set default theme
        html.setAttribute('data-theme', 'blue');
        html.setAttribute('data-mode', 'dark');

        // Accent color switcher
        themeBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const theme = btn.getAttribute('data-theme');

                // Update active state
                themeBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                // Apply theme
                html.setAttribute('data-theme', theme);

                console.log(`✓ Accent switched to: ${theme}`);
            });
        });

        // Light/Dark mode toggle
        if (modeToggle) {
            modeToggle.addEventListener('click', () => {
                const currentMode = html.getAttribute('data-mode');
                const newMode = currentMode === 'dark' ? 'light' : 'dark';

                html.setAttribute('data-mode', newMode);

                console.log(`✓ Mode switched to: ${newMode}`);
            });
        }

        console.log('✓ Theme switcher initialized');
    }

    initThemeSwitcher();

    // ===========================================
    // 1. Dramatic Loader with Progress
    // ===========================================
    let loadProgress = 0;
    const loadDuration = 1800; // Total load time in ms
    const startTime = Date.now();

    function updateLoader() {
        const elapsed = Date.now() - startTime;
        loadProgress = Math.min((elapsed / loadDuration) * 100, 100);

        // Eased progress for smoother feel
        const easedProgress = easeOutExpo(loadProgress / 100) * 100;

        if (loaderProgress) {
            loaderProgress.style.width = easedProgress + '%';
        }

        if (loadProgress < 100) {
            requestAnimationFrame(updateLoader);
        } else {
            setTimeout(() => {
                body.classList.remove('loading');
                body.classList.add('loaded');
                initScrollObserver();
                initParallax();
                initCounters();
                console.log('✓ Page loaded - all animations triggered');
            }, 300);
        }
    }

    requestAnimationFrame(updateLoader);

    // Easing function for smooth progress
    function easeOutExpo(x) {
        return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
    }

    // ===========================================
    // 2. Premium Custom Cursor with Lerp
    // ===========================================
    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let cursorPos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let followerPos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const cursorSpeed = 1; // Instant for dot
    const followerSpeed = 0.12; // Smooth follow for ring

    document.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    function animateCursor() {
        // Cursor dot - instant follow
        cursorPos.x += (mouse.x - cursorPos.x) * cursorSpeed;
        cursorPos.y += (mouse.y - cursorPos.y) * cursorSpeed;

        // Follower ring - smooth lerp
        followerPos.x += (mouse.x - followerPos.x) * followerSpeed;
        followerPos.y += (mouse.y - followerPos.y) * followerSpeed;

        if (cursor) {
            cursor.style.left = cursorPos.x + 'px';
            cursor.style.top = cursorPos.y + 'px';
        }

        if (cursorFollower) {
            cursorFollower.style.left = followerPos.x + 'px';
            cursorFollower.style.top = followerPos.y + 'px';
        }

        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // ===========================================
    // 3. Interactive Elements - Magnetic Effect
    // ===========================================
    const interactiveElements = document.querySelectorAll('a, button, .glass-card, .bento-item, .pillar-card');

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            body.classList.add('hovering');
        });

        el.addEventListener('mouseleave', () => {
            body.classList.remove('hovering');
            // Reset transform with smooth transition
            el.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
            el.style.transform = '';
        });

        // Magnetic pull on buttons only
        if (el.tagName === 'A' || el.tagName === 'BUTTON') {
            el.addEventListener('mousemove', (e) => {
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;

                el.style.transition = 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)';
                el.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
            });
        }
    });

    // ===========================================
    // 4. Scroll Observer - Reveal Animations
    // ===========================================
    function initScrollObserver() {
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -80px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Stagger the reveal based on element position
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, index * 100);
                }
            });
        }, observerOptions);

        document.querySelectorAll('[data-scroll]').forEach(el => {
            observer.observe(el);
        });

        console.log('✓ Scroll observer initialized');
    }

    // ===========================================
    // 5. Parallax Effects
    // ===========================================
    function initParallax() {
        const heroImg = document.querySelector('.parallax-img');
        const heroContent = document.querySelector('.hero-content');
        const parallaxStrips = document.querySelectorAll('.parallax-strip-img');

        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            const windowHeight = window.innerHeight;

            // Nav background on scroll
            if (nav) {
                if (scrolled > 80) {
                    nav.classList.add('scrolled');
                } else {
                    nav.classList.remove('scrolled');
                }
            }

            // Hero parallax - only when in view
            if (scrolled < windowHeight * 1.5) {
                if (heroImg) {
                    const parallaxSpeed = 0.4;
                    heroImg.style.transform = `translateY(${scrolled * parallaxSpeed}px) scale(1.1)`;
                }

                // Subtle content parallax
                if (heroContent) {
                    const contentSpeed = 0.15;
                    heroContent.style.transform = `translateY(${scrolled * contentSpeed}px)`;
                    heroContent.style.opacity = 1 - (scrolled / windowHeight) * 0.8;
                }
            }

            // Parallax strips
            parallaxStrips.forEach(strip => {
                const rect = strip.parentElement.getBoundingClientRect();
                if (rect.top < windowHeight && rect.bottom > 0) {
                    const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
                    const translateY = (progress - 0.5) * 100;
                    strip.style.transform = `translateY(${translateY}px)`;
                }
            });
        }, { passive: true });

        console.log('✓ Parallax effects initialized');
    }

    // ===========================================
    // 6. Mobile Menu Toggle
    // ===========================================
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            body.classList.toggle('menu-open');
            menuToggle.classList.toggle('active');
        });
    }

    // ===========================================
    // 7. Smooth Scroll for Anchor Links
    // ===========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);

            if (target) {
                const headerOffset = 100;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                body.classList.remove('menu-open');
            }
        });
    });

    // ===========================================
    // 8. Split Text Animation - Lando Norris Style
    // ===========================================
    function initSplitText() {
        document.querySelectorAll('[data-split]').forEach(element => {
            const text = element.textContent;
            element.textContent = '';

            text.split('').forEach((char, i) => {
                const span = document.createElement('span');
                span.textContent = char === ' ' ? '\u00A0' : char;
                element.appendChild(span);
            });
        });
        console.log('✓ Split text animation initialized');
    }

    // Run split text immediately (before load animation completes)
    initSplitText();

    // ===========================================
    // 9. Counter Animation for Stats
    // ===========================================
    function initCounters() {
        const counters = document.querySelectorAll('[data-count]');

        if (!counters.length) return;

        const observerOptions = {
            threshold: 0.5,
            rootMargin: '0px'
        };

        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = parseInt(counter.getAttribute('data-count'), 10);
                    animateCounter(counter, target);
                    counterObserver.unobserve(counter);
                }
            });
        }, observerOptions);

        counters.forEach(counter => counterObserver.observe(counter));

        console.log('✓ Counter animations initialized');
    }

    function animateCounter(element, target) {
        const duration = 2000; // 2 seconds
        const startTime = Date.now();
        const startValue = 0;

        function updateCount() {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function - ease out expo
            const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            const currentValue = Math.floor(startValue + (target - startValue) * easedProgress);

            element.textContent = currentValue;

            if (progress < 1) {
                requestAnimationFrame(updateCount);
            } else {
                element.textContent = target;
            }
        }

        requestAnimationFrame(updateCount);
    }

    // ===========================================
    // 9. Detect touch devices
    // ===========================================
    function isTouchDevice() {
        return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    }

    if (isTouchDevice()) {
        body.classList.add('touch-device');
        // Hide custom cursor on touch devices
        if (cursor) cursor.style.display = 'none';
        if (cursorFollower) cursorFollower.style.display = 'none';
        body.style.cursor = 'auto';
    }

    // ===========================================
    // 10. Performance - Throttle scroll events
    // ===========================================
    function throttle(func, limit) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    // ===========================================
    // 11. Marquee duplication for seamless loop
    // ===========================================
    const marqueeContent = document.querySelector('.marquee-content');
    if (marqueeContent) {
        // Clone content for seamless loop
        const clone = marqueeContent.innerHTML;
        marqueeContent.innerHTML = clone + clone;
    }

    console.log('✓ RECVR Premium Engine fully loaded');
});
