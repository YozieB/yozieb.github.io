$(function () {

    $(document).ready(function () {
        $('.easy__slider').slick({
            arrows: false,
            dots: true,
        });
    });
    $(document).ready(function () {
        $('.transfer__btn').click(function () {
            $('.transfer__wrapper').toggleClass('hide');
            if ($('.transfer__wrapper').hasClass('hide')) {
                $('.transfer__btn').html('Показать ещё...');
            } else {
                $('.transfer__btn').html('Скрыть');
            }
            return false;
        });
    });
});