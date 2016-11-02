/**
 * Created by mikenewbry on 9/28/16.
 */

$(document).ready(function() {
    $('#showNav').click(function() {
        $('#mainNav').slideToggle("medium");
    });
    $('#hideNav').click(function() {
        $('#mainNav').slideToggle("medium");
    });
});



var mywindow = $(window);
var mypos = mywindow.scrollTop();
var up = false;
var newscroll;
mywindow.scroll(function () {
    newscroll = mywindow.scrollTop();
    if (newscroll > mypos && !up) {
        $('.hamtext').stop().fadeOut();
        up = !up;
        console.log(up);
    } else if(newscroll < mypos && up) {
        $('.hamtext').stop().fadeIn();
        up = !up;
    }
    mypos = newscroll;
});
