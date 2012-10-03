(function($) {
	$(function() {
		$('#main-menu-toggle').click(function(e) {
			e.preventDefault();
			$('#main-menu, #social-links2').toggle();

			return false;
		});
	})
})(jQuery);
