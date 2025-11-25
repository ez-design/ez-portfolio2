(function( $ ){
    $.fn.counterUp = function( options ) {
        const $counters = $(this);
            
        const exposurePercentage = 100;
        const duration = 1500;

        const addCommas = true;
		
		$counters.each(function() {
			const $el = $(this);
			const start = parseInt($el.data("start"));
			const end = parseInt($el.data("end"));
			updateCounter($el, start, end);
		})

        function updateCounter($el, start, end) {
            let startTime;
            function animateCounter(timestamp) {
                if (!startTime) startTime = timestamp;
                const progress = (timestamp - startTime) / duration;
                const current = Math.round(start + progress * (end - start));
                const formattedNumber = addCommas ? current.toLocaleString() : current;
                $el.text(formattedNumber);
                
                if (progress < 1) {
                    requestAnimationFrame(animateCounter);
                } else {
                    $el.text(addCommas ? end.toLocaleString() : end);
                }
            }
            requestAnimationFrame(animateCounter);
        }
    }
})( jQuery );