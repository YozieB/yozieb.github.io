$(function () {
    $('.mainscreen__slide').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        swipeToSlide: true,
        arrows: false,
    });

    //scroll mousewheel
    $('.mainscreen__slide').on('wheel', (function (e) {
        e.preventDefault();
        if (e.originalEvent.deltaY < 0) {
            $(this).slick('slickNext');
        } else {
            $(this).slick('slickPrev');
        }
    }));

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

    

    new WOW(
        {
            mobile: false,
          }
    ).init();
    
    //modal
    
    $('[data-modal=order]').click(function (){
        $('.popup').fadeIn();
    })
    $('.order__close').click(function (){
        $('.popup').fadeOut();
    })
    
    //Header menu
    
    $('.hamburger').click(function () {
        $('.topoverlay').fadeIn();
    });
    $('.topoverlay__close').click(function (){
        $('.topoverlay').fadeOut();
    });
    
    //animation of works
    
    $('.works__descr').hover(function () {
        $(this).addClass('animate__animated wow animate__flipInY');
    });
    
    $('.works__descr').bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function () {
        $(this).removeClass('animate__animated wow animate__flipInY');
    });
    
    //btn of switch themes
    $('.theme').click(function(){
        $('body').toggleClass('body__dark');
    });

});


