$(function () {
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
  //questions div
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

  //animation scroll 
  $("a[href^='#']").click(function () {
    var _href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
    return false;
  });
  //Animations

  new WOW(
    {
      mobile: false,
    }
  ).init();
  // popups
  $('.info__form-item-guest').on('click', function () {
    $('.info__popup').slideToggle('2000', "swing");
  });
  $('.closehead-popup').on('click', function () {
    $('.info__popup').slideToggle('2000', "swing");
  });
  
   $('.close-popup').on('click', function () {
    $('.info__popup-modal').slideToggle('2000', "swing");
  });
  
  $('.info__form-item-popup').on('click', function () {
    $('.info__popup-modal').slideToggle('2000', "swing");
  });
  $('[data-modal=rules]').on('click', function () {
    $('.overlay, #rules').fadeIn('slow');
  });
  $('[data-modal=callback]').on('click', function () {
    $('.overlay, #callback').fadeIn('slow');
  });
  $('[data-modal=number-popup]').on('click', function () {
    $('.overlay, #number-popup').fadeIn('slow');
  });
  //numbers
  $('[data-modal=number-one]').on('click', function () {
    $('.overlay, #number-one').fadeIn('slow');
  });
  $('[data-modal=number-two]').on('click', function () {
    $('.overlay, #number-two').fadeIn('slow');
  });
  $('[data-modal=number-three]').on('click', function () {
    $('.overlay, #number-three').fadeIn('slow');
  });
  $('[data-modal=number-four]').on('click', function () {
    $('.overlay, #number-four').fadeIn('slow');
  });
  $('[data-modal=number-five]').on('click', function () {
    $('.overlay, #number-five').fadeIn('slow');
  });
  $('[data-modal=number-six]').on('click', function () {
    $('.overlay, #number-six').fadeIn('slow');
  });
  $('[data-modal=number-seven]').on('click', function () {
    $('.overlay, #number-seven').fadeIn('slow');
  });

  $('.rules__close').on('click', function () {
    $('.overlay, #rules, #number-one, #number-two, #number-three, #number-four, #number-five, #number-six, #number-seven, #callback, #number-popup').fadeOut('slow');
  });
  $('.number__popup-close').on('click', function () {
    $('#number-popup').fadeOut('slow');
  });

  //plus minus btn
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
$( function() {

	 $.datepicker.regional['ru'] = {
        closeText: 'Закрыть',
        prevText: '&#x3c;Пред',
        nextText: 'След&#x3e;',
        currentText: 'Сегодня',
        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
            'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        monthNamesShort: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
            'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
        dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
        dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        weekHeader: 'Нед',
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    $.datepicker.setDefaults($.datepicker.regional['ru']);

    $('.datepickerstart').datepicker($.extend({
            inline: false,
            changeYear: true,
            changeMonth: true,
				minDate: 0,
        },
        $.datepicker.regional['ru']
    ));
  
  

    $('.datepickerend').datepicker($.extend({
            inline: false,
            changeYear: true,
            changeMonth: true,
				minDate: 0,
        },
        $.datepicker.regional['ru']
    ));
  
   $('#start-popup').datepicker($.extend({
            inline: false,
            changeYear: true,
            changeMonth: true,
				minDate: 0,
        },
        $.datepicker.regional['ru']
    ));
     $('#end-popup').datepicker($.extend({
            inline: false,
            changeYear: true,
            changeMonth: true,
				minDate: 0,
        },
        $.datepicker.regional['ru']
    ));
  });
  
  $('.pickerstart').click(function() {
    $(".datepickerstart").focus();
  });
   $('.pickerend').click(function() {
    $(".datepickerend").focus();
  });
  
  
  $('#adult').change(function() {
 $('#adultspan').text($(this).val());
});
$('#child').change(function() {
 $('#childspan').text($(this).val());
});
  $('#adult-popup').change(function() {
 $('#adultspan-popup').text($(this).val());
});
$('#child-popup').change(function() {
 $('#childspan-popup').text($(this).val());
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


