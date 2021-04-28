$(function(){
    const swiper = new Swiper('.swiper-container', {
        centeredSlides: true,
        slidesPerView: 1,
        mousewheel: true,
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