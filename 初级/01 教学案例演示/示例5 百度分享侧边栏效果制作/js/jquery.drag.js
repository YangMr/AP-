;(function ($) {
    $.fn.extend({
        drag : function (dragElement,moveElement) {
            console.log("111")
            dragElement.mousedown(function(e) {
                // e.pageX
                var positionDiv = $(this).offset();
                var distenceX = e.pageX - positionDiv.left;
                var distenceY = e.pageY - positionDiv.top;
                //alert(distenceX)
                // alert(positionDiv.left);

                $(document).mousemove(function(e) {
                    var x = e.pageX - distenceX;
                    var y = e.pageY - distenceY;

                    if (x < 0) {
                        x = 0;
                    } else if (x > $(window).width() - moveElement.outerWidth(true)) {
                        x = $(window).width() - moveElement.outerWidth(true);
                    }

                    if (y < 0) {
                        y = 0;
                    } else if (y > $(window).height() - moveElement.outerHeight(true)) {
                        y = $(window).height() - moveElement.outerHeight(true);
                    }

                    moveElement.css({
                        'left': x + 'px',
                        'top': y + 'px'
                    });
                });

                $(document).mouseup(function() {
                    $(document).off('mousemove');
                });
            });
        }
    })
})(jQuery)
