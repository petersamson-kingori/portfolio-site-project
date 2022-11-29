var i = 0;
var txt = 'An aspiring front end developer and user experience designer!';
var speed = 50;

function typeWritter () {
    if (i < txt.length) {
        document.getElementById("typer").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWritter, speed);
    }
}

typeWritter();



