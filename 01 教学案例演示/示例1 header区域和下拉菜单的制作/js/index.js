//等待页面所有DOM元素加载完毕之后在执行
$(function () {
	$(".member").hover(function () {
		$(this).css('background', 'url(images/arrow2.png) no-repeat 55px center');
		$(".member_ul").show();
	},function () {
		$(this).css('background', 'url(images/arrow.png) no-repeat 55px center');
		$(".member_ul").hide();
	})
});












