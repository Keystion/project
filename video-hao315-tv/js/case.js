$(function() {
    var $el = $('#jp-container').jScrollPane({
        verticalGutter: -16
    }),
    extensionPlugin = {
        extPluginOpts: {
            mouseLeaveFadeSpeed: 500,
            hovertimeout_t: 1000,
            useTimeout: false,
            deviceWidth: 980
        },
        hovertimeout: null,
        isScrollbarHover: false,
        elementtimeout: null,
        isScrolling: false,
        addHoverFunc: function() {
            if ($(window).width() <= this.extPluginOpts.deviceWidth) return false;
            var instance = this;
            $.fn.jspmouseenter = $.fn.show;
            $.fn.jspmouseleave = $.fn.fadeOut;
            $el.bind('mouseenter.jsp',
            function() {
                $vBar.stop(true, true).jspmouseenter();
                if (!instance.extPluginOpts.useTimeout) return false;
                clearTimeout(instance.hovertimeout);
                instance.hovertimeout = setTimeout(function() {
                    if (!instance.isScrolling) $vBar.stop(true, true).jspmouseleave(instance.extPluginOpts.mouseLeaveFadeSpeed || 0)
                },
                instance.extPluginOpts.hovertimeout_t)
            }).bind('mouseleave.jsp',
            function() {
                if (!instance.extPluginOpts.useTimeout) $vBar.stop(true, true).jspmouseleave(instance.extPluginOpts.mouseLeaveFadeSpeed || 0);
                else {
                    clearTimeout(instance.elementtimeout);
                    if (!instance.isScrolling) $vBar.stop(true, true).jspmouseleave(instance.extPluginOpts.mouseLeaveFadeSpeed || 0)
                }
            });
            if (this.extPluginOpts.useTimeout) {
                $el.bind('scrollstart.jsp',
                function() {
                    clearTimeout(instance.hovertimeout);
                    instance.isScrolling = true;
                    $vBar.stop(true, true).jspmouseenter()
                }).bind('scrollstop.jsp',
                function() {
                    clearTimeout(instance.hovertimeout);
                    instance.isScrolling = false;
                    instance.hovertimeout = setTimeout(function() {
                        if (!instance.isScrollbarHover) $vBar.stop(true, true).jspmouseleave(instance.extPluginOpts.mouseLeaveFadeSpeed || 0)
                    },
                    instance.extPluginOpts.hovertimeout_t)
                });
                var $vBarWrapper = $('<div/>').css({
                    position: 'absolute',
                    left: $vBar.css('left'),
                    top: $vBar.css('top'),
                    right: $vBar.css('right'),
                    bottom: $vBar.css('bottom'),
                    width: $vBar.width(),
                    height: $vBar.height()
                }).bind('mouseenter.jsp',
                function() {
                    clearTimeout(instance.hovertimeout);
                    clearTimeout(instance.elementtimeout);
                    instance.isScrollbarHover = true;
                    instance.elementtimeout = setTimeout(function() {
                        $vBar.stop(true, true).jspmouseenter()
                    },
                    100)
                }).bind('mouseleave.jsp',
                function() {
                    clearTimeout(instance.hovertimeout);
                    instance.isScrollbarHover = false;
                    instance.hovertimeout = setTimeout(function() {
                        if (!instance.isScrolling) $vBar.stop(true, true).jspmouseleave(instance.extPluginOpts.mouseLeaveFadeSpeed || 0)
                    },
                    instance.extPluginOpts.hovertimeout_t)
                });
                $vBar.wrap($vBarWrapper)
            }
        }
    },
    jspapi = $el.data('jsp');
    $.extend(true, jspapi, extensionPlugin);
    jspapi.addHoverFunc()
});