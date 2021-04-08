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
});
$('.hamburger').click(function () {
    $(this).toggleClass("hamburger_active");
});
new WOW().init();


$(".works__descr").hover(function (e) {
    $(this).addClass('animate__animated animate__flipInY');
});

$(".works__descr").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function () {
    $(this).removeClass('animate__animated animate__flipInY');
});