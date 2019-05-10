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
	center($("#login"));
	//弹出登陆框
	$(".login").click(function () {
		//设置登陆框水平并且垂直居中
		center($("#login"))
		//登陆框显示
		$("#login").show();
	});
	//关闭登陆框
	$(".close").click(function () {
		$("#login").hide();
	});
});















