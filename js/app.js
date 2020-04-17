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


  //   //start of menu toggle
  // $('.menu-toggle').click(function(){
  //    $('nav').toggleClass('active')
   
  // });//end of toggle me

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

    // $('.git').animate({width: '88%'}, 2000);
    //   $('.html').animate({width: '99.9%'}, 2000);
    //   $('.css').animate({width: '95%'}, 2000);
    //   $('.javascript').animate({width: '85%'}, 2000);
    //   $('.php').animate({width: '97%'}, 2000);
    //   $('.bootstrap').animate({width: '95%'}, 2000);
    //   $('.jquery').animate({width: '95%'}, 2000);
    //   $('.c-sharp').animate({width: '92%'}, 2000);
    //   $('.vb').animate({width: '97%'}, 2000);
    //   $('.sql').animate({width: '95%'}, 2000);
    //   $('.linux').animate({width: '92%'}, 2000);
    //   $('.lamp').animate({width: '90%'}, 2000);


})(jQuery); // End of use strict


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
}; //end of the loader of the page



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
  delay: 1000,
  origin: 'bottom',
  distance: '50px',
});

ScrollReveal().reveal('#specialties-3', {
  delay: 2000,
  distance: '50px',
  origin: 'bottom'
}, 2000);

ScrollReveal().reveal('.proglogo', {
  delay: 2000,
  distance: '50px',
  origin: 'bottom'
}, 2000);


ScrollReveal().reveal('.my-portfolio', {
  origin: 'bottom',
  distance: '250px',
  duration: 2000,
});

ScrollReveal().reveal('.all-logo', {
  delay: 2000,
  distance: '50px',
  origin: 'bottom'
}, 1000);

ScrollReveal().reveal('.my-skills', {
  delay: 1000,
  distance: '50px',
  origin: 'bottom'
});

ScrollReveal().reveal('.skills-wrapp', {
  delay: 1000,
  distance: '150px',
  origin: 'bottom'
}, 2000);

ScrollReveal().reveal('.my-contact', {
  delay: 1000,
  distance: '50px',
  origin: 'bottom'
});

ScrollReveal().reveal('.contact-info', {
  delay: 1000,
  distance: '150px',
  origin: 'bottom'
}, 2000);

ScrollReveal().reveal('.google-map', {
  delay: 1000,
  distance: '150px',
  origin: 'bottom'
}, 2000);

  /**Custom cursor for the website */
  var cursor = {
    delay: 8,
    _x: 0,
    _y: 0,
    endX: (window.innerWidth / 2),
    endY: (window.innerHeight / 2),
    cursorVisible: true,
    cursorEnlarged: false,
    $dot: document.querySelector('.cursor-dot'),
    $outline: document.querySelector('.cursor-dot-outline'),

    init: function() {
        // Set up element sizes
        this.dotSize = this.$dot.offsetWidth;
        this.outlineSize = this.$outline.offsetWidth;

        this.setupEventListeners();
        this.animateDotOutline();
    },

    updateCursor: function(e) {
        var self = this;

        console.log(e)

        // Show the cursor
        self.cursorVisible = true;
        self.toggleCursorVisibility();

        // Position the dot
        self.endX = e.pageX;
        self.endY = e.pageY;
        self.$dot.style.top = self.endY + 'px';
        self.$dot.style.left = self.endX + 'px';
    },

    setupEventListeners: function() {
        var self = this;

        // Anchor hovering
        document.querySelectorAll('a').forEach(function(el) {
            el.addEventListener('mouseover', function() {
                self.cursorEnlarged = true;
                self.toggleCursorSize();
            });
            el.addEventListener('mouseout', function() {
                self.cursorEnlarged = false;
                self.toggleCursorSize();
            });
        });

        // Click events
        document.addEventListener('mousedown', function() {
            self.cursorEnlarged = true;
            self.toggleCursorSize();
        });
        document.addEventListener('mouseup', function() {
            self.cursorEnlarged = false;
            self.toggleCursorSize();
        });


        document.addEventListener('mousemove', function(e) {
            // Show the cursor
            self.cursorVisible = true;
            self.toggleCursorVisibility();

            // Position the dot
            self.endX = e.pageX;
            self.endY = e.pageY;
            self.$dot.style.top = self.endY + 'px';
            self.$dot.style.left = self.endX + 'px';
        });

        // Hide/show cursor
        document.addEventListener('mouseenter', function(e) {
            self.cursorVisible = true;
            self.toggleCursorVisibility();
            self.$dot.style.opacity = 1;
            self.$outline.style.opacity = 1;
        });

        document.addEventListener('mouseleave', function(e) {
            self.cursorVisible = true;
            self.toggleCursorVisibility();
            self.$dot.style.opacity = 0;
            self.$outline.style.opacity = 0;
        });
    },

    animateDotOutline: function() {
        var self = this;

        self._x += (self.endX - self._x) / self.delay;
        self._y += (self.endY - self._y) / self.delay;
        self.$outline.style.top = self._y + 'px';
        self.$outline.style.left = self._x + 'px';

        requestAnimationFrame(this.animateDotOutline.bind(self));
    },

    toggleCursorSize: function() {
        var self = this;

        if (self.cursorEnlarged) {
            self.$dot.style.transform = 'translate(-50%, -50%) scale(0.75)';
            self.$outline.style.transform = 'translate(-50%, -50%) scale(1.5)';
        } else {
            self.$dot.style.transform = 'translate(-50%, -50%) scale(1)';
            self.$outline.style.transform = 'translate(-50%, -50%) scale(1)';
        }
    },

    toggleCursorVisibility: function() {
        var self = this;

        if (self.cursorVisible) {
            self.$dot.style.opacity = 1;
            self.$outline.style.opacity = 1;
        } else {
            self.$dot.style.opacity = 0;
            self.$outline.style.opacity = 0;
        }
    }
}
cursor.init();
/**End of Custom cursor for the website */