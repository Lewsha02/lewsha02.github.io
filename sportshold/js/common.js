$(function() {

	$("[href='#login']").magnificPopup({
		type: "inline",
		mainClass: 'mfp-forms'
	});

	$("[href='#register']").magnificPopup({
		type: "inline",
		mainClass: 'mfp-forms'
	});

	$("[href='#question']").magnificPopup({
		type: "inline",
		mainClass: 'mfp-forms'
	});

	$('.menu-link').click(function() {
		$(this).toggleClass('menu-link_active');
		$('.nav-bar_menu').slideToggle();
	});

	$('#Container').mixItUp();

	var filterAll = $('[data-filter="all"]');
	var filterCat1 = $('[data-filter=".category-1"]');
	var filterCat2 = $('[data-filter=".category-2"]');

	filterCat1.click(function(){
		$(this).addClass('filter-active');
		filterAll.removeClass('filter-active');
		filterCat2.removeClass('filter-active');
	});

	filterCat2.click(function(){
		$(this).addClass('filter-active');
		filterAll.removeClass('filter-active');
		filterCat1.removeClass('filter-active');
	});

	filterAll.click(function(){
		$(this).addClass('filter-active');
		filterCat1.removeClass('filter-active');
		filterCat2.removeClass('filter-active');
	});

	$('.slider-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		centerMode: true,
		centerPadding: '0px',
		arrows: false,
		responsive: [
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true
				}
			},
		],
	});

	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		speed: 600,
		centerPadding: '10px',
		cssEase: 'linear',
		asNavFor: '.slider-nav'
	});

	$("[href='#view-collection']").click(function (){
		var offset = 0;

			$('html, body').animate ({
				scrollTop: $('.products').offset().top - offset
			}, 500);

			return false;
	});
});

$(window).on('load', function() {
	$('.preloader').delay(1000).fadeOut('slow');
})