$(function() {


	/*Запуск и настройка слайдера в шапке сайта*/
	$('.header-slider-wrapper').owlCarousel({
		items: 1,
		nav: true,
		dots: false,
		smartSpeed: 800,
		navText: ['<i class="icon-angle-left"></i>','<i class="icon-angle-right"></i>']
	});

	/*Запуск и настройка слайдера салатов*/
	function windowSize(){
		if ($(window).width() <= 1199){
				$('.salat-slider').addClass('owl-carousel');
				$('.salat-slider').owlCarousel({
					items: 3,
					nav: true,
					dots: false,
					smartSpeed: 800,
					navText: ['<i class="icon-angle-left"></i>','<i class="icon-angle-right"></i>'],
					responsive: {
						0:{
							items: 1,
							nav: false,
							dots: true
						},
						576:{
							items: 1,
							nav: false,
							dots: true
						},
						768:{
							items: 2
						},
						992: {
							items: 3
						}
					}
				});
		} else {
				$('.salat-slider').removeClass('owl-carousel');
				$('.salat-slider').trigger('destroy.owl.carousel');
		}
};

$(window).on('load resize' ,windowSize);


	/*Якорные кнопки в слайдере до карточек с пиццей*/
	$('#neapolitanaHeader').on('click', function() {
		var offset = 0;

			$('html, body').animate ({
				scrollTop: $('#neapolitanaBlock').offset().top - offset
			}, 500);

		$('#neapolitanaChoose').addClass('button__choose');
		$('#neapolitanaChoose').html('Количество:');
		$('#neapolitanaChoose').after('<i class="icon-ok icon-ok__choose"></i>');
		$('#neapolitanaAmount').css('opacity', '1');

			return false;
	});

	$('#peperoniHeader').on('click', function() {
		var offset = 0;

			$('html, body').animate ({
				scrollTop: $('#peperoniBlock').offset().top - offset
			}, 500);

		$('#peperoniChoose').addClass('button__choose');
		$('#peperoniChoose').html('Количество:');
		$('#peperoniChoose').after('<i class="icon-ok icon-ok__choose"></i>');
		$('#peperoniAmount').css('opacity', '1');

			return false;
	});

	$('#tropicaHeader').on('click', function() {
		var offset = 0;

			$('html, body').animate ({
				scrollTop: $('#tropicaBlock').offset().top - offset
			}, 500);

		$('#tropicaChoose').addClass('button__choose');
		$('#tropicaChoose').html('Количество:');
		$('#tropicaChoose').after('<i class="icon-ok icon-ok__choose"></i>');
		$('#tropicaAmount').css('opacity', '1');

			return false;
	});


	/*Скрол при нажатии на кнопку в head section*/
	$('.choose-pizza .head-section_button-scroll').on('click', function() {
		var offset = -100;

			$('html, body').animate ({
				scrollTop: $('.choose-pizza .head-section_button-scroll').offset().top - offset
			}, 500);
	});

	$('.choose-salat .head-section_button-scroll').on('click', function() {
		var offset = -100;

			$('html, body').animate ({
				scrollTop: $('.choose-salat .head-section_button-scroll').offset().top - offset
			}, 500);
	});

	$('.choose-drink .head-section_button-scroll').on('click', function() {
		var offset = -100;

			$('html, body').animate ({
				scrollTop: $('.choose-drink .head-section_button-scroll').offset().top - offset
			}, 500);
	});

	$('.section-info .head-section_button-scroll').on('click', function() {
		var offset = -100;

			$('html, body').animate ({
				scrollTop: $('.section-info .head-section_button-scroll').offset().top - offset
			}, 500);
	});


	/*Замена информации на карте с пиццей неаполитана*/
	$('#neapolitanaChoose').on('click', function(e) {
		e.preventDefault();
		$(this).addClass('button__choose');
		$(this).html('Количество:');
		$(this).after('<i class="icon-ok icon-ok__choose"></i>');
		$('#neapolitanaAmount').css('opacity', '1');
	});

	$('#neapolitana26').on('click', function() {
		$(this).addClass('active');
		$('#neapolitana32').removeClass('active');
		$('#neapolitanaPWrap').html('<span id="neapolitanaPrice">920</span> <span>руб.</span>');
		$('#neapolitanaSize').html('26');
	});

	$('#neapolitana32').on('click', function() {
		$(this).addClass('active');
		$('#neapolitana26').removeClass('active');
		$('#neapolitanaPWrap').html('<span id="neapolitanaPrice">1090</span> <span>руб.</span>');
		$('#neapolitanaSize').html('32');
	});


	/*Замена информации на карте с пиццей пеперони*/
	$('#peperoniChoose').on('click', function(e) {
		e.preventDefault();
		$(this).addClass('button__choose');
		$(this).html('Количество:');
		$(this).after('<i class="icon-ok icon-ok__choose"></i>');
		$('#peperoniAmount').css('opacity', '1');
	});

	$('#peperoni26').on('click', function() {
		$(this).addClass('active');
		$('#peperoni32').removeClass('active');
		$('#peperoniPWrap').html('<span id="peperoniPrice">675</span> <span>руб.</span>');
		$('#peperoniSize').html('26');
	});

	$('#peperoni32').on('click', function() {
		$(this).addClass('active');
		$('#peperoni26').removeClass('active');
		$('#peperoniPWrap').html('<span id="peperoniPrice">995</span> <span>руб.</span>');
		$('#peperoniSize').html('32');
	});


	/*Замена информации на карте с пиццей тропикана*/
	$('#tropicaChoose').on('click', function(e) {
		e.preventDefault();
		$(this).addClass('button__choose');
		$(this).html('Количество:');
		$(this).after('<i class="icon-ok icon-ok__choose"></i>');
		$('#tropicaAmount').css('opacity', '1');
	});

	$('#tropica26').on('click', function() {
		$(this).addClass('active');
		$('#tropica32').removeClass('active');
		$('#tropicaPWrap').html('<span id="tropicaPrice">565</span> <span>руб.</span>');
		$('#tropicaSize').html('26');
	});

	$('#tropica32').on('click', function() {
		$(this).addClass('active');
		$('#tropica26').removeClass('active');
		$('#tropicaPWrap').html('<span id="tropicaPrice">755</span> <span>руб.</span>');
		$('#tropicaSize').html('32');
	});


	/*Замена кнопок выбора салатов*/
	$('#greekChoose').on('click', function(e) {
		e.preventDefault();
		$(this).addClass('button__choose');
		$(this).html('Количество:');
		$(this).after('<i class="icon-ok icon-ok__choose"></i>');
		$('#greekAmount').css('opacity', '1');
	});

	$('#montecristoChoose').on('click', function(e) {
		e.preventDefault();
		$(this).addClass('button__choose');
		$(this).html('Количество:');
		$(this).after('<i class="icon-ok icon-ok__choose"></i>');
		$('#montecristoAmount').css('opacity', '1');
	});

	$('#oliveChoose').on('click', function(e) {
		e.preventDefault();
		$(this).addClass('button__choose');
		$(this).html('Количество:');
		$(this).after('<i class="icon-ok icon-ok__choose"></i>');
		$('#oliveAmount').css('opacity', '1');
	});

	$('#masqueradeChoose').on('click', function(e) {
		e.preventDefault();
		$(this).addClass('button__choose');
		$(this).html('Количество:');
		$(this).after('<i class="icon-ok icon-ok__choose"></i>');
		$('#masqueradeAmount').css('opacity', '1');
	});


	/*Замена кнопок в карточках с выбором напитков*/
	$('#cocacolaChoose').on('click', function(e) {
		e.preventDefault();
		$(this).addClass('button__choose');
		$(this).html('Количество:');
		$(this).after('<i class="icon-ok icon-ok__choose"></i>');
		$('#cocacolaAmount').css('opacity', '1');
	});

	$('#spriteChoose').on('click', function(e) {
		e.preventDefault();
		$(this).addClass('button__choose');
		$(this).html('Количество:');
		$(this).after('<i class="icon-ok icon-ok__choose"></i>');
		$('#spriteAmount').css('opacity', '1');
	});

	$('#schweppesChoose').on('click', function(e) {
		e.preventDefault();
		$(this).addClass('button__choose');
		$(this).html('Количество:');
		$(this).after('<i class="icon-ok icon-ok__choose"></i>');
		$('#schweppesAmount').css('opacity', '1');
	});


	/*Выравнивание по высоте карточек с выбором пиццы*/
	$('.pizza_title').equalHeights();
	$('.pizza_descr').equalHeights();
	$('.pizza_composition').equalHeights();


	/*Выравнивание по высоте карточек с салатом*/
	$('.salat_title').equalHeights();
	$('.salat_descr').equalHeights();
	$('.salat_composition').equalHeights();


	/*Выравнивание по высоки карточек с напитками*/
	$('.bottle_title').equalHeights();
	$('.bottle_price').equalHeights();




	/*Якорные ссылки до секций*/
	$('.scroll_header').on('click', function() {
		var offset = 0;

			$('html, body').animate ({
				scrollTop: $('.main-header').offset().top - offset
			}, 500);
	});

	$('.scroll_pizza').on('click', function() {
		var offset = -100;

			$('html, body').animate ({
				scrollTop: $('.choose-pizza .head-section_button-scroll').offset().top - offset
			}, 500);
	});

	$('.scroll_salat').on('click', function() {
		var offset = -100;

			$('html, body').animate ({
				scrollTop: $('.choose-salat .head-section_button-scroll').offset().top - offset
			}, 500);
	});

	$('.scroll_drink').on('click', function() {
		var offset = -100;

			$('html, body').animate ({
				scrollTop: $('.choose-drink .head-section_button-scroll').offset().top - offset
			}, 500);
	});


	/*Работа кнопки сбросить в счете*/
	$('.button-o').on('click', function(e) {
		e.preventDefault();
		$('input, textarea').val('');
		$('.bill_list_item').remove();

		/*Вывод итоговый цены*/
		var finalPrice = 0;
		$('.bill_list_item__price').each(function() {
				finalPrice += parseFloat($(this).text());
		});
		$('#final-price').html(finalPrice);
	});


	/*Добавление пиццы Неаполитана в счет*/
	$('#neapolitanaAmount').change(function() {
		var neapolitanaAmount = $(this).val();
		var neapolitanaName = 'Пицца Неаполитана';
		var neapolitanaPrice = $('#neapolitanaPrice').html();
		var neapolitanaFinalPrice = neapolitanaPrice * neapolitanaAmount;
		$('.bill_list').append('<li class="bill_list_item"><span class="bill_list_item_name"><span class="bill_list_item__reset"></span>Пицца Неаполитана</span><span class="bill_list_item_dots"></span><span class="bill_list_item_amount" id="bill-neapolitana-amount">1</span> шт. / <span class="bill_list_item__price" id="bill-neapolitana-price">920</span>руб.</li>');

		$('#bill-neapolitana-amount').html(neapolitanaAmount);
		$('#bill-neapolitana-price').html(neapolitanaFinalPrice);

		/*Вывод итоговый цены*/
		var finalPrice = 0;
		$('.bill_list_item__price').each(function() {
				finalPrice += parseFloat($(this).text());
		});
		$('#final-price').html(finalPrice);


		/*Работа кнопки крестик в счете*/
		$('.bill_list_item__reset').on('click', function() {
			var parentReset = $(this).parent();
			parentReset.parent().remove();
			$('#neapolitanaAmount').val('');

			/*Вывод итоговый цены*/
			var finalPrice = 0;
			$('.bill_list_item__price').each(function() {
					finalPrice += parseFloat($(this).text());
			});
			$('#final-price').html(finalPrice);
		});
	});


	/*Добавление пиццы Пеперони в счет*/
	$('#peperoniAmount').change(function() {
		var peperoniAmount = $(this).val();
		var peperoniName = 'Пицца Пеперони';
		var peperoniPrice = $('#peperoniPrice').html();
		var peperoniFinalPrice = peperoniPrice * peperoniAmount;
		$('.bill_list').append('<li class="bill_list_item"><span class="bill_list_item_name"><span class="bill_list_item__reset"></span>Пицца Пеперони</span><span class="bill_list_item_dots"></span><span class="bill_list_item_amount" id="bill-peperoni-amount">1</span> шт. / <span class="bill_list_item__price" id="bill-peperoni-price">675</span>руб.</li>');

		$('#bill-peperoni-amount').html(peperoniAmount);
		$('#bill-peperoni-price').html(peperoniFinalPrice);

		/*Вывод итоговый цены*/
		var finalPrice = 0;
		$('.bill_list_item__price').each(function() {
				finalPrice += parseFloat($(this).text());
		});
		$('#final-price').html(finalPrice);


		/*Работа кнопки крестик в счете*/
		$('.bill_list_item__reset').on('click', function() {
			var parentReset = $(this).parent();
			parentReset.parent().remove();
			$('#peperoniAmount').val('');

			/*Вывод итоговый цены*/
			var finalPrice = 0;
			$('.bill_list_item__price').each(function() {
					finalPrice += parseFloat($(this).text());
			});
			$('#final-price').html(finalPrice);
		});
	});


	/*Добавление пиццы Тропикана в счет*/
	$('#tropicaAmount').change(function() {
		var tropicaAmount = $(this).val();
		var tropicaName = 'Пицца Тропикана';
		var tropicaPrice = $('#tropicaPrice').html();
		var tropicaFinalPrice = tropicaPrice * tropicaAmount;
		$('.bill_list').append('<li class="bill_list_item"><span class="bill_list_item_name"><span class="bill_list_item__reset"></span>Пицца Тропикана</span><span class="bill_list_item_dots"></span><span class="bill_list_item_amount" id="bill-tropica-amount">1</span> шт. / <span class="bill_list_item__price" id="bill-tropica-price">565</span>руб.</li>');

		$('#bill-tropica-amount').html(tropicaAmount);
		$('#bill-tropica-price').html(tropicaFinalPrice);

		/*Вывод итоговый цены*/
		var finalPrice = 0;
		$('.bill_list_item__price').each(function() {
				finalPrice += parseFloat($(this).text());
		});
		$('#final-price').html(finalPrice);


		/*Работа кнопки крестик в счете*/
		$('.bill_list_item__reset').on('click', function() {
			var parentReset = $(this).parent();
			parentReset.parent().remove();
			$('#tropicaAmount').val('');

			/*Вывод итоговый цены*/
			var finalPrice = 0;
			$('.bill_list_item__price').each(function() {
					finalPrice += parseFloat($(this).text());
			});
			$('#final-price').html(finalPrice);
		});
	});


	/*Добавление греческого салата в счет*/
	$('#greekAmount').change(function() {
		var greekAmount = $(this).val();
		var greekName = 'Салат греческий';
		var greekPrice = $('#greekPrice').html();
		var greekFinalPrice = greekPrice * greekAmount;
		$('.bill_list').append('<li class="bill_list_item"><span class="bill_list_item_name"><span class="bill_list_item__reset"></span>Салат греческий</span><span class="bill_list_item_dots"></span><span class="bill_list_item_amount" id="bill-greek-amount">1</span> шт. / <span class="bill_list_item__price" id="bill-greek-price">240</span>руб.</li>');

		$('#bill-greek-amount').html(greekAmount);
		$('#bill-greek-price').html(greekFinalPrice);

		/*Вывод итоговый цены*/
		var finalPrice = 0;
		$('.bill_list_item__price').each(function() {
				finalPrice += parseFloat($(this).text());
		});
		$('#final-price').html(finalPrice);


		/*Работа кнопки крестик в счете*/
		$('.bill_list_item__reset').on('click', function() {
			var parentReset = $(this).parent();
			parentReset.parent().remove();
			$('#greekAmount').val('');

			/*Вывод итоговый цены*/
			var finalPrice = 0;
			$('.bill_list_item__price').each(function() {
					finalPrice += parseFloat($(this).text());
			});
			$('#final-price').html(finalPrice);
		});
	});


	/*Добавление салата Монтекристо в счет*/
	$('#montecristoAmount').change(function() {
		var montecristoAmount = $(this).val();
		var montecristoName = 'Салат монтекристо';
		var montecristoPrice = $('#montecristoPrice').html();
		var montecristoFinalPrice = montecristoPrice * montecristoAmount;
		$('.bill_list').append('<li class="bill_list_item"><span class="bill_list_item_name"><span class="bill_list_item__reset"></span>Салат монтекристо</span><span class="bill_list_item_dots"></span><span class="bill_list_item_amount" id="bill-montecristo-amount">1</span> шт. / <span class="bill_list_item__price" id="bill-montecristo-price">180</span>руб.</li>');

		$('#bill-montecristo-amount').html(montecristoAmount);
		$('#bill-montecristo-price').html(montecristoFinalPrice);

		/*Вывод итоговый цены*/
		var finalPrice = 0;
		$('.bill_list_item__price').each(function() {
				finalPrice += parseFloat($(this).text());
		});
		$('#final-price').html(finalPrice);


		/*Работа кнопки крестик в счете*/
		$('.bill_list_item__reset').on('click', function() {
			var parentReset = $(this).parent();
			parentReset.parent().remove();
			$('#montecristoAmount').val('');

			/*Вывод итоговый цены*/
			var finalPrice = 0;
			$('.bill_list_item__price').each(function() {
					finalPrice += parseFloat($(this).text());
			});
			$('#final-price').html(finalPrice);
		});
	});


	/*Добавление салата Оливье в счет*/
	$('#oliveAmount').change(function() {
		var oliveAmount = $(this).val();
		var oliveName = 'Салат оливье';
		var olivePrice = $('#olivePrice').html();
		var oliveFinalPrice = olivePrice * oliveAmount;
		$('.bill_list').append('<li class="bill_list_item"><span class="bill_list_item_name"><span class="bill_list_item__reset"></span>Салат оливье</span><span class="bill_list_item_dots"></span><span class="bill_list_item_amount" id="bill-olive-amount">1</span> шт. / <span class="bill_list_item__price" id="bill-olive-price">155</span>руб.</li>');

		$('#bill-olive-amount').html(oliveAmount);
		$('#bill-olive-price').html(oliveFinalPrice);

		/*Вывод итоговый цены*/
		var finalPrice = 0;
		$('.bill_list_item__price').each(function() {
				finalPrice += parseFloat($(this).text());
		});
		$('#final-price').html(finalPrice);


		/*Работа кнопки крестик в счете*/
		$('.bill_list_item__reset').on('click', function() {
			var parentReset = $(this).parent();
			parentReset.parent().remove();
			$('#oliveAmount').val('');

			/*Вывод итоговый цены*/
			var finalPrice = 0;
			$('.bill_list_item__price').each(function() {
					finalPrice += parseFloat($(this).text());
			});
			$('#final-price').html(finalPrice);
		});
	});


	/*Добавление салата Маскарад в счет*/
	$('#masqueradeAmount').change(function() {
		var masqueradeAmount = $(this).val();
		var masqueradeName = 'Салат Маскарад';
		var masqueradePrice = $('#masqueradePrice').html();
		var masqueradeFinalPrice = masqueradePrice * masqueradeAmount;
		$('.bill_list').append('<li class="bill_list_item"><span class="bill_list_item_name"><span class="bill_list_item__reset"></span>Салат Маскарад</span><span class="bill_list_item_dots"></span><span class="bill_list_item_amount" id="bill-masquerade-amount">1</span> шт. / <span class="bill_list_item__price" id="bill-masquerade-price">215</span>руб.</li>');

		$('#bill-masquerade-amount').html(masqueradeAmount);
		$('#bill-masquerade-price').html(masqueradeFinalPrice);

		/*Вывод итоговый цены*/
		var finalPrice = 0;
		$('.bill_list_item__price').each(function() {
				finalPrice += parseFloat($(this).text());
		});
		$('#final-price').html(finalPrice);


		/*Работа кнопки крестик в счете*/
		$('.bill_list_item__reset').on('click', function() {
			var parentReset = $(this).parent();
			parentReset.parent().remove();
			$('#masqueradeAmount').val('');

			/*Вывод итоговый цены*/
			var finalPrice = 0;
			$('.bill_list_item__price').each(function() {
					finalPrice += parseFloat($(this).text());
			});
			$('#final-price').html(finalPrice);
		});
	});


	/*Добавление напитка Кока-Кола в счет*/
	$('#cocacolaAmount').change(function() {
		var cocacolaAmount = $(this).val();
		var cocacolaName = 'Кока-Кола';
		var cocacolaPrice = $('#cocacolaPrice').html();
		var cocacolaFinalPrice = cocacolaPrice * cocacolaAmount;
		$('.bill_list').append('<li class="bill_list_item"><span class="bill_list_item_name"><span class="bill_list_item__reset"></span>Кока-Кола</span><span class="bill_list_item_dots"></span><span class="bill_list_item_amount" id="bill-cocacola-amount">1</span> шт. / <span class="bill_list_item__price" id="bill-cocacola-price">130</span>руб.</li>');

		$('#bill-cocacola-amount').html(cocacolaAmount);
		$('#bill-cocacola-price').html(cocacolaFinalPrice);

		/*Вывод итоговый цены*/
		var finalPrice = 0;
		$('.bill_list_item__price').each(function() {
				finalPrice += parseFloat($(this).text());
		});
		$('#final-price').html(finalPrice);


		/*Работа кнопки крестик в счете*/
		$('.bill_list_item__reset').on('click', function() {
			var parentReset = $(this).parent();
			parentReset.parent().remove();
			$('#cocacolaAmount').val('');

			/*Вывод итоговый цены*/
			var finalPrice = 0;
			$('.bill_list_item__price').each(function() {
					finalPrice += parseFloat($(this).text());
			});
			$('#final-price').html(finalPrice);
		});
	});


	/*Добавление напитка Спрайт в счет*/
	$('#spriteAmount').change(function() {
		var spriteAmount = $(this).val();
		var spriteName = 'Спрайт';
		var spritePrice = $('#spritePrice').html();
		var spriteFinalPrice = spritePrice * spriteAmount;
		$('.bill_list').append('<li class="bill_list_item"><span class="bill_list_item_name"><span class="bill_list_item__reset"></span>Спрайт</span><span class="bill_list_item_dots"></span><span class="bill_list_item_amount" id="bill-sprite-amount">1</span> шт. / <span class="bill_list_item__price" id="bill-sprite-price">130</span>руб.</li>');

		$('#bill-sprite-amount').html(spriteAmount);
		$('#bill-sprite-price').html(spriteFinalPrice);

		/*Вывод итоговый цены*/
		var finalPrice = 0;
		$('.bill_list_item__price').each(function() {
				finalPrice += parseFloat($(this).text());
		});
		$('#final-price').html(finalPrice);


		/*Работа кнопки крестик в счете*/
		$('.bill_list_item__reset').on('click', function() {
			var parentReset = $(this).parent();
			parentReset.parent().remove();
			$('#spriteAmount').val('');

			/*Вывод итоговый цены*/
			var finalPrice = 0;
			$('.bill_list_item__price').each(function() {
					finalPrice += parseFloat($(this).text());
			});
			$('#final-price').html(finalPrice);
		});
	});


	/*Добавление напитка Швепс в счет*/
	$('#schweppesAmount').change(function() {
		var schweppesAmount = $(this).val();
		var schweppesName = 'Швепс';
		var schweppesPrice = $('#schweppesPrice').html();
		var schweppesFinalPrice = schweppesPrice * schweppesAmount;
		$('.bill_list').append('<li class="bill_list_item"><span class="bill_list_item_name"><span class="bill_list_item__reset"></span>Швепс</span><span class="bill_list_item_dots"></span><span class="bill_list_item_amount" id="bill-schweppes-amount">1</span> шт. / <span class="bill_list_item__price" id="bill-schweppes-price">140</span>руб.</li>');

		$('#bill-schweppes-amount').html(schweppesAmount);
		$('#bill-schweppes-price').html(schweppesFinalPrice);

		/*Вывод итоговый цены*/
		var finalPrice = 0;
		$('.bill_list_item__price').each(function() {
				finalPrice += parseFloat($(this).text());
		});
		$('#final-price').html(finalPrice);


		/*Работа кнопки крестик в счете*/
		$('.bill_list_item__reset').on('click', function() {
			var parentReset = $(this).parent();
			parentReset.parent().remove();
			$('#schweppesAmount').val('');

			/*Вывод итоговый цены*/
			var finalPrice = 0;
			$('.bill_list_item__price').each(function() {
					finalPrice += parseFloat($(this).text());
			});
			$('#final-price').html(finalPrice);
		});
	});


	/*Работа кнопки оформить в счете*/
	$('#checkout').on('click', function(e) {
		e.preventDefault();
		if( $('#delivery-data').val() == '' ) {
			swal("Ошибка!", "Введите дату доставки", "error");
		} else if ( $('#delivery-time').val() == '' ) {
			swal("Ошибка!", "Введите время доставки", "error");
		} else if ( $('#delivery-name').val() == '' ) {
			swal("Ошибка!", "Введите ваше имя", "error");
		} else if ( $('#delivery-phone').val() == '' ) {
			swal("Ошибка!", "Введите ваш телефон", "error");
		} else if ( $('#delivery-address').val() == '' ) {
			swal("Ошибка!", "Введите ваш адресс", "error");
		} else if ( $('.bill_list').is(':empty') ) {
			swal("Ошибка!", "Вы ничего не заказали", "error");
		} else {
			swal("Спасибо за заказ!", "Втечение нескольких минут вам перезвонят", "success");
		}
	});


	/*Работа кнопки оставить заявку*/
	$('#sweetForm').on('click', function(e) {
		e.preventDefault();
		swal("Введите ваш номер телефона", {
  		content: "input",
		});
	});

});

$(window).on('load', function() {
	$('.preloader').delay(1000).fadeOut('slow');
});