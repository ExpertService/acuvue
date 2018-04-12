$(document).ready(function () {
    svg4everybody({});
    (function() {
        jQuery('.custom-navbar__toggle-nav').click(function (e) {
            jQuery(this).toggleClass('custom-navbar__active');
            jQuery('.custom-navbar__menu ul').toggleClass('custom-navbar__active');
            e.preventDefault();
        });
    })();

});