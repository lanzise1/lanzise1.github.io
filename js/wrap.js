$(function() {
	$('.login').click(function() {
		$('.shade, .loginck').removeClass('hide')
	})
	$(".lg-close").click(function() {
		// $(".year").fadeOut(100);
		$('.shade,.loginck').addClass('hide')
		// $(".tc").hide(100);
	})
	$('.sl').click(function() {
		$('.shade, .year').removeClass('hide')
	})
	$(".y-close").click(function() {
		// $(".year").fadeOut(100);
		$('.shade, .year').addClass('hide')
		// $(".tc").hide(100);
	})
	//侧边栏

	console.log("3")



	// var winH = $(document).scrollTop();
	$(window).scroll(function() {
		var scrollY = $(document).scrollTop();
		if (scrollY > 600) {
			$(".slide-munu,.backon").css(
				"display", "block"
			)

		} else {
			$(".slide-munu,.backon").css(
				"display", "none"
			)
		}
	})
	console.log("1")

	$(".back").click(function() {
		// $(".slide-munu").fadeOut(100);
		// $(".back").hide()
		$(".backon").css({
			opacity: '1'
		})
		$(".slide-munu").animate({
			width: 0
		})
	})
	$(".backon").click(function() {
		// $(".slide-munu").fadeIn(10);
		if ($(".backon").css("opacity") == '1') {
			$(".backon").css({
				opacity: "0"
			})
		} else {
			$(".backon").css({
				opacity: "1"
			})
		}
		// // $(".backon").hide()
		// $(".back").show()
		$(".slide-munu").animate({
			width: 200
		})
		
	})
	console.log("2")


	// $(".slb>div").slideUp(1)
	$(".slide-btn-hpyd").hover(function() {
		// $(this).children("div").slideToggle(200)
		$(".mhpyd").animate({
			height: "180px",
		}, 200)
	})
	$('.slide-btn-hpyd').mouseleave(function() {
		$(".mhpyd").animate({
			height: "0px",
		}, 200)
	})
	$(".slide-btn-gzh").hover(function() {
		// $(this).children("div").slideToggle(200)
		$(".mgzh").animate({
			height: "180px",
		}, 200)
	})
	$('.slide-btn-gzh').mouseleave(function() {
		$(".mgzh").animate({
			height: "0px",
		}, 200)
	})

})
// if(鼠标单击事件){
// 	鼠标单击后的程序
// }else{
// 	滑动到某个地方的程序
// }
