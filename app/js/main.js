$(function () {
  $('.main-slider__list').slick({  //слайдер
    infinite: false,
    prevArrow: '<button type="button" class="main-slider__btn main-slider__btn--prev"><svg><use xlink: href = "images/sprite.svg#icon-arrow"></use></svg></button>',
    nextArrow: '<button type="button" class="main-slider__btn main-slider__btn--next"><svg><use xlink: href = "images/sprite.svg#icon-arrow"></use></svg></button>',
  });

  $('.brands').slick({  //слайдер2
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    arrows: false,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 4500,
  });

  $('.catalog-btn').on('click', function () {   //Добавление класса
    $('.dropdown').toggleClass('dropdown--active');
    $('.catalog-btn').toggleClass('catalog-btn--active');
  })

  $('.user-nav__link--basket-icon').click(function (e) {   //Появление попапа с исчезновением по нажатию кнопки 
    e.preventDefault();
    $('.popup-overlay, .basket-popup').fadeIn(300);
    $(".popup-overlay, .basket-popup").css("visibility", "visible");
  });

  $('.button-close').click(function () {
    $('.popup-overlay, .basket-popup').fadeOut(300);
  });

  $('.star').rateYo({  //звездный рейтинг
    starWidth: "16px",
    ratedFill: "#FFB800",
    numStars: 1,
    rating: 5,
    readOnly: true,
    fullStar: true,
  });

  $(".stepper__btn--plus").click(function () {   //добавляет +1 товар при нажатии кнопки +
    var $price = $(".stepper__input");
    $price.val(parseInt($price.val()) + 1);
    $price.change();
  });

  $(".stepper__btn--minus").click(function () {  //убавляет -1 товар при нажатии кнопки -
    var $price = $(".stepper__input");
    $price.val(parseInt($price.val()) - 1);
    $price.change();
  });

  var containerEl1 = document.querySelector('[data-ref="container-1"]');  //микситап на 2 контейнера на странице
  var containerEl2 = document.querySelector('[data-ref="container-2"]');

  var config = {
    controls: {
      scope: 'local'
    }
  };
  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);
});

