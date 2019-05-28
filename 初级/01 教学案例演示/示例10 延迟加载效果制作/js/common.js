//设置居中
function center(element) {
   element.css({
        left: ($(window).width() - element.outerWidth())/2,
        top: ($(window).height() - element.outerHeight())/2
    })
}

    //获取元素距离可视区域顶部的距离
    function offsetTop(element) {
        var top = element.offsetTop;
        var parent = element.offsetParent;
        while (parent != null) {
            top += parent.offsetTop;
            parent = parent.offsetParent;
        }
        return top;
    }


