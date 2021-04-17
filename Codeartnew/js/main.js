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
  $(document).on('input', '[data-field="office"]', function () {
		$('[data-field="target-office"]').html($(this).val().length);
	});
  $(document).on('input', '[data-field="business"]', function () {
		$('[data-field="target-business"]').html($(this).val().length);
	});
  $(document).on('input', '[data-field="business-1"]', function () {
		$('[data-field="target-business-1"]').html($(this).val().length);
	});
  $(document).on('input', '[data-field="business-2"]', function () {
		$('[data-field="target-business-2"]').html($(this).val().length);
	});
  $(document).on('input', '[data-field="business-3"]', function () {
		$('[data-field="target-business-3"]').html($(this).val().length);
	});
  $(document).on('input', '[data-field="business-4"]', function () {
		$('[data-field="target-business-4"]').html($(this).val().length);
	});
  $(document).on('input', '[data-field="project-1"]', function () {
		$('[data-field="target-project-1"]').html($(this).val().length);
	});
  $(document).on('input', '[data-field="project-2"]', function () {
		$('[data-field="target-project-2"]').html($(this).val().length);
	});
  $(document).on('input', '[data-field="project-3"]', function () {
		$('[data-field="target-project-3"]').html($(this).val().length);
	});
  $(document).on('input', '[data-field="project"]', function () {
		$('[data-field="target-project"]').html($(this).val().length);
	});
  $(document).on('input', '[data-field="project-4"]', function () {
		$('[data-field="target-project-4"]').html($(this).val().length);
	});
  $(document).on('input', '[data-field="project-5"]', function () {
		$('[data-field="target-project-5"]').html($(this).val().length);
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


      //ORDER SVG ANIMS
});

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

function setWindowSize() {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
};
window.addEventListener('resize', setWindowSize);

var eyes = document.querySelectorAll(".eyes");
var cursorPos = { x: 0, y: 0 };

window.addEventListener("mousemove", mousemove);
window.addEventListener("touchmove", touchmove);

function mousemove(e) {
  cursorPos = {
    x: e.clientX,
    y: e.clientY
  }; 
	if (!clicked) {
	  eyes.forEach(function(el) {
		  eyeFollow.init(el);
	  })
	}
}
function touchmove(e) {
  cursorPos = {
    x: e.targetTouches[0].offsetX,
    y: e.targetTouches[0].offsetY
  }; 
	if (!clicked) {
	  eyes.forEach(function(el) {
		  eyeFollow.init(el);
	  })
	}
}

var eyeFollow = (function() {

	function getOffset(el) {
		console.log(el)
  		el = el.getBoundingClientRect();
		return {
			x: el.left + window.scrollX,
			y: el.top + window.scrollY
		};
	}
	
	function moveEye(eye) {
		var eyeOffset = getOffset(eye);
		var bBox = eye.getBBox();
		var centerX = eyeOffset.x + bBox.width / 2;
		var centerY = eyeOffset.y + bBox.height / 2;
		var percentTop = Math.round((cursorPos.y - centerY) * 100 / windowHeight);
		var percentLeft = Math.round((cursorPos.x - centerX) * 100 / windowWidth);
		eye.style.transform = `translate(${percentLeft/5}px, ${ percentTop/5}px)`
	}
	
	return {
    init: (el) => {
      moveEye(el);
    }
  };
})();

// ORDER ANIMATED Тут удалить часть кода надо.
// Вот https://codepen.io/agathaco/pen/NyQgQX

var clicked, cancelled;
var animate = (function() {

	var select = function(el) {
		 return document.getElementById(el);
	};
	var svg = select("svg"),
		 blob1 = select("blob-1"),
		 blob3 = select("blob-3"),
		 envelope = select("envelope"),
		 eyeGroup = select("eye-group"),
		 paper = select("paper-group"),
		 mouth = select("mouth"),
		 mouthHappy = select("mouth-happy"),
		 mouthScared = select("mouth-scared"),
		 mouthSad = select("mouth-sad"),
		 eyeLeft = MorphSVGPlugin.convertToPath(select("eye-left")),
		 eyeRight = MorphSVGPlugin.convertToPath(select("eye-right")),
		 eyeLaughingLeft = select("eye-laughing-left"),
		 eyeLaughingRight = select("eye-laughing-right"),
		 eyebrowHappyLeft = select("eyebrow-happy-left"),
		 eyebrowHappyRight = select("eyebrow-happy-right"),
		 eyebrowSadLeft = select("eyebrow-sad-left"),
		 eyebrowSadRight = select("eyebrow-sad-right"),
		 mouthWorry = select("mouth-worry"),
		 openMouth = select("open-mouth"),
		 tongue = select("tongue"),
		 unsubscribeButton = select("unsubscribe"),
		 cancelButton = select("cancel"),
		 goBackButton = select("go-back");
	
	var confettis = document.querySelectorAll('#confetti > *');
	
	var title = document.querySelector('.title'),
		 subtitle = document.querySelector('.subtitle');
	
	var masterTl = new TimelineMax();

	unsubscribeButton.addEventListener("mouseover", willUnsubscribe);
	cancelButton.addEventListener("mouseover", willCancel);
	unsubscribeButton.addEventListener("touchstart", willUnsubscribe);
	cancelButton.addEventListener("touchstart", willCancel);
	unsubscribeButton.addEventListener("click", hasUnsubscribed);
	cancelButton.addEventListener("click", hasCancelled);
	unsubscribeButton.addEventListener("mouseout", initFace);
	cancelButton.addEventListener("mouseout", initFace);
	unsubscribeButton.addEventListener("touchleave", initFace);
	cancelButton.addEventListener("touchleave", initFace);
	goBackButton.addEventListener("click", goBack);

	function animateBlob() {
		var speed = 10;
		var tlBlob = new TimelineMax({repeat:-1});
		tlBlob.to(blob1, speed, {morphSVG:blob3, ease: Power0.easeNone})
				.to(blob1, speed, {morphSVG:blob1, ease: Power0.easeNone});
	}

	function makeConfetti() {
		var speed = 3;
		var confettiTl = new TimelineMax({ paused:true });
			confettis.forEach(function(el) {
				var angle = random(0, 360);
				var delay = random(0, 6);
				var opacity = random(0.5, 1);
				var tl = new TimelineMax({delay: delay});
				var posX = Math.cos(angle * Math.PI / 180) * 250;
				var posY = Math.sin(angle * Math.PI / 180) * 250;
				TweenMax.set(el,{autoAlpha:1});
				tl.to(el, speed, {x:posX, y: posY, ease:Power0.easeOut, rotation:360, repeat:-1});
				confettiTl.add(tl, 0);
			});
		return confettiTl;
	}
	
	//Envelope animations
	function happyJump() {
		var speed = 0.15;
		var happyJumpTl = new TimelineMax({repeat:-1, repeatDelay: 1, delay:0.5, paused:true});
		happyJumpTl.to(envelope, speed, {y:-20, ease: Power0.easeNone})
		.to(envelope, speed, {y:0, ease: Power0.easeNone})
		.to(envelope, speed, {y:-10, ease: Power0.easeNone})
		.to(envelope, speed, {y:0, ease: Power0.easeNone})
		.to(envelope, speed, {y:-5, ease: Power0.easeNone})
		.to(envelope, speed, {y:0, ease: Power0.easeNone});
		return happyJumpTl;
	}

	 function shake() {
		var speed = 0.1;
		var shakeTl = new TimelineMax({repeat:-1, paused:true});
		shakeTl.to(envelope, speed, {x:-1, ease: Power0.easeNone})
		.to(envelope, speed, {x:1, ease: Power0.easeNone});
		return shakeTl;
	 }

	var doJump = happyJump();
	var doShake = shake();
	var addConfetti = makeConfetti();

	function willUnsubscribe() {
		masterTl.add(doShake.play());
		var speed = 0.2;
		TweenMax.to(mouthWorry, speed, {morphSVG:mouthScared, ease: Power0.easeNone});
		TweenMax.to(paper, speed, {y:15});
		TweenMax.to(eyeGroup, speed, {y:5});
		TweenMax.to(mouth, speed, {y:5});
		TweenMax.to(eyebrowSadLeft, speed, {y:5});
		TweenMax.to(eyebrowSadRight, speed, {y:5});
	};

	function willCancel() {
		var speed = 0.2;
		TweenMax.to(mouthWorry, speed, {morphSVG:mouthHappy, ease: Power0.easeNone});
		TweenMax.to(eyebrowSadLeft, speed, {morphSVG:eyebrowHappyLeft, ease: Power0.easeNone});
		TweenMax.to(eyebrowSadRight, speed, {morphSVG:eyebrowHappyRight, ease: Power0.easeNone});
		TweenMax.to(mouth, speed, {y:10});
		TweenMax.to(eyebrowSadLeft, speed, {y:-10});
		TweenMax.to(eyebrowSadRight, speed, {y:-10});
	};


	function hasUnsubscribed() {
		var speed = 0.2;
		TweenMax.to(mouthWorry, speed, {morphSVG:mouthSad, ease: Power0.easeNone});
		TweenMax.to(eyeGroup, speed, {y:15});
		TweenMax.to(eyebrowSadLeft, speed, {y:10});
		TweenMax.to(eyebrowSadRight, speed, {y:10});
		title.innerHTML = "We are sad to see you go!";
		subtitle.innerHTML = "You have been unsubscribed and will no longer hear from us.";
		unsubscribeButton.style.display = 'none';
		cancelButton.style.display = 'none';
		goBackButton.style.display = 'block';
		clicked = true;
		masterTl.remove(doShake);
	};

	function hasCancelled() {
		
		masterTl.add(doJump.play());
		masterTl.add(addConfetti.play());
		
		var speed = 0.1;
		TweenMax.to(eyeLeft, speed, {morphSVG:eyeLaughingLeft, ease: Power0.easeNone});
		TweenMax.to(eyeLeft, speed, {stroke:'#543093', fill:'none', ease: Power0.easeNone});
		TweenMax.to(eyeRight, speed, {morphSVG:eyeLaughingRight, ease: Power0.easeNone});
		TweenMax.to(eyeRight, speed, {stroke:'#543093', fill:'none', ease: Power0.easeNone});
		TweenMax.to(mouthWorry, speed, {morphSVG:openMouth, ease: Power0.easeNone});
		TweenMax.to(mouthWorry, speed, {fill:'#543093', stroke:'none', ease: Power0.easeNone});
		TweenMax.to(tongue, speed, {css:{display:'block'}, ease: Power0.easeNone});
		TweenMax.to(eyeGroup, speed, {y:10});
		TweenMax.to(eyebrowSadLeft, speed, {y:0});
		TweenMax.to(eyebrowSadRight, speed, {y:0});
		title.innerHTML = "Thanks for staying with us!";
		subtitle.innerHTML = "You will continue to receive our weekly newsletter. Yay!";
		unsubscribeButton.style.display = 'none';
		cancelButton.style.display = 'none';
		goBackButton.style.display = 'block';
		clicked = true;
		cancelled = true;
	};

	function initFace() {
		masterTl.remove(doShake);
		if (!clicked) {
		var speed = 0.1;

		TweenMax.to(mouthWorry, speed, {morphSVG:mouthWorry, ease: Power0.easeNone});
		TweenMax.to(mouthWorry, speed, {fill:'none', stroke:'#543093', ease: Power0.easeNone})
		TweenMax.to(tongue, speed, {css:{display:'none'}, ease: Power0.easeNone})
		TweenMax.to(eyebrowSadLeft, speed, {morphSVG:eyebrowSadLeft, ease: Power0.easeNone});
		TweenMax.to(eyebrowSadRight, speed, {morphSVG:eyebrowSadRight, ease: Power0.easeNone});
		TweenMax.to(paper, speed, {y:0});
		TweenMax.to(eyeGroup, speed, {y:0});
		TweenMax.to(mouth, speed, {y:0});
		TweenMax.to(eyebrowSadLeft, speed, {y:0});
		TweenMax.to(eyebrowSadRight, speed, {y:0});
		TweenMax.to(eyeLeft, speed, {morphSVG:eyeLeft, ease: Power0.easeNone});
		TweenMax.to(eyeLeft, speed, {stroke:'none', fill:'#543093', ease: Power0.easeNone});
		TweenMax.to(eyeRight, speed, {morphSVG:eyeRight, ease: Power0.easeNone});
		TweenMax.to(eyeRight, speed, {stroke:'none', fill:'#543093', ease: Power0.easeNone});
		}
	};

	function goBack() {
		clicked = false;
		cancelled = false;
		initAnimations();
		masterTl.remove(doJump);
		masterTl.remove(addConfetti);
		confettis.forEach(function(el) {
			TweenMax.set(el, {x:0, y: 0, rotation:0});
		});
		title.innerHTML = "Do you want to unsubscribe?";
		subtitle.innerHTML = "If you unsubscribe, you will stop receiving our weekly newsletter.";
		unsubscribeButton.style.display = 'block';
		cancelButton.style.display = 'block';
		goBackButton.style.display = 'none';

	};

	function initAnimations() {
		clicked = false;
		initFace();
		animateBlob();
	}

	return {
		init: () => {
			initAnimations();
		}
	};
})();

document.addEventListener("DOMContentLoaded", animate.init());





function random(min, max) {
  if (max == null) {
    max = min;
    min = 0;
  }
  return Math.random() * (max - min) + min;
}



