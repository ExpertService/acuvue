(function() {
    window.customInputNumberSpin = function(el) {
        var min = el.attr('min') || false;
        var max = el.attr('max') || false;
        var step = el.attr('step') || false;
        var prefix = el.attr('prefix') || false;
        var postfix = el.attr('postfix') || "";
        var els = {};

        els.dec = el.prev();
        els.inc = el.next();
        els.input = el;

        el.each(function() {
            init($(this));
        });

        function init(el) {
            els.dec.on('click', decrement);
            els.inc.on('click', increment);
            els.input.on('mousewheel', wheelincdec);
            function decrement() {
                var value = parseFloat(el[0].value);
                if(!step){
                    value--;
                }
                else{
                    value -= parseFloat(step);
                }
                if(!min || value >= min) {
                    if(prefix) {
                        if (value > 0) {
                            el[0].value = prefix + value.toFixed(2) + postfix;
                        }
                        else{
                            el[0].value = value.toFixed(2) + postfix;
                        }
                    }
                    else{
                        el[0].value = value.toFixed(2) + postfix;
                    }
                }
            }
            function increment() {
                var value = parseFloat(el[0].value);
                if(!step){
                    value++;
                }
                else{
                    value += parseFloat(step);
                }
                if(!max || value <= max) {
                    if(!min || value >= min) {
                        if(prefix) {
                            if (value > 0) {
                                el[0].value = prefix + value.toFixed(2) + postfix;
                            }
                            else{
                                el[0].value = value.toFixed(2) + postfix;
                            }
                        }
                        else{
                            el[0].value = value.toFixed(2) + postfix;
                        }
                    }
                }
            }
            function wheelincdec(e) {
                if(e.deltaY > 0){
                    increment();
                }
                else{
                    decrement();
                }
            }
        }
    }
})();