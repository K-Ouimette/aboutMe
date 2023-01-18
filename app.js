
var navbar = document.getElementById("navbar");
var navbarFill = getComputedStyle(navbar).getPropertyValue("fill");
var wave1 = document.getElementsByClassName("wave1")[0];
var wave2 = document.getElementsByClassName("wave2")[0];
var wave3 = document.getElementsByClassName("wave3")[0];

wave1.setAttribute("fill", navbarFill);
wave2.setAttribute("fill", navbarFill);
wave3.setAttribute("fill", navbarFill);
