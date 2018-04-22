(function() {
    window.customShowPassword = function(el) {
        var els = {};
        els.inputPasswordField = $(el);
        els.showHidePasswordButton = $(el.next('.show-hide-password-button'));
        els.showPasswordIcon = $(els.showHidePasswordButton.find('.show-password-icon')[0]);
        els.hidePasswordIcon = $(els.showHidePasswordButton.find('.hide-password-icon')[0]);

        el.each(function() {
            init($(this));
        });

        function init(el) {
            els.showHidePasswordButton.on('click', showHidePassword);

            function showHidePassword() {
                if(els.inputPasswordField.attr('type') == 'password'){
                    els.inputPasswordField.attr('type', 'text');
                    els.showPasswordIcon.css('display','none');
                    els.hidePasswordIcon.css('display','block');
                } else {
                    els.inputPasswordField.attr('type', 'password');
                    els.hidePasswordIcon.css('display','none');
                    els.showPasswordIcon.css('display','block');
                };
            }
        }
    }
})();
