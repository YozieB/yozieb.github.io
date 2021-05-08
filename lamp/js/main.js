$(function(){
/*     const classHeader = 'questions_active';
    const classBody   = 'questions_content';
    const classActive = 'questions_content_active';
    
    const accordions = document.querySelector('.questions');
    const items = accordions.querySelectorAll('.questions_accordion');
    
    function closeAll(items, current) {
      Array.prototype.forEach.call(
        Array.prototype.filter.call(items, item => item != current),
        item => item.querySelector(`.${classBody}`).classList.remove(classActive)
      );
    }
    
    Array.prototype.forEach.call(items, item => {
      const header = item.querySelector(`.${classHeader}`);
      const body = item.querySelector(`.${classBody}`);
      header.addEventListener('click', () => {
        body.classList.toggle(classActive);
        if (body.classList.contains(classActive)) {
          closeAll(items, item);
        }
      });
    }); */


    
    function toggleSlide(item) {
      $(item).each(function (i) {
        $(this).on('click', function (e) {
          e.preventDefault();
          $('.questions_content').eq(i).slideToggle();
          $('.questions_open').eq(i).toggleClass('questions_open-rotated');
        });
      });
    };
    toggleSlide('.questions_accordion');
    const burgerButton = document.querySelector('.burger_button');
    const burgerList = document.querySelector('.burger_list');
    

});

    SmoothScroll({  // Scrolling Core
      animationTime    : 400, // [ms]
      stepSize         : 100, // [px]
  
      // Acceleration
      accelerationDelta : 50,  // 50
      accelerationMax   : 3,   // 3
  
      // Keyboard Settings
      keyboardSupport   : true,  // option
      arrowScroll       : 50,    // [px]
  
      // Pulse (less tweakable)
      // ratio of "tail" to "acceleration"
      pulseAlgorithm   : true,
      pulseScale       : 4,
      pulseNormalize   : 1,
  
      // Other
      touchpadSupport   : false, // ignore touchpad by default
      fixedBackground   : true, 
      excluded          : ''    });


$("a[href^='#']").click(function(){
  var _href = $(this).attr("href");
  $("html, body").animate({scrollTop: $(_href).offset().top}, {
    duration: 650,   // по умолчанию «400» 
    easing: "swing" // по умолчанию «swing»
  });
  return false;
});