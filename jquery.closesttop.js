/**
*
*	ClosestTop- jQuery plugin to find the div closest to top of window.
*	by Bärnt & Ärnst 
*	
*	Options:
*		{ up: true } (default: false) - Checks elements up from the window. 
*										Default checks window and below.
*
*
*	Examples:
*		$('.myclass').closestTop({ up : true }).attr('id') gets closest .myclass
*		up from the window.
*
*		$('.myclass').closestTop().attr('id') gets closest .myclass down from the
*		windows top.
*
**/	
(function($) {
  $.fn.closestTop = function(options, closest, closestdistance, towindow) {
    towindow = $(window).scrollTop();
 	closestdistance = $(document).height();
 	if(options==null) { options = { up: false }; }
 	else { 
 		if(options.up != null && options.up === true) { closestdistance = -1*$(document).height(); }
 	}
  	this.each(function() {
  		if(options.up==true) {
	   		if(($(this).offset().top - towindow) > closestdistance && ($(this).offset().top - towindow) < 0 ) {
	  			closestdistance = ($(this).offset().top - towindow);
	  			closest = this;
	  		} 			
  		} else {
	  		if(($(this).offset().top - towindow) < closestdistance && ($(this).offset().top - towindow) > 0 ) {
	  			closestdistance = ($(this).offset().top - towindow);
	  			closest = this;
	  		}
	  	}
  	});
  	return $(closest);
  };
})(jQuery);