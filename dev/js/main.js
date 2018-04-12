$(document).ready(function () {
    svg4everybody({});
    (function() {
        jQuery('.custom-navbar__toggle-nav').click(function (e) {
            jQuery(this).toggleClass('custom-navbar__active');
            jQuery('.custom-navbar__menu ul').toggleClass('custom-navbar__active');
            e.preventDefault();
        });
    })();

    (function () {
        $('.lenses-parameters__change-parameters-button').click(function(){
            $('.modal-container').removeClass('disappearing').addClass('appearing');
            $('body').addClass('modal-active');
        });
        $('.modal-container').click(function(){
            $(this).addClass('disappearing');
            $('body').removeClass('modal-active');
        });
    })();

});