$(function () {

    $('.mainscreen__slide').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        dots: true,
        arrows: true,
    });
    $('.services__inner').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
    });

    $('.reviews__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        adaptiveHeight: true,
        asNavFor: '.reviews__nav'
    });
    $('.reviews__nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.reviews__slider',
        focusOnSelect: true
    });


});
new WOW().init();
$('.hamburger').click(function () {
    $(this).toggleClass("hamburger_active");
});



$(".works__descr").hover(function () {
    $(this).addClass('animate__animated wow animate__flipInY');
});

$(".works__descr").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function () {
    $(this).removeClass('animate__animated wow animate__flipInY');
});