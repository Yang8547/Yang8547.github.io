$(document).ready(function(){    
    $('body').scrollspy({target: ".navbar", offset: 85});
    $("#header a").on('click', function(event){

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash (#)
    var hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top - 80
    }, 800, function(){

    });
  });
});