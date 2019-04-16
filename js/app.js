$(document).ready(function(){
 //start of menu toggle
  $('.menu-toggle').click(function(){
    $('nav').toggleClass('active')
  });//end of toggle me



});//end of jquery



document.onreadystatechange = function () {
  var state = document.readyState
  if (state == 'interactive') {
       document.getElementById('contents').style.visibility="hidden";
  } else if (state == 'complete') {
      setTimeout(function(){
         document.getElementById('interactive');
         document.getElementById('load').style.visibility="hidden";
         document.getElementById('contents').style.visibility="visible";
      },2000);
  }
} //end of the loader of the page


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {  
  document.body.scrollTop = 1;
  document.documentElement.scrollTop = 1;
}


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