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

	//菜单切换效果
	$("#sidebar h2").click(function () {
		$(this).next().slideToggle(1000);
	})

});




















