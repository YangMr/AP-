//等待页面所有DOM元素加载完毕之后在执行
$(function () {
	//个人中心
	$(".member").hover(function () {
		$(this).css('background', 'url(images/arrow2.png) no-repeat 55px center');
		$(".member_ul").stop().slideDown();
	},function () {
		$(this).css('background', 'url(images/arrow.png) no-repeat 55px center');
		$(".member_ul").stop().slideUp();
	});
	//设置登陆框水平并且垂直居中
	$("#login").css({
		left: ($(window).width() - $("#login").outerWidth())/2,
		top: ($(window).height() - $("#login").outerHeight())/2
	})
	//弹出登陆框
	$(".login").click(function () {
		$("#login").show();
		//遮罩显示
		$("#screen").fadeIn();
		//设置滚动条隐藏
		$("body").parent().css("overflow","hidden");
	});
	//关闭登陆框
	$(".close").click(function () {

		$("#login").hide();
		//设置滚动条显示
		$("body").parent().css("overflow","auto");
		//遮罩隐藏
		$("#screen").fadeOut();

	});
	//拖拽效果
	$.fn.drag($("#login h2"),$("#login"));
	//百度分享初始化位置
	$("#share").css({
		top: ($(window).height() - $("#share").outerHeight())/2 + "px"
	});
	//百度分享侧边栏效果
	$("#share").hover(function () {
		$(this).stop().animate({
			left : 0
		})
	},function () {
		$(this).stop().animate({
			left : -211
		})
	});
	//滑动导航
	$("#nav .about li").hover(function () {
		var target = $(this).get(0).offsetLeft;
		$("#nav .nav_bg").stop().animate({
			left : target + 20
		},function () {
			$('#nav .white').animate({
				left : -target
			})
		})
	},function () {
		$('#nav .nav_bg').animate({
			left : 20
		},function () {
			$('#nav .white').animate({
				left : 0
			})
		})
	});
	//左侧菜单切换效果
	var flag = true;
	$("#sidebar h2").click(function () {
		if(flag){
			$(this).next().animate({
				height : 0,
				opacity : 0
			});
			flag = false;
		}else{
			$(this).next().animate({
				height : 150,
				opacity : 100
			});
			flag = true;
		}
	})
	//轮播器效果
	//轮播器初始化
	//$('#banner img').css('display', 'none');
	//$('#banner img').eq(0).css('display', 'block');
	$('#banner img').css({"opacity" : 0,"filter" : "alpha(opacity=0)"})
	$('#banner img').eq(0).css({"opacity" : 1,"filter" : "alpha(opacity=100)"});
	$('#banner ul li').eq(0).css('color', '#333');
	$('#banner strong').html($('#banner img').eq(0).attr('alt'));
	//轮播器计数器
	var banner_index = 1;

	//轮播器的种类
	var banner_type = 1; 		//1表示透明度，2表示上下滚动

	//自动轮播器
	var banner_timer = setInterval(banner_fn, 3000);

	//手动轮播器
	$('#banner ul li').hover(function () {
		clearInterval(banner_timer);
		if ($(this).css('color') != 'rgb(51, 51, 51)' && $(this).css('color') != '#333') {
			banner(this, banner_index == 0 ? $('#banner ul li').length - 1 : banner_index - 1);
		}
	}, function () {
		banner_index = $(this).index() + 1;
		banner_timer = setInterval(banner_fn, 3000);
	});

	function banner(obj, prev) {
		$('#banner ul li').css('color', '#999');
		$(obj).css('color', '#333');
		$('#banner strong').html($('#banner img').eq($(obj).index()).attr('alt'));

		if (banner_type == 1) {
			$('#banner img').eq(prev).animate({
				opacity : 0,
				filter : "alpha(opacity=0)"
			}).css('zIndex', 1);
			$('#banner img').eq($(obj).index()).animate({
				opacity : 1,
				filter : "alpha(opacity=100)"
			}).css('zIndex', 2);
		} else if (banner_type == 2) {
			$('#banner img').eq(prev).animate({
				top : 100
			}).css('zIndex', 1).opacity(100);
			$('#banner img').eq($(obj).index()).animate({
				top : 0
			}).css('top', '-150px').css('zIndex', 2).opacity(100);
		}
	}

	function banner_fn() {
		if (banner_index >= $('#banner ul li').length) banner_index = 0;
		banner($('#banner ul li').eq(banner_index).first(), banner_index == 0 ? $('#banner ul li').length - 1 : banner_index - 1);
		banner_index++;
	}

	//延迟加载效果
	var wait_load = $('.wait_load');
	wait_load.css("opacity",0);
	$(window).on('scroll', function () {
		setTimeout(function () {
			for (var i = 0; i < wait_load.length; i++) {
				var _this = wait_load.get(i);
				if ($(window).height() + $(window).scrollTop() >=  offsetTop(_this)) {
					$(_this).attr('src', $(_this).attr('xsrc')).animate({
						opacity : 100
					},1000);
				}
			}
		}, 1000);
	});
	function offsetTop(element) {
		var top = element.offsetTop;
		var parent = element.offsetParent;
		while (parent != null) {
			top += parent.offsetTop;
			parent = parent.offsetParent;
		}
		return top;
	};
	//预加载效果
	//图片弹窗居中
	var w = ($(window).width() - $("#photo_big").outerWidth())/2 + "px";
	var h = ($(window).height() - $("#photo_big").outerHeight())/2 + "px";
	$("#photo_big").css({
		left: w,
		top: h
	})
});


















