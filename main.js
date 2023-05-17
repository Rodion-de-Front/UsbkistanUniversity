let number = 1
let container = document.getElementById('container');
let content = document.getElementById('content');
let overlay = document.getElementById('overlay');

setInterval(function(){

    next();

}, 7000);

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