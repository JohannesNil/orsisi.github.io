$(document).ready(function() {
        $('body').fadeIn(800)
                });
   
// dropdown-hover effect
$(document).ready(function() {
$('.dropdown').hover(function()
                      {
    $('.dropdown-menu').slideDown(400);
});

    
    
// animated header effect
$(window).scroll(function()
                {   
    var scroll = $(window).scrollTop();
    
    console.log(scroll);
    if (scroll > 80) {     
    $('.navbar').addClass('shrink');
    }
    else {
    console.log('a');
        $('.navbar').removeClass('shrink');
         }
});

});

