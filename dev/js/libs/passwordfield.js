(function() {
    window.customPasswordField = function(el) {
        var els = {};
        els.validationOutputContainer = $(el.find('.input-password__validation-output-container')[0]);
        els.validationOutputField = $(el.find('.input-password__validation-output-field')[0]);
        els.inputPasswordFieldNew = $(el.find('.input-password__field-new')[0]);
        els.inputPasswordFieldRepeat = $(el.find('.input-password__field-repeat')[0]);
        els.showHidePasswordButton = $(el.find('.input-password__show-hide-password-button')[0]);
        els.showPasswordIcon = $(el.find('.input-password__show-password-icon')[0]);
        els.hidePasswordIcon = $(el.find('.input-password__hide-password-icon')[0]);
        els.OKPasswordButton = $(el.find('.input-password__ok-button')[0]);

        el.each(function() {
            init($(this));
        });

        function init(el) {
            if(els.OKPasswordButton) {
                els.OKPasswordButton.on('click', validatePassword);
            }
            els.showHidePasswordButton.on('click', showHidePassword);

            function validatePassword() {
                if(els.inputPasswordFieldNew.val() === els.inputPasswordFieldRepeat.val()){
                    els.validationOutputContainer.css("visibility", "hidden");
                }
                else {
                    els.validationOutputContainer.css("visibility", "visible");
                }
            }

            function showHidePassword() {
                if(els.inputPasswordFieldNew.attr('type') == 'password'){
                    els.inputPasswordFieldNew.attr('type', 'text');
                    els.inputPasswordFieldRepeat.attr('type', 'text');
                    els.showPasswordIcon.css('display','none');
                    els.hidePasswordIcon.css('display','block');
                } else {
                    els.inputPasswordFieldNew.attr('type', 'password');
                    els.inputPasswordFieldRepeat.attr('type', 'password');
                    els.hidePasswordIcon.css('display','none');
                    els.showPasswordIcon.css('display','block');
                };
            }
        }
    }
})();
