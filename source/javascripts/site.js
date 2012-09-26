//$('#mainNav').scrollspy();

// var originalTop = $('#mainNav').offset().top;
// 
// $(document).scroll(function() {
// 	console.log("originalTop = " + originalTop);
// 	
// 	if( $(document).scrollTop() > originalTop) {
// 		$('#mainNav').addClass('navbar-fixed-top');
// 	} else {
// 		$('#mainNav').removeClass('navbar-fixed-top');
// 	}
// });

$("a").each(function(){
	$(this).tooltip();
});

$("ul").each(function(){
	$(this).addClass("unstyled");
});