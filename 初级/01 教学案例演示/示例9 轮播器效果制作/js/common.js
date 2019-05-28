//设置居中
function center(element) {
   element.css({
        left: ($(window).width() - element.outerWidth())/2,
        top: ($(window).height() - element.outerHeight())/2
    })
}
