(function() {
    window.customTabs = function(el) {
        var els = {};
        els.firstTab = $(el.find('.first-tab')[0]);
        els.secondTab = $(el.find('.second-tab')[0]);
        els.firstTabContent = $(el.find('.first-tab-content')[0]);
        els.secondTabContent = $(el.find('.second-tab-content')[0]);

        el.each(function() {
            init($(this));
        });

        function init(el) {

            els.firstTab.on('click', changeTab);
            els.secondTab.on('click', changeTab);

            function changeTab(e) {
                if ($(e.target).hasClass('active-tab')) {
                }
                else{
                    if ($(e.target)[0] === els.firstTab[0]) {
                        els.secondTab.removeClass('active-tab');
                        els.firstTab.addClass('active-tab');
                        els.secondTabContent.css('display','none');
                        els.firstTabContent.css('display','block');
                    }
                    else if ($(e.target)[0] === els.secondTab[0]) {
                        els.firstTab.removeClass('active-tab');
                        els.secondTab.addClass('active-tab');
                        els.firstTabContent.css('display','none');
                        els.secondTabContent.css('display','block');
                    }
                }
            }
        }
    }
})();
