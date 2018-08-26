$(document).ready(function () {
    $(window).on('resize scroll', function() {
        if ($('#setup-steps-section').isInViewport()) {
            $('#menu').addClass('light-scheme').removeClass('mixed-scheme')
        } else if ($('#testimonial').isInViewport()) {
            $('#menu').addClass('fixed-scheme').removeClass('light-scheme')
        } else {
            $('#menu').removeClass('light-scheme').removeClass('fixed-scheme')
        }
    });
    $('#btn-login').click(function () {
        $('.auth__in').show();
        $('#menu-links').hide();
        $('.demo-image').hide()
    });
});

$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};

function openMenu() {
    var x = document.getElementById("menu");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}