$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		slidesToShow: 4,
        slidesToScroll: 1,
		adaptiveHaight: false,
		autoplay: false,
		speed:800,
        infinite: false,
        initialSlide: 0,
		swipe: true,
        waitforAnimate: false,
        centerMode: false,
		responsive: [
			{
			breakpoint: 1140,
			settings: {
				arrows:true,
				slidesToShow: 3,
				slidesToScroll: 2,
				adaptiveHaight: false,
				autoplay: false,
				speed:800,
				infinite: false,
				dots: true,
				initialSlide: 0,
				swipe: true,
				waitforAnimate: false,
				centerMode: false,
			}
			},
			{
			breakpoint: 992,
			settings: {
				arrows:true,
				slidesToShow: 2,
				slidesToScroll: 2,
				adaptiveHaight: false,
				autoplay: false,
				speed:800,
				infinite: false,
				dots: true,
				initialSlide: 0,
				swipe: true,
				waitforAnimate: false,
				centerMode: false,
			}
			},
			{
			breakpoint: 767,
			settings: {
				arrows:true,
				slidesToShow: 2,
				slidesToScroll: 2,
				adaptiveHaight: false,
				autoplay: false,
				speed:800,
				infinite: false,
				dots: true,
				initialSlide: 0,
				swipe: true,
				waitforAnimate: false,
				centerMode: false,
			}
			}
		]
	});
});

