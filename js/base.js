var hamburger = document.getElementById("hamburger__link");
console.log (hamburger);
hamburger.addEventListener ("click", function(e){

e.preventDefault();

var nav = document.getElementById("nav");
  console.log(nav);
nav.classList.add("nav-active");

var hamburger = document.getElementById("hamburger");
console.log(hamburger);
hamburger.classList.add("hamburger-active");
});


var menu__accordeon = document.getElementById("menu__accordeon-item");
console.log (menu__accordeon);



$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items:1
  });
});
  