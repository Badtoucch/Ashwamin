export default () => {
   
		// $(document).ready(function () {

		// 	function checkVisibility(el) {
		// 		var dTop = $(window).scrollTop(),
		// 			dBot = dTop + $(window).height(),
		// 			elTop = el.offset().top,
		// 			elBot = elTop + el.height();
		// 		return ((elTop <= dBot) && (elBot >= dTop));
		// 	}
	
		// 	function toggleBanner() {
		// 		const banner = $('.wPopup');
		// 		const topForm = $('.top-block .form');
		// 		const bottomForm = $('.last-block .form');
		// 		const actionBlock = $('.header');
		// 		const bannerHeight = banner.outerHeight();
		// 		const bankFixed = $('.bankFixed');
		// 		if (!checkVisibility(topForm) && !checkVisibility(bottomForm) && !checkVisibility(actionBlock)) {
		// 			banner.fadeIn();
		// 			// $('.promo__pay').css({"bottom":  $(".wPopup").outerHeight()});
		// 			bankFixed.css({
		// 				'-webkit-transform': `translateY(-${bannerHeight - 1}px)`,
		// 				'-moz-transform': `translateY(-${bannerHeight - 1}px)`,
		// 				'-ms-transform': `translateY(-${bannerHeight - 1}px)`,
		// 				'-o-transform': `translateY(-${bannerHeight - 1}px)`,
		// 				'transform': `translateY(-${bannerHeight - 1}px)`
		// 			});
		// 		} else {
		// 			banner.fadeOut();
		// 			// $('.promo__pay').css({"bottom":  0});
		// 			bankFixed.css({
		// 				'-webkit-transform': 'translateY(0)',
		// 				'-moz-transform': 'translateY(0)',
		// 				'-ms-transform': 'translateY(0)',
		// 				'-o-transform': 'translateY(0)',
		// 				'transform': 'translateY(0)'
		// 			});
		// 		}
		// 	}
		// 	$(window).on("scroll", function () {
		// 		toggleBanner();
		// 	});
	
		// });


		$(window).on("scroll resize", function () {
			hideBannerScroll(".x_order_form")// сюда через кому дописываем классы блоков, которые должны скрыть баннер
		});
		
		function hideBannerScroll() {
			const e = $(".wPopup"),
				t = $(".main-banner"),
				i = $(window).scrollTop(),
				o = i + $(window).height(),
				r = $(window).width();
			let n = 0;
			for (let e = 0; e < arguments.length; e++) $(arguments[e]).each(function (e, t) {
				let a = $(t).offset().top,
					c = a + $(t).outerHeight(),
					s = $(t).offset().left,
					l = s + $(t).width();
				a <= o && c >= i && s <= r && l >= 0 && (n += 1)
			});
			i <= 100 || n > 0 ? e.fadeOut() : e.fadeIn().css({
				bottom: t.outerHeight()
			})
		}
};
