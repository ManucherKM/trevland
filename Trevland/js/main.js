$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:3,
        slidesToScroll: 2,
		autoplay: false,
		speed:800,
        infinite: true,
        initialSlide: 2,
        waitforAnimate: false,
        centerMode: true,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});

