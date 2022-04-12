$(document).ready(function () {

    $('.header_menu_btn').click(function (event) {
        $('.header_menu_btn').toggleClass('active');
        $('.header_menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $(window).resize(function (event) {
        if ($('.header_menu_btn').hasClass('active')) {
            $('.header_menu_btn').toggleClass('active');
            $('.header_menu').toggleClass('active');
            $('body').toggleClass('lock');
        }
    });

    $('.header_menu_link').click(function (event) {
        if ($('.header_menu').hasClass('active')) {
            $('.header_menu').toggleClass('active');
        }
        if ($('.header_menu_btn').hasClass('active')) {
            $('.header_menu_btn').toggleClass('active');
        }
        if ($('body').hasClass('lock')) {
            $('body').toggleClass('lock');
        }
    });

    $('.scrollto a').on('click', function () {

        let href = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, {
            duration: 700,   // по умолчанию «400» 
            easing: "swing" // по умолчанию «swing» 
        });

        return false;
    });
});

