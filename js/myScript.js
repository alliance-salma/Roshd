function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show2");
};
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
    
     $('.close-pop-up').click(function(e){
		$('#myPopup').removeClass('show2');   
    }); 
    
    
    $('.edit-email-icon').click(function(e){
		$('.edit-email-div').addClass('show2');   
    }); 
    $('.close-edit-pop').click(function(e){
		$('.edit-email-div').removeClass('show2');   
    });
    
    
    $('.edit-psw-btn').click(function(e){
		$('.edit-psw-div').addClass('show2');   
    }); 
    $('.close-edit-pop').click(function(e){
		$('.edit-psw-div').removeClass('show2');   
    });

    
    $('.edit-info-icon').click(function(e){
		$('.edit-info-div').addClass('show2');   
    }); 
    $('.close-edit-pop').click(function(e){
		$('.edit-info-div').removeClass('show2');   
    });

    
    

});
