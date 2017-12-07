$(document)
    .ready(function() {

        // fix main menu to page on passing
        $('.main.menu').visibility({
            type: 'fixed'
        });
        $('.overlay').visibility({
            type: 'fixed',
            offset: 80
        });

        // lazy load images
        $('.image').visibility({
            type: 'image',
            transition: 'vertical flip in',
            duration: 500
        });

        // show dropdown on hover
        $('.main.menu  .ui.dropdown').dropdown({
            on: 'hover'
        });
        $(".imagetext").css("cssText", "width: 50%;height: 50%;padding: 10px; !important;");
        $(".tags").css("cssText","margin:2px ; !important")

    })
;