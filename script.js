var isMobile;
var FADE_TIME = 600;

function showAboutMe() {
	$('.home').fadeOut(FADE_TIME, function () {
		$('.about').fadeIn(FADE_TIME);
	});
}

function showHome() {
	$('.about').fadeOut(FADE_TIME, function () {
		$('.home').fadeIn(FADE_TIME);
	});
}

function attachEventHandlers() {
	$('#about-me-text').on('click', showAboutMe);
	$('#back-button').on('click', showHome);
}

$(document).ready(function() {
	attachEventHandlers();
	isMobile = window.matchMedia("only screen and (max-width: 760px)");

	try {
		$('body').ripples({
			dropRadius: 20, //px
			perturbance: 0.02,
		});
	}
	catch (e) {
		$('.error').show().text(e);
	}

	// Automatic drops
	setInterval(function() {
		var $el = $('body');
		var x = Math.random() * $el.outerWidth();
		var y = Math.random() * $el.outerHeight();
		var dropRadius = 20;
		var strength = 0.04 + Math.random() * 0.04;

		$el.ripples('drop', x, y, dropRadius, strength);
	}, 5000);
});
