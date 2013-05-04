(function($) {
	$(function() {
		$('#main-menu-toggle').click(function(e) {
			e.preventDefault();
			$('#main-menu, #social-links2').toggle();

			return false;
		});

		$('.bxslider li img').each(function() {
			$(this).attr('title', $(this).attr('alt'));
		});
		$('.bxslider').bxSlider({
			captions: true,
			auto: true,
			autoStart: false,
			autoControls: true
		});
	})
})(jQuery);
