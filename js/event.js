/********************************
 Homepage
********************************/

// Global Audience Map - pulse attendee countries while the map is on screen
$(window).on('scroll', function () {
  var map = $('#map-container');
  if (!map.length) return;
  var scroll = $(window).scrollTop();
  var bottom = map.offset().top + map.height();
  $('.map-attending').toggleClass('pulse-fill-color', scroll < bottom);
});

// Testimonials - equal slide heights so the carousel doesn't jump
$(window).on('load', function () {
  var slides = $('#carousel-type-2 .carousel-item');
  var maxHeight = 0;
  slides.each(function () {
    maxHeight = Math.max(maxHeight, $(this).outerHeight());
  });
  slides.css('min-height', maxHeight + 'px');
});

// Engaging Sessions and Event Highlights - shared slick arrows
var galleryPrev =
  '<button type="button" class="gallery-arrow gallery-prev border-0" aria-label="Previous"><svg xmlns="http://www.w3.org/2000/svg" fill="none" width="40px" viewBox="0 0 42 42"><circle cx="21" cy="21" r="21" fill="var(--event-color-accent)" transform="rotate(-180 21 21)"></circle><path fill="#fff" stroke="#fff" stroke-width=".5" d="m20.2 27.5-.4-.2-6.6-6.4-.1-.4.1-.4 6.6-6.4a1 1 0 0 1 .9 0 1 1 0 0 1 0 .9l-5.5 5.3h14.5q.3 0 .5.2v.8l-.5.2H15.2l5.5 5.3a1 1 0 0 1 0 .9z"></path></svg></button>';
var galleryNext =
  '<button type="button" class="gallery-arrow gallery-next border-0" aria-label="Next"><svg xmlns="http://www.w3.org/2000/svg" fill="none" width="40px" viewBox="0 0 42 42"><circle cx="21" cy="21" r="21" fill="var(--event-color-accent)"></circle><path fill="#fff" stroke="#fff" stroke-width=".5" d="m21.8 14.5.4.2 6.6 6.4.1.4-.1.4-6.6 6.4a1 1 0 0 1-.9 0 1 1 0 0 1 0-.9l5.5-5.3H12.3q-.3 0-.5-.2v-.8l.5-.2h14.5l-5.5-5.3a1 1 0 0 1 0-.9z"></path></svg></button>';

// Engaging Sessions carousel
$(document).ready(function () {
  $('.slick-gallery-cards').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    arrows: true,
    mobileFirst: true,
    appendArrows: '.cards-arrows',
    prevArrow: galleryPrev,
    nextArrow: galleryNext,
    adaptiveHeight: true,
    dots: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        },
      },
    ],
  });
});

// Event Highlights gallery
$(document).ready(function () {
  $('.slick-gallery-1').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '20px',
    arrows: true,
    mobileFirst: true,
    appendArrows: '.gallery-arrows',
    prevArrow: galleryPrev,
    nextArrow: galleryNext,
    dots: true,
    responsive: [
      {
        breakpoint: 550,
        settings: {
          centerPadding: '60px',
        },
      },
      {
        breakpoint: 990,
        settings: {
          centerPadding: '80px',
        },
      },
      {
        breakpoint: 1024,
        settings: {
          centerPadding: '120px',
        },
      },
    ],
  });
});
