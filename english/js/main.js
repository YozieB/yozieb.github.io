$(function(){


    $('.achievements__panel-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
      });
      
      $('.stats__panel-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
      });

});

window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.header__menu-list'),
  menuItem = document.querySelectorAll('.header__menu-item'),
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