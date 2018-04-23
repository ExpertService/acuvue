
$(document).ready(function () {
    svg4everybody({});

    $('.modal-addpoints__article-container').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        nextArrow: '<i class="right-arrow"></i>',
        prevArrow: '<i class="left-arrow"></i>',
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 1300,
                settings: "unslick"
            },
            {
                breakpoint: 300,
                settings: "slick"
            }
        ]
    });

    $(window).resize(function () {
        $('.modal-addpoints__article-container').not('.slick-initialized').slick('resize');
    });


    (function() {
        jQuery('.custom-navbar__toggle-nav').click(function (e) {
            jQuery(this).toggleClass('custom-navbar__active');
            jQuery('.custom-navbar__menu ul').toggleClass('custom-navbar__active');
            e.preventDefault();
        });
    })();


    (function () {
        $('.lenses-parameters__change-parameters-button').click(function(){
            $('.modal-container-lenses-parameters').removeClass('disappearing').addClass('appearing');
            $('body').addClass('modal-active');
        });
        $('.purchase-history__addpoints-button').click(function(){
            $('.modal-container-addpoints').removeClass('disappearing').addClass('appearing');
            $('body').addClass('modal-active');
        });
        $('.settings__button').click(function(){
            $('.modal-container-settings').removeClass('disappearing').addClass('appearing');
            $('body').addClass('modal-active');
        });
        $('.modal-close-button').click(function(){
            $('.modal-container-lenses-parameters').addClass('disappearing');
            $('.modal-container-addpoints').addClass('disappearing');
            $('.modal-container-settings').addClass('disappearing');
            $('body').removeClass('modal-active');
        });
    })();

    customInputNumberSpin($('.modal-pay-details__optical-strength-astigmatism-input'));
    customInputNumberSpin($('.modal-pay-details__optical-strength-presbyopia-input'));
    customInputNumberSpin($('.modal-pay-details__basic-curvature-input'));
    customInputNumberSpin($('.modal-pay-details__axis-input'));

    customPasswordField($('.modal-settings__input-password-container'));
    customPasswordField($('.registration__input-password-container'));

    customShowPassword($('.login__field-password'));

    customCheckBox($('.modal-settings__sms-notify'));
    customCheckBox($('.modal-settings__email-notify'));
    customCheckBox($('.additional-registration__accept-conditions'));
    customCheckBox($('.additional-registration__agreement-personal-data'));
    customCheckBox($('.additional-registration__agreement-sms'));

    customTabs($('.custom-tabs'));

    $('#additionalRegistrationForm').quickWizard({
            nextButton : '#form-wizard-next',
            prevButton : '#form-wizard-prev',
            element: 'section',
            breadCrumb: false
        }
    );

    // $("#additionalRegistrationForm").validate({
    //     debug: true
    // });

    $(function(){
        $("#inputPhoneNumber").mask("+7(999) 999-9999");
        $("#inputPhoneNumberRegistration").mask("+7(999) 999-9999");
    });

    (function () {
        $(".custom-select").each(function() {
            var classes = $(this).attr("class"),
                id      = $(this).attr("id"),
                name    = $(this).attr("name");
            var template =  '<div class="' + classes + '">';
            template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
            template += '<span class="custom-options-caption">' + $(this).attr("placeholder") + '</span>';
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
        $(".custom-select-trigger").on("click", function(e) {
            $('html').one('click',function() {
                $(".custom-select").removeClass("opened");
            });
            $(this).parents(".custom-select").toggleClass("opened");
            e.stopPropagation();
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