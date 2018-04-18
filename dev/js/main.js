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
        $('.modal-close-button').click(function(){
            $('.modal-container').addClass('disappearing');
            $('body').removeClass('modal-active');
        });
    })();

    customInputNumberSpin($('.modal-pay-details__optical-strength-input'));
    customInputNumberSpin($('.modal-pay-details__basic-curvature-input'));
    customInputNumberSpin($('.modal-pay-details__axis-input'));

    (function () {
        $(".custom-select").each(function() {
            var classes = $(this).attr("class"),
                id      = $(this).attr("id"),
                name    = $(this).attr("name");
            var template =  '<div class="' + classes + '">';
            template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
            template += '<div class="custom-options">';
            $(this).find("option").each(function() {
                template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
            });
            template += '</div></div>';

            $(this).wrap('<div class="custom-select-wrapper"></div>');
            $(this).hide();
            $(this).after(template);
        });
        $(".custom-option:first-of-type").hover(function() {
            $(this).parents(".custom-options").addClass("option-hover");
        }, function() {
            $(this).parents(".custom-options").removeClass("option-hover");
        });
        $(".custom-select-trigger").on("click", function() {
            $('html').one('click',function() {
                $(".custom-select").removeClass("opened");
            });
            $(this).parents(".custom-select").toggleClass("opened");
            event.stopPropagation();
        });
        $(".custom-option").on("click", function() {
            $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
            $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
            $(this).addClass("selection");
            $(this).parents(".custom-select").removeClass("opened");
            $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
        });
    })();

});