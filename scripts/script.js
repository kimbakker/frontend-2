/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

function uitklapMenu() {
    document.querySelector('.menu-categorie').classList.toggle('uitklapeffect1');
    document.querySelector('.fa-chevron-down').classList.toggle('fa-rotate-180');
}

document.querySelector('.categorie-titel').addEventListener("click", uitklapMenu);

function uitklapMenuMuziek() {
    document.querySelector('.menu-categorie-muziek').classList.toggle('uitklapeffect2');
    document.querySelector('.sub').classList.toggle('fa-rotate-180');
}

document.querySelector('.muziek').addEventListener("click", uitklapMenuMuziek);


//var favoriet = document.querySelector('.fave');
//
//function like() {
//    favoriet.setAttribute('src', 'images/hartje-rood.png');
//}
//
//favoriet.addEventListener('click', like);

//Tim de vos
var hartjes = document.getElementsByClassName('fave');
for (var i = 0; i < hartjes.length; i++) {
    var hartje = hartjes[i];
    hartje.onclick = function () {
        if (this.src == origin + "/images/hartje-rood.png") {
            this.src = "images/hartje.png";
        } else {
            this.src = "images/hartje-rood.png";
        }
    }
}
