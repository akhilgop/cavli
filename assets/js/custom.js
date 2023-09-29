// ----------------------------------------------------------------Navbar On Scroll-------------------------------------------------------------------

var nav = document.querySelector('nav'); // Identify target
window.addEventListener('scroll', function(event) { // To listen for event
    event.preventDefault();

    if (window.scrollY <= 150) {
        nav.style.backgroundColor = 'transparent';
    } else {
        nav.style.backgroundColor = '#000';
        nav.style.boxShadow = '0px 1px 6px rgba(0, 0, 0, 0.1)';
    }
});



var nav = document.querySelector('nav'); // Identify target
window.addEventListener('scroll', function(event) { // To listen for event
    event.preventDefault();

    if (window.scrollY == 0) {
        nav.style.boxShadow = 'none';
        nav.style.backgroundColor = 'transparent';
    }
});

// ----------------------------------------------------------------Move To Top-------------------------------------------------------------------

mybutton = document.getElementById("myBtn");

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";

    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    $('html,body').animate({ scrollTop: 0 }, 'slow');
}

//---------------------------------------------------------------------Animate on Scroll------------------------------------------------------------------
function animateFrom(elem, direction) {
    'use strict';
    direction = direction || 1;
    var x = 0,
        y = direction * 100;
    elem.style.transform = "translate(" + x + "px, " + y + "px)";
    elem.style.opacity = "0";
    gsap.fromTo(elem, { x: x, y: y, autoAlpha: 0 }, {
        duration: 1.25,
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: "expo",
        overwrite: "auto"
    });
}

function hide(elem) {
    gsap.set(elem, { autoAlpha: 0 });
}

document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
        hide(elem); // assure that the element is hidden when scrolled into view

        ScrollTrigger.create({
            trigger: elem,
            onEnter: function() { animateFrom(elem) },
            onEnterBack: function() { animateFrom(elem, -1) },
            onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
        });
    });
});