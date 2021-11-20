$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:3,
        slidesToScroll: 3,
		autoplay: false,
		speed:800,
        infinite: true,
        initialSlide: 2,
        waitforAnimate: false,
        centerMode: true,
		
	});
});

