// $(window).on('resize scroll', function() {
//     if ($('#setup-steps-section').isInViewport()) {
//         $('#menu').addClass('light-scheme').removeClass('mixed-scheme')
//     } else if ($('#testimonial').isInViewport()) {
//         $('#menu').addClass('fixed-scheme').removeClass('light-scheme')
//     } else {
//         $('#menu').removeClass('light-scheme').removeClass('fixed-scheme')
//     }
// });
function openLogin() {
    document.getElementById('auth__in').style.display = 'block';
    document.getElementById('menu-links').style.display = 'none';
    document.getElementById('demo-image').style.display = 'none';
}
// document.getElementById("btn-login").onclick = function () {
//     document.getElementById('auth__in').style.display = 'block';
//     document.getElementById('menu-links').style.display = 'none';
//     document.getElementById('demo-image').style.display = 'none';
// };
// $('#btn-login').click(function () {
//     $('.auth__in').show();
//     $('#menu-links').hide();
//     $('.demo-image').hide()
// });

// indicators.click(reloadVideos(),checkSlideShow());
checkSlideShow();

// var indicatorsCollection = document.getElementsByClassName('carousel-indicators');
// var indicators = indicatorsCollection[0].getElementsByTagName('li');
function checkSlideShow() {
    // if (indicators[0].classList.contains('active')) {
    //     reloadVideos();
    //     console.log('video reloaded')
    // }
    setTimeout(function() {
        reloadVideos();
        console.log('video reloaded');
        checkSlideShow()
    }, 5600*3);
}

function reloadVideos() {
    var item = document.getElementById('setup-steps-carousel').getElementsByClassName('step-video');
    for (i = 0; i < item.length; i++) {
        item[i].load()
    }
}

// $.fn.isInViewport = function() {
//     var elementTop = $(this).offset().top;
//     var elementBottom = elementTop + $(this).outerHeight();
//
//     var viewportTop = $(window).scrollTop();
//     var viewportBottom = viewportTop + $(window).height();
//
//     return elementBottom > viewportTop && elementTop < viewportBottom;
// };

function openMenu() {
    var x = document.getElementById("menu");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}