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
	center($("#login"));
	//弹出登陆框
	$(".login").click(function () {
		//设置登陆框水平并且垂直居中
		center($("#login"));
		//登陆框显示
		$("#login").show();
		//遮罩显示
		$("#screen").fadeIn();
		//设置滚动条隐藏
		$("body").parent().css("overflow-y","hidden");
	});
	//关闭登陆框
	$(".close").click(function () {
		$("#login").hide();
		//遮罩隐藏
		$("#screen").fadeOut();
		//设置滚动条实现
		$("body").parent().css("overflow-y","auto");
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
			$('#nav .white').stop().animate({
				left : -target
			})
		})
	},function () {
		$('#nav .nav_bg').stop().animate({
			left : 20
		},function () {
			$('#nav .white').stop().animate({
				left : 0
			})
		})
	});
	//左侧菜单切换效果
	$("#sidebar h2").click(function () {
		$(this).next().slideToggle();
	});
	//轮播器效果
	//轮播器初始化
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
			$('#banner img').eq(prev).animate({opacity : 0,filter : "alpha(opacity=0)"}).css('zIndex', 1);
			$('#banner img').eq($(obj).index()).animate({opacity : 1,filter : "alpha(opacity=100)"}).css('zIndex', 2);
		} else if (banner_type == 2) {
			$('#banner img').eq(prev).animate({top : 100}).css('zIndex', 1).opacity(100);
			$('#banner img').eq($(obj).index()).animate({top : 0}).css('top', '-150px').css('zIndex', 2).opacity(100);
		}
	}

	//轮播器切换方法
	function banner_fn() {
		if (banner_index >= $('#banner ul li').length) banner_index = 0;
		banner($('#banner ul li').eq(banner_index).first(), banner_index == 0 ? $('#banner ul li').length - 1 : banner_index - 1);
		banner_index++;
	}

});


















