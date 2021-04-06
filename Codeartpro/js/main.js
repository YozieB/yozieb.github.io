$(function(){
    //clickable cards
        $('.projects__example').on("click", function(){
          window.open(this.dataset.url);
        });
        $('.cards__item').on("click", function(){
            window.open(this.dataset.url);
          });
});

