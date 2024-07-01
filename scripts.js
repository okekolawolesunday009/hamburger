// window.addEventListener('scroll', function() {
//     const navbar = document.getElementsByClassName('header');
//     if (this.window.scrollY > 0) {
//         navbar.classList.add('blur');
//     } else {
//         navbar.classList.remove('blur');
//     }
//     console.log("kola")
   
// })
console.log("kola");

const track = document.querySelector('.slides-track');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentSlide = 0;
const slidesToShow = getSlidesShow();
const totalSlides = track.children.length;

function updateCarousel () {
    const newTransform = -(currentSlide * (100 / slidesToShow)) + '%';
    track.style.transform = `translateX(${newTransform})`
}

function getSlidesShow () {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 480) return 1;
    else if (screenWidth <= 768) return 2;
    // else if (screenWidth <= 1024) return 4
    else return 4;
}
prevBtn.addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide -= 1;
    }
    updateCarousel()
});


nextBtn.addEventListener('click', () => {
    if (currentSlide < totalSlides / slidesToShow -1 ) {
        currentSlide += 1;
    }
    updateCarousel()
});
window.addEventListener('resize', () => {
    currentSlide = 0;
    updateCarousel();
})

updateCarousel()