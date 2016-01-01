$(document).ready(function () {

	// topoffset based on the height of the nav-wrapper class (64px)
	var topoffset = $('.nav-wrapper').height();

	// the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
	$('.modal-trigger').leanModal();

	// Initialize collapse button
	$(".button-collapse").sideNav();
	// Initialize collapsible (uncomment the line below if you use the dropdown variation)
	//$('.collapsible').collapsible();


	//Use smooth scrolling when clicking on navigation
	// from https://gist.github.com/planetoftheweb/6729f849d7db31061b2e

	$('.nav-wrapper a[href*=#]:not([href=#])').click(function () {
		if (location.pathname.replace(/^\//, '') ===
			this.pathname.replace(/^\//, '') &&
			location.hostname === this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top - topoffset + 2
				}, 500);
				return false;
			} //target.length
		} //click function
	}); //smooth scrolling

//	$(window).scroll(function () {
//		var position = $(window).scrollTop();
//		if (position >= 380) {
//			$('#menu').fadeIn("slow", function () {
//				$("h6").addClass(".disBlock");
//			});
//		} else {
//			$('#menu').fadeOut("slow", function () {
//				// Animation complete
//			});
//		}
//	});
	
	// disable submit button while submitting email (for later use )
	$(function() {
		$('#emailform').submit(function(){
			$("input[type='submit']", this)
				.val("Please Wait...")
				.attr('disabled', 'disabled');
			return true;
  	});
	});

});