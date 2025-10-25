/*!
    * Start Bootstrap - Resume v6.0.2 (https://startbootstrap.com/theme/resume)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
    */
(function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#sideNav",
    });

    // ------------------------------------------------------------------
    // Ensure page opens on About (if no hash or if hash is #projects)
    // ------------------------------------------------------------------
    // Behavior:
    //  - If the URL has no hash (user opens site root) OR if the URL hash is "#projects",
    //    jump immediately to the element with id="about" and replace the URL hash with #about
    //  - If there's another hash (e.g., #contact or #projectX), we leave it alone
    // ------------------------------------------------------------------
    $(function () {
        var currentHash = location.hash;
        // if there is no hash, or hash explicitly points to #projects, force About
        if (!currentHash || currentHash === "#projects") {
            var about = $("#about");
            if (about.length) {
                // instant scroll to About (0ms so user doesn't see animated jump)
                $('html, body').stop().animate({ scrollTop: about.offset().top }, 0);
                // update URL to #about without adding a new history entry
                try {
                    history.replaceState(null, null, "#about");
                } catch (e) {
                    // ignore if history API not supported
                }
            }
        }
    });

})(jQuery); // End of use strict
