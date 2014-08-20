var height = $('.portrait').innerHeight();
$('.portrait').css('width', height);
$(window).resize(function() {
	$('.portrait').css('width', height);
});