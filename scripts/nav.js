$(document).ready(function() {
	$(window).scroll(function(){			   
	  	if ($(window).scrollTop()>200 && $(window).scrollTop()<=2170){
			$('#nav').addClass("fixed");
		} else {
			$('#nav').removeClass("fixed");
		}
	});
});