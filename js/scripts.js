/********************************
 Global - all pages
********************************/

// Primary Nav - on-scroll nav class
$(function () {
  $(window).scroll(function () {
    var navigation = $('nav#eco-primary-nav');
    if ($(this).scrollTop() >= 45) {
      navigation.removeClass('navbar-dark bg-transparent').addClass('navbar-light bg-light  border-bottom shadow-sm');
    } else
      navigation.removeClass('navbar-light bg-light border-bottom shadow-sm').addClass('navbar-dark bg-transparent');
  });
});

// Footer - sponsor logo carousel
$(document).ready(function () {
  $('.eco-carousel').slick({
    slidesToShow: 8,
    slidesToScroll: 8,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 1300,
    arrows: false,
    dots: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });
});
