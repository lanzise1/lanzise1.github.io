$(function() {
	//定义

	var t = 0;
	var timer;
	$(".pht div").eq(0).show().siblings().hide();
	start();
	$(".show div").eq(0).show().siblings().hide();
	start1();
	$(".zjd").hover(function() {
		clearInterval(timer);
		t = $(this).index();
		changes1()
	}, function() {
		start1();
	});

	$(".bleft").click(function() {
		t--;
		if (t == -1) {
			t = 8;
		}
		changes();
	});
	$(".bright").click(function() {
		t++;
		if (t == 9) {
			t = 0;
		}
		changes();
		// console.log('111')
	});



	function start() {
		timer = setInterval(function() {
			t++;
			if (t == 9) {
				t = 0;
			}
			changes();
		}, 3000);
		// console.log('111')
	}

	function changes() {
		$(".pht div").eq(t).fadeIn(300).siblings().stop(true, true).fadeOut(300);
		// console.log('555')
		// $(".zjd").eq(index).addClass("current").siblings().removeClass("current");

	}

	function start1() {
		timer = setInterval(function() {
			t++;
			if (t == 5) {
				t = 0;
			}
			changes1();
		}, 3000);
		// console.log('111')
	}

	function changes1() {

		$(".show div").eq(t).fadeIn(300).siblings().stop(true, true).fadeOut(300);
		// console.log('555')
		$(".zjd").eq(t).addClass("current").siblings().removeClass("current");

	}

	// stid = setInterval(show, showtime)
	// 选项卡
	$(".top-lul>li").click(function() {
		//菜单
		$(this).addClass("mselect")
		$(this).siblings().removeClass("mselect")
		//内容
		var i = $(this).index()
		$(".left>.lul:eq(" + i + ")").addClass("select")
		$(".left>.lul:eq(" + i + ")").siblings().removeClass("select")
	})
	$(".top-rul>li").click(function() {
		//菜单
		$(this).addClass("mselect")
		$(this).siblings().removeClass("mselect")
		//内容
		var i = $(this).index()
		$(".right>.rul:eq(" + i + ")").addClass("rselect")
		$(".right>.rul:eq(" + i + ")").siblings().removeClass("rselect")
	})

	// foot部分---------------------------------------------------------------
	$(".i1").css("background", "url(./imge/weixin_pc_on.png) no-repeat");
	$('.i1').css('opacity', 0);
	$(".mg1").css('opacity', 0);
	// $(".p1").css('color', "orange")
	$(".i1,.p1").hover(
		function() {
			$(".p1").addClass("fontcolor")
			$(".mg1").stop().animate({
				opacity: '1'
			}, 200)
			$(".ci1").stop().animate({
				opacity: '0'
			}, 200);
			$(".i1").stop().animate({
				opacity: '1'
			}, 200);
		},
		function() {
			$(".p1").removeClass("fontcolor")
			$(".mg1").stop().animate({
				opacity: '0'
			}, 200)
			$(".i1").stop().animate({
				opacity: '0'
			}, 200);
			$(".ci1").stop().animate({
				opacity: '1'
			}, 200);
		});
	// -------------------------
	$(".i2").css("background", "url(./imge/weibo_pc_on.png) no-repeat");
	$('.i2').css('opacity', 0);
	$(".mg2").css('opacity', 0);
	// $(".p1").css('color', "orange")
	$(".i2,.p2").hover(
		function() {
			$(".p2").addClass("fontcolor")
			$(".mg2").stop().animate({
				opacity: '1'
			}, 200)
			$(".ci2").stop().animate({
				opacity: '0'
			}, 200);
			$(".i2").stop().animate({
				opacity: '1'
			}, 200);
		},
		function() {
			$(".p2").removeClass("fontcolor")
			$(".mg2").stop().animate({
				opacity: '0'
			}, 200)
			$(".i2").stop().animate({
				opacity: '0'
			}, 200);
			$(".ci2").stop().animate({
				opacity: '1'
			}, 200);
		});
	// -------------------------
	$(".i3").css("background", "url(./imge/weixin_pc_on.png) no-repeat");
	$('.i3').css('opacity', 0);
	$(".mg3").css('opacity', 0);
	// $(".p1").css('color', "orange")
	$(".i3,.p3").hover(
		function() {
			$(".p3").addClass("fontcolor")
			$(".mg3").stop().animate({
				opacity: '1'
			}, 200)
			$(".ci3").stop().animate({
				opacity: '0'
			}, 200);
			$(".i3").stop().animate({
				opacity: '1'
			}, 200);
		},
		function() {
			$(".p3").removeClass("fontcolor")
			$(".mg3").stop().animate({
				opacity: '0'
			}, 200)
			$(".i3").stop().animate({
				opacity: '0'
			}, 200);
			$(".ci3").stop().animate({
				opacity: '1'
			}, 200);
		});
	// -------------------------
	$(".i4").css("background", "url(./imge/bilibili_pc_on.png) no-repeat");
	$('.i4').css('opacity', 0);
	$(".mg4").css('opacity', 0);
	// $(".p1").css('color', "orange")
	$(".i4,.p4").hover(
		function() {
			$(".p4").addClass("fontcolor")
			$(".mg4").stop().animate({
				opacity: '1'
			}, 200)
			$(".ci4").stop().animate({
				opacity: '0'
			}, 200);
			$(".i4").stop().animate({
				opacity: '1'
			}, 200);
		},
		function() {
			$(".p4").removeClass("fontcolor")
			$(".mg4").stop().animate({
				opacity: '0'
			}, 200)
			$(".i4").stop().animate({
				opacity: '0'
			}, 200);
			$(".ci4").stop().animate({
				opacity: '1'
			}, 200);
		});
	// -------------------------
	$(".i5").css("background", "url(./imge/douyu_pc_on.png) no-repeat");
	$('.i5').css('opacity', 0);
	$(".mg5").css('opacity', 0);
	// $(".p1").css('color', "orange")
	$(".i5,.p5").hover(
		function() {
			$(".p5").addClass("fontcolor")
			$(".mg5").stop().animate({
				opacity: '1'
			}, 200)
			$(".ci5").stop().animate({
				opacity: '0'
			}, 200);
			$(".i5").stop().animate({
				opacity: '1'
			}, 200);
		},
		function() {
			$(".p5").removeClass("fontcolor")
			$(".mg5").stop().animate({
				opacity: '0'
			}, 200)
			$(".i5").stop().animate({
				opacity: '0'
			}, 200);
			$(".ci5").stop().animate({
				opacity: '1'
			}, 200);
		});
	// -------------------------
	$(".i6").css("background", "url(./imge/huya_pc_on.png) no-repeat");
	$('.i6').css('opacity', 0);
	$(".mg6").css('opacity', 0);
	// $(".p1").css('color', "orange")
	$(".i6,.p6").hover(
		function() {
			$(".p6").addClass("fontcolor")
			$(".mg6").stop().animate({
				opacity: '1'
			}, 200)
			$(".ci6").stop().animate({
				opacity: '0'
			}, 200);
			$(".i6").stop().animate({
				opacity: '1'
			}, 200);
		},
		function() {
			$(".p6").removeClass("fontcolor")
			$(".mg6").stop().animate({
				opacity: '0'
			}, 200)
			$(".i6").stop().animate({
				opacity: '0'
			}, 200);
			$(".ci6").stop().animate({
				opacity: '1'
			}, 200);
		});
	// -------------------------
	$(".i7").css("background", "url(./imge/kuaishou_pc_on.png) no-repeat");
	$('.i7').css('opacity', 0);
	$(".mg7").css('opacity', 0);
	// $(".p1").css('color', "orange")
	$(".i7,.p7").hover(
		function() {
			$(".p7").addClass("fontcolor")
			$(".mg7").stop().animate({
				opacity: '1'
			}, 200)
			$(".ci7").stop().animate({
				opacity: '0'
			}, 200);
			$(".i7").stop().animate({
				opacity: '1'
			}, 200);
		},
		function() {
			$(".p7").removeClass("fontcolor")
			$(".mg7").stop().animate({
				opacity: '0'
			}, 200)
			$(".i7").stop().animate({
				opacity: '0'
			}, 200);
			$(".ci7").stop().animate({
				opacity: '1'
			}, 200);
		});
	// -------------------------
	$(".i8").css("background", "url(./imge/qie_pc_on.png) no-repeat");
	$('.i8').css('opacity', 0);
	$(".mg8").css('opacity', 0);
	// $(".p1").css('color', "orange")
	$(".i8,.p8").hover(
		function() {
			$(".p8").addClass("fontcolor")
			$(".mg8").stop().animate({
				opacity: '1'
			}, 200)
			$(".ci8").stop().animate({
				opacity: '0'
			}, 200);
			$(".i8").stop().animate({
				opacity: '1'
			}, 200);
		},
		function() {
			$(".p8").removeClass("fontcolor")
			$(".mg8").stop().animate({
				opacity: '0'
			}, 200)
			$(".i8").stop().animate({
				opacity: '0'
			}, 200);
			$(".ci8").stop().animate({
				opacity: '1'
			}, 200);
		});
	// -------------------------
	$(".i9").css("background", "url(./imge/sph_pc_on.png) no-repeat center/cover");
	$('.i9').css('opacity', 0);
	$(".mg9").css('opacity', 0);
	// $(".p1").css('color', "orange")
	$(".i9,.p9").hover(
		function() {
			$(".p9").addClass("fontcolor")
			$(".mg9").stop().animate({
				opacity: '1'
			}, 200)
			$(".ci9").stop().animate({
				opacity: '0'
			}, 200);
			$(".i9").stop().animate({
				opacity: '1'
			}, 200);
		},
		function() {
			$(".p9").removeClass("fontcolor")
			$(".mg9").stop().animate({
				opacity: '0'
			}, 200)
			$(".i9").stop().animate({
				opacity: '0'
			}, 200);
			$(".ci9").stop().animate({
				opacity: '1'
			}, 200);
		});
})
