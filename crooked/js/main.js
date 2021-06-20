$(function(){

  //questions script
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


  $('ul.item__cards').on('click', 'li:not(.item__card-active)', function () {
    $(this)
      .addClass('item__card-active').siblings().removeClass('item__card-active')
      .closest('section.product').find('div.product__info-content').removeClass('product__info-content_active').eq($(this).index()).addClass('product__info-content_active');
  });
});


SmoothScroll({  // Scrolling Core
    animationTime: 400, // [ms]
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

  /* $('a[href*=\\#]').on('click', function(event){     
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
}); */
  //Animations

  new WOW(
    {
      mobile: false,
    }
  ).init();



  const swiperItemThumbs = new Swiper('.swiper-item-thumbs', {
    slidesPerView: 3,
    spaceBetween: 18,
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
            slidesPerView: 3,
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