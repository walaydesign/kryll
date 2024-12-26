$(".header_menu").click(function() {
    if($(window).width() < 992) {
        $(".nav-common").fadeToggle(300);
    }
})

var swiperStep = new Swiper(".step_swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    allowTouchMove: true,
    breakpoints: {
        1200: {
            slidesPerView: 3,
            spaceBetween: 30,
            allowTouchMove: false,
        }
    }
})