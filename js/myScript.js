$(document).ready(function(){
$('#menu-button').click(function(e){
    e.stopPropagation();
     $('#mob-menu').toggleClass('show-menu');
    });
    $('.close-menu ').click(function(e){
    $('.mobile-menu').removeClass('show-menu');
    });  
    $('#mob-menu').click(function(e){
        e.stopPropagation();
    });
    $('body,html').click(function(e){
           $('#mob-menu').removeClass('show-menu');
    });
});
