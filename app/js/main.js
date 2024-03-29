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

	$('.burger').on('click', function () {   //Добавление класса
		$('.burger-menu').toggleClass('burger-menu--active');
		$('.overlay').fadeIn(200);
		$('.overlay').css('visibility', 'visible');
	})

	$('.drop-menu').on('click', function () {   //Добавление класса
		$('.drop-menu__dropdown').toggleClass('drop-menu__dropdown--active');
		$('.drop-menu__btn').toggleClass('drop-menu__btn--active');
	})

	// $(document).mouseup(function (e) { // событие клика по веб-документу
	//   var dropmenu = $('.drop-menu, .drop-menu__dropdown'); // тут указываем ID элемента

	//   if (!dropmenu.is(e.target) // если клик был не по нашему блоку
	//     && dropmenu.has(e.target).length === 0) { // и не по его дочерним элементам
	//     dropdown.hide(); // скрываем его
	//   }
	// });

	$('.user-nav__link--basket-icon').click(function (e) {   //Появление попапа с исчезновением по нажатию кнопки 
		e.preventDefault();
		$('.overlay, .basket-popup').fadeIn(200);
		$('.overlay, .basket-popup').css('visibility', 'visible');
	});

	$('.burger--close').click(function () {
		$('.overlay, .basket-popup').fadeOut(300);
	});

	$(document).mouseup(function (e) { // событие клика по веб-документу
		var popup = $('.basket-popup'); // тут указываем ID элемента
		var overlay = $('.overlay');

		if (!popup.is(e.target) // если клик был не по нашему блоку
			&& popup.has(e.target).length === 0) { // и не по его дочерним элементам
			popup.hide(); // скрываем его
			overlay.hide(); // скрываем его
		}
	});

	$(document).on('keyup', function (e) { //закрытие модального окна при нажатии клавиши Escape на клавиатуре
		if (e.key == "Escape") {
			$(".basket-popup").hide();
			$(".overlay").hide();
		}
	});

	$('.search-btn').on('click', function () {   //Добавление класса Мобильный поиск
		$('.mobile-search').toggleClass('mobile-search--active');
	})

	$('.star').rateYo({  //звездный рейтинг
		starWidth: "16px",
		ratedFill: "#FFB800",
		numStars: 1,
		rating: 5,
		readOnly: true,
		fullStar: true,
		starSvg: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.0229731 6.16432C0.0780973 5.9946 0.224753 5.87091 0.401315 5.84529L5.36139 5.12451L7.57966 0.629933C7.6586 0.469933 7.82157 0.368652 7.99997 0.368652C8.17841 0.368652 8.34135 0.469933 8.42032 0.629933L10.6387 5.12451L15.5987 5.84529C15.7752 5.87091 15.9219 5.9946 15.977 6.16429C16.0322 6.334 15.9862 6.52028 15.8584 6.64481L12.2694 10.1434L13.1165 15.0834C13.1467 15.2593 13.0744 15.437 12.9301 15.5419C12.8484 15.6012 12.7517 15.6314 12.6545 15.6314C12.5799 15.6314 12.505 15.6136 12.4365 15.5776L8 13.2451L3.56374 15.5775C3.40577 15.6606 3.21443 15.6467 3.07009 15.5419C2.92574 15.437 2.8534 15.2593 2.88356 15.0834L3.73096 10.1434L0.141566 6.64478C0.0138168 6.52028 -0.0322151 6.334 0.0229731 6.16432Z" fill="#FFB800"/>
    </svg>`,
	});

	$('.stepper__btn--plus').click(function () {   //добавляет +1 товар при нажатии кнопки +
		$('.stepper__input').val(parseInt($('.stepper__input').val()) + 1);
		$('.stepper__input').change();
	});

	$('.stepper__btn--minus').click(function () {  //убавляет -1 товар при нажатии кнопки -
		$('.stepper__input').val(parseInt($('.stepper__input').val()) - 1);
		$('.stepper__input').change();
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

