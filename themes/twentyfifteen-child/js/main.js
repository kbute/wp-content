jQuery(document).ready(function($j) {
    // Inside of this function, $() will work as an alias for jQuery()
    // and other libraries also using $ will not be accessible under this shortcut

	var attachmentEl = document.getElementsByClassName('entry-attachment')[0];
	if(attachmentEl){
		
	    var hammer = new Hammer(attachmentEl);

	    hammer.get('pan').set({enable: false});
	    hammer.get('swipe').set({velocity: .1});
		var nextLink = $j('article.attachment .nav-next a');
		nextLink.bind('click',function(e){
			// alert('next');
			window.location = e.target.href;
		});

		var prevLink = $j('article.attachment .nav-previous a');
		prevLink.bind('click',function(e){
			// alert('prev');
			window.location = e.target.href;
		});

	    hammer.on('swipeleft', function(evt){
	    	nextLink.trigger('click');
	    });

	    hammer.on('swiperight', function(evt){
	    	prevLink.trigger('click');
	    });
	}
});