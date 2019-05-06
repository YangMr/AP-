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

});


















