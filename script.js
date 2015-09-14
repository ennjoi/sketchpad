$(document).ready(function() {
	$('#addblock').click(function() {
		$('#container').append('<div class="red"></div>');
	});
	$('#removeblock').click(function() {
		$(this).closest('red').remove();
	});
	$('div').mouseover(
		function() {
			$(this).addClass('active');
		}, 
		function() {
			$(this).removeClass('active');
		});
});