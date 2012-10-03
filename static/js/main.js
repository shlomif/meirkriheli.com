(function($) {
	$(function() {
		$('#main-menu-toggle').click(function(e) {
			e.preventDefault();
			$('#main-menu').toggle();

			return false;
		});
	})
})(jQuery);
