/**
Scroll to the start position when
the site loads and hide the excess content.
**/
$(document).ready(function(){
  //  $('#signIn, #signUp, #crowdBox, #search').css('opacity', //'0.0');
    $('html, body').animate({
        scrollTop: $("#home").offset().top
    }, 1000);
    $('#signIn, #signUp, #crowdBox, #search').fadeOut('slow');
});

$('#leftCenter').click(function(){    
        $('#signIn').fadeIn('slow');
});

$('#rightCenter').click(function(){    
        $('#signUp').fadeIn('slow');
});

/*$('#search').click(function(){    
    $('#search').fadeOut('slow', function(){
        $('#bottomCenter').fadeIn('slow');
    });
});*/
