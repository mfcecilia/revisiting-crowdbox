/**
Scroll to the start position when
the site loads and hide the excess content.
**/
$(document).ready(function(){
    $('#signIn, #signUp, #crowdBox, #search').fadeOut('slow');
  //  $('#signIn, #signUp, #crowdBox, #search').css('opacity', '0.0');
    $('html, body').animate({
        scrollTop: $("#home").offset().top
    }, 1000);  
    console.log("done");


    //Toggle sign in button and inputs

    $('#leftCenter').click(function(){    
            $('#signIn').fadeIn('slow');
        console.log("sign in");
    });
    
    
    //Toggle crowdbox button and inputs
    $('#topCenter').click(function(){    
            $('#crowdbox').fadeIn('slow');
        console.log("crowdbox");
    $('html, body').animate({
        scrollIntoView: $("#crowdBox").offset().top
    }, 1000);  
    console.log("done");
    });   


    //Toggle sign up button and inputs
    $('#rightCenter').click(function(){    
            $('#signUp').fadeIn('slow');
        console.log("sign up");
    });


    //Toggle search button and inputs
    $('#bottomCenter').click(function(){    
        $('#bottomCenter').fadeOut('slow', function(){
            $('#search').fadeIn('slow');
            console.log("search");
        });



    });


});
