var hamburger = document.getElementById("hamburger__link");
console.log (hamburger);
hamburger.addEventListener ("click", function(e){

e.preventDefault();

var nav = document.getElementById("nav-list");
  console.log(nav);

nav.classList.add("nav-list_active");


});


var menu__accordeon = document.getElementById("menu__accordeon-item");
console.log (menu__accordeon);

  