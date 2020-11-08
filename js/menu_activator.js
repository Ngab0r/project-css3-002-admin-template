let pageName = document.querySelector(".content>h1").innerHTML;
activateMenuItem();

function activateMenuItem() {
    var list = document.querySelector('.nav__ul').getElementsByTagName('li');
    for (var i = 0, length = list.length; i < length; i++) {

        if (list[i].innerHTML.substring(
            list[i].innerHTML.indexOf('</i>')).includes(pageName)) {
            list[i].classList.add('nav__li--active')
            break;
        }
    }
}