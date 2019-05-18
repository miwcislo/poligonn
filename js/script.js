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

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

ScrollReveal({ reset: true });

ScrollReveal().reveal('.reveal', { delay: 300 });
ScrollReveal().reveal('.oferta-img');
ScrollReveal().reveal('.oferta-opis', { delay: 600 });