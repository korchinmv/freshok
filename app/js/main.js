$(function () {
  $('.hero-slider').slick({
    // autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: '<button type="button" class="slick-prev"><img class="arrow" src="/images/elements/prev-arrow.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img class="arrow" src="/images/elements/next-arrow.svg" alt=""></button>',
  });

  $('.menu__item').on('click', function () {
    $('.menu__item').toggleClass('menu__item--active');
  })
});