$(function() {
    "use strict";

    $(".navbar .nav-link").on("click", function () {
        $(".navbar").find(".active").removeClass("active");
        $(this).addClass("active");
    });

    /*-----------------------------------
     * FIXED  MENU - HEADER
     *-----------------------------------*/
    
    function menuscroll() {
        if ($("#determiner").val() == "others") {
            var $navmenu = $('.nav-menu');
            if ($(window).scrollTop() > 50) {
                $navmenu.addClass('is-scrolling');
                $("#nav-home").removeClass("text-black");
                $("#nav-rooms").removeClass("text-black");
                $("#nav-leaderboard").removeClass("text-black");
                $("#nav-store").removeClass("text-black");
                $("#nav-forum").removeClass("text-black");
                $("#btnLogin").removeClass("btn-login");
                $("#nav-home").addClass("text-white");
                $("#nav-rooms").addClass("text-white");
                $("#nav-leaderboard").addClass("text-white");
                $("#nav-store").addClass("text-white");
                $("#nav-forum").addClass("text-white");
            } else {
                $navmenu.removeClass("is-scrolling");
                $("#nav-home").removeClass("text-white");
                $("#nav-rooms").removeClass("text-white");
                $("#nav-leaderboard").removeClass("text-white");
                $("#nav-store").removeClass("text-white");
                $("#nav-forum").removeClass("text-white");
                $("#nav-home").addClass("text-black");
                $("#nav-rooms").addClass("text-black");
                $("#nav-leaderboard").addClass("text-black");
                $("#nav-store").addClass("text-black");
                $("#nav-forum").addClass("text-black");
                $("#btnLogin").addClass("btn-login");
            }
        }
        else {
            var $navmenu = $('.nav-menu');
            if ($(window).scrollTop() > 50) {
                $navmenu.addClass('is-scrolling');
            } else {
                $navmenu.removeClass("is-scrolling");
            }
        }
    }
    menuscroll();
    $(window).on('scroll', function() {
        menuscroll();
    });
    /*-----------------------------------
     * NAVBAR CLOSE ON CLICK
     *-----------------------------------*/

    $('.navbar-nav > li:not(.dropdown) > a').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });
    /* 
     * NAVBAR TOGGLE BG
     *-----------------*/
    var siteNav = $('#navbar');
    siteNav.on('show.bs.collapse', function(e) {
        $(this).parents('.nav-menu').addClass('menu-is-open');
    })
    siteNav.on('hide.bs.collapse', function(e) {
        $(this).parents('.nav-menu').removeClass('menu-is-open');
    })


    /*-----------------------------------
     * OWL CAROUSEL
     *-----------------------------------*/
    var $testimonialsDiv = $('.testimonials');
    if ($testimonialsDiv.length && $.fn.owlCarousel) {
        $testimonialsDiv.owlCarousel({
            items: 1,
            nav: true,
            dots: false,
            navText: ['<span class="ti-arrow-left"></span>', '<span class="ti-arrow-right"></span>']
        });
    }
}); /* End Fn */