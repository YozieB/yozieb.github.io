$(function(){
    window.addEventListener('load', () => {
        const swiper = new Swiper('.main', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,
            slidesPerView: 4,
            spaceBetween: 44,
            mousewheel: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
              },
            // Navigation arrows
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
            // Optional parameters
            direction: 'horizontal',
            loop: true,
            slidesPerView: 4,
            spaceBetween: 44,
            mousewheel: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
              },
            // Navigation arrows
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
        }, false);
    


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
});


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
        })
    })
  })