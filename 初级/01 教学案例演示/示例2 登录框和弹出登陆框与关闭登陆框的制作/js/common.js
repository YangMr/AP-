    //封装水平垂直居中方法
    function center(element) {
        // $(window).width() 可视区域的宽度  ($(window).height()  可视区域的高度
        //  element.outerWidth()  传入元素的宽度    element.outerHeight()  传入元素的高度
        element.css({
            left: ($(window).width() - element.outerWidth())/2,
            top: ($(window).height() - element.outerHeight())/2
        })
    }
