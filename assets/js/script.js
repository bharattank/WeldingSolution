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

    /** Active Menu Color */
    $(function(){
        var current = location.pathname;
        $('.nav-link').each(function(){
            var $this = $(this);
            // if the current path is like this link, make it active
            if($this.attr('href').indexOf(current) !== -1){
                $this.addClass('active');
            }
        })
    })

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
        $('.preloader').fadeOut();
    });

    /** Counter Start if Show .counter class */
    var $animation_elements_ca = $('.counter');
    var $window = $(window);
    if ($($animation_elements_ca).length) {
        function check_if_in_view() {
            var window_height = $window.height();
            var window_top_position = $window.scrollTop();
            var window_bottom_position = (window_top_position + window_height);

            $.each($animation_elements_ca, function () {
                var $element = $(this);
                var element_height = $element.outerHeight();
                var element_top_position = $element.offset().top;
                var element_bottom_position = (element_top_position + element_height);

                //check to see if this current container is within viewport
                if ((element_bottom_position >= window_top_position) &&
                    (element_top_position <= window_bottom_position)) {
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
                }
            });
        }

        $window.on('scroll resize', check_if_in_view);
        $window.trigger('scroll');
    }

    /** Site Year Auto Update */
    var year = new Date().getFullYear();
    document.getElementById("year").innerHTML = year;

    
    // stickey-header
    window.onscroll = function() { myFunction() };
    var header = document.getElementById("stickey__header");
    var sticky = header.offsetTop;

    function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }

    /** Switcher */
    document.querySelector('.svg__wrap').onclick = () => {
        document.querySelector('#switcher').classList.toggle('active');
    }

    $(".colorBottonp").click(function () {
        $(".colorBottonp").removeClass("active");
        // $(".tab").addClass("active"); // instead of this do the below 
        $(this).addClass("active");   
    });

    $(".colorBotton").click(function () {
        $(".colorBotton").removeClass("active");
        // $(".tab").addClass("active"); // instead of this do the below 
        $(this).addClass("active");   
    });

    let colorButtons = document.querySelectorAll('.colorBotton');
    colorButtons.forEach(color => {
        color.addEventListener('click', () => {
            let dataColor = color.getAttribute('data-color');
            let shadowColor = color.getAttribute('shadow');
            document.querySelector(':root').style.setProperty('--secondary_color', dataColor);
            document.querySelector(':root').style.setProperty('--box_shadow', shadowColor);
        });
    });

    let colorButtonsp = document.querySelectorAll('.colorBottonp');
    colorButtonsp.forEach(color => {
        color.addEventListener('click', () => {
            let dataColor = color.getAttribute('data-color');
            document.querySelector(':root').style.setProperty('--primary_color', dataColor);
        });
    });

    /** Conver HEXA to RGBA */
    // let colorButtonShadow = document.querySelectorAll('.colorBotton');
    // colorButtonShadow.forEach(color => {
    //     color.addEventListener('click', () => {
    //         let dataColor = color.getAttribute('data-color');
    //         function hexToRgbA(hex){
    //             var c;
    //             if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
    //                 c= hex.substring(1).split('');
    //                 if(c.length== 3){
    //                     c= [c[0], c[0], c[1], c[1], c[2], c[2]];
    //                 }
    //                 c= '0x'+c.join('');
    //                 return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',.6)';
    //             }
    //             throw new Error('Bad Hex');
    //         }
    //         let box_shadow = hexToRgbA(dataColor);
    //         document.querySelector(':root').style.setProperty('--box_shadow', box_shadow);
    //     });
    // });
});