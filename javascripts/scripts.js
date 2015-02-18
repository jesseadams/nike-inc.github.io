$(document).ready(function () {

    "use strict";

    var scrolled = false;
    jQuery(window).one("scroll", function(){
        scrolled = true;
    });

    // Smooth Scroll to internal links
    $('.scroll').smoothScroll({
        offset: -80,
        speed: 800
    });

    // Mobile Menu Toggle

    $('#mobile-toggle').click(function () {

        if ($('#navigation').hasClass('mobile-nav-open')) {
            $('#navigation').removeClass('mobile-nav-open');
        } else {
            $('#navigation').addClass('mobile-nav-open');
        }

    });

    // Slider backgrounds
    
	$('.slider').flexslider({ directionalNav: false });
    $('#home-slider').flexslider();
    $('#testimonials-slider').flexslider({
        controlNav: false
    });

    $('#home-slider .slides li').css('height', $(window).height());

    $('#home-slider .slides li').each(function () {

        var imgSrc = $('.slider-bg').attr('src');

        $(this).children('.slider-bg').remove();

        $(this).css('background', 'url("' + imgSrc + '")');



    });

    // Align Slider Content

    var centerContent = ($(window).height() / 2) - ($('.home-shrink').height() / 2);

    $('#home-slider .slides li').css('padding-top', centerContent);

    // Turn parallax scrolling off for iOS devices
    var iOS = false,
        p = navigator.platform;

    if (p === 'iPad' || p === 'iPhone' || p === 'iPod') {
        iOS = true;
    }

    // Parallax Content



    $(window).scroll(function () {

        var scaleBg = -$(window).scrollTop() / 4;

        if (iOS === false) {
            $('#home-slider .slides li').css('background-position-y', scaleBg);
            $('#testimonials').css('background-position-y', scaleBg + $('#testimonials').offset().top - 120);
        }

        if ($(window).scrollTop() > 1) {
            $('#navigation').addClass('show-nav');
        } else {
            $('#navigation').removeClass('show-nav');
        }


    });

    // Project Images

    $('.project-slideshow .slides li').each(function () {

        var imgSrc = $('.project-img').attr('src');

        $(this).children('.project-img').remove();

        $(this).css('background', 'url("' + imgSrc + '")');



    });



    // Map Hover

    $('#map-diamond').mouseenter(function () {

        $('#contact-content').addClass('fade-out');

    });

    $('#map-diamond').mouseleave(function () {

        $('#contact-content').removeClass('fade-out');

    });


    setTimeout(function(){
        if (!scrolled) {
            jQuery.smoothScroll({
                speed: 800,
                scrollTarget: "#work-scroll"
            });
        }
    }, 1000);
});
