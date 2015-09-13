/**
Scroll to the start position when
the site loads and hide the excess content.
**/
$(document).ready(function(){
    $('#signIn, #signUp, #crowdBox, #search').css('opacity', '0.0');
    $('html, body').animate({
        scrollTop: $("#home").offset().top
    }, 1000);
});


$("#bottomCenter").click(function(){
    $('#search').css('opacity', '1.0');
    $('html, body').animate({
        scrollTop: $($.attr(this, '#search')).offset().top
    }, 1000);
});