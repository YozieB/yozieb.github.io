$(document).ready(function() {
    $('.order-left__down').click(function () {
      var $input = $(this).parent().find('input');
      var count = parseInt($input.val()) - 1;
      count = count < 1 ? 1 : count;
      $input.val(count);
      $input.change();
      return false;
    });
    $('.order-left__up').click(function () {
      var $input = $(this).parent().find('input');
      $input.val(parseInt($input.val()) + 1);
      $input.change();
      return false;
    });
  }); 


const sliderBlogProduct = document.querySelector('.swiper-blog-product');

let mySwiperBlogProduct = new Swiper(sliderBlogProduct, {
    spaceBetween: 20,
    loop: true,
    loopedSlides: 4,
    slidesPerView: 4,
    pagination: {
        el: '.swiper-pag-blog-product',
        clickable: true,
    },
    navigation: {
        nextEl: '.product-nav-next-blog-product',
        prevEl: '.product-nav-prev-blog-product',
    },
    breakpoints: {
        1023: {
          slidesPerView: 3,
        },
        640: {
            slidesPerView: 2,
        },
        420: {
          slidesPerView: 2,
      },
        320: {
          slidesPerView: 1,
      }
    },


});
