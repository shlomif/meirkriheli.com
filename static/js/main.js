(function($) {
	$(function() {
		$('#main-menu-toggle').click(function(e) {
			e.preventDefault();
			$('#main-header nav').toggle();

			return false;
		});
	})
})(jQuery);
