$(function(){

   const swiper = new Swiper('.swiper-container', {
        centeredSlides: true,
        slidesPerView: 5,
        mousewheel: true,
        loop: true,
        spaceBetween: 80,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
      const swiper2 = new Swiper('.swiper-card', {
        centeredSlides: true,
        slidesPerView: 1,
        mousewheel: true,
        loop: true,
        spaceBetween: 80,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
});