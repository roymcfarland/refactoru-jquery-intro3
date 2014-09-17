$(document).on('ready', function() {

	$('.giant-button').click(function() {
		$('#placeholder').append(
			'<div class="lightbox">'+
			    '<div>'+
				    '<div class="lightbox-box">'+
					    '<h3>Nicely done. You found me!</h3>'+
						'<p>This is a popup I created after banging my head against the wall for several hours. Now, I know jQuery can be used to append index.html, thereby triggering various rules from main.css.'+
						'</p>'+
						'<div id="button">'+
						    '<a>Wowza!</a>'+
						'</div>'+
				    '</div>'+
				'</div>'+
			'</div>'
			)
	})
  
});