/*
 * jQuery UI Touch Punch 0.2.2
 *
 * Copyright 2011, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
(function(b){b.support.touch="ontouchend" in document;if(!b.support.touch){return;}var c=b.ui.mouse.prototype,e=c._mouseInit,a;function d(g,h){if(g.originalEvent.touches.length>1){return;}g.preventDefault();var i=g.originalEvent.changedTouches[0],f=document.createEvent("MouseEvents");f.initMouseEvent(h,true,true,window,1,i.screenX,i.screenY,i.clientX,i.clientY,false,false,false,false,0,null);g.target.dispatchEvent(f);}c._touchStart=function(g){var f=this;if(a||!f._mouseCapture(g.originalEvent.changedTouches[0])){return;}a=true;f._touchMoved=false;d(g,"mouseover");d(g,"mousemove");d(g,"mousedown");};c._touchMove=function(f){if(!a){return;}this._touchMoved=true;d(f,"mousemove");};c._touchEnd=function(f){if(!a){return;}d(f,"mouseup");d(f,"mouseout");if(!this._touchMoved){d(f,"click");}a=false;};c._mouseInit=function(){var f=this;f.element.bind("touchstart",b.proxy(f,"_touchStart")).bind("touchmove",b.proxy(f,"_touchMove")).bind("touchend",b.proxy(f,"_touchEnd"));e.call(f);};})(jQuery);


jQuery.fn.blink=function(o){var d={speed:200,blinks:3,callback:null};var o=jQuery.extend(d,o);return this.each(function(){var calls=0;for(i=1;i<=o.blinks;i++){jQuery(this).animate({opacity:0},o.speed).animate({opacity:1},o.speed,function(){calls++;if(calls==o.blinks&&jQuery.isFunction(o.callback)){o.callback();}});}});};

$j = jQuery.noConflict();

$j(document).ready(function () {

	$j("#fridge-temp").draggable({ axis: "y", containment: "#fridge", stop: function(e, ui) {
    var grid_x = 90;
    var grid_y = 90;
    var elem = $j( this );
    var left = parseInt(elem.css('left'));
    var top = parseInt(elem.css('top'));
    var cx = (left % grid_x);
    var cy = (top % grid_y);

    var new_left = (Math.abs(cx)+0.5*grid_x >= grid_x) ? (left - cx + (left/Math.abs(left))*grid_x) : (left - cx);
    var new_top = (Math.abs(cy)+0.5*grid_y >= grid_y) ? (top - cy + (top/Math.abs(top))*grid_y) : (top - cy);

    ui.helper.stop(true).animate({
        top: new_top,
        opacity: 1,
    }, 300, function () {
    
    	var setting = parseInt($j(this).css("top"));

    	var get_elem = "";
    	if (setting == 0){
	    	get_elem = $j("#fridge .step1");
    	} 
    	else if (setting == 90) {
	    	get_elem = $j("#fridge .step2");
    	} 
    	else if (setting == 180) {
	    	get_elem = $j("#fridge .step3");
    	}
    	else if (setting == 270) {
	    	get_elem = $j("#fridge .step4");
    	}
    	else if (setting == 360) {
	    	get_elem = $j("#fridge .step5");
    	}
    	
    
    	var lowtemp = get_elem.attr("data-low");
    	var hightemp = get_elem.attr("data-high");
    	
    	$j(".lowtemp", this).stop().blink({ speed: 200, blinks: 3, callback: function () {
	    	$j("#fridge-temp .lowtemp").html(lowtemp + "<sup>&deg;F</sup>");
	    	}
    	});
    	$j(".hightemp", this).stop().blink({ speed: 200, blinks: 3, callback: function () {
	    	$j("#fridge-temp .hightemp").html(hightemp + "<sup>&deg;F</sup>");
	    	}
    	});
    	
    
    });
    
    //calculate temp
    
    
    
},});

	$j("#freezer-temp").draggable({ axis: "y", containment: "#freezer", stop: function(e, ui) {
    var grid_x = 90;
    var grid_y = 90;
    var elem = $j( this );
    var left = parseInt(elem.css('left'));
    var top = parseInt(elem.css('top'));
    var cx = (left % grid_x);
    var cy = (top % grid_y);

    var new_left = (Math.abs(cx)+0.5*grid_x >= grid_x) ? (left - cx + (left/Math.abs(left))*grid_x) : (left - cx);
    var new_top = (Math.abs(cy)+0.5*grid_y >= grid_y) ? (top - cy + (top/Math.abs(top))*grid_y) : (top - cy);

    ui.helper.stop(true).animate({
        top: new_top,
        opacity: 1,
    }, 300, function () {
    
    	var setting = parseInt($j(this).css("top"));

    	var get_elem = "";
    	if (setting == 0){
	    	get_elem = $j("#freezer .step1");
    	} 
    	else if (setting == 90) {
	    	get_elem = $j("#freezer .step2");
    	} 
    	else if (setting == 180) {
	    	get_elem = $j("#freezer .step3");
    	}
    	else if (setting == 270) {
	    	get_elem = $j("#freezer .step4");
    	}
    	else if (setting == 360) {
	    	get_elem = $j("#freezer .step5");
    	}
    	
    
    	var lowtemp = get_elem.attr("data-low");
    	var hightemp = get_elem.attr("data-high");
    	
    	$j(".lowtemp", this).stop().blink({ speed: 200, blinks: 3, callback: function () {
	    	$j("#freezer-temp .lowtemp").html(lowtemp + "<sup>&deg;F</sup>");
	    	}
    	});
    	$j(".hightemp", this).stop().blink({ speed: 200, blinks: 3, callback: function () {
	    	$j("#freezer-temp .hightemp").html(hightemp + "<sup>&deg;F</sup>");
	    	}
    	});
    });
},});

	$j("#set-ideal").on("click", function () {
		if (parseInt($j("#fridge-temp").css("top")) != 180) {
		$j("#fridge-temp").animate({ top: 180}, 300, function () {
			var lowtemp = $j("#fridge .step3").attr("data-low");
			var hightemp = $j("#fridge .step3").attr("data-high");
			$j(".lowtemp", this).stop().blink({ speed: 200, blinks: 3, callback: function () {
	    	$j("#fridge-temp .lowtemp").html(lowtemp + "<sup>&deg;F</sup>");
	    	}
    	});
    	$j(".hightemp", this).stop().blink({ speed: 200, blinks: 3, callback: function () {
	    	$j("#fridge-temp .hightemp").html(hightemp + "<sup>&deg;F</sup>");
	    	}
    	});

		
		});
		
		}
		if (parseInt($j("#freezer-temp").css("top")) != 180) {
		$j("#freezer-temp").animate({ top: 180}, 300, function () {
			var lowtemp = $j("#freezer .step3").attr("data-low");
			var hightemp = $j("#freezer .step3").attr("data-high");
			$j(".lowtemp", this).stop().blink({ speed: 200, blinks: 3, callback: function () {
	    	$j("#freezer-temp .lowtemp").html(lowtemp + "<sup>&deg;F</sup>");
	    	}
    	});
    	$j(".hightemp", this).stop().blink({ speed: 200, blinks: 3, callback: function () {
	    	$j("#freezer-temp .hightemp").html(hightemp + "<sup>&deg;F</sup>");
	    	}
    	});
    	});
	
	
	}
		$j(this).stop().addClass("active");
		
		setTimeout(function () { $j("#set-ideal").removeClass("active"); }, 1000);
		
	
	});
	
	$j("#food-suggestions").flexslider({
		selector: ".slides > .slide",
		animation: "slide",
		animationLoop: false,
		keyboard: false,
		controlNav: false,
		directionNav: false,
		slideshow: false,
		touch: false
	
	});
	
	$j("#set-food").on("click", function () {
		$j("#food-suggestions").flexslider("next");
		if ($j(this).hasClass("active"))
		{
			$j(this).removeClass("active");
		}
		else
		{
			$j(this).addClass("active");
		}
	});
	
		$j(".food-suggestions").on("click", function () {
		$j("#food-suggestions").flexslider("next");
		if ($j("#set-food").hasClass("active"))
		{
			$j("#set-food").removeClass("active");
		}
		else
		{
			$j("#set-food").addClass("active");
		}
	});


});