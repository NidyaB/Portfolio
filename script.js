// Toggle Hamburger Menu
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.querySelector('i').classList.toggle('fa-xmark');
    menuIcon.querySelector('i').classList.toggle('fa-bars');
    navbar.classList.toggle('active');
};

// Scroll Sections Active Link
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // Remove toggle icon and navbar when click navbar link (scroll)
    menuIcon.querySelector('i').classList.remove('fa-xmark');
    menuIcon.querySelector('i').classList.add('fa-bars');
    navbar.classList.remove('active');
};

// Typing Animation
const words = ["Software Developer", "QA Automation Engineer", "Frontend Developer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingTextElement = document.querySelector(".typing-text");

function type() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
        typingTextElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingTextElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = 100;

    if (isDeleting) {
        typeSpeed /= 2;
    }

    if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 1500; // Pause at end of word
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500; // Pause before new word
    }

    setTimeout(type, typeSpeed);
}

// Start typing animation on DOM load
document.addEventListener("DOMContentLoaded", () => {
    if (typingTextElement) {
        setTimeout(type, 1000);
    }
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
    for (let i = 0; i < revealElements.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = revealElements[i].getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            revealElements[i].classList.add('active');
            
            // If it's the skills section, trigger the progress bars
            if (revealElements[i].classList.contains('skills')) {
                const skillBars = document.querySelectorAll('.skill-per');
                skillBars.forEach(bar => bar.classList.add('active'));
            }
        }
    }
}

window.addEventListener('scroll', revealOnScroll);
// Trigger once on load
revealOnScroll();

// Scroll to Top Button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

if (scrollToTopBtn) {
    window.addEventListener('scroll', () => {
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });

    scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// Prevent form submission redirect for demo
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for reaching out! This is a demo form.');
        e.target.reset();
    });
}