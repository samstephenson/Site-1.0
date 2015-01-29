console.log("Hello world");


rightPanelWidth = function() {
	var imgWidth = $('img.home').width();
	var viewportWidth = $("#wrapper").innerWidth();
	var panelWidth = viewportWidth - imgWidth;

	$('.rightPanel').css("width", panelWidth);
};

$(document).ready(function() {
	
	rightPanelWidth();
	
});

$(window).on('resize', function(){
	rightPanelWidth();
});

