$(function () {

	$(document).ready(function () {
		$('.con_tit h1').addClass('active');
		$('.content').addClass('active');

	})


	$(document).on("click", ".navi_btn", function () {
		$(this).toggleClass('active');
		$('.navigation').fadeToggle('fast');
		$('.navigation').toggleClass('active');
	});


	/* tab */
	var cnt = 0;
	$('.tab_con .tab').hide().eq(0).show();
	$(document).on("click", ".tab_btn button", function () {
		cnt = $(this).index()
		$('.tab_btn button').removeClass('on').eq(cnt).addClass('on');
		$('.tab_con .tab').hide().eq(cnt).fadeIn();
	});

	AOS.init({
		duration: 800,
		once: 1
	});

	/*top btn*/
	$(document).on("click", ".top_btn", function () {
		$('html, body').animate({
			scrollTop: 0
		}, 700)
		return false;
	});

	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		if (scroll > 1) {
			$('.top_btn').addClass('on');
		} else {
			$('.top_btn').removeClass('on');
		}
	});

	var s = skrollr.init({
		duration: function (currentTop, targetTop) {
			return 20000;
		},
		easing: 'linear',
		mobileCheck: function () {
			if ((/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor ||
					window.opera)) {
				// mobile device
			}
		}
	});


});