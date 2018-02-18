
$(".wrapper").onepage_scroll();




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





var team_name = document.getElementsByClassName("team__accordeon-name");
console.log (team_name);
 var team_content = document.getElementsByClassName("team__accordeon-content");
console.log (team_content);

for (var i=0;i<team_name.length;i++){
  team_name[i].addEventListener('click',function() {
    if (!(this.classList.contains('team__active'))){
      for(var i=0;i<team_name.length;i++){
        team_name[i].classList.remove('team__active');
      }
      this.classList.add('team__active');
    }
})
}



$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items:1, nav:true
  });
});



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