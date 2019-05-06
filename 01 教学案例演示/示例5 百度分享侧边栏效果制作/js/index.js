//等待页面所有DOM元素加载完毕之后在执行
$(function () {
	//个人中心
	$(".member").hover(function () {
		$(this).css('background', 'url(images/arrow2.png) no-repeat 55px center');
		$(".member_ul").show();
	},function () {
		$(this).css('background', 'url(images/arrow.png) no-repeat 55px center');
		$(".member_ul").hide();
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
		$("#screen").show();
		//设置滚动条隐藏
		$("body").parent().css("overflow-y","hidden");
	});
	//关闭登陆框
	$(".close").click(function () {
		$("#login").hide();
		//遮罩隐藏
		$("#screen").hide();
		//设置滚动条实现
		$("body").parent().css("overflow-y","auto");
	});
	//拖拽效果
	$.fn.drag($("#login h2"),$("#login"));
	//百度分享初始化位置
	$("#share").css({
		top: ($(window).height() - $("#share").outerHeight())/2 + "px"
	})
	//百度分享侧边栏效果
	$("#share").hover(function () {
		$(this).stop().animate({
			left : 0
		})
	},function () {
		$(this).stop().animate({
			left : -211
		})
	})
});

















