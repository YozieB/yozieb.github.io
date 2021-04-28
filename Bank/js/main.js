$(function(){
    function toggleSlide(item) {
        $(item).each(function (i) {
            $(this).on('click', function (e) {
                e.preventDefault();
                $('.services__descr').eq(i).slideToggle();
                $('.services__link').eq(i).toggleClass('services__link-rotated');
                $('.services__item').siblings().css("height", "376px");
                $('.services__item').css("height", "100%");
            });
        });
    };
    
    toggleSlide('.services__link'); 
});






