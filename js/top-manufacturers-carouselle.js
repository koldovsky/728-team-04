(function(){

    const slides = [
        '<div class="top-manufacturers-slide"><img src="img/ford-logo.png" alt="Ford trademark" width="200"></div>',
        '<div class="top-manufacturers-slide"><img src="img/honda-logo.png" alt="Honda trademark" width="200"></div>',
        '<div class="top-manufacturers-slide"><img src="img/bmw-logo.png" alt="BMW trademark" width="200"></div>',
        '<div class="top-manufacturers-slide"><img src="img/audi-logo.png" alt="Audi trademark" width="200"></div>'
    ];
    
    let currentSlideIdx = 0;
    
    function renderSlide() {
        const slideContainer = document.querySelector('.top-manufacturers__autobrands-carrousel .top-manufacturers-slide');
        slideContainer.innerHTML = slides [currentSlideIdx];
    };

    function nextSlide() {
        currentSlideIdx = (currentSlideIdx + 1) >= slides.length ? 0 : currentSlideIdx + 1;
        renderSlide();
    };

    setInterval (nextSlide, 3000);

    renderSlide ();
})()