const swiper = new Swiper(".mySwiper", {

    slidesPerView: 1.2,
    spaceBetween: 20,
    centeredSlides: false,

    grabCursor: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        768: {
            slidesPerView:2,
        },
        1024: {
            slidesPerView: 3, 
            slidesPerGroup: 1 
        }
    }
});