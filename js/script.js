'use strict'

//Replace Text in Header:
const checkReplace = document.querySelector('.replace-me');
if (checkReplace) {
    const replace = new ReplaceMe(checkReplace)
};


//Navbar changes when scrolling down:
function userScroll() {
    const navbar = document.querySelector('.navbar');
    const navbarCollapse = document.getElementById('navbar1');


    //listen to the vertical scroll on the window object
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50 && window.matchMedia("(min-width: 1000px)").matches) {
            navbar.classList.remove('bg-dark');
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
            navbar.style.borderBottom = 'solid rgb(46, 42, 42) 1px';

            navbarCollapse.classList.remove('bg-dark');

        } else {
            navbar.classList.add('bg-dark');
            navbar.style.borderBottom = 'none';

            navbarCollapse.classList.add('bg-dark');

        }
    })
};

//run the function when the content is loaded:
document.addEventListener('DOMContentLoaded', userScroll);

// Video Modal
const videoBtn = document.querySelector('.video-btn');
const videoModal = document.querySelector('#videoModal');
const video = document.querySelector('#video');
let videoSrc;

if (videoBtn !== null) {
    videoBtn.addEventListener('click', () => {
        videoSrc = videoBtn.getAttribute('data-bs-src');
    });
}

if (videoModal !== null) {
    videoModal.addEventListener('shown.bs.modal', () => {
        video.setAttribute(
            'src',
            videoSrc + '?autoplay=1;modestbranding=1;showInfo=0'
        );
    });

    videoModal.addEventListener('hide.bs.modal', () => {
        video.setAttribute('src', videoSrc);
    });
}