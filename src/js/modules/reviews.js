export default () => {
  $(".reviews-item__btn").on("click", function() {
    $(this)
      .parent()
      .toggleClass("active");
  });
  (function($) {
    $(window).on("load", function() {
      $(".reviews-list").mCustomScrollbar();
    });
  })(jQuery);
  $(".star1").on("click", function() {
    $(this)
      .parent()
      .removeClass("active1 active2 active3 active4 active5")
      .addClass("active1");
  });
  $(".star2").on("click", function() {
    $(this)
      .parent()
      .removeClass("active1 active2 active3 active4 active5")
      .addClass("active2");
  });
  $(".star3").on("click", function() {
    $(this)
      .parent()
      .removeClass("active1 active2 active3 active4 active5")
      .addClass("active3");
  });
  $(".star4").on("click", function() {
    $(this)
      .parent()
      .removeClass("active1 active2 active3 active4 active5")
      .addClass("active4");
  });
  $(".star5").on("click", function() {
    $(this)
      .parent()
      .removeClass("active1 active2 active3 active4 active5")
      .addClass("active5");
  });

  $(".feedback-btn").click(function() {
    var reviewInput1 = $(".input__val-1").val().length, reviewInput2 = $(".input__val-2").val().length,
      reviewInput3 = $(".input__val-3").val().length;
    if (reviewInput1 !== 0 && reviewInput3 !== 0 && reviewInput2 !== 0) {
			$(".input__val-1").val("");
			$(".input__val-2").val("");
      $(".input__val-3").val("");
      $(".feedback-modal").fadeIn();
      setTimeout(
        '$(".feedback").fadeOut(); $(".feedback-modal").fadeOut();',
        3000
      );
    } else {
      alert("Заполните все поля!");
    }
  });
  $(".feedback").fadeOut();
  $(".feedback-modal").fadeOut();
  $(".reviews-btn").click(function() {
    $(".feedback").fadeIn();
	});
	const oldPrice = document.querySelectorAll(".x_price_previous");
        const newPrice = document.querySelectorAll(".x_price_current");

	function delimiter(price) {
		for (let i = 0; i < price.length; i++) {
			price[i].textContent = price[i].textContent.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1.');
		}
	}
	delimiter(oldPrice);
	delimiter(newPrice);

	$('.social__img').on('click', function (e) {
		var target = $(e.target),
				dislikeImg = target.parent().next().children().first(),
				likeImg = target.parent().prev().children().first(),
				dislikeCount = target.parent().next().children().last(),
				likeCount = target.parent().prev().children().last();

		if (target.hasClass('like')) {
			target.toggleClass('used');
			target.toggleClass('like-active');
			dislikeImg.removeClass('dislike-active');

			if (target.hasClass('like-active')) {
				target.next().text(Number(target.next().text()) + 1);
			} else {
				target.next().text(Number(target.next().text()) - 1);
			}

			if (dislikeImg.hasClass('used')) {
				dislikeCount.text(Number(dislikeCount.text()) - 1);
				dislikeImg.removeClass('used');
			}
		} else {
			target.toggleClass('used');
			target.toggleClass('dislike-active');
			likeImg.removeClass('like-active');

			if (target.hasClass('dislike-active')) {
				target.next().text(Number(target.next().text()) + 1);
			} else {
				target.next().text(Number(target.next().text()) - 1);
			}

			if (likeImg.hasClass('used')) {
				likeCount.text(Number(likeCount.text()) - 1);
				likeImg.removeClass('used');
			}
		}
	});

};
