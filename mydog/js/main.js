$(function(){
  const swiper = new Swiper('.swiper-container-reviews', {
    // Optional parameters
    loop: true,
    slidesPerView: 'auto',
    /* autoplay: {
        delay: 3500,
        disableOnInteraction: true,
    }, */
    spaceBetween: 90,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
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

  $('a[href*=\\#]').on('click', function(event){     
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
});
  //Animations

  new WOW(
    {
      mobile: false,
    }
  ).init();
