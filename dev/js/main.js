
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

        jQuery('.custom-navbar__menu ul').click(function (e) {
            jQuery(this).toggleClass('custom-navbar__active');
            jQuery('.custom-navbar__menu').toggleClass('custom-navbar__active');
            //e.preventDefault();
        });
    })();


    (function() {
        $('input[type=radio][name=lenses-for-correction-right-eye]').change(function() {
            if (this.value == 'astigmatismRightEye') {
                $('.additional-registration__lenses-for-correction-astigmatism-right-eye-parameters').css('display','block');
                $('.additional-registration__lenses-for-correction-presbyopia-right-eye-parameters').css('display','none');
            }
            else if (this.value == 'presbyopiaRightEye') {
                $('.additional-registration__lenses-for-correction-astigmatism-right-eye-parameters').css('display','none');
                $('.additional-registration__lenses-for-correction-presbyopia-right-eye-parameters').css('display','block');
            }
        });
    })();

    (function() {
        $('input[type=radio][name=lenses-for-correction-left-eye]').change(function() {
            if (this.value == 'astigmatismLeftEye') {
                $('.additional-registration__lenses-for-correction-astigmatism-left-eye-parameters').css('display','block');
                $('.additional-registration__lenses-for-correction-presbyopia-left-eye-parameters').css('display','none');
            }
            else if (this.value == 'presbyopiaLeftEye') {
                $('.additional-registration__lenses-for-correction-astigmatism-left-eye-parameters').css('display','none');
                $('.additional-registration__lenses-for-correction-presbyopia-left-eye-parameters').css('display','block');
            }
        });
    })();

    (function() {
        $('input[type=radio][name=lenses-for-correction]').change(function() {
            if (this.value == 'astigmatism') {
                $('.modal-pay-details__lenses-for-correction-astigmatism-parameters').css('display','block');
                $('.modal-pay-details__lenses-for-correction-presbyopia-parameters').css('display','none');
            }
            else if (this.value == 'presbyopia') {
                $('.modal-pay-details__lenses-for-correction-astigmatism-parameters').css('display','none');
                $('.modal-pay-details__lenses-for-correction-presbyopia-parameters').css('display','block');
            }
        });
    })();

    (function () {
        $('.setting-password-form__change-button').click(function(){
            $('.setting-password-form__new-password-container').show();
            $('.setting-password-form__old-password-container').hide();
        });
    })();

    //анимация модальных окон
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
            $('.setting-password-form__new-password-container').hide();
            $('.setting-password-form__old-password-container').show();
            $('body').addClass('modal-active');
        });
        $('.order-QR-card__button').click(function(){
            $('.modal-container-order-card').removeClass('disappearing').addClass('appearing');
            $('body').addClass('modal-active');
        });
        $('.plus-points__button').click(function(){
            $('.modal-container-points-friend').removeClass('disappearing').addClass('appearing');
            $('body').addClass('modal-active');
        });
        $('.QR-code__button').click(function(){
            $('.modal-container-QR-code').removeClass('disappearing').addClass('appearing');
            $('body').addClass('modal-active');
        });

        $('.action-lens-link').click(function(){
            $('.modal-container-action-lens').removeClass('disappearing').addClass('appearing');
            $('body').addClass('modal-active');
        });
        $('.question-answer-link').click(function(){
            $('.modal-container-question-answer').removeClass('disappearing').addClass('appearing');
            $('body').addClass('modal-active');
        });
        $('.feedback-link').click(function(){
            $('.modal-container-feedback').removeClass('disappearing').addClass('appearing');
            $('body').addClass('modal-active');
        });


        $('.modal-close-button').click(function(){
            $('.modal-container-lenses-parameters').addClass('disappearing');
            $('.modal-container-addpoints').addClass('disappearing');
            $('.modal-container-settings').addClass('disappearing');
            $('.modal-container-order-card').addClass('disappearing');
            $('.modal-container-points-friend').addClass('disappearing');
            $('.modal-container-QR-code').addClass('disappearing');

            $('.modal-container-action-lens').addClass('disappearing');
            $('.modal-container-question-answer').addClass('disappearing');
            $('.modal-container-feedback').addClass('disappearing');
            $('body').removeClass('modal-active');
        });

        $('.modal-action-lens__close-button').click(function(){
            $('.modal-container-action-lens').addClass('disappearing');
            $('body').removeClass('modal-active');
        });
        $('.modal-points-friend__copy-button').click(function(){
            $('.modal-container-points-friend').addClass('disappearing');
            $('body').removeClass('modal-active');
        });
        $('.modal-QR-code__copy-button').click(function(){
            $('.modal-container-QR-code').addClass('disappearing');
            $('body').removeClass('modal-active');
        });

    })();



    //карточки линз
    (function () {
        $('.modal-action-lens__lens-item').click(function(e){
            $('.modal-action-lens__order-caption').show();
            $('.modal-action-lens__caption').hide();
            $('.modal-action-lens__order-button').show();
            $('.modal-action-lens__close-button').hide();
            $('.modal-action-lens__lens-item').not(this).fadeTo(0, 0.3);
            $(this).fadeTo(0, 1);
            if($(this).hasClass('modal-action-lens__lens-item--animate')){

            }
            else {
                $(this).toggleClass('modal-action-lens__lens-item--animate');
            }
            $('.modal-action-lens__lens-item').not(this).removeClass('modal-action-lens__lens-item--animate');
            e.stopPropagation();
        });

        $('.modal-action-lens__lens-list-container').click(function(){
                $('.modal-action-lens__order-caption').hide();
                $('.modal-action-lens__caption').show();
                $('.modal-action-lens__order-button').hide();
                $('.modal-action-lens__close-button').show();
                $('.modal-action-lens__lens-item').not(this).fadeTo(0, 1);
                $('.modal-action-lens__lens-item').removeClass('modal-action-lens__lens-item--animate');
        });

        $('.modal-action-lens__order-button').click(function(){
            $('.modal-container-action-lens').addClass('disappearing');
            $('body').removeClass('modal-active');
            $('.modal-container-lenses-parameters').removeClass('disappearing').addClass('appearing');
            $('body').addClass('modal-active');
            $('.modal-action-lens__order-caption').hide();
            $('.modal-action-lens__caption').show();
            $('.modal-action-lens__order-button').hide();
            $('.modal-action-lens__close-button').show();
            $('.modal-action-lens__lens-item').not(this).fadeTo(0, 1);
            $('.modal-action-lens__lens-item').removeClass('modal-action-lens__lens-item--animate');
        });

    })();

    customInputNumberSpin($('.modal-pay-details__optical-strength-astigmatism-input'));
    customInputNumberSpin($('.modal-pay-details__optical-strength-presbyopia-input'));
    customInputNumberSpin($('.modal-pay-details__basic-curvature-input'));
    customInputNumberSpin($('.modal-pay-details__axis-input'));

    customInputNumberSpin($('.additional-registration__left-eye-optical-strength-input'));
    customInputNumberSpin($('.additional-registration__right-eye-optical-strength-input'));
    customInputNumberSpin($('.additional-registration__optical-strength-astigmatism-left-eye-input'));
    customInputNumberSpin($('.additional-registration__optical-strength-astigmatism-right-eye-input'));

    customPasswordField($('.modal-settings__input-password-container'));
    customPasswordField($('.registration__input-password-container'));
    customPasswordField($('.restore-password-new__input-password-container'));

    customShowPassword($('.login__field-password'));

    customCheckBox($('.modal-settings__sms-notify'));
    customCheckBox($('.modal-settings__email-notify'));
    customCheckBox($('.additional-registration__accept-conditions'));
    customCheckBox($('.additional-registration__agreement-personal-data'));
    customCheckBox($('.additional-registration__agreement-sms'));
    customCheckBox($('.additional-registration__both-eye-identical'));
    customCheckBox($('.additional-registration__astigmatism-correction-checkbox'));




    customTabs($('.custom-tabs'));


    $('#additionalRegistrationForm').quickWizard({
            nextButton : '#form-wizard-next',
            prevButton : '#form-wizard-prev',
            element: 'section',
            breadCrumb: false
        }
    );

    $('#lensOrderForm').quickWizard({
            nextButton : '#lensOrderFormNextButton',
            element: 'section',
            breadCrumb: false
        }
    );

    $('#cardOrderForm').quickWizard({
            nextButton : '#cardOrderFormNextButton',
            element: 'section',
            breadCrumb: false
        }
    );


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