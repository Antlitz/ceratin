$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
	//anchor scroll
		$('a[href^="#"]').on('click', function(event) {

		    var target = $( $(this).attr('href') );

		    if( target.length ) {
		        event.preventDefault();
		        $('html, body').animate({
		            scrollTop: target.offset().top
		        }, 1000);
		    }
			});

	//swiper slider
	var mySwiper = new Swiper('.results-slider', {
		nextButton: '.next-button',
        prevButton: '.prev-button',
        slidesPerView: 3,
        loop: true,
	    speed: 400,
	    breakpoints: {
	    	640: {
	    		slidesPerView: 2
	    	},
	    	530: {
	    		slidesPerView: 1
	    	}
	    }
	    
	}); 
	function getTimeRemaining(endtime) {
	  var t = Date.parse(endtime) - Date.parse(new Date());
	  var seconds = Math.floor((t / 1000) % 60);
	  var minutes = Math.floor((t / 1000 / 60) % 60);
	  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
	  return {
	    'total': t,
	    'hours': hours,
	    'minutes': minutes,
	    'seconds': seconds
	  };
	}

	function initializeClock(id, endtime) {
	  var clock = document.getElementById(id);
	  var hoursSpan = clock.querySelector('.hours');
	  var minutesSpan = clock.querySelector('.minutes');
	  var secondsSpan = clock.querySelector('.seconds');

	  function updateClock() {
	    var t = getTimeRemaining(endtime);

	    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
	    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
	    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

	    if (t.total <= 0) {
	      clearInterval(timeinterval);
	    }
	  }

	  updateClock();
	  var timeinterval = setInterval(updateClock, 1000);
	}

	var deadline = new Date(Date.parse(new Date()) + 1 * 11 * 15 * 5 * 1000);
	initializeClock('ceratin-timer', deadline);
	initializeClock('ceratin-timer2', deadline);

	});
