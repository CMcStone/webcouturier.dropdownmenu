/* The following line defines global variables defined elsewhere. */
/*globals $, jQuery*/


if (jQuery) {
    (function ($) {
        "use strict";
        $(document).ready(function () {
            // initialize the megamenu
            $('.megamenu').accessibleMegaMenu();
            
            // hack so that the megamenu doesn't show flash of css animation after the page loads.
            setTimeout(function () {
                $('body').removeClass('init');
            }, 500);
        });
    }(jQuery));
}
