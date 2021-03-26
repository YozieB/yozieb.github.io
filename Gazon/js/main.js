$(function(){
    $('.slider__inner').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
      });
      $('.card__item-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        asNavFor: '.card__item-thumbs'
      });
      $('.card__item-thumbs').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.card__item-slider',
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 633,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 3,
              dots: false,
              arrows: false,
            }
          },
        ]
      });
     $(document).ready(function() {
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
      }); 
     
});

(function ($) {
  $(document).ready(function() {


     let headerHeight = $('.header').height();
     $('slider__image').css('height', 'calc(100vh + -${headerHeight}px)');
     

  });
})(jQuery);