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

$(".member_edit").click(function() {
    $(".member_edit_content").show();
    $(".member_name_view").hide();
})

$(".member_edit_content button").click(function() {
    $(".member_edit_content").hide();
    $(".member_name_view").show().css("display", "flex");
})

$(".member_edit_save").click(function() {
    let username = $(this).parents(".member_edit_content").find("input").val();
    $(".member_name_view_text").text(username);
})

$(".member_about_btn-edit").click(function() {
    $(this).hide();
    $(".member_about_intro").hide();

    $(".member_about_btn-cancel, .member_about_btn-save, .member_about_textarea").show();
})

$(".member_about_btn-cancel").click(function() {
    $(".member_about_intro, .member_about_btn-edit").show();
    $(".member_about_btn-cancel, .member_about_btn-save, .member_about_textarea").hide();
})

$(".member_about_btn-save").click(function() {
    let about = $(".member_about_textarea").val();
    $(".member_about_intro").text(about);
    $(".member_about_intro, .member_about_btn-edit").show();
    $(".member_about_btn-cancel, .member_about_btn-save, .member_about_textarea").hide();
})

$(".header_more_trigger").click(function() {
    $(".header_more_list").fadeToggle(300);
})

$(document).click(function (event) {
    var headerMore = $(".header_more");
    if (!headerMore.is(event.target) && headerMore.has(event.target).length === 0) {
        $(".header_more_list").fadeOut(300);
    }
});