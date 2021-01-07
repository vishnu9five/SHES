$(document).ready(function(){

    //banner owl carousel
    $("#banner-area .owl-carousel").owlCarousel({
        dots: true,
        autoplay: true,
        loop: true,
        items: 1
    });

    //top sale owl carousel
    $("#top-sale .owl-carousel").owlCarousel({
        loop: true,
        dots: false,
        nav: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });

});