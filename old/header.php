<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>The Professional RX</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="">
	<meta name="author" content="">

	<!-- Le styles -->
	<link href="assets/css/bootstrap.css" rel="stylesheet">
	<link href="assets/css/bootstrap-responsive.css" rel="stylesheet">
	<link href="style.css" rel="stylesheet">

	<!-- Le HTML5 shim, for IE6-8 support of HTML5 elements -->
	<!--[if lt IE 9]>
		<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->

	<!-- Le fav and touch icons -->
	<link rel="shortcut icon" href="assets/ico/favicon.ico">
	<link rel="apple-touch-icon-precomposed" sizes="144x144" href="assets/ico/apple-touch-icon-144-precomposed.png">
	<link rel="apple-touch-icon-precomposed" sizes="114x114" href="assets/ico/apple-touch-icon-114-precomposed.png">
	<link rel="apple-touch-icon-precomposed" sizes="72x72" href="assets/ico/apple-touch-icon-72-precomposed.png">
	<link rel="apple-touch-icon-precomposed" href="assets/ico/apple-touch-icon-57-precomposed.png">
</head>

<body>
<div class="center hide">
	<img src="images/logo.png" alt="The Professional RX"/>
</div>

<?php 
if ( isset($bg) && $bg == false) { echo '<div class="main container nobg">'; }
else { echo '<div class="main container">'; }
?>

	<div class="btn-group" style="margin: -10px; margin-top: -13px;">
		<a href="index.php" class="btn btn-large"><i class="icon-home"></i> Home</a>
		<a href="microblog.php" class="btn btn-large"><i class="icon-bold"></i> MicroBlog</a>
		<a href="services.php" class="btn btn-large"><i class="icon-list-alt"></i> Services</a>
		<a href="testimonials.php" class="btn btn-large"><i class="icon-user"></i> Testimonials</a>
		<a href="contact.php" class="btn btn-large"><i class="icon-envelope"></i> Contact</a>
		<a href="commerce.php" class="btn btn-large"><i class="icon-shopping-cart"></i> E-Commerce</a>
	</div>
