
$(".wrapper").onepage_scroll();

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items:1, nav:true, navText: ["",""]
  });
});


                    //  Открыть гамбургер
var hamburger = document.getElementById("hamburger__link");
console.log (hamburger);
hamburger.addEventListener ("click", function(e){

e.preventDefault();

var nav = document.getElementById("nav");
  console.log(nav);
nav.classList.toggle("nav-active");

var hamburger = document.getElementById("hamburger");
console.log(hamburger);
hamburger.classList.toggle("hamburger-active");
});

// команда аккордеон

// $(".team__accordeon-name").on("click", function(e){
//     e.preventDefault();
//     $(this).parent().toggleClass("team__active");
  
// }
// )

$(".team__accordeon-name").on("click", function(e){
	e.preventDefault();
  var allItems = $(".team__accordeon-item");
  for(var i=0;i<allItems.length;i++){
    if($(allItems[i]).hasClass("team__active")==false){
    	$(this).parent().addClass("team__active");
    }else{
        $(allItems[i]).removeClass("team__active");
        $(this).parent().toggleClass("team__active");
    }
  }
});






 // меню аккордеон

 $(".menu__accordeon-wrap").on("click", function(e){
	e.preventDefault();
  var allItems = $(".menu__accordeon-item");
  for(var i=0;i<allItems.length;i++){
    if($(allItems[i]).hasClass("menu__active")==false){
    	$(this).parent().addClass("menu__active");
    }else{
        $(allItems[i]).removeClass("menu__active");
        $(this).parent().toggleClass("menu__active");
    }
  }
});



// $(".menu__accordeon-wrap").on("click",function(e){
//     e.preventDefault();
//     $(this).parent().toggleClass("menu__active");

// })



$('#order-form').on('submit', submitForm);

function submitForm (ev) {
    ev.preventDefault();
    
    var form = $(ev.target),
        data = form.serialize(),
        url = form.attr('action'),
        type = form.attr('method');

    ajaxForm(form).done(function(msg) {
        var mes = msg.mes,
            status = msg.status;
        
        if (status === 'OK') {
            form.append('<p class="success">' + mes + '</p>');
        } else{
            form.append('<p class="error">' + mes + '</p>');
        }
    }).fail(function(jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
    });

};

// Универсальная функция для работы с формами
var ajaxForm = function (form) {
    var data = form.serialize(),
        url = form.attr('action');
    
    return $.ajax({
        type: 'POST',
        url: url,
        dataType : 'JSON',
        data: data
    })
};