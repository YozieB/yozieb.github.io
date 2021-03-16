$('.slider__inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    asNavFor: '.slider__thumbs',
  });
  $('.slider__thumbs').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.slider__inner',
    centerMode: false,
    focusOnSelect: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 911,
        settings: {
          slidesToShow: 3,
        }
      },
    ]
  });

  $('.header__btn').on('click', function () {
    $('.header__menu > ul').slideToggle();
  });
