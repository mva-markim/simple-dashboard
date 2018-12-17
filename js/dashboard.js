var menuDropdown = document.getElementById('subMenu');
var btnMenu = document.getElementById("openSubMenu");
btnMenu.onclick = function() {
    if (menuDropdown.style.display == "block") {
        menuDropdown.style.display = "none";

    } else {
        menuDropdown.style.display = "block";
    }
}

var btnMenu = document.getElementById('btnMenu');
var menu = document.getElementById('menu');
var main = document.getElementById('main');
btnMenu.onclick = function() {
    if (menu.style.width != "275px") {
        menu.style.width = "275px";
        menu.style.transition = "all .8s"
        main.style.marginLeft = "275px"
        main.style.transition = "all .8s"
    } else {
        menu.style.width = "0";
        menu.style.transition = "all .8s"
        main.style.marginLeft = 0;
        main.style.transition = "all .8s"
    }
}