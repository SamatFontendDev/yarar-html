$(document).ready(function() {
    $('.slider__list').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        prevArrow: $('.slider-prev-btn'),
        nextArrow: $('.slider-next-btn'),
        infinite: true,
        responsive: [
            {
                breakpoint: 1156,

                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 725,

                settings: {
                    slidesToShow: 1
                }
            }
        ]
      });

     $('.hamburger').click(function() {
        $('.nav').addClass('nav--mobile')
        $('body').css('overflow', 'hiddden')
     })
     $('.close-nav').click(function() {
        $('.nav').removeClass('nav--mobile')
        $('body').css('overflow', 'vissible')
     })
})