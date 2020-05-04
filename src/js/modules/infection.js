export default () => {
	$(".infection-list").slick({
		dots: 0,
		infinite: true,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 4,
		prevArrow: '<svg class="arrow-left" xmlns="http://www.w3.org/2000/svg" width="45" height="28" viewBox="0 0 45 28"><g><g><path  d="M0 13H.52L11.435.15l1.414 1.415-9.714 11.434H45v2H3.138l9.711 11.434-1.414 1.416L.521 14.999H0z"/></g></g></svg>',
		nextArrow: '<svg class="arrow-right" xmlns="http://www.w3.org/2000/svg" width="45" height="28" viewBox="0 0 45 28"><g><g><path  d="M0 13h41.865L32.15 1.564 33.565.15 44.48 13h.52v2h-.52L33.565 27.849l-1.414-1.416L41.862 15H0z"/></g></g></svg>',
		autoplay: true,
		autoplaySpeed: 5000,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					autoplay: false
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					autoplay: false
				}
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					autoplay: false
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					adaptiveHeight: true
				}
			}
		]
	});
};
