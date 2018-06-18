$("document").ready(function(){


	$('.sl-slide').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 2000,
	});

	$(".menu-top-b").on("click", function() {
		$(".menu-top-hiden").slideToggle();
	});

});