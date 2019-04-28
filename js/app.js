$(document).ready(function(){

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-triggers').on('click', function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  }); //end of scroll down

  
   //add remove active class in ul li
   $(document).on('click', 'ul li', function(){
    $(this).addClass('active').siblings().removeClass('active')
  });


    //start of menu toggle
  $('.menu-toggle').click(function(){
    var nav = document.getElementsByTagName('nav');
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
  }); //end of scroll to top


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
  origin: 'bottom',
  distance: '250px',
  duration: 2000,
  // scalle: 0.5
});
ScrollReveal().reveal('.about', {
  origin: 'left',
  distance: '250px',
  duration: 6000,
  // scalle: 0.5
});
ScrollReveal().reveal('.about.parag', {
  origin: 'bottom',
  distance: '250px',
  duration: 2000
});
ScrollReveal().reveal('#experience', {
  delay: 2000,
  distance: '100px',
  origin: 'right'
}, 1000);

ScrollReveal().reveal('.mySpecialties', {
  origin: 'bottom',
  distance: '250px',
  duration: 2000,
});

ScrollReveal().reveal('#specialties-3', {
  delay: 2000,
  distance: '100px',
  origin: 'bottom'
}, 1000);

ScrollReveal().reveal('.my-portfolio', {
  origin: 'bottom',
  distance: '250px',
  duration: 2000,
});

ScrollReveal().reveal('.all-logo', {
  delay: 2000,
  distance: '100px',
  origin: 'bottom'
}, 1000);
