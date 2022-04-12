$(document).ready(function () {
    $('.footer_spoiler_title').click(function (event) {
        if ($('.footer_spoiler').hasClass('one')) {
            $('.footer_spoiler_title').not($(this)).removeClass('active');
            $('.footer_spoiler_text').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);
    });

    $(".footer_spoiler_title").click(function () { // ID откуда кликаем
        $('html, body').animate({
            scrollTop: $(".footer_spoiler").offset().top  // класс объекта к которому двигаемся
        }, 300); // Скорость прокрутки
    });
});