$(function () {
  $('.hero-slider').slick({
    infinite: false,
    prevArrow: '<button type="button" class="slick-prev"><svg class="prev-arrow"><use xlink: href = "images/sprite.svg#icon-prev-arrow"></use></svg></button> ',
    nextArrow: '<button type="button" class="slick-next"><svg class="next-arrow"><use xlink: href = "images/sprite.svg#icon-next-arrow"></use></svg></button>',
  });

  $('.menu__btn').on('click', function () {   //Добавление класса
    $('.submenu').toggleClass('submenu--active');
  })

  // let menuBtn = $(".menu__btn");  //Убираем класс
  // let submenu = $(".submenu")

  // $(document).on("click", function (event) {

  //   if (!menuBtn !== event.target && !menuBtn.has(event.target).length && ) {
  //     !submenu.removeClass('submenu--active');
  //   }
  // });
});

