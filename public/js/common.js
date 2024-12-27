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

$(".signup_input-country_active").click(function() {
    $(".signup_input-country_list").slideToggle(300);
})
$(".signup_input-country_list li").click(function() {
    $(".signup_input-country_list").slideUp(300);
})
$(document).click(function (event) {
    var withdrawSelect = $(".signup_input-country");
    if (!withdrawSelect.is(event.target) && withdrawSelect.has(event.target).length === 0) {
        $(".signup_input-country_list").slideUp(300);
    }
});