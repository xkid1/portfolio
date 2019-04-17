$(document).ready(function(){
 //start of menu toggle
  $('.menu-toggle').click(function(){
    $('nav').toggleClass('active')
  });//end of toggle me

  // ===== Scroll to Top ==== 
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 600) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
  });
  $('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
  });

});//end of jquery


  


//load the page first page first
document.onreadystatechange = function () {
  var state = document.readyState
  if (state == 'interactive') {
       document.getElementById('contents').style.visibility="hidden";
  } else if (state == 'complete') {
      setTimeout(function(){
         document.getElementById('interactive');
         document.getElementById('load').style.visibility="hidden";
         document.getElementById('contents').style.visibility="visible";
      },1000);
  }
} //end of the loader of the page



// animateCSS('.my-element', 'bounce')




// scroll reveal when the user is scroll down
ScrollReveal().reveal('.about-me', {
  origin: 'top',
  distance: '',
  duration: 3000,
  scalle: 0.5
});
ScrollReveal().reveal('.about', {
  origin: 'top',
  distance: '',
  duration: 3000
});
ScrollReveal().reveal('#experience', {
  delay: 1000
}, 1000);