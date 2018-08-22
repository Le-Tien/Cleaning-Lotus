var slides=document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var SlideInterval = setInterval(nextSlide,10000);
var sl=document.querySelector('slider');
function nextSlide() {

    slides[currentSlide].className='slide';
    currentSlide =(currentSlide+1)%slides.length;
    slides[currentSlide].className='slide show';
}