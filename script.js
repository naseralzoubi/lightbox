document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.gallery-img');
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = document.querySelector('.lightbox-content');
    const close = document.querySelector('.close-lightbox');
    const photoTitle = document.querySelector('.photo-details h3');
    const photoDesc = document.querySelector('.photo-details p');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Menu Toggle
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Lightbox
    images.forEach(image => {
        image.addEventListener('click', () => {
            lightbox.style.display = 'flex';
            lightboxImg.src = image.src;
            
            const overlay = image.nextElementSibling;
            photoTitle.textContent = overlay.querySelector('h3').textContent;
            photoDesc.textContent = overlay.querySelector('p').textContent;
        });
    });

    close.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.style.display === 'flex') {
            lightbox.style.display = 'none';
        }
    });
});
