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