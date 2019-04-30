$(function() {

	/* Price card equalHeights */
	$('.card_title').equalHeights();
	$('.card_list').equalHeights();

	/* Review carousel */
	$('.review-slider').owlCarousel({
		items: 1,
		nav: true,	
		navText: ['<i class="icon-left-open"></i>','<i class="icon-right-open"></i>'],
		loop: true,
	});

	/* allin-item equalHeights */
	$('.allin-item').equalHeights();

	/* material equalHeights */
	$('.material_img').equalHeights();
	$('.material_descr').equalHeights();

	/* Magnific forms */
	$("a[href='#callback']").magnificPopup({
		type: "inline",
		mainClass: 'mfp-forms'
	});

});
