/**
 * Created by Mary Songal on 10.05.2016.
 */

$(document).ready(function () {
    $('.menu-item').hover(function() {
        $(this).removeClass('menu-item-regular');
        $(this).addClass('menu-item-highlighted');
    },
    function () {
        $(this).addClass('menu-item-regular');
        $(this).removeClass('menu-item-highlighted');
    }
    );
    $('.simple-link').hover(function() {
        $(this).toggleClass('more-transparent');
    });
    $('.simple-link-small').hover(function() {
        $(this).toggleClass('more-transparent');
    });
    $('video').bind('loadedmetadata', function() {
            var rawWidth = $(this).prop('videoWidth');
            var rawHeight = $(this).prop('videoHeight');
            var origAspect = rawWidth / rawHeight;
            //var containerWidth = $(this).width();
            //var containerHeight = $(this).height();
            var containerWidth = 1920;
            var containerHeight = 1080;
            var targetAspect = containerWidth / containerHeight;
            var multi = (targetAspect/origAspect);
            $(this).css({
                "transform": "scaleX(" + multi + ")",
                /* IE 9 */
                "-ms-transform": "scaleX(" + multi + ")",
                /* Firefox */
                "-moz-transform": "scaleX(" + multi + ")",
                /* Safari and Chrome */
                "-webkit-transform": "scaleX(" + multi + ")",
                /* Opera */
                "-o-transform": "scaleX(" + multi + ")"
            });
        });
});