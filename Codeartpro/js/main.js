$(function(){
    //clickable cards
        $('.projects__example, .cards__item, .offercards__item').on("click", function(){
          window.open(this.dataset.url);
        });
});

