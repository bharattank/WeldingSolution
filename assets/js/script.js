// A $( document ).ready() block.
jQuery(document).ready(function ($) {
    /** Scroll to Top Button */
    var btn = $('#scrollToTop');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '1000');
    });

    /** Slick Slider */
    $('.company__logo_slide__main').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1
              }
            }
          ]
    });

    $('.expect-right__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
    });

    /** Page Loader */
    $(window).on('load', function () {
        $('#ws-loading').css("display", "none");
        $('.preloader').css("display", "none");
    });

    /** Counter */
    $('.counter').each(function () {
        var $this = $(this),
            countTo = $this.attr('data-count');

        $({ countNum: $this.text() }).animate({
            countNum: countTo
        },
        {
            duration: 2000,
            easing: 'linear',
            step: function () {
                $this.text(Math.floor(this.countNum));
            },
            complete: function () {
                $this.text(this.countNum);
            }
        });
    });

    /** Site Year Auto Update */
    var year = new Date().getFullYear();
    document.getElementById("year").innerHTML = year;

});