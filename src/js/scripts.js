jQuery(document).ready(function() {

    /*
	    Scroll to top
	*/
    $('.scroll-to-top a').on('click', function(e) {
		e.preventDefault();
		var scroll_to = 0;
		if($(window).scrollTop() != scroll_to) {
			$('html, body').stop().animate({scrollTop: scroll_to}, 1000);
		}
	});

    /*
        Fullscreen backgrounds
    */
    $('.page-title').backstretch("img/backgrounds/1.jpg");
});