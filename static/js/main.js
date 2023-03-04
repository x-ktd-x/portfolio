

// モバイルメニューopen & close
const body = document.querySelector('body');

function menuOpen() {
    body.classList.toggle('menu-click');
}

function menuClose() {
    body.classList.remove('menu-click');
}
