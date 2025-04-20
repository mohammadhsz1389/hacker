document.addEventListener('DOMContentLoaded', function() {
    // منوی موبایل
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navList = document.querySelector('.nav-list');

    mobileMenuBtn.addEventListener('click', function() {
        navList.classList.toggle('active');
    });

    // اسکرول نرم برای لینک‌های منو
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            // بستن منوی موبایل در صورت باز بودن
            if (navList.classList.contains('active')) {
                navList.classList.remove('active');
            }

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // افکت اسکرول برای بخش‌ها
    const sections = document.querySelectorAll('.section');
    
    function checkScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight - 100) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    }
    
    // تنظیم اولیه برای انیمیشن
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // اجرا در لود اولیه
    checkScroll();
    
    // اجرا در هنگام اسکرول
    window.addEventListener('scroll', checkScroll);

    // فرم تماس
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // در اینجا می‌توانید کد ارسال فرم را اضافه کنید
            alert('پیام شما با موفقیت ارسال شد!');
            this.reset();
        });
    }

    // تغییر رنگ هدر هنگام اسکرول
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(30, 30, 30, 0.9)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
        } else {
            header.style.background = 'var(--surface)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
        }
    });
});