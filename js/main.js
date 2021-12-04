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
	});
});

