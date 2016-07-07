$(document).ready(function() {
	// 导航栏上的隐藏彩蛋～～
	$(".nav_box").mouseover(function() {
		$(".nav_box_detail").css("display", "block")
	}).mouseout(function() {
		$(".nav_box_detail").css("display", "none");
	})
	$(".nav_box>a").each(function(index) {
		if (index > 0) {
			$(this).mouseenter(function() {
				$(".de_content>ul").eq(index - 1).addClass("de_content_active");
				$(".de_content_active span").css("display", "block");
			}).mouseleave(function() {
				// 加了这句之后ul自身的hover效果就会彻底乱掉（就是菜单上面的小三角，变得有的时候出来有的时候不出来），不知道应该怎么解决。
				$(".de_content_active span").css("display", "none");
				$(".de_content>ul").eq(index - 1).removeClass("de_content_active");
			});
		};

	});
	// 图片轮播
	// 初识数字
	var size = $(".img_wrap li").size();
	for (var i = size - 1; i >= 0; i--) {
		$(".tripper").append("<li>" + i + "</li>");
	};
	$(".tripper li").first().addClass("tripper_active");
	//初始图片
	$(".img_wrap li").first().show();
	// 两边的箭头的淡入淡出
	$(".inner_banner").mouseenter(function() {
		$(".banner_side").fadeIn(300);
	}).mouseleave(function() {
		$(".banner_side").fadeOut(300);
	});
	// 手动控制轮播
	$(".tripper li").mouseover(function() {
		$(this).addClass("tripper_active").siblings().removeClass("tripper_active");
		var t = $(this).index();
		i = t;
		$(".img_wrap li").eq(t).stop().fadeIn(300).siblings().stop().fadeOut(300);
	});
	$(".banner_right").click(bannerMove);
	$(".banner_left").click(bannerMoveL);
	// 定时器，自动控制轮播
	var i = 0;
	var interval = setInterval(bannerMove, 2000);
	$(".inner_banner").hover(function() {
		clearInterval(interval);
	}, function() {
		interval = setInterval(bannerMove, 2000);
	});
	// 这个函数一定要放进来ready()函数里面，要不然就不能跟上面的index同步了。。好奇怪。。
	function bannerMove() {
		i++;
		if (i == size) {
			i = 0;
		};
		$(".tripper li").eq(i).addClass("tripper_active").siblings().removeClass("tripper_active");
		$(".img_wrap li").eq(i).fadeIn(400).siblings().fadeOut(400);
	}

	function bannerMoveL() {
		i--;
		if (i == -1) {
			i = size - 1;
		};
		$(".tripper li").eq(i).addClass("tripper_active").siblings().removeClass("tripper_active");
		$(".img_wrap li").eq(i).fadeIn(400).siblings().fadeOut(400);
	}
	// hot_course的切换～～～
	$(".hot_course_list>ul>li").mouseover(function() {
			$(this).addClass("hot_course_list_active").siblings().removeClass("hot_course_list_active");
			// ($(this).children("em")[0]).addClass("active_after");
			$(this).find("em").addClass("active_after")
			$(this).siblings().find("em").removeClass("active_after");
			var t = $(this).index();
			$(".hot_course ul").eq(t).show().siblings().hide();
		})
		// 战略企业处的实现，利用的是left和top的值来进行变化。。不过如何让元素可以循环转圈呢？
	$(".coperation_content").mouseenter(function() {
		$(".coperation_side").fadeIn(300);
	}).mouseleave(function() {
		$(".coperation_side").fadeOut(300);
	});

	$(".coperation_left").click(function() {
		if ($(".scroll_box").position().left > -672) {
			var a = $(".scroll_box").position().left - 168;
			$(".scroll_box").stop().animate({
				left: a
			}, 0);
		}
	})
	$(".coperation_right").click(function() {
			if ($(".scroll_box").position().left < 0) {
				var a = $(".scroll_box").position().left + 168;
				$(".scroll_box").stop().animate({
					left: a
				}, 0);
			}
		})
		//合作院校的js切换
	$(".school_content").mouseenter(function() {
		$(".school_side").fadeIn(300);
	}).mouseleave(function() {
		$(".school_side").fadeOut(300);
	});
	// 会有bug，当鼠标点击的很快的时候，这个animate最后并不会停到最后面
	$(".school_left").click(function() {
		if ($(".school_scoll").position().left > -864) {
			var a = $(".school_scoll").position().left - 144;
			$(".school_scoll").stop().animate({
				left: a
			}, 0);
		}
	})
	$(".school_right").click(function() {
			if ($(".school_scoll").position().left < 0) {
				var a = $(".school_scoll").position().left + 144;
				$(".school_scoll").stop().animate({
					left: a
				}, 0);
			}
		})
		//媒体报道的js样式
	$(".media_content").mouseenter(function() {
		$(".media_side").fadeIn(300);
	}).mouseleave(function() {
		$(".media_side").fadeOut(300);
	});

	$(".media_left").click(function() {
		if ($(".media_scoll").position().left > -672) {
			var a = $(".media_scoll").position().left - 168;
			$(".media_scoll").stop().animate({
				left: a
			}, 0);
		}
	})
	$(".media_right").click(function() {
		if ($(".media_scoll").position().left < 0) {
			var a = $(".media_scoll").position().left + 168;
			$(".media_scoll").stop().animate({
				left: a
			}, 0);
		} 
	})


})