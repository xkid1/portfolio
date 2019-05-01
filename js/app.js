(function($) {
  "use strict";

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').on('click', function() {
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

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
   // Collapse now if page is not at top
   navbarCollapse();
   // Collapse the navbar when page is scrolled
   $(window).scroll(navbarCollapse);

   //add remove active class in ul li
  //  $(document).on('click', 'ul li', function(){
  //   $(this).addClass('active').siblings().removeClass('active')
  // });


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
  }); //end of scroll to top

    //easy piechart for web
    $('.chart').easyPieChart({
      easing: 'easeOutBounce',
      trackColor: '#f2f2f2',
      size: 110,
      animate: 3000,
      barColor:'#2196f3',
      scaleColor:false,
      lineWidth: 7,
      lineCap:'circle',
      onStep: function(from, to, percent) {
          $(this.el).find('.percent').text(Math.round(percent));
      }
      });
    // var chart = window.chart = $('.chart').data('easyPieChart');
    // $('.number-percent').on('click', function() {
    //     chart.update(Math.min(40*2));
    // });

    $('.git').animate({width: '88%'}, 2000);
      $('.html').animate({width: '99.9%'}, 2000);
      $('.css').animate({width: '95%'}, 2000);
      $('.javascript').animate({width: '85%'}, 2000);
      $('.php').animate({width: '97%'}, 2000);
      $('.bootstrap').animate({width: '95%'}, 2000);
      $('.jquery').animate({width: '95%'}, 2000);
      $('.c-sharp').animate({width: '92%'}, 2000);
      $('.vb').animate({width: '97%'}, 2000);
      $('.sql').animate({width: '95%'}, 2000);
      $('.linux').animate({width: '92%'}, 2000);
      $('.lamp').animate({width: '90%'}, 2000);

})(jQuery); // End of use strict


//load the page first page first

/*
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

*/
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

ScrollReveal().reveal('.my-skills', {
  origin: 'bottom',
  distance: '350px',
  duration: 1000,
});

ScrollReveal().reveal('.skills-wrapp', {
  delay: 2000,
  distance: '150px',
  origin: 'bottom'
}, 1000);