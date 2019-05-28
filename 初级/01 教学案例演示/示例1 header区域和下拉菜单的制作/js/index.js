//等待页面所有DOM元素加载完毕之后在执行
$(function () {
	//下拉菜单效果
	$(".member").hover(function () {
		//鼠标移入时,背景图标修改为上箭头
		$(this).css('background', 'url(images/arrow2.png) no-repeat 55px center');
		//下拉菜单显示
		$(".member_ul").show();
		},function () {
		//鼠标移入时,背景图标修改为下箭头
		$(this).css('background', 'url(images/arrow.png) no-repeat 55px center');
		//下拉菜单隐藏
		$(".member_ul").hide();
	})
});










