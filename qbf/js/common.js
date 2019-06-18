$(function() {

	$(".icon-search").on("click", function(){
		$(".header-search input").toggleClass("input-active");
	});

	$(".humburger").on("click", function(){
		$(".humburger").toggleClass("on");
		$(".header-mobile").toggleClass("header-mobile_active");
		$("body").toggleClass("noscroll");
	});

	$(".main-section").owlCarousel({
		items: 1,
		nav: true,	
		navText: ["<i class='icon-angle-left'></i>","<i class='icon-angle-right'></i>"],
		loop: true,
		smartSpeed: 800,
		autoplay: true,
		autoplayTimeout: 7000
	});

	$(".press-slider").owlCarousel({
		items: 1,
		nav: false,
		loop: true,
		smartSpeed: 1500,
		autoplay: true,
		autoplayTimeout: 7500
	});

	$(".main-slider-content").equalHeights();
	$(".advantage").equalHeights();
	$(".fonds-generals__list").equalHeights();
	$(".market-item").equalHeights();
	$(".press-news-item__title").equalHeights();

	$(window).resize(function() {
		if ($(window).width() >= '992') {
			$(".partner").equalHeights();
		} else {
			$(".partner").css("max-height", "100%");
		}
	});

	if ($(window).width() >= '992') {
		$(".partner").equalHeights();
	}
	

	let analiticBtn = $("a[href='#analitics']"),
			newsBtn = $("a[href='#news']"),
			analiticWrap = $(".analitics-wrapper"),
			newsWrap = $(".news-wrapper");

	newsWrap.hide();

	analiticBtn.on("click", function(){
		newsBtn.removeClass("active");
		analiticBtn.addClass("active");
		analiticWrap.show("fast");
		newsWrap.hide("fast");
	});

	newsBtn.on("click", function(){
		analiticBtn.removeClass("active");
		newsBtn.addClass("active");
		newsWrap.show("fast");
		analiticWrap.hide("fast");
	});

	$("a[href='#start-today-callback']").magnificPopup({
		type: "inline",
		mainClass: 'mfp-forms'
	});

	$(".button-close").on("click", function(event){
		event.preventDefault();
		$(".mfp-close").trigger("click");
	});

	$(window).scroll(function(){
		if ($(this).scrollTop() > $(this).height()) {
			$('.top').addClass('active');
		} else {
			$('.top').removeClass('active');
		}
	});

	$('.top').click(function(){
		$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
	});

	let lazyLoadInstance = new LazyLoad({
		elements_selector: ".lazy"
		// ... more custom settings?
	});

	$(".history").animated("fadeInDown");
	$(".teammate").animated("fadeInDown");
	$(".partner").animated("fadeInDown");


});
