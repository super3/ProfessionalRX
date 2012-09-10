<?php $bg=false; include_once('header.php'); ?>
<div class="title">
	<h1>Twitter</h1>
	<div class="sub">
		<script charset="utf-8" src="http://widgets.twimg.com/j/2/widget.js"></script>
		<script>
		new TWTR.Widget({
		  version: 2,
		  type: 'profile',
		  rpp: 4,
		  interval: 30000,
		  width: 'auto',
		  height: 400,
		  theme: {
		    shell: {
		      background: '#333333',
		      color: '#ffffff'
		    },
		    tweets: {
		      background: '#000000',
		      color: '#ffffff',
		      links: '#c84039'
		    }
		  },
		  features: {
		    scrollbar: false,
		    loop: false,
		    live: false,
		    behavior: 'all'
		  }
		}).render().setUser('TheProRx').start();
		</script>
	</div>
	<a href="https://twitter.com/TheProRx" class="btn btn-danger btn-large"><div class="twitter-icon left"></div> Follow Us</a>
</div>
<?php include_once('footer.php'); ?>