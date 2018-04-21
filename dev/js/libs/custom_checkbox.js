(function() {
    window.customCheckBox = function(el) {
        var els = {};
        els.checkedIcon = $(el.find('.custom-checkbox__checked-icon')[0]);
        els.uncheckedIcon = $(el.find('.custom-checkbox__unchecked-icon')[0]);
        els.nativCheckBox = $(el.find('input')[0]);

        el.each(function() {
            init($(this));
        });

        function init(el) {
            els.nativCheckBox.on('click', changeIcon);

            function changeIcon() {
                if(els.nativCheckBox.is(":checked")){
                    els.checkedIcon.css('display','none');
                    els.uncheckedIcon.css('display','block');
                }
                else {
                    els.uncheckedIcon.css('display','none');
                    els.checkedIcon.css('display','block');
                }
            }

        }
    }
})();
