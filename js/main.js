$(function(){

    $(".meter > span").each(function () {
        $(this)
          .data("origWidth", $(this).width())
          .width(0)
          .animate(
            {
              width: $(this).data("origWidth")
            },
            1200
          );
      });
      $('.sidebar__icon').on('click', function(){
        $('.content__sidebar').toggle();
    
    });

});
