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





// var team_name = document.getElementsByClassName("team__accordeon-name");
// console.log (team_name);
//  var team_content = document.getElementsByClassName("team__accordeon-content");
// console.log (team_content);

// for (var i=0;i<team_name.length;i++){
//   team_name[i].addEventListener('click',function() {
//     if (!(this.classList.contains('team__active'))){
//       for(var i=0;i<team_name.length;i++){
//         team_name[i].classList.remove('team__active');
//       }
//       this.classList.add('team__active');
//     }
// })
// }



var itemV = document.getElementsByClassName('team__accordeon-item');


var team_accordeon = function () {

    for (var i = 0; i < itemV.length; i++) {
        itemV[i].addEventListener('click', function (el) {

            el.currentTarget.classList.toggle(' team__accordeon--active');

            for (let i = 0; i < itemV.length; i++) {
                if (itemV[i] !== el.currentTarget && itemV[i].className === "team__accordeon-item team__accordeon--active") {
                    itemV[i].classList.remove('team__accordeon--active');
                }
            }
        });
    };
}






$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items:1
  });
});
  