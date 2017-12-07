
$(document)
    .ready(function() {

        // fix menu when passed
        $('.masthead')
            .visibility({
                once: false,
                onBottomPassed: function() {
                    $('.fixed.menu').transition('fade in');
                },
                onBottomPassedReverse: function() {
                    $('.fixed.menu').transition('fade out');
                }
            });

        // create sidebar and attach to menu open
        $('.ui.sidebar')
            .sidebar('attach events', '.toc.item');
        $('.lazyimage').visibility({
            type: 'image',
            transition: 'vertical flip in',
            duration: 500
        });
        $('.special.cards .image').dimmer({
            on: 'hover'
        });
        $(".cercle").css("cssText", "border-radius: 50%;width: 180px;height: 180px; !important;");

        /*
        $(window).scroll(function() {
            var scroll = $(this).scrollTop();
            if (scroll > 200 && scroll < 500) {
                $('.column.contact-list').fadeIn(500);
            } else {
                $('.column.contact-list').fadeOut(500);
            }
        });
        */
 });

