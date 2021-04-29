$(function(){
     swiper = new Swiper('.swiper-container', {
        centeredSlides: true,
        slidesPerView: 1,
        mousewheel: true,
        loop: true,
        observer: true,
        observeParents: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });

      function toggleSlide(item) {
        $(item).each(function (i) {
            $(this).on('click', function (e) {
                e.preventDefault();
                $('.questions__item-descr').eq(i).slideToggle();
                $('.questions__item-link').eq(i).toggleClass('questions__item-link-rotated');
            });
        });
    };
    
    toggleSlide('.questions__item-link'); 


});

$('.info__form-item-guest').on('click', function(){
  $('.info__popup').slideToggle('2000',"swing");
});
$('.info__form-item-popup').on('click', function(){
  $('.info__popup-modal').slideToggle('2000',"swing");
});
$('[data-modal=rules]').on('click', function () {
  $('.overlay, #rules').fadeIn('slow');
});
$('[data-modal=number-one]').on('click', function () {
  $('.overlay, #number-one').fadeIn('slow');
});
$('[data-modal=number-popup]').on('click', function () {
  $('.overlay, #number-popup').fadeIn('slow');
});

$('.rules__close').on('click', function () {
  $('.overlay, #rules, #number-one, #thanks, #number-popup').fadeOut('slow');
});
$('.number__popup-close').on('click', function () {
  $('#number-popup').fadeOut('slow');
});

/* $('[data-modal=rules]').click(function () {
  $('.overlay').fadeIn();
})
$('.order__close').click(function () {
  $('.popup').fadeOut();
}) */

$('.down').click(function () {
  var $input = $(this).parent().find('input');
  var count = parseInt($input.val()) - 1;
  count = count < 1 ? 1 : count;
  $input.val(count);
  $input.change();
  return false;
});
$('.up').click(function () {
  var $input = $(this).parent().find('input');
  $input.val(parseInt($input.val()) + 1);
  $input.change();
  return false;
});




