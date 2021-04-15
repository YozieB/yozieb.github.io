$(function () {
    $('.mainscreen__slide').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        swipeToSlide: true,
        arrows: false,
    });

    //scroll mousewheel
    $('.mainscreen__slide').on('wheel', (function (e) {
        e.preventDefault();
        if (e.originalEvent.deltaY < 0) {
            $(this).slick('slickNext');
        } else {
            $(this).slick('slickPrev');
        }
    }));

    $('.services__inner').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
    });

    $('.reviews__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        adaptiveHeight: true,
        asNavFor: '.reviews__nav'
    });
    $('.reviews__nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.reviews__slider',
        focusOnSelect: true
    });

    //Animations

    new WOW(
        {
            mobile: false,
        }
    ).init();

    //modal

    $('[data-modal=order]').click(function () {
        $('.popup').fadeIn();
    })
    $('.order__close').click(function () {
        $('.popup').fadeOut();
    })

    //Header menu

    $('.hamburger').click(function () {
        $('.topoverlay').fadeIn();
    });
    $('.topoverlay__close').click(function () {
        $('.topoverlay').fadeOut();
    });

    //animation of works

    $('.works__descr').hover(function () {
        $(this).addClass('animate__animated wow animate__flipInY');
    });

    $('.works__descr').bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function () {
        $(this).removeClass('animate__animated wow animate__flipInY');
    });

    //btn of switch themes
    $('.theme').click(function () {
        $('body').toggleClass('body__dark');
    });


    //Counting input symbols

	$(document).on('input', '[data-field="sphere"]', function () {
		$('[data-field="target-sphere"]').html($(this).val().length);
	});
    $(document).on('input', '[data-field="descr"]', function () {
		$('[data-field="target-descr"]').html($(this).val().length);
	});
    $(document).on('input', '[data-field="enemy"]', function () {
		$('[data-field="target-enemy"]').html($(this).val().length);
	});
    $(document).on('input', '[data-field="like"]', function () {
		$('[data-field="target-like"]').html($(this).val().length);
	});
    $(document).on('input', '[data-field="unlike"]', function () {
		$('[data-field="target-unlike"]').html($(this).val().length);
	});
    $(document).on('input', '[data-field="color"]', function () {
		$('[data-field="target-color"]').html($(this).val().length);
	});
  $(document).on('input', '[data-field="goal"]', function () {
		$('[data-field="target-goal"]').html($(this).val().length);
	});

    //input range fix for chrome - когда фикс активируешь, то перестает работать скрипт на отображение денег 

/*     document.getElementById("rangeInput").oninput = function() {
        var value = (this.value-this.min)/(this.max-this.min)*100
        this.style.background = 'linear-gradient(to right, #9468B4 0%, #9468B4 ' + value + '%, #253238 ' + value + '%, #253238 100%)'
      }; */

      //Input uploading flie - написал как мог, адаптируйте)

      $('#file-1').change(function(){
        $('.file__name-1').text(this.files[0].name);
        $('.brief__line-file-label-1').css({'background': '#253238', 'background-image': 'url(../images/main/file-active.svg', 'background-repeat': 'no-repeat', 'background-position': 'center' });
      });
      $('#file-2').change(function(){
        $('.file__name-2').text(this.files[0].name);
        $('.brief__line-file-label-2').css({'background': '#253238', 'background-image': 'url(../images/main/file-active.svg', 'background-repeat': 'no-repeat', 'background-position': 'center' });
      });
      $('#file-3').change(function(){
        $('.file__name-3').text(this.files[0].name);
        $('.brief__line-file-label-3').css({'background': '#253238', 'background-image': 'url(../images/main/file-active.svg', 'background-repeat': 'no-repeat', 'background-position': 'center' });
      });
      $('#file-4').change(function(){
        $('.file__name-4').text(this.files[0].name);
        $('.brief__line-file-label-4').css({'background': '#253238', 'background-image': 'url(../images/main/file-active.svg', 'background-repeat': 'no-repeat', 'background-position': 'center' });
      });
      $('#file-5').change(function(){
        $('.file__name-5').text(this.files[0].name);
        $('.brief__line-file-label-5').css({'background': '#253238', 'background-image': 'url(../images/main/file-active.svg', 'background-repeat': 'no-repeat', 'background-position': 'center' });
      });
      $('#file-6').change(function(){
        $('.file__name-6').text(this.files[0].name);
        $('.brief__line-file-label-6').css({'background': '#253238', 'background-image': 'url(../images/main/file-active.svg', 'background-repeat': 'no-repeat', 'background-position': 'center' });
      });
      $('#file-7').change(function(){
        $('.file__name-7').text(this.files[0].name);
        $('.brief__line-file-label-7').css({'background': '#253238', 'background-image': 'url(../images/main/file-active.svg', 'background-repeat': 'no-repeat', 'background-position': 'center' });
      });
      $('#file-8').change(function(){
        $('.file__name-8').text(this.files[0].name);
        $('.brief__line-file-label-8').css({'background': '#253238', 'background-image': 'url(../images/main/file-active.svg', 'background-repeat': 'no-repeat', 'background-position': 'center' });
      });
      $('#file-9').change(function(){
        $('.file__name-9').text(this.files[0].name);
        $('.brief__line-file-label-9').css({'background': '#253238', 'background-image': 'url(../images/main/file-active.svg', 'background-repeat': 'no-repeat', 'background-position': 'center' });
      });
      $('#file-10').change(function(){
        $('.file__name-10').text(this.files[0].name);
        $('.brief__line-file-label-10').css({'background': '#253238', 'background-image': 'url(../images/main/file-active.svg', 'background-repeat': 'no-repeat', 'background-position': 'center' });
      });
      $('#file-11').change(function(){
        $('.file__name-11').text(this.files[0].name);
        $('.brief__line-file-label-11').css({'background': '#253238', 'background-image': 'url(../images/main/file-active.svg', 'background-repeat': 'no-repeat', 'background-position': 'center' });
      });
      $('#file-12').change(function(){
        $('.file__name-12').text(this.files[0].name);
        $('.brief__line-file-label-12').css({'background': '#253238', 'background-image': 'url(../images/main/file-active.svg', 'background-repeat': 'no-repeat', 'background-position': 'center' });
      });
});


