$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        item: 1,
        autoplayTimeout: 5000,
        autoplay: true,
        animateOut: 'fadeOut',
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1024: {
                items: 2
            },
            1366: {
                items: 4
            },
        }
    })

    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                window.location.hash = hash;
            });
        }
    });

});

particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 54 || document.documentElement.scrollTop > 54) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


ScrollReveal({ reset: true });

ScrollReveal().reveal('.reveal', { delay: 300 });
ScrollReveal().reveal('.oferta-img');
ScrollReveal().reveal('.oferta-opis', { delay: 600 });