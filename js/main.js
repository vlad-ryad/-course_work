/*Кнопка наверх*/
$(function() {
    $('.buttonUp').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    })
})
$(document).scroll(function() {

    if ($(this).scrollTop() > 300) {
        $('.buttonUp').fadeIn();
    } else {
        $('.buttonUp').fadeOut();
    }
});

$(document).scroll(function() {

    if ($(this).scrollTop() > 600) {
        $('.social').fadeIn();
    } else {
        $('.social').fadeOut();
    }
});
/*Плавный скроллинг*/
$(function() {
    $('a[href^="#"]').click("", function(event) {
        event.preventDefault();
        let block = $(this).attr("href"), 
            pocition = $(block).offset().top; 
        $('html, body').animate({ scrollTop: pocition }, 1000);
    });
});

/*Плавное меню*/
let scrollTop = 0;
$(document).scroll(function(event) {
    let st = $(this).scrollTop();
    if (st > scrollTop) {
        $('.header-menu').removeClass('fixed');
    } else {
        $('.header-menu').addClass('fixed');
    }
    scrollTop = st;
});
// Анимация переходов
new WOW().init();