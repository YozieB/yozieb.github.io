$(function () {
    const swiper = new Swiper('.swiper-container-product', {
        // Optional parameters
        loop: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: true,
        },
        spaceBetween: 40,
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    const swiperReviews = new Swiper('.swiper-container-reviews', {
        // Optional parameters
        loop: true,
        slidesPerView: 1.69,
        autoplay: false,
        spaceBetween: 18,
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next-reviews',
            prevEl: '.swiper-button-prev-reviews',
        },
        breakpoints: {
            1: {
                slidesPerView: 1.1,
            },
            380: {
                slidesPerView: 1.1,
            },
            768: {
                slidesPerView: 1.18,
            },
            1150: {
                slidesPerView: 1.39,
            },
            1366: {
                slidesPerView: 1.69,
            }
        },
    });
    const swiperItemThumbs = new Swiper('.swiper-item-thumbs', {
        slidesPerView: 3.2,
        spaceBetween: 10,
        observer: true,
        observeParents: true,
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        breakpoints: {
            1: {
                slidesPerView: 1.1,
            },
            380: {
                slidesPerView: 1.1,
            },
            768: {
                slidesPerView: 2.2,
            },
            900: {
                slidesPerView: 3.2,
            }
        },

    });
    const swiperItemMain = new Swiper('.swiper-item-main', {
        slidesPerView: 1,
        spaceBetween: 10,
        thumbs: {
            swiper: swiperItemThumbs,
        },
    });




    SmoothScroll({  // Scrolling Core
        animationTime: 600, // [ms]
        stepSize: 100, // [px]

        // Acceleration
        accelerationDelta: 50,  // 50
        accelerationMax: 3,   // 3

        // Keyboard Settings
        keyboardSupport: true,  // option
        arrowScroll: 50,    // [px]

        // Pulse (less tweakable)
        // ratio of "tail" to "acceleration"
        pulseAlgorithm: true,
        pulseScale: 4,
        pulseNormalize: 1,

        // Other
        touchpadSupport: false, // ignore touchpad by default
        fixedBackground: true,
        excluded: ''
    });
    //Animations

    new WOW(
        {
            mobile: false,
        }
    ).init();


    $('[data-modal=market]').on('click', function () {
        $('.market').css('transform', function (i) {
            return 'translateX(' + i + 0 + 'px)';
        });
    });
    $('.market__close').on('click', function () {
        $('.market').css('transform', function (i) {
            return 'translateX(' + i + 500 + 'px)';
        });
    });
    $('.hamburger').click(function () {
        $('.header__mobile').toggleClass('header__mobile-active');
        $('.hamburger').toggleClass('hamburger-active');
    });
    //preloader

    $(window).on('load', function () {
        $('body').css("opacity", "1"); // показываем блок с контентом 
        $('.preloader').delay(350).fadeOut('slow'); // и скрываем сам блок прелоудера.
    });
});

$('a[href*=\\#]').on('click', function (event) {
    event.preventDefault();
    $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 500);
});
