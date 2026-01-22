const typingText = "Suci Arifsyah"; 
const typingElement = document.getElementById('typing');
let i = 0;

function typeWriter() {
    if (i < typingText.length) {
        typingElement.innerHTML += typingText.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}
typeWriter();

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
           
            if (entry.target.id === 'education') {
                const progresses = entry.target.querySelectorAll('.progress');
                progresses.forEach(progress => {
                    progress.style.width = progress.style.width; 
                });
            }
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    observer.observe(section);
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Pesan telah dikirim! (Ini simulasi)');
    this.reset();
});