$(function(){
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
        $('.market').css('transform', function(i){
            return 'translateX('+ i + 0 +'px)';
        });
      });
      $('.market__close').on('click', function () {
        $('.market').css('transform', function(i){
            return 'translateX('+ i + 500 +'px)';
        });
      });
});