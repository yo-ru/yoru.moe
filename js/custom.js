(function ($) {

  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').fadeOut(1000); // set duration in brackets    
    });

    // ABOUT SLIDER
    $('body').vegas({
        slides: [
            { src: 'images/slides/1.jpg' },
            { src: 'images/slides/2.jpg' },
            { src: 'images/slides/3.jpg' },
            { src: 'images/slides/4.jpg' },
            { src: 'images/slides/5.jpg' }
        ],
        delay: 7000, // delay between slide transition
        timer: false, // disable timer
        shuffle: true, // shuffle images
        firstTransition: 'fade', // fade into first slide
        firstTransitionDuration: 5000, // ^ lasts five seconds
        transition: 'blur', // blur transition for rest of slides
        transitionDuration: 2000 // ^ lasts 2 seconds
    });

    // MUSIC
    $('#music').prop("volume", 0.1); // set music volume

})(jQuery);
