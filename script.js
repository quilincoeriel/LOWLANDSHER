/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/


document.getElementById("msg").innerHTML = new Date().toLocaleString();


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

//https://www.w3schools.com/howto/howto_js_responsive_navbar_dropdown.asp



var button = document.querySelector('#javabutton');
var headerelement = document.querySelector('#clickhereimage');

function naarbeneden() {
    headerelement.classList.toggle('zaknaarbeneden');
}

button.addEventListener('click', naarbeneden);

//SLIDES IN DE LES//
