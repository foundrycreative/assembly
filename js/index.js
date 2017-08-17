


// ------- Hide Logo Tab -------- 

var prev = 0;
var $window = $(window);
var nav = $('.nav');

$window.on('scroll', function(){
  var scrollTop = $window.scrollTop();
  nav.toggleClass('hidden', scrollTop > prev);
  prev = scrollTop;
});






// -------- Scroll to Top --------

$(window).scroll(function() {
    if ($(this).scrollTop() >= 500) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(0);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(0);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});