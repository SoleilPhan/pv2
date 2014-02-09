<!DOCTYPE html>   
<!--[if lt IE 7 ]> <html lang="en" class="no-js ie6"> <![endif]-->
<!--[if IE 7 ]>    <html lang="en" class="no-js ie7"> <![endif]-->
<!--[if IE 8 ]>    <html lang="en" class="no-js ie8"> <![endif]-->
<!--[if IE 9 ]>    <html lang="en" class="no-js ie9"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--> <html lang="en" class="no-js"> <!--<![endif]-->
<head>
	<meta charset="utf-8">
	<!--[if IE]><![endif]-->
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<title></title>
	<meta name="description" content="">
	<meta name="keywords" content="" />
	<meta name="author" content="">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
	<!-- !CSS -->
	<link rel="stylesheet" href="code/stylesheets/app.css?v=1">
	<!-- Uncomment if you are specifically targeting less enabled mobile browsers
	<link rel="stylesheet" media="handheld" href="css/handheld.css?v=1">  -->
	<!-- !Modernizr - All other JS at bottom -->
	<script src="code/javascripts/vendor/custom.modernizr.js"></script>
	  <script src="code/javascripts/jquery-1.8.3.js"></script>
  <script src="code/javascripts/jqueryui.min.js"></script>
  <script src="code/javascripts/jquery.flexslider-min.js"></script>
  <script src="code/javascripts/custom.js"></script>
</head>
<!-- !Body -->
<body>

	<div class="row">
		<div class="large-12 columns">
			
			<div id="box">
				<div class="half">
				<div class="fridge-label">
				REFRIGERATOR
				</div>
				<div class="flexslider" id="food-suggestions">
				<div class="slides">
				<div class="slide">
					<div id="fridge">
					<ul class="grid">
						<li class="step1" data-low="37" data-high="42"><span class="lab">COLD</span></li>
						<li class="step2" data-low="35" data-high="40"></li>
						<li class="step3" data-low="33" data-high="38"><span class="lab">IDEAL</span></li>
						<li class="step4" data-low="31" data-high="36"></li>
						<li class="step5" data-low="29" data-high="34"><span class="lab">COLDEST</span></li>
					</ul>
					<div class="temperature" id="fridge-temp">
						<span class="lowtemp" >33<sup>&deg;F</sup></span> <span class="dash">to</span> <span class="hightemp" >38<sup>&deg;F</sup></span>
					</div>
					</div>
				</div>
					<div class="slide">
						<div class="food-suggestions">
					
						</div>
					
		
				</div>
				</div>
				
					
					
					</div>
					<div class="fridge-label">
				FREEZER
				</div>
					<div id="freezer">
					
						<ul>
									<li class="step1" data-low="4" data-high="9"><span class="lab">COLD</span></li>
						<li class="step2" data-low="2" data-high="7"></li>
						<li class="step3" data-low="0" data-high="5"><span class="lab">IDEAL</span></li>
						<li class="step4" data-low="-2" data-high="3"></li>
						<li class="step5" data-low="-4" data-high="1"><span class="lab">COLDEST</span></li>

					</ul>
						<div class="temperature" id="freezer-temp">
						<span class="lowtemp freezer-lowtemp">0<sup>&deg;F</sup></span> <span class="dash">to</span> <span class="hightemp">5<sup>&deg;F</sup></span>
					</div>

					</div>
				</div>
				<div class="half second">
				<hr/>
			<div class="icon food" id="set-food">
			
			</div>
			<hr/>
			<div class="icon ideal" id="set-ideal">
			
			</div>
			<hr/>
				<div class="icon water">
			
			</div>
			<hr/>
				<div class="icon crushed">
			
			</div>
			<hr/>
				<div class="icon ice">
			
			</div>
			<hr/>
				<div class="logo">
				</div>
			
				</div>
			</div>
			
		</div>
		
	</div>

</body>
</html>