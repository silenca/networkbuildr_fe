function openLogin() {
    document.getElementById('auth__in').style.display = 'block';
    document.getElementById('menu-links').style.display = 'none';
    document.getElementById('demo-image').style.display = 'none';
}
checkSlideShow();
function checkSlideShow() {
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

function openMenu() {
    var x = document.getElementById("menu");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}