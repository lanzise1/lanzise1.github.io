$(function() {
	$('.on').mouseenter(function() {
		$(".top-nav-2").animate({
			height: "380px",
		}, 200)
	})
	$('.top-nav-2').mouseleave(function() {
		$(".top-nav-2").animate({
			height: "0px",
		}, 200)
	})
	//搜索
	$(".ss").on({
		mouseover:function(){
			$(this).attr('src','./imge/top_search_hover.png')
		},
		mouseout:function(){
			$(this).attr('src','./imge/top_search.png')
		}
	})
})
