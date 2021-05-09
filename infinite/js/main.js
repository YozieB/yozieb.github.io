$(function () {
  //SLIDERS
  window.addEventListener('load', () => {
    const swiper = new Swiper('.main', {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 4,
      spaceBetween: 44,
      mousewheel: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next-main',
        prevEl: '.swiper-button-prev-main',
      },
      breakpoints: {
        1: {
          slidesPerView: 1,
        },
        380: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        1024: {
          slidesPerView: 4,
        },
      },
    });
    const swiper2 = new Swiper('.supfer', {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 4,
      spaceBetween: 44,
      mousewheel: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next-supfer',
        prevEl: '.swiper-button-prev-supfer',
      },
      breakpoints: {
        1: {
          slidesPerView: 1,
        },
        380: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        1024: {
          slidesPerView: 4,
        },
      },
    });

    const swiper3 = new Swiper(".product__thumbs", {
      spaceBetween: 15,
      slidesPerView: 3,
      direction: 'vertical',
      allowSlideNext: false,
      allowSlidePrev: false,
      fadeEffect: {
        crossFade: true
      },
      breakpoints: {
        1: {
          direction: 'horizontal',
        },
        540: {
        },
      },
    });
    const swiper4 = new Swiper(".product__gallery", {
      spaceBetween: 12,
      slidePerView: 1,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      thumbs: {
        swiper: swiper3,
      }
    });
  }, false);

  //Smooth scroll to link
  $("a[href^='#']").click(function () {
    var _href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(_href).offset().top }, {
      duration: 650,   // по умолчанию «400» 
      easing: "swing" // по умолчанию «swing»
    });
    return false;
  });
  //QUESTIONS MAIN PAGE
  function toggleSlide(item) {
    $(item).each(function (i) {
      $(this).on('click', function (e) {
        e.preventDefault();
        $('.questions__content').eq(i).slideToggle();
        $('.questions__arrow').eq(i).toggleClass('questions__arrow-rotated');
      });
    });
  };
  toggleSlide('.questions__active');

//POPUPS
  $('[data-modal=license]').on('click', function () {
    $('.overlay, #license').fadeIn('slow');
  });
  $('[data-modal=order]').on('click', function () {
    $('.overlay, #order').fadeIn('slow');
  });
  $('.modal__close').on('click', function () {
    $('.overlay, #license, #order').fadeOut('slow');
  });
  $('.modal__btn').on('click', function () {
    $('.overlay, #license').fadeOut('slow');
  });


//TABS
  $('ul.product__tabs').on('click', 'li:not(.product__tab_active)', function () {
    $(this)
      .addClass('product__tab_active').siblings().removeClass('product__tab_active')
      .closest('section.product').find('div.product__content').removeClass('product__content_active').eq($(this).index()).addClass('product__content_active');
  });
  
  $('ul.product__info-tabs').on('click', 'li:not(.product__info-tab_active)', function () {
    $(this)
      .addClass('product__info-tab_active').siblings().removeClass('product__info-tab_active')
      .closest('section.product').find('div.product__info-content').removeClass('product__info-content_active').eq($(this).index()).addClass('product__info-content_active');
  });

  SmoothScroll({  // Scrolling Core
    animationTime    : 400, // [ms]
    stepSize         : 100, // [px]

    // Acceleration
    accelerationDelta : 50,  // 50
    accelerationMax   : 3,   // 3

    // Keyboard Settings
    keyboardSupport   : true,  // option
    arrowScroll       : 50,    // [px]

    // Pulse (less tweakable)
    // ratio of "tail" to "acceleration"
    pulseAlgorithm   : true,
    pulseScale       : 4,
    pulseNormalize   : 1,

    // Other
    touchpadSupport   : false, // ignore touchpad by default
    fixedBackground   : true, 
    excluded          : ''    });


//Animations

new WOW(
    {
        mobile: false,
    }
).init();

});

//BURGER MENU
window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.header__inner'),
    menuItem = document.querySelectorAll('.header__menu-item'),
    hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger_active');
    menu.classList.toggle('header__inner-active');
  });

  menuItem.forEach(item => {
    item.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('header__menu-list_active');
    });
  });
});