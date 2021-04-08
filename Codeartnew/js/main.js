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