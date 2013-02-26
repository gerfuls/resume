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

function printFriendly() {
  $("#paper").removeAttr("id")
  $("body").css("backgroundColor", "white")
  $("footer").remove(), $("a").each(function () {
    $(this).contents().unwrap()
  })
  $(".initials span").remove()
  $(".initials h1").css("float", "right")
  $(".span3 h3").css("border-right", "1px black solid")
}

$("a").each(function () {
  $(this).tooltip()
})

$("ul").each(function () {
  $(this).addClass("unstyled")
})

$("a#print").click(function () {
  $(this).tooltip("hide"), printFriendly(), console.log("Printer Clicked")
})