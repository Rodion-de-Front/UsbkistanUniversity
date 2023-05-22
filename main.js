let number = 1
let container = document.getElementById('container');
let content = document.getElementById('content');
let overlay = document.getElementById('overlay');



function qweqwe() {

    qweqwe = setInterval(function() {
        next();
    }, 7000);
}

qweqwe();

function next() {

    number++;
    if (number > 4) {

        number = 1
        link = "img/" + number + ".jpg";
        container.style.backgroundImage = "linear-gradient(to bottom, rgba(175, 37, 22, 0.75) 0%, rgba(175, 37, 22, 0.75) 100%), url(" + link + ")";
        content.innerHTML = document.getElementById(number).innerHTML;

    } else  {

         if (number == 2) {

            link = "img/" + number + ".jpg";
            container.style.backgroundImage = "linear-gradient(to bottom, rgba(255,225,90,0.5) 0%, rgba(0,0,0,0) 100%), url(" + link + ")";
            content.innerHTML = document.getElementById(number).innerHTML;

        } else if (number == 3) {

            link = "img/" + number + ".jpg";
            container.style.backgroundImage = "linear-gradient(to right, rgba(231,0,0,1) 0%, rgba(231,0,0,0.1) 100%), url(" + link + ")";
            content.innerHTML = document.getElementById(number).innerHTML;

        } else {

            link = "img/" + number + ".jpg";
            container.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 100%), url(" + link + ")";
            content.innerHTML = document.getElementById(number).innerHTML;

        }

    }
}

function previous() {

    number--;
    if (number < 1) {

        number = 4
        content.innerHTML = document.getElementById(number).innerHTML;
        link = "img/" + number + ".jpg";
        container.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 100%), url(" + link + ")";

    } else {

        if (number == 2) {

            link = "img/" + number + ".jpg";
            container.style.backgroundImage = "linear-gradient(to bottom, rgba(255,225,90,0.5) 0%, rgba(0,0,0,0) 100%), url(" + link + ")";
            content.innerHTML = document.getElementById(number).innerHTML;

        } else if (number == 3) {

            link = "img/" + number + ".jpg";
            container.style.backgroundImage = "linear-gradient(to right, rgba(231,0,0,1) 0%, rgba(231,0,0,0.1) 100%), url(" + link + ")";
            content.innerHTML = document.getElementById(number).innerHTML;

        } else {

            link = "img/" + number + ".jpg";
            container.style.backgroundImage = "linear-gradient(to bottom, rgba(175, 37, 22, 0.75) 0%, rgba(175, 37, 22, 0.75) 100%), url(" + link + ")";
            content.innerHTML = document.getElementById(number).innerHTML;

        }

    }
}

//функция чтобы открыть и спрятать меню
function toggleMenu() {

    document.getElementById('sidebar').classList.toggle('sidebar-active')
    document.getElementById('lines').classList.toggle('lines-active');


}

window.addEventListener('scroll', function () {

    let posTop = window.pageYOffset;

    if (posTop == 0) {

        document.querySelector(".menu").style.backgroundColor = "transparent";
        let elems = document.getElementsByClassName("option")
        for (let i = 0; i < elems.length; i++) {
            elems[i].style.color = "white";

            elems[i].addEventListener("mouseenter", function() {
                elems[i].style.color = "#3d84e6";
            });

            elems[i].addEventListener("mouseleave", function() {
                elems[i].style.color = "white";
            });
        }

        let span = document.querySelectorAll('span');
        for (let i = 0; i < elems.length; i++) {
            span[i].style.color = "white";
        }

        document.querySelector(".menu").style.zIndex = "2";

    } else {
        document.querySelector(".menu").style.backgroundColor = "white";
        let elems = document.getElementsByClassName("option")
        for (let i = 0; i < elems.length; i++) {
            elems[i].style.color = "black";

            elems[i].addEventListener("mouseenter", function() {
                elems[i].style.color = "#3d84e6";
            });

            elems[i].addEventListener("mouseleave", function() {
                elems[i].style.color = "black";
            });
        }

        let span = document.querySelectorAll('span');
        for (let i = 0; i < elems.length; i++) {
            span[i].style.color = "black";
        }

        document.querySelector(".menu").style.zIndex = "2";
    }


  });

  console.log(window.innerWidth)

  if (window.innerWidth < 800) {
    document.querySelector('nav').innerHTML = `
                                    <img id="lines" src="img/lines.png"/ onclick="toggleMenu()">
                                    <div id="sidebar">
                                        <strong><a class="menu-item" href="#container">HOME</a></strong>
                                        <strong><a class="menu-item" href="#INFO">INFO</a></strong>
                                        <strong><a class="menu-item" href="#Gallery">GALLERY</a></strong>
                                        <strong><a class="menu-item" href="#Classes">CLASSES</a></strong>
                                        <strong><a class="menu-item" href="#Partners">PARTNERS</a></strong>
                                        <strong><a class="menu-item" href="#Contact">CONTACT</a></strong>
                                        </div>
                                    </div>`
  }
