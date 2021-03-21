$(function () {

    $(document).ready(function () {
        $('.easy__slider').slick({
            arrows: false,
            dots: true,
        });
    });
    $(document).ready(function () {
        $('.transfer__btn').click(function () {
            $('.transfer__wrapper').toggleClass('hide');
            if ($('.transfer__wrapper').hasClass('hide')) {
                $('.transfer__btn').html('Показать ещё...');
            } else {
                $('.transfer__btn').html('Скрыть');
            }
            return false;
        });
    });

    $('.reviews__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        dots: true,
        responsive: [
            {
              breakpoint: 1300,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 750,
              settings: {
                slidesToShow: 1
              }
            }
          ]
      });
     
});
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__menu-list'),
    menuItem = document.querySelectorAll('.menu__item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('header__menu-list_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('header__menu-list_active');
        })
    })
})