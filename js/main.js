$(document).ready(function() {
	
	$('.textWrapper p a').mouseenter(function() {
		
		var imageString = $(this).attr('class');

		if (imageString) {
			var imageURL = "img/homepage/" + imageString + ".jpg";

			$('#slides li.sam').css('background-image', 'url(' + imageURL + ')');
			$('#slides li.sam .textWrapper p').toggleClass('dimmed');
			$(this).toggleClass('fullOpacity');
		}
	});



	$('.textWrapper p a').mouseleave(function() {

		var imageString = $(this).attr('class');

		if (imageString) {
			var imageURL = "img/homepage/" + imageString + ".jpg";

			$('#slides li.sam').css("background-image", "none");
			$('#slides li.sam .textWrapper p').toggleClass('dimmed');
			$(this).removeClass('fullOpacity');
		}
	});

	


});

$(window).on('resize', function(){

	console.log();

});